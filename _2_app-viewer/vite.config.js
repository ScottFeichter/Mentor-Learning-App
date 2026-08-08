import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, existsSync } from 'fs'

function injectDataTree(md) {
  const fenceRe = /```json\s+id="([^"]+)"\s*\n([\s\S]*?)```/g;
  const blocks = {};
  let m;
  while ((m = fenceRe.exec(md)) !== null) {
    blocks[m[1]] = m[2].trim();
  }
  let result = md;
  // strip the fenced blocks so they don't render as code in the browser
  result = result.replace(/```json\s+id="[^"]+"\s*\n[\s\S]*?```\n?/g, '');
  result = result.replace(
    /<div\s+class="syntax-tree"\s+data-tree-src="([^"]+)"\s*><\/div>/g,
    (_, id) => blocks[id]
      ? `<div class="syntax-tree" data-tree='${blocks[id].replace(/'/g, "&#39;")}'></div>`
      : `<div class="syntax-tree-error">No JSON block found for id="${id}"</div>`
  );
  return result;
}

function serveMdFiles() {
  return {
    name: 'serve-md-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/md/')) {
          const rawPath = req.url.slice(4)
          const fileName = decodeURIComponent(rawPath)
          const filePath = resolve('public/md', fileName)
          if (existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
            res.end(injectDataTree(readFileSync(filePath, 'utf-8')))
            return
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [serveMdFiles(), react()],
  server: {
    port: 8200,
    fs: {
      allow: ['..'],
    },
    watch: {
      ignored: ['!**/src/sections.js', '!**/src/subjects.js'],
    },
  },
})
