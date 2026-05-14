import { useParams, useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { subjects } from './subjects';
import { sections } from './sections';
import { GiPlainArrow } from 'react-icons/gi';
import SubjectSidebar from './SubjectSidebar';
import OuterSidebar from './OuterSidebar';
import InnerSidebar from './InnerSidebar';
import Content from './Content';
import './App.css';

const palettes = [
  { id: 'grey', color: '#999', label: 'Grey' },
  { id: 'royal', color: '#f5c518', label: 'Royal' },
  { id: 'ocean', color: '#0ea5e9', label: 'Ocean' },
  { id: 'forest', color: '#22c55e', label: 'Forest' },
  { id: 'midnight', color: '#cba6f7', label: 'Midnight' },
];

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
              style={{ background: p.color }}
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
        <span className="subject-banner-title" style={{ position: 'absolute', left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}>{currentSubject.title}</span>
      </div>

      {/* Course Banner - starts after subject menu */}
      <div className="course-banner" style={{ left: `${outerLeft}px` }}>
        <button
          className={`toggle-btn-course${!outerVisible ? ' closed' : ''}`}
          onClick={() => setOuterVisible(!outerVisible)}
        >
          Course Menu
        </button>
        <span className="course-banner-title" style={{ position: 'absolute', left: `-${outerLeft}px`, right: 0, textAlign: 'center', pointerEvents: 'none' }}>{currentSection.title}</span>
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
        <span className="topics-banner-title" style={{ position: 'absolute', left: `-${innerLeft}px`, right: 0, textAlign: 'center', pointerEvents: 'none' }}>{currentFile ? getTopicTitle(currentFile) : ''}</span>
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
