import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = __dirname;
const MD_DIR = path.join(APP_DIR, 'public', 'md');
const SRC_DIR = path.join(APP_DIR, 'src');

const SUBJECT_FOLDERS = fs.readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
  .map(d => d.name)
  .sort();

function slugify(name) {
  return name.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}

function getMdFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
}

function findPublicMd(topicDir) {
  // Look for a viewer app with public/md inside the topic folder
  const entries = fs.readdirSync(topicDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const candidate = path.join(topicDir, entry.name, 'public', 'md');
      if (fs.existsSync(candidate)) return candidate;
    }
  }
  // Check if md files are loose in the topic folder itself
  const looseMd = getMdFiles(topicDir);
  if (looseMd.length > 0) return topicDir;
  return null;
}

function scanStructure() {
  const subjects = [];
  const allTopics = [];
  const topicNameCount = {};

  // First pass: collect all topic folder names to detect collisions
  for (const subjectFolder of SUBJECT_FOLDERS) {
    const subjectPath = path.join(ROOT, subjectFolder);
    if (!fs.existsSync(subjectPath)) continue;
    const courseFolders = fs.readdirSync(subjectPath, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('_'))
      .map(d => d.name)
      .sort();
    for (const courseFolder of courseFolders) {
      const coursePath = path.join(subjectPath, courseFolder);
      const topicFolders = fs.readdirSync(coursePath, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name)
        .sort();
      for (const topicFolder of topicFolders) {
        topicNameCount[topicFolder] = (topicNameCount[topicFolder] || 0) + 1;
      }
    }
  }

  // Second pass: build structure
  for (const subjectFolder of SUBJECT_FOLDERS) {
    const subjectPath = path.join(ROOT, subjectFolder);
    if (!fs.existsSync(subjectPath)) continue;

    const subject = {
      id: slugify(subjectFolder),
      title: subjectFolder,
      courses: [],
    };

    const courseFolders = fs.readdirSync(subjectPath, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('_'))
      .map(d => d.name)
      .sort();

    for (const courseFolder of courseFolders) {
      const coursePath = path.join(subjectPath, courseFolder);
      const course = {
        id: slugify(courseFolder),
        title: courseFolder,
        topics: [],
      };

      const topicFolders = fs.readdirSync(coursePath, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name)
        .sort();

      for (const topicFolder of topicFolders) {
        const topicPath = path.join(coursePath, topicFolder);
        const mdSource = findPublicMd(topicPath);
        const files = mdSource ? getMdFiles(mdSource) : [];

        // Use topic folder name as symlink, disambiguate if collision
        let symlinkName = topicFolder;
        if (topicNameCount[topicFolder] > 1) {
          symlinkName = `${courseFolder}--${topicFolder}`;
        }

        const topic = {
          id: slugify(symlinkName),
          title: topicFolder,
          folder: symlinkName,
          files,
          _mdSource: mdSource,
          _symlinkName: symlinkName,
        };

        course.topics.push(topic);
        allTopics.push(topic);
      }

      subject.courses.push(course);
    }

    subjects.push(subject);
  }

  return { subjects, allTopics };
}

function createSymlinks(allTopics) {
  // Clear existing symlinks in public/md
  if (!fs.existsSync(MD_DIR)) fs.mkdirSync(MD_DIR, { recursive: true });
  const existing = fs.readdirSync(MD_DIR);
  for (const entry of existing) {
    const fullPath = path.join(MD_DIR, entry);
    const stat = fs.lstatSync(fullPath);
    if (stat.isSymbolicLink()) {
      fs.unlinkSync(fullPath);
    }
  }

  // Create new symlinks
  for (const topic of allTopics) {
    if (!topic._mdSource) continue;
    const linkPath = path.join(MD_DIR, topic._symlinkName);
    const relativePath = path.relative(MD_DIR, topic._mdSource);
    if (!fs.existsSync(linkPath)) {
      fs.symlinkSync(relativePath, linkPath);
    }
  }
}

function generateSectionsJs(allTopics) {
  const lines = ['export const sections = ['];
  for (const topic of allTopics) {
    const filesStr = topic.files.map(f => `"${f}"`).join(',');
    lines.push(`  { id: "${topic.id}", title: "${topic.title}", folder: "${topic.folder}", files: [${filesStr}] },`);
  }
  lines.push('];');
  fs.writeFileSync(path.join(SRC_DIR, 'sections.js'), lines.join('\n') + '\n');
}

function generateSubjectsJs(subjects) {
  const lines = ['import { sections } from "./sections";', '', 'function findTopics(ids) {', '  return sections.filter(s => ids.includes(s.id));', '}', ''];
  lines.push('export const subjects = [');
  for (const subject of subjects) {
    lines.push(`  {`);
    lines.push(`    id: "${subject.id}",`);
    lines.push(`    title: "${subject.title}",`);
    lines.push(`    courses: [`);
    for (const course of subject.courses) {
      const topicIds = course.topics.map(t => `"${t.id}"`);
      lines.push(`      { id: "${course.id}", title: "${course.title}", topics: findTopics([${topicIds.join(',')}]) },`);
    }
    lines.push(`    ],`);
    lines.push(`  },`);
  }
  lines.push('];');
  fs.writeFileSync(path.join(SRC_DIR, 'subjects.js'), lines.join('\n') + '\n');
}

// Run
const { subjects, allTopics } = scanStructure();
createSymlinks(allTopics);
generateSectionsJs(allTopics);
generateSubjectsJs(subjects);
console.log(`Generated config: ${subjects.length} subjects, ${allTopics.filter(t => t.files.length > 0).length} topics with content`);
