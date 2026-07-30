/*
 * CONTENT MARKDOWN SYNTAX REFERENCE
 *
 * STANDARD MARKDOWN → HTML MAPPING (headings shift down one level):
 *   # H1      → <h2>
 *   ## H2     → <h3>
 *   ### H3    → <h4>
 *   #### H4   → <h5>
 *   ##### H5  → <h6>
 *   **text**  → <strong> (bold)
 *   *text*    → <em> (italic)
 *   `code`    → <code> (inline code)
 *   ```block``` → <pre><code> (code block)
 *   [text](url) → <a> (link, opens in new tab)
 *   &nbsp;    → spacer paragraph (class: nbsp-spacer)
 *
 * CUSTOM INLINE STYLES (raw HTML span in .md files):
 *   <span class="red-bold">text</span>          → bold, same color as h2 (#6c0101)
 *   <span class="blue-bold">text</span>         → bold, same color as h3 (#3D7EF0)
 *   <span class="olive-bold">text</span>        → bold, same color as h4 (rgb(171,171,150))
 *   <span class="purple-bold">text</span>       → bold purple (#a855f7)
 *   <span class="highlight">text</span>         → yellow background highlight (#fef08a)
 *   <span class="subheading-highlight">text</span> → background highlight, same color as h6 (#fef5d6)
 *   <span class="muted">text</span>            → muted/grey text (#9ca3af)
 *
 * NOTE: spans are inline — they render inside whatever block element
 * wraps them (p, li, etc.) and do not become block elements themselves.
 */
import { useState, useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import { GiPlainArrow } from 'react-icons/gi';
import { useCompletion } from './CompletionContext';
import Quiz from './Quiz';
import Explaining from './Explaining';
import ExplainingGroup from './ExplainingGroup';
import 'highlight.js/styles/vs2015.css';
import './Content.css';

function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = () => {
    const text = codeRef.current?.textContent || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper">
      <button className="copy-button" onClick={handleCopy}>
        {copied ? <MdCheck /> : <MdContentCopy />}
      </button>
      <pre>
        <code ref={codeRef}>{typeof children === 'string' ? children.replace(/\n$/, '') : children}</code>
      </pre>
    </div>
  );
}

export default function Content({ folder, file, currentFileIdx, totalFiles, onFileChange, unitKey }) {
  const [content, setContent] = useState('');
  const { isComplete, markComplete, markIncomplete } = useCompletion();
  const complete = unitKey ? isComplete(unitKey) : false;
  const conceptIndexMap = {};
  (content.match(/data-concept="([^"]+)"/g) || []).forEach((m, i) => {
    const concept = m.slice(14, -1);
    if (!(concept in conceptIndexMap)) conceptIndexMap[concept] = i + 1;
  });

  useEffect(() => {
    if (!file) return;
    fetch(`/md/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent('Error loading file'));
  }, [folder, file]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (idx) => {
    const currentScroll = window.scrollY;
    onFileChange(idx);
    setTimeout(() => {
      window.scrollTo(0, currentScroll);
    }, 0);
  };

  return (
    <div className="content">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: 'h2',
          h2: 'h3',
          h3: 'h4',
          h4: 'h5',
          h5: 'h6',
          h6: 'h6',
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
          ),
          p: ({ children, style }) => {
            const isNbsp = children === '\u00a0';
            return <p className={isNbsp ? 'nbsp-spacer' : undefined} style={style}>{children}</p>;
          },
          div: ({ className, 'data-questions': dataQuestions, 'data-quiz-id': dataQuizId, 'data-concept': dataConcept, children, ...props }) => {
            if (className === 'quiz' && dataQuestions) {
              try {
                const questions = JSON.parse(dataQuestions);
                return <Quiz questions={questions} quizId={dataQuizId || unitKey || 'default'} />;
              } catch (e) {
                return <div className={className} {...props}>{children}</div>;
              }
            }
            if (className === 'explaining-group') {
              const concepts = (content.match(/data-concept="([^"]+)"/g) || [])
                .map(m => m.slice(14, -1));
              return <ExplainingGroup concepts={concepts} unitKey={unitKey}>{children}</ExplainingGroup>;
            }
            if (className === 'explaining' && dataConcept) {
              const conceptNumber = conceptIndexMap[dataConcept] ?? 0;
              const recordingKey = `${unitKey || 'default'}--${dataConcept.slice(0, 40)}`;
              return <Explaining concept={dataConcept} conceptNumber={conceptNumber} recordingKey={recordingKey} />;
            }
            return <div className={className} {...props}>{children}</div>;
          },
          pre: ({ children }) => {
            const code = children?.props?.children;
            return <CodeBlock>{code}</CodeBlock>;
          }
        }}
      >{content}</Markdown>
      <div className="bottom-nav-container">
        <div className="bottom-nav-buttons">
          <button onClick={() => handleNav(currentFileIdx - 1)} disabled={currentFileIdx === 0}>
            <GiPlainArrow style={{ transform: 'rotate(90deg)' }} /> Prev
          </button>
          <button onClick={() => handleNav(currentFileIdx + 1)} disabled={currentFileIdx === totalFiles - 1}>
            Next <GiPlainArrow style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
        <div className="completion-row">
          <button
            className={`completion-btn${complete ? ' available' : ' current-state'}`}
            onClick={() => unitKey && markIncomplete(unitKey)}
          >
            Mark Incomplete
          </button>
          <button className="top-button" onClick={scrollToTop}>
            Top Of Page
          </button>
          <button
            className={`completion-btn${complete ? ' current-state' : ' available'}`}
            onClick={() => unitKey && markComplete(unitKey)}
          >
            Mark Complete
          </button>
        </div>
      </div>
    </div>
  );
}
