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
 *   <span class="subheading-highlight">text</span> → background highlight, same color as h5 (#868671)
 *   <span class="muted">text</span>            → muted/grey text (#9ca3af)
 *
 * NOTE: spans are inline — they render inside whatever block element
 * wraps them (p, li, etc.) and do not become block elements themselves.
 * rehype-raw is required to allow raw HTML passthrough in react-markdown.
 */
import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import { GiPlainArrow } from 'react-icons/gi';
import FileTree from './FileTree';
import 'highlight.js/styles/vs2015.css';
import './Content.css';

function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = (e) => {
    const codeElement = e.currentTarget.nextElementSibling.querySelector('code');
    const text = codeElement?.textContent || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper">
      <button className="copy-button" onClick={handleCopy}>
        {copied ? <MdCheck /> : <MdContentCopy />}
      </button>
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function Content({ file, currentPage, totalPages, onPageChange }) {
  const [content, setContent] = useState('');
  const [exampleData, setExampleData] = useState(null);

  useEffect(() => {
    fetch(`/md/${encodeURIComponent(file)}`)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => setContent('Error loading file'));

    fetch('/examples.json')
      .then(res => res.json())
      .then(data => {
        if (data[file]) {
          setExampleData(data[file]);
        } else {
          setExampleData(null);
        }
      })
      .catch(() => setExampleData(null));
  }, [file]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBottomNavClick = (newPage) => {
    const currentScroll = window.scrollY;
    onPageChange(newPage);
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
          span: ({ className, children }) => <span className={className}>{children}</span>,
          pre: ({ children }) => {
            const code = children?.props?.children;
            return <CodeBlock>{code}</CodeBlock>;
          }
        }}
      >{content}</Markdown>
      {exampleData && <FileTree data={exampleData} />}
      <div className="bottom-nav-container">
        <div className="bottom-nav-buttons">
          <button onClick={() => handleBottomNavClick(currentPage - 1)} disabled={currentPage === 0}>
            <GiPlainArrow style={{ transform: 'rotate(90deg)' }} /> Prev
          </button>
          <button onClick={() => handleBottomNavClick(currentPage + 1)} disabled={currentPage === totalPages - 1}>
            Next <GiPlainArrow style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
        <button className="top-button" onClick={scrollToTop}>
          Top Of Page
        </button>
      </div>
    </div>
  );
}
