import { useParams, useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { subjects } from './subjects';
import { sections } from './sections';
import { GiPlainArrow } from 'react-icons/gi';
import SubjectSidebar from './SubjectSidebar';
import OuterSidebar from './OuterSidebar';
import InnerSidebar from './InnerSidebar';
import Content from './Content';
import './App.css';

const palettes = [
  { id: 'ocean', color: '#0ea5e9', label: 'Ocean' },
  { id: 'royal', color: '#f5c518', label: 'Royal' },
  { id: 'forest', color: '#22c55e', label: 'Forest' },
  { id: 'midnight', color: '#cba6f7', label: 'Midnight' },
  { id: 'grey', color: '#999', label: 'Grey' },
];

function useStickyTitle(minLeft) {
  const ref = useRef(null);
  const offsetRef = useRef(0);
  const [sticky, setSticky] = useState(false);

  const recalc = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const offset = offsetRef.current;
    const viewportWidth = parent.getBoundingClientRect().width + offset;
    // measure text width using a temporary inline style
    const prev = el.style.cssText;
    el.style.cssText = 'position:absolute;white-space:nowrap;width:auto;left:0;right:auto;visibility:hidden;';
    const textWidth = el.getBoundingClientRect().width;
    el.style.cssText = prev;
    const centeredLeft = (viewportWidth - textWidth) / 2;
    setSticky(centeredLeft < minLeft + offset);
  }, [minLeft]);

  const setOffset = useCallback((offset) => {
    offsetRef.current = offset;
    recalc();
  }, [recalc]);

  useEffect(() => {
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc]);

  return { ref, sticky, setOffset, recalc };
}

function Viewer() {
  const { sectionId, fileIndex } = useParams();
  const navigate = useNavigate();

  const [subjectVisible, setSubjectVisible] = useState(true);
  const [outerVisible, setOuterVisible] = useState(true);
  const [innerVisible, setInnerVisible] = useState(true);
  const [subjectWidth, setSubjectWidth] = useState(200);
  const [outerWidth, setOuterWidth] = useState(200);
  const [innerWidth, setInnerWidth] = useState(200);
  const [palette, setPalette] = useState(() => localStorage.getItem('palette') || 'grey');

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('palette', palette);
  }, [palette]);

  const subjectTitle = useStickyTitle(130);
  const courseTitle = useStickyTitle(130);
  const topicsTitle = useStickyTitle(280);

  const currentSection = sections.find(s => s.id === sectionId) || sections[0];
  const currentFileIdx = parseInt(fileIndex) || 0;
  const currentFile = currentSection.files[currentFileIdx];

  const currentSubject = subjects.find(sub =>
    sub.sections.some(s => s.id === currentSection.id)
  ) || subjects[0];

  const getTopicTitle = (filename) => {
    return filename.replace(/^\d+\.\s*/, '').replace(/\.md$/, '');
  };

  const handleSubjectChange = (subjectId) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (subject && subject.sections.length > 0) {
      navigate(`/${subject.sections[0].id}/0`);
    }
  };

  const handleSectionChange = (id) => {
    navigate(`/${id}/0`);
  };

  const handleFileChange = (idx) => {
    navigate(`/${currentSection.id}/${idx}`);
  };

  const subjectLeft = 0;
  const outerLeft = subjectVisible ? subjectWidth : 0;
  const innerLeft = outerLeft + (outerVisible ? outerWidth : 0);
  const contentMargin = innerLeft + (innerVisible ? innerWidth : 0);

  useEffect(() => {
    subjectTitle.setOffset(0);
    courseTitle.setOffset(outerLeft);
    topicsTitle.setOffset(innerLeft);
  }, [outerLeft, innerLeft, subjectVisible, outerVisible, innerVisible, subjectWidth, outerWidth, innerWidth]);

  return (
    <div className="app">
      {/* Top Banner - full width */}
      <div className="top-banner">
        <span className="top-banner-title">SJF Learning App</span>
        <div className="top-banner-right">
          {palettes.map(p => (
            <button
              key={p.id}
              className={`theme-btn${palette === p.id ? ' active' : ''}`}
              style={{ background: p.color, borderColor: palette === p.id ? p.color : undefined }}
              onClick={() => setPalette(p.id)}
              title={p.label}
            />
          ))}
        </div>
      </div>

      {/* Subject Banner - full width */}
      <div className="subject-banner">
        <button
          className={`toggle-btn-subject${!subjectVisible ? ' closed' : ''}`}
          onClick={() => setSubjectVisible(!subjectVisible)}
        >
          Subject Menu
        </button>
        <span ref={subjectTitle.ref} className="subject-banner-title" style={subjectTitle.sticky
          ? { position: 'absolute', left: '130px', pointerEvents: 'none', whiteSpace: 'nowrap' }
          : { position: 'absolute', left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }
        }>{currentSubject.title}</span>
      </div>

      {/* Course Banner - starts after subject menu */}
      <div className="course-banner" style={{ left: `${outerLeft}px` }}>
        <button
          className={`toggle-btn-course${!outerVisible ? ' closed' : ''}`}
          onClick={() => setOuterVisible(!outerVisible)}
        >
          Course Menu
        </button>
        <span ref={courseTitle.ref} className="course-banner-title" style={courseTitle.sticky
          ? { position: 'absolute', left: '130px', pointerEvents: 'none', whiteSpace: 'nowrap' }
          : { position: 'absolute', left: `-${outerLeft}px`, right: 0, textAlign: 'center', pointerEvents: 'none' }
        }>{currentSection.title}</span>
      </div>

      {/* Topics Banner - starts after subject + course menus */}
      <div className="topics-banner" style={{ left: `${innerLeft}px` }}>
        <button
          className={`toggle-btn-topics${!innerVisible ? ' closed' : ''}`}
          onClick={() => setInnerVisible(!innerVisible)}
        >
          Topics Menu
        </button>
        <div className="banner-nav-buttons">
          <button
            className="banner-nav-btn"
            onClick={() => handleFileChange(currentFileIdx - 1)}
            disabled={currentFileIdx === 0}
          >
            <GiPlainArrow style={{ transform: 'rotate(90deg)' }} /> Prev
          </button>
          <button
            className="banner-nav-btn"
            onClick={() => handleFileChange(currentFileIdx + 1)}
            disabled={currentFileIdx === currentSection.files.length - 1}
          >
            Next <GiPlainArrow style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
        <span ref={topicsTitle.ref} className="topics-banner-title" style={topicsTitle.sticky
          ? { position: 'absolute', left: '280px', pointerEvents: 'none', whiteSpace: 'nowrap' }
          : { position: 'absolute', left: `-${innerLeft}px`, right: 0, textAlign: 'center', pointerEvents: 'none' }
        }>{currentFile ? getTopicTitle(currentFile) : ''}</span>
      </div>

      {/* Subject Menu - below top banner */}
      {subjectVisible && (
        <SubjectSidebar
          subjects={subjects}
          currentSubjectId={currentSubject.id}
          onSubjectChange={handleSubjectChange}
          width={subjectWidth}
          onWidthChange={setSubjectWidth}
        />
      )}

      {/* Course Menu - below subject banner */}
      {outerVisible && (
        <OuterSidebar
          sections={currentSubject.sections}
          currentSectionId={currentSection.id}
          onSectionChange={handleSectionChange}
          width={outerWidth}
          left={outerLeft}
          onWidthChange={setOuterWidth}
        />
      )}

      {/* Topics Menu - below course banner */}
      {innerVisible && (
        <InnerSidebar
          files={currentSection.files}
          currentFileIdx={currentFileIdx}
          onFileChange={handleFileChange}
          sectionId={currentSection.id}
          width={innerWidth}
          left={innerLeft}
          onWidthChange={setInnerWidth}
        />
      )}

      {/* Content */}
      <div className="main" style={{ marginLeft: `${contentMargin}px` }}>
        <Content
          folder={currentSection.folder}
          file={currentFile}
          currentFileIdx={currentFileIdx}
          totalFiles={currentSection.files.length}
          onFileChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/:sectionId/:fileIndex" element={<Viewer />} />
      <Route path="/:sectionId" element={<Viewer />} />
      <Route path="*" element={<Navigate to={`/${sections[0].id}/0`} replace />} />
    </Routes>
  );
}
