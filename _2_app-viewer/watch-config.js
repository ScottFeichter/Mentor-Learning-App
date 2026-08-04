import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '01. Software Development');
const SUBJECT_FOLDERS = fs.readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
  .map(d => d.name)
  .sort();

let debounceTimer = null;

function regenerate() {
  try {
    execSync('node generate-config.js', { cwd: __dirname, stdio: 'inherit' });
  } catch (e) {
    console.error('Error regenerating config:', e.message);
  }
}

function watchFolders() {
  for (const folder of SUBJECT_FOLDERS) {
    const fullPath = path.join(ROOT, folder);
    if (!fs.existsSync(fullPath)) continue;
    fs.watch(fullPath, { recursive: true }, (eventType, filename) => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        console.log(`\n[watcher] Change detected: ${filename}`);
        regenerate();
      }, 500);
    });
  }
  console.log('[watcher] Watching subject folders for changes...');
}

watchFolders();
