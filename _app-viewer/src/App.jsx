import { useParams, useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { subjects } from './subjects';
import { sections } from './sections';
import { GiPlainArrow } from 'react-icons/gi';
import SubjectSidebar from './SubjectSidebar';
import CourseSidebar from './CourseSidebar';
import TopicSidebar from './TopicSidebar';
import UnitSidebar from './UnitSidebar';
import Content from './Content';
import './App.css';

const palettes = [
  { id: 'ocean', color: '#0ea5e9', label: 'Ocean' },
  { id: 'ocean-gradient', color: 'linear-gradient(to right, #93c5fd, #1d4ed8)', label: 'Ocean Gradient' },
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
  const { topicId, fileIndex } = useParams();
  const navigate = useNavigate();

  const hasSelection = !!topicId;

  const [subjectVisible, setSubjectVisible] = useState(true);
  const [courseVisible, setCourseVisible] = useState(true);
  const [topicVisible, setTopicVisible] = useState(true);
  const [unitVisible, setUnitVisible] = useState(true);
  const [subjectWidth, setSubjectWidth] = useState(200);
  const [courseWidth, setCourseWidth] = useState(200);
  const [topicWidth, setTopicWidth] = useState(200);
  const [unitWidth, setUnitWidth] = useState(200);
  const [palette, setPalette] = useState(() => localStorage.getItem('palette') || 'grey');

  const [topBannerExpanded, setTopBannerExpanded] = useState(true);
  const [subjectBannerExpanded, setSubjectBannerExpanded] = useState(true);
  const [courseBannerExpanded, setCourseBannerExpanded] = useState(true);
  const [topicBannerExpanded, setTopicBannerExpanded] = useState(true);
  const [unitBannerExpanded, setUnitBannerExpanded] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('palette', palette);
  }, [palette]);

  const TOP_COLLAPSED = 28;
  const TOP_EXPANDED = 50;
  const BANNER_HEIGHT = 45;

  const topHeight = topBannerExpanded ? TOP_EXPANDED : TOP_COLLAPSED;
  const subjectTop = topHeight;
  const subjectHeight = subjectBannerExpanded ? BANNER_HEIGHT : 0;
  const courseTop = subjectTop + subjectHeight;
  const courseHeight = courseBannerExpanded ? BANNER_HEIGHT : 0;
  const topicTop = courseTop + courseHeight;
  const topicHeight = topicBannerExpanded ? BANNER_HEIGHT : 0;
  const unitTop = topicTop + topicHeight;
  const unitHeight = unitBannerExpanded ? BANNER_HEIGHT : 0;
  const subjectSidebarTop = subjectTop + subjectHeight;
  const courseSidebarTop = courseTop + courseHeight;
  const topicSidebarTop = topicTop + topicHeight;
  const unitSidebarTop = unitTop + unitHeight;
  const contentTop = unitSidebarTop;

  const bannerToggles = [
    { expanded: topBannerExpanded, toggle: () => setTopBannerExpanded(!topBannerExpanded), color: 'var(--color-text)' },
    { expanded: subjectBannerExpanded, toggle: () => setSubjectBannerExpanded(!subjectBannerExpanded), color: 'var(--color-secondary)' },
    { expanded: courseBannerExpanded, toggle: () => setCourseBannerExpanded(!courseBannerExpanded), color: 'var(--color-tertiary)' },
    { expanded: topicBannerExpanded, toggle: () => setTopicBannerExpanded(!topicBannerExpanded), color: 'var(--color-quarternary)' },
    { expanded: unitBannerExpanded, toggle: () => setUnitBannerExpanded(!unitBannerExpanded), color: 'var(--color-quinary)' },
  ];

  const subjectTitle = useStickyTitle(130);
  const courseTitle = useStickyTitle(130);
  const topicsTitle = useStickyTitle(130);
  const unitsTitle = useStickyTitle(280);

  const currentTopic = hasSelection ? (sections.find(s => s.id === topicId) || sections[0]) : null;
  const currentFileIdx = hasSelection ? (parseInt(fileIndex) || 0) : 0;
  const currentFile = currentTopic ? currentTopic.files[currentFileIdx] : null;

  // Find which subject and course this topic belongs to
  const currentSubject = currentTopic
    ? (subjects.find(sub => sub.courses.some(c => c.topics.some(t => t.id === currentTopic.id))) || subjects[0])
    : subjects[0];

  const currentCourse = currentTopic
    ? (currentSubject.courses.find(c => c.topics.some(t => t.id === currentTopic.id)) || currentSubject.courses[0])
    : currentSubject.courses[0];

  const getUnitTitle = (filename) => {
    return filename.replace(/\.md$/, '');
  };

  const handleSubjectChange = (subjectId) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (subject && subject.courses.length > 0 && subject.courses[0].topics.length > 0) {
      navigate(`/${subject.courses[0].topics[0].id}/0`);
    }
  };

  const handleCourseChange = (courseId) => {
    const course = currentSubject.courses.find(c => c.id === courseId);
    if (course && course.topics.length > 0) {
      navigate(`/${course.topics[0].id}/0`);
    }
  };

  const handleTopicChange = (tId) => {
    navigate(`/${tId}/0`);
  };

  const handleFileChange = (idx) => {
    navigate(`/${currentTopic.id}/${idx}`);
  };

  const subjectLeft = 0;
  const courseLeft = subjectVisible ? subjectWidth : 0;
  const topicLeft = courseLeft + (courseVisible ? courseWidth : 0);
  const unitLeft = topicLeft + (topicVisible ? topicWidth : 0);
  const contentMargin = unitLeft + (unitVisible ? unitWidth : 0);

  useEffect(() => {
    subjectTitle.setOffset(0);
    courseTitle.setOffset(courseLeft);
    topicsTitle.setOffset(topicLeft);
    unitsTitle.setOffset(unitLeft);
  }, [courseLeft, topicLeft, unitLeft, subjectVisible, courseVisible, topicVisible, unitVisible, subjectWidth, courseWidth, topicWidth, unitWidth]);

  return (
    <div className="app">
      {/* Top Banner - full width */}
      <div className="top-banner" style={{ height: `${topHeight}px` }}>
        <div className="top-banner-left">
          {bannerToggles.map((bt, i) => (
            <button
              key={i}
              className={`banner-triangle${bt.expanded ? ' expanded' : ''}`}
              onClick={bt.toggle}
              style={{ color: bt.color }}
            />
          ))}
        </div>
        {topBannerExpanded && <span className="top-banner-title">Mentor Learning App</span>}
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
      <div className="subject-banner" style={{ top: `${subjectTop}px`, height: `${subjectHeight}px`, transform: subjectBannerExpanded ? 'translateY(0)' : 'translateY(-100%)' }}>
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

      {/* Course Banner */}
      <div className="course-banner" style={{ left: `${courseLeft}px`, top: `${courseTop}px`, height: `${courseHeight}px`, transform: courseBannerExpanded ? 'translateY(0)' : 'translateY(-100%)' }}>
        <button
          className={`toggle-btn-course${!courseVisible ? ' closed' : ''}`}
          onClick={() => setCourseVisible(!courseVisible)}
        >
          Course Menu
        </button>
        <span ref={courseTitle.ref} className="course-banner-title" style={courseTitle.sticky
          ? { position: 'absolute', left: '130px', pointerEvents: 'none', whiteSpace: 'nowrap' }
          : { position: 'absolute', left: `-${courseLeft}px`, right: 0, textAlign: 'center', pointerEvents: 'none' }
        }>{currentCourse ? currentCourse.title : ''}</span>
      </div>

      {/* Topics Banner */}
      <div className="topics-banner" style={{ left: `${topicLeft}px`, top: `${topicTop}px`, height: `${topicHeight}px`, transform: topicBannerExpanded ? 'translateY(0)' : 'translateY(-100%)' }}>
        <button
          className={`toggle-btn-topics${!topicVisible ? ' closed' : ''}`}
          onClick={() => setTopicVisible(!topicVisible)}
        >
          Topic Menu
        </button>
        <span ref={topicsTitle.ref} className="topics-banner-title" style={topicsTitle.sticky
          ? { position: 'absolute', left: '130px', pointerEvents: 'none', whiteSpace: 'nowrap' }
          : { position: 'absolute', left: `-${topicLeft}px`, right: 0, textAlign: 'center', pointerEvents: 'none' }
        }>{currentTopic ? currentTopic.title : ''}</span>
      </div>

      {/* Units Banner */}
      <div className="units-banner" style={{ left: `${unitLeft}px`, top: `${unitTop}px`, height: `${unitHeight}px`, transform: unitBannerExpanded ? 'translateY(0)' : 'translateY(-100%)' }}>
        <button
          className={`toggle-btn-units${!unitVisible ? ' closed' : ''}`}
          onClick={() => setUnitVisible(!unitVisible)}
        >
          Unit Menu
        </button>
        {currentTopic && <div className="banner-nav-buttons">
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
            disabled={!currentTopic || currentFileIdx === currentTopic.files.length - 1}
          >
            Next <GiPlainArrow style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>}
        <span ref={unitsTitle.ref} className="units-banner-title" style={unitsTitle.sticky
          ? { position: 'absolute', left: '280px', pointerEvents: 'none', whiteSpace: 'nowrap' }
          : { position: 'absolute', left: `-${unitLeft}px`, right: 0, textAlign: 'center', pointerEvents: 'none' }
        }>{currentFile ? getUnitTitle(currentFile) : ''}</span>
      </div>

      {/* Subject Menu */}
      {subjectVisible && (
        <SubjectSidebar
          subjects={subjects}
          currentSubjectId={currentSubject.id}
          onSubjectChange={handleSubjectChange}
          width={subjectWidth}
          onWidthChange={setSubjectWidth}
          top={subjectSidebarTop}
        />
      )}

      {/* Course Menu */}
      {courseVisible && currentSubject && currentSubject.courses.length > 0 && (
        <CourseSidebar
          sections={currentSubject.courses}
          currentSectionId={currentCourse ? currentCourse.id : ''}
          onSectionChange={handleCourseChange}
          width={courseWidth}
          left={courseLeft}
          onWidthChange={setCourseWidth}
          top={courseSidebarTop}
        />
      )}

      {/* Topic Menu */}
      {topicVisible && currentCourse && (
        <TopicSidebar
          files={currentCourse.topics.map(t => t.title)}
          currentFileIdx={currentTopic ? currentCourse.topics.findIndex(t => t.id === currentTopic.id) : -1}
          onFileChange={(idx) => handleTopicChange(currentCourse.topics[idx].id)}
          sectionId={currentCourse.id}
          width={topicWidth}
          left={topicLeft}
          onWidthChange={setTopicWidth}
          top={topicSidebarTop}
        />
      )}

      {/* Unit Menu */}
      {unitVisible && currentTopic && currentTopic.files.length > 0 && (
        <UnitSidebar
          files={currentTopic.files}
          currentFileIdx={currentFileIdx}
          onFileChange={handleFileChange}
          topicId={currentTopic.id}
          width={unitWidth}
          left={unitLeft}
          onWidthChange={setUnitWidth}
          top={unitSidebarTop}
        />
      )}

      {/* Content */}
      <div className="main" style={{ marginLeft: `${contentMargin}px`, paddingTop: `${contentTop}px` }}>
        {currentFile ? (
          <Content
            folder={currentTopic.folder}
            file={currentFile}
            currentFileIdx={currentFileIdx}
            totalFiles={currentTopic.files.length}
            onFileChange={handleFileChange}
          />
        ) : null}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/:topicId/:fileIndex" element={<Viewer />} />
      <Route path="/:topicId" element={<Viewer />} />
      <Route path="/" element={<Viewer />} />
    </Routes>
  );
}
