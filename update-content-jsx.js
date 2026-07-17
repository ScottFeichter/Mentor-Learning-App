const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = __dirname;

const files = execSync(
  `find "${root}" -name "Content.jsx" | grep -v node_modules | grep -v "_app-viewer"`,
  { encoding: 'utf8' }
).trim().split('\n').filter(Boolean);

const COMMENT = `/*
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
 *   \`code\`    → <code> (inline code)
 *   \`\`\`block\`\`\` → <pre><code> (code block)
 *   [text](url) → <a> (link, opens in new tab)
 *   &nbsp;    → spacer paragraph (class: nbsp-spacer)
 *
 * CUSTOM INLINE STYLES (raw HTML span in .md files):
 *   <span class="blue-bold">text</span>   → bold blue text
 *   <span class="purple-bold">text</span> → bold purple text
 *   <span class="highlight">text</span>   → yellow highlighted text
 *   <span class="muted">text</span>       → muted/grey text
 *
 * NOTE: spans are inline — they render inside whatever block element
 * wraps them (p, li, etc.) and do not become block elements themselves.
 * rehype-raw is required to allow raw HTML passthrough in react-markdown.
 */
`;

let updated = 0;
let skipped = 0;

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');

  // skip if already updated
  if (src.includes('rehype-raw')) { skipped++; continue; }

  // add comment block before first import
  src = src.replace(/^(import )/, COMMENT + '$1');

  // add rehype-raw import after rehype-highlight
  src = src.replace(
    `import rehypeHighlight from 'rehype-highlight';`,
    `import rehypeHighlight from 'rehype-highlight';\nimport rehypeRaw from 'rehype-raw';`
  );

  // add rehypeRaw to plugins
  src = src.replace(
    `rehypePlugins={[rehypeHighlight]}`,
    `rehypePlugins={[rehypeHighlight, rehypeRaw]}`
  );

  // add p interceptor and span interceptor before closing of components if not present
  if (!src.includes('nbsp-spacer')) {
    src = src.replace(
      `          pre: ({ children }) => {`,
      `          p: ({ children }) => {
            const isNbsp = children === '\\u00a0';
            return <p className={isNbsp ? 'nbsp-spacer' : undefined}>{children}</p>;
          },
          span: ({ className, children }) => <span className={className}>{children}</span>,
          pre: ({ children }) => {`
    );
  } else if (!src.includes('span:')) {
    src = src.replace(
      `          pre: ({ children }) => {`,
      `          span: ({ className, children }) => <span className={className}>{children}</span>,
          pre: ({ children }) => {`
    );
  }

  fs.writeFileSync(file, src, 'utf8');
  updated++;
  console.log(`updated: ${path.relative(root, file)}`);
}

console.log(`\ndone — ${updated} updated, ${skipped} skipped`);
