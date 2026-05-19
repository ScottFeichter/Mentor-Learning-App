import { useState, useEffect } from 'react';
import { GiPlainArrow } from 'react-icons/gi';
import { RxDragHandleDots2 } from 'react-icons/rx';
import './Sidebar.css';

export default function Sidebar({ pages, currentPage, onPageChange, onWidthChange }) {
  const [width, setWidth] = useState(280);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newWidth = Math.max(150, e.clientX);
        setWidth(newWidth);
        onWidthChange(newWidth);
      }
    };

    const handleMouseUp = () => setIsResizing(false);

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, onWidthChange]);

  return (
    <div className="sidebar" style={{ width: `${width}px` }}>
      <div className="nav-buttons">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 0}>
          <GiPlainArrow style={{ transform: 'rotate(90deg)' }} /> Prev
        </button>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pages.length - 1}>
          Next <GiPlainArrow style={{ transform: 'rotate(-90deg)' }} />
        </button>
      </div>
      <nav>
        {pages.map((page) => (
          <a
            key={page.id}
            className={currentPage === page.id ? 'active' : ''}
            onClick={() => onPageChange(page.id)}
          >
            {page.title}
          </a>
        ))}
      </nav>
      <div className="resize-handle" onMouseDown={() => setIsResizing(true)}>
        <RxDragHandleDots2 />
      </div>
    </div>
  );
}
