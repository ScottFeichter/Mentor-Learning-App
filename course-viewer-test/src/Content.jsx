import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import { GiPlainArrow } from 'react-icons/gi';
import 'highlight.js/styles/vs2015.css';
import './Content.css';

function CodeBlock({ children }) {
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
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function Content({ folder, file, currentFileIdx, totalFiles, onFileChange }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!file) return;
    fetch(`/md/${folder}/${file}`)
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
        rehypePlugins={[rehypeHighlight]}
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
        <button className="top-button" onClick={scrollToTop}>
          Top Of Page
        </button>
      </div>
    </div>
  );
}
