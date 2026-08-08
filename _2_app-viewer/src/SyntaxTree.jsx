import { useState, useRef, useLayoutEffect } from 'react';
import './SyntaxTree.css';

const DEPTH_COLORS = {
  1: 'var(--heading-h1-color)',
  2: 'var(--heading-h2-color)',
  3: 'var(--heading-h3-color)',
  4: '#82816D',
  5: '#4b5563',
  6: '#2C682C',
  7: 'var(--color-text-muted)',
  8: 'var(--color-text-muted)',
};

// node shape: { label, children: [...] } or { label, examples: { code: desc, ... } }
// Built from nested objects: { "Label": { "Child": { "code": "desc" } } }
// A value is examples if ALL its values are strings; otherwise it's children nodes.
function parseNode(label, value) {
  const entries = Object.entries(value);
  const allStrings = entries.every(([, v]) => typeof v === 'string');
  if (allStrings) {
    return { label, examples: value };
  }
  return { label, children: entries.map(([k, v]) => parseNode(k, v)) };
}

function SyntaxNode({ node, depth, lastChildRef, lastChildLabelRef, parentColor }) {
  const [open, setOpen] = useState(depth <= 2);
  const hasChildren = node.children && node.children.length > 0;
  const hasExamples = node.examples && Object.keys(node.examples).length > 0;
  const isExpandable = hasChildren || hasExamples;
  const showArrow = isExpandable && depth > 1;
  const childrenRef = useRef(null);
  const lastChildNodeRef = useRef(null);
  const lastChildLabelRef2 = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useLayoutEffect(() => {
    if (!open || !childrenRef.current || !lastChildLabelRef2.current) {
      setLineHeight(0);
      return;
    }
    const measure = () => {
      if (!childrenRef.current || !lastChildLabelRef2.current) return;
      const containerTop = childrenRef.current.getBoundingClientRect().top;
      const lastLabelRect = lastChildLabelRef2.current.getBoundingClientRect();
      setLineHeight(lastLabelRect.top - containerTop + lastLabelRect.height / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(childrenRef.current);
    return () => ro.disconnect();
  }, [open]);

  const myColor = DEPTH_COLORS[depth] || 'var(--color-text-muted)';

  return (
    <div
      className={`st-node st-depth-${depth}`}
      ref={lastChildRef || null}
      style={{ '--st-node-color': myColor, '--st-vline-color': myColor, '--st-hline-color': parentColor || myColor }}
    >
      <div
        className={`st-label${showArrow ? ' st-expandable' : ''}`}
        ref={lastChildLabelRef || null}
        onClick={() => showArrow && setOpen(o => !o)}
      >
        {showArrow && (
          <span className={`st-arrow${open ? ' st-open' : ''}`} style={{ color: parentColor || myColor }}>▶</span>
        )}
        {!showArrow && depth > 1 && <span className="st-arrow-placeholder" />}
        <span className="st-label-text">{node.label}</span>
      </div>
      {open && hasChildren && (
        <div className="st-children" ref={childrenRef}>
          {lineHeight > 0 && (
            <div className="st-vline" style={{ height: `${lineHeight}px`, background: myColor }} />
          )}
          {node.children.map((child, i) => (
            <SyntaxNode
              key={i}
              node={child}
              depth={depth + 1}
              parentColor={myColor}
              lastChildRef={i === node.children.length - 1 ? lastChildNodeRef : null}
              lastChildLabelRef={i === node.children.length - 1 ? lastChildLabelRef2 : null}
            />
          ))}
        </div>
      )}
      {open && hasExamples && (
        <div className="st-examples" ref={childrenRef} style={{ '--st-hline-color': myColor }}>
          {lineHeight > 0 && (
            <div className="st-vline" style={{ height: `${lineHeight}px`, background: myColor }} />
          )}
          {Object.entries(node.examples).map(([code, desc], i, arr) => (
            <div
              key={i}
              className="st-example-row"
              ref={i === arr.length - 1 ? lastChildLabelRef2 : null}
            >
              <code className="st-example-code">{code}</code>
              {desc && <span className="st-example-desc">{desc}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SyntaxTree({ data }) {
  let raw;
  try {
    raw = typeof data === 'string' ? JSON.parse(data) : data;
  } catch {
    return <div className="st-error">Invalid syntax tree data</div>;
  }

  const entries = Object.entries(raw);
  const root = entries.length === 1
    ? parseNode(entries[0][0], entries[0][1])
    : { label: 'Syntax', children: entries.map(([k, v]) => parseNode(k, v)) };

  return (
    <div className="syntax-tree-component">
      <SyntaxNode node={root} depth={1} />
    </div>
  );
}
