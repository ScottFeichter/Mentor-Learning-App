import { useState, useEffect, useRef } from 'react';
import './Explaining.css';

const DB_NAME = 'explaining-recordings';
const DB_VERSION = 1;
const STORE = 'recordings';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => e.target.result.createObjectStore(STORE);
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = e => reject(e.target.error);
  });
}

async function saveRecording(key, blob) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(blob, key);
    tx.oncomplete = resolve;
    tx.onerror = e => reject(e.target.error);
  });
}

async function loadRecording(key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).get(key);
    req.onsuccess = e => resolve(e.target.result || null);
    req.onerror = e => reject(e.target.error);
  });
}

export default function Explaining({ concept, conceptNumber, recordingKey }) {
  const [recording, setRecording] = useState(false);
  const [blob, setBlob] = useState(null);
  const [playbackUrl, setPlaybackUrl] = useState(null);
  const [playing, setPlaying] = useState(false);

  const hiddenVideoRef = useRef(null);   // raw camera feed (hidden)
  const canvasRef = useRef(null);        // composited output shown to user
  const playbackRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);
  const segmentorRef = useRef(null);
  const bgImageRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    loadRecording(recordingKey).then(saved => {
      if (saved) {
        setBlob(saved);
        setPlaybackUrl(URL.createObjectURL(saved));
      }
    });

    // Preload background image
    const bg = new Image();
    bg.src = '/underwater-bg.jpg';
    bgImageRef.current = bg;

    // Load MediaPipe
    const script = document.createElement('script');
    script.src = '/mediapipe/selfie_segmentation.js';
    script.onload = () => {
      const seg = new window.SelfieSegmentation({
        locateFile: f => `/mediapipe/${f}`,
      });
      seg.setOptions({ modelSelection: 1 });
      seg.onResults(onSegmentationResults);
      segmentorRef.current = seg;
    };
    document.head.appendChild(script);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      document.head.removeChild(script);
    };
  }, [recordingKey]);

  function onSegmentationResults(results) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);

    // Draw background
    if (bgImageRef.current?.complete) {
      ctx.drawImage(bgImageRef.current, 0, 0, width, height);
    } else {
      ctx.fillStyle = '#0a1a3a';
      ctx.fillRect(0, 0, width, height);
    }

    // Mask: draw person only where segmentation mask is white
    ctx.save();
    ctx.drawImage(results.segmentationMask, 0, 0, width, height);
    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(results.image, 0, 0, width, height);
    ctx.restore();
  }

  async function sendFrameToSegmentor() {
    const video = hiddenVideoRef.current;
    const seg = segmentorRef.current;
    if (!video || !seg || video.readyState < 2) {
      animFrameRef.current = requestAnimationFrame(sendFrameToSegmentor);
      return;
    }
    await seg.send({ image: video });
    animFrameRef.current = requestAnimationFrame(sendFrameToSegmentor);
  }

  const handleStart = async () => {
    chunksRef.current = [];
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    streamRef.current = stream;

    const video = hiddenVideoRef.current;
    video.srcObject = stream;
    await video.play();

    // Record from canvas + original audio
    const canvas = canvasRef.current;
    const canvasStream = canvas.captureStream(30);
    stream.getAudioTracks().forEach(t => canvasStream.addTrack(t));

    const mr = new MediaRecorder(canvasStream);
    mediaRecorderRef.current = mr;
    mr.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data); };
    mr.onstop = async () => {
      const recorded = new Blob(chunksRef.current, { type: 'video/webm' });
      setBlob(recorded);
      setPlaybackUrl(URL.createObjectURL(recorded));
      await saveRecording(recordingKey, recorded);
      stream.getTracks().forEach(t => t.stop());
      video.srcObject = null;
      cancelAnimationFrame(animFrameRef.current);
      // Clear canvas to black when done
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    mr.start();
    setRecording(true);
    setSubmitted(false);
    sendFrameToSegmentor();
  };

  const handleEnd = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handlePlayPause = () => {
    const vid = playbackRef.current;
    if (!vid || !playbackUrl) return;
    if (playing) {
      vid.pause();
      setPlaying(false);
    } else {
      vid.src = playbackUrl;
      vid.play();
      setPlaying(true);
    }
  };

  const handleReset = async () => {
    setBlob(null);
    setPlaybackUrl(null);
    setPlaying(false);
    const db = await openDB();
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(recordingKey);
  };

  return (
    <div className="explaining">
      <p className="explaining-concept">
        <span className="explaining-concept-number">{conceptNumber}.</span> {concept}
      </p>

      <div className="explaining-viewer">
        {/* Hidden raw camera video — never shown */}
        <video ref={hiddenVideoRef} className="explaining-hidden" muted playsInline />

        {/* Canvas shows composited output while recording */}
        <canvas
          ref={canvasRef}
          className="explaining-video"
          width={1280}
          height={720}
          style={{ display: recording ? 'block' : 'none' }}
        />

        {!recording && playbackUrl
          ? <video ref={playbackRef} className="explaining-video" src={playbackUrl} onEnded={() => setPlaying(false)} controls />
          : !recording && <div className="explaining-placeholder" />
        }
      </div>

      <div className="explaining-buttons">
        {!recording
          ? <button className="explaining-btn explaining-btn-start" onClick={handleStart} disabled={!!blob}>Start</button>
          : <button className="explaining-btn explaining-btn-end" onClick={handleEnd}>End</button>
        }
        <button
          className="explaining-btn explaining-btn-play"
          onClick={handlePlayPause}
          disabled={!playbackUrl || recording}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          className="explaining-btn explaining-btn-reset"
          onClick={handleReset}
          disabled={!blob || recording}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
