import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, existsSync } from 'fs'

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
            res.end(readFileSync(filePath, 'utf-8'))
            return
          }
        }
        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [serveMdFiles(), react()],
  server: {
    port: 8224,
  },
})
