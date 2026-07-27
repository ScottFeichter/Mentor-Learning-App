import { useState, useEffect, useRef } from 'react';
import { RxDragHandleDots2 } from 'react-icons/rx';
import './TopicSidebar.css';

export default function InnerSidebar({ files, currentFileIdx, onFileChange, sectionId, width, left, onWidthChange, top }) {
  const [isResizing, setIsResizing] = useState(false);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(100);
  const [isDraggingThumb, setIsDraggingThumb] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);
  const navRef = useRef(null);
  const trackRef = useRef(null);

  const updateThumb = () => {
    const nav = navRef.current;
    if (!nav) return;
    const { scrollTop, scrollHeight, clientHeight } = nav;
    const trackHeight = clientHeight;
    const ratio = clientHeight / scrollHeight;
    const newThumbHeight = Math.max(40, ratio * trackHeight);
    const maxScroll = scrollHeight - clientHeight;
    const scrollRatio = maxScroll > 0 ? scrollTop / maxScroll : 0;
    const maxThumbTop = trackHeight - newThumbHeight;
    setThumbHeight(newThumbHeight);
    setThumbTop(scrollRatio * maxThumbTop);
  };

  useEffect(() => {
    updateThumb();
    const nav = navRef.current;
    if (nav) {
      nav.addEventListener('scroll', updateThumb);
      const observer = new ResizeObserver(updateThumb);
      observer.observe(nav);
      return () => {
        nav.removeEventListener('scroll', updateThumb);
        observer.disconnect();
      };
    }
  }, [files]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newWidth = Math.max(150, Math.min(500, e.clientX - left));
        onWidthChange(newWidth);
      }
      if (isDraggingThumb) {
        const nav = navRef.current;
        const track = trackRef.current;
        if (!nav || !track) return;
        const deltaY = e.clientY - dragStartY;
        const trackHeight = track.clientHeight;
        const maxThumbTop = trackHeight - thumbHeight;
        const maxScroll = nav.scrollHeight - nav.clientHeight;
        const scrollDelta = maxScroll > 0 ? (deltaY / maxThumbTop) * maxScroll : 0;
        nav.scrollTop = dragStartScroll + scrollDelta;
      }
    };
    const handleMouseUp = () => {
      setIsResizing(false);
      setIsDraggingThumb(false);
    };

    if (isResizing || isDraggingThumb) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, isDraggingThumb, dragStartY, dragStartScroll, thumbHeight, left, onWidthChange]);

  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    setIsDraggingThumb(true);
    setDragStartY(e.clientY);
    setDragStartScroll(navRef.current?.scrollTop || 0);
  };

  const handleTrackClick = (e) => {
    if (e.target !== trackRef.current) return;
    const nav = navRef.current;
    const track = trackRef.current;
    if (!nav || !track) return;
    const rect = track.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = track.clientHeight;
    const ratio = clickY / trackHeight;
    nav.scrollTop = ratio * (nav.scrollHeight - nav.clientHeight);
  };

  const getTitle = (filename) => {
    return filename.replace(/\.md$/, '');
  };

  return (
    <div className="topic-sidebar" style={{ width: `${width}px`, left: `${left}px`, top: `${top}px` }}>
      <div className="topic-nav-wrapper">
        <nav ref={navRef}>
          {files.map((file, idx) => (
            <a
              key={idx}
              href={`/${sectionId}/${idx}`}
              className={currentFileIdx === idx ? 'active' : ''}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  onFileChange(idx);
                }
              }}
            >
              {getTitle(file)}
            </a>
          ))}
        </nav>
        <div className="topic-scrollbar-track" ref={trackRef} onClick={handleTrackClick}>
          <div
            className="topic-scrollbar-thumb"
            style={{ top: `${thumbTop}px`, height: `${thumbHeight}px` }}
            onMouseDown={handleThumbMouseDown}
          />
        </div>
      </div>
      <div className="topic-resize-handle" onMouseDown={() => setIsResizing(true)}>
        <RxDragHandleDots2 />
      </div>
    </div>
  );
}
