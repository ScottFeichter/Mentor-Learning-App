import { useState, useEffect, useRef } from 'react';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { useCompletion } from './CompletionContext';
import './CourseSidebar.css';

export default function OuterSidebar({ sections, currentSectionId, onSectionChange, subjectId, width, left, onWidthChange, top }) {
  const [isResizing, setIsResizing] = useState(false);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(100);
  const [isDraggingThumb, setIsDraggingThumb] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);
  const navRef = useRef(null);
  const trackRef = useRef(null);

  const { isComplete } = useCompletion();

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
  }, [sections]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newWidth = Math.max(120, Math.min(400, e.clientX - left));
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

  return (
    <div className="course-sidebar" style={{ width: `${width}px`, left: `${left}px`, top: `${top}px` }}>
      <div className="course-nav-wrapper">
        <nav ref={navRef}>
          {sections.map((section) => {
            const isCourseComplete = section.topics.length > 0 && section.topics.every(topic =>
              topic.files.length > 0 && topic.files.every((_, idx) => isComplete(`${subjectId}--${section.id}--${topic.id}--${idx}`))
            );
            return (
              <a
                key={section.id}
                href={`/${section.id}/0`}
                className={currentSectionId === section.id ? 'active' : ''}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    onSectionChange(section.id);
                  }
                }}
              >
                <span className="course-title">{section.title}</span>
                {isCourseComplete && <span className="course-check">✓</span>}
              </a>
            );
          })}
        </nav>
        <div className="custom-scrollbar-track" ref={trackRef} onClick={handleTrackClick}>
          <div
            className="custom-scrollbar-thumb"
            style={{ top: `${thumbTop}px`, height: `${thumbHeight}px` }}
            onMouseDown={handleThumbMouseDown}
          />
        </div>
      </div>
      <div className="course-resize-handle" onMouseDown={() => setIsResizing(true)}>
        <RxDragHandleDots2 />
      </div>
    </div>
  );
}
