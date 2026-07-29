import { sections } from "./sections";

function findTopics(ids) {
  return sections.filter(s => ids.includes(s.id));
}

export const subjects = [
  {
    id: "01-intro-to-computer-science",
    title: "01. Intro To Computer Science",
    courses: [
      { id: "00-what-is-a-signal", title: "00. What Is A Signal", topics: findTopics(["01-intro-to-computer-science-00-what-is-a-signal"]) },
      { id: "01-what-is-electricity", title: "01. What Is Electricity", topics: findTopics(["01-intro-to-computer-science-01-what-is-electricity"]) },
      { id: "02-what-is-a-circuit", title: "02. What Is A Circuit", topics: findTopics(["01-intro-to-computer-science-02-what-is-a-circuit"]) },
      { id: "03-circuit-components", title: "03. Circuit Components", topics: findTopics(["01-intro-to-computer-science-03-circuit-components"]) },
      { id: "04-logic-gates", title: "04. Logic Gates", topics: findTopics(["01-intro-to-computer-science-04-logic-gates"]) },
      { id: "05-transistors", title: "05. Transistors", topics: findTopics(["01-intro-to-computer-science-05-transistors"]) },
      { id: "06-integrated-circuits", title: "06. Integrated Circuits", topics: findTopics(["01-intro-to-computer-science-06-integrated-circuits"]) },
      { id: "07-what-is-a-computer", title: "07. What Is A Computer", topics: findTopics(["01-intro-to-computer-science-07-what-is-a-computer"]) },
      { id: "08-how-the-web-works", title: "08. How The Web Works", topics: findTopics(["01-intro-to-computer-science-08-how-the-web-works"]) },
      { id: "09-more-about-networks", title: "09. More About Networks", topics: findTopics(["01-intro-to-computer-science-09-more-about-networks"]) },
    ],
  },
  {
    id: "02-information-technology",
    title: "02. Information Technology",
    courses: [
    ],
  },
  {
    id: "03-networking",
    title: "03. Networking",
    courses: [
    ],
  },
  {
    id: "04-operating-systems",
    title: "04. Operating Systems",
    courses: [
      { id: "00-components-of-an-os", title: "00. Components Of An OS", topics: findTopics(["04-operating-systems-00-components-of-an-os"]) },
      { id: "00-unix", title: "00. Unix", topics: findTopics(["04-operating-systems-00-unix"]) },
      { id: "01-linux", title: "01. Linux", topics: findTopics(["04-operating-systems-01-linux"]) },
      { id: "02-mac-os", title: "02. Mac OS", topics: findTopics(["04-operating-systems-02-mac-os"]) },
      { id: "03-windows", title: "03. Windows", topics: findTopics(["04-operating-systems-03-windows"]) },
      { id: "04-ios", title: "04. iOS", topics: findTopics(["04-operating-systems-04-ios"]) },
      { id: "05-android", title: "05. Android", topics: findTopics(["04-operating-systems-05-android"]) },
      { id: "06-chromium", title: "06. Chromium", topics: findTopics(["04-operating-systems-06-chromium"]) },
      { id: "07-graphene", title: "07. Graphene", topics: findTopics(["04-operating-systems-07-graphene"]) },
    ],
  },
  {
    id: "05-programing-languages",
    title: "05. Programing Languages",
    courses: [
      { id: "strongly-typed-languages", title: "Strongly Typed Languages", topics: findTopics(["05-programing-languages-strongly-typed-languages"]) },
      { id: "weakly-typed-languages", title: "Weakly Typed Languages", topics: findTopics(["05-programing-languages-weakly-typed-languages"]) },
    ],
  },
  {
    id: "06-shell-grep-git-github-gh-cli-md",
    title: "06. Shell, Grep, Git, GitHub, GH CLI.md",
    courses: [
      { id: "01-shell", title: "01. Shell", topics: findTopics(["06-shell-grep-git-github-gh-cli-md-01-shell"]) },
      { id: "02-grep", title: "02. Grep", topics: findTopics(["06-shell-grep-git-github-gh-cli-md-02-grep"]) },
      { id: "03-git", title: "03. Git", topics: findTopics(["06-shell-grep-git-github-gh-cli-md-03-git"]) },
      { id: "04-github-cli", title: "04. GitHub CLI", topics: findTopics(["06-shell-grep-git-github-gh-cli-md-04-github-cli"]) },
    ],
  },
  {
    id: "07-html-and-css",
    title: "07. HTML and CSS",
    courses: [
      { id: "00-html", title: "00. HTML", topics: findTopics(["07-html-and-css-00-html"]) },
      { id: "01-css", title: "01. CSS", topics: findTopics(["07-html-and-css-01-css"]) },
      { id: "02-browsers", title: "02. Browsers", topics: findTopics(["07-html-and-css-02-browsers"]) },
      { id: "03-environments-and-core-utilities", title: "03. Environments and Core Utilities", topics: findTopics(["07-html-and-css-03-environments-and-core-utilities"]) },
      { id: "04-design-and-accessibility", title: "04. Design and Accessibility", topics: findTopics(["07-html-and-css-04-design-and-accessibility"]) },
      { id: "05-web-builders", title: "05. Web Builders", topics: findTopics(["07-html-and-css-05-web-builders"]) },
    ],
  },
  {
    id: "08-browsers",
    title: "08. Browsers",
    courses: [
    ],
  },
  {
    id: "09-javascript",
    title: "09. JavaScript",
    courses: [
      { id: "images", title: "images", topics: findTopics([]) },
      { id: "markdown", title: "markdown", topics: findTopics(["09-javascript-markdown"]) },
    ],
  },
  {
    id: "10-advanced-javascript",
    title: "10. Advanced JavaScript",
    courses: [
      { id: "01-misc-js", title: "01. Misc JS", topics: findTopics(["10-advanced-javascript-01-misc-js"]) },
      { id: "02-oop-and-context", title: "02. OOP and Context", topics: findTopics(["10-advanced-javascript-02-oop-and-context"]) },
      { id: "03-functions", title: "03. Functions", topics: findTopics(["10-advanced-javascript-03-functions"]) },
      { id: "04-callbacks", title: "04. Callbacks", topics: findTopics(["10-advanced-javascript-04-callbacks"]) },
      { id: "05-promises", title: "05. Promises", topics: findTopics(["10-advanced-javascript-05-promises"]) },
      { id: "06-async-await", title: "06. Async Await", topics: findTopics(["10-advanced-javascript-06-async-await"]) },
      { id: "07-recursion", title: "07. Recursion", topics: findTopics(["10-advanced-javascript-07-recursion"]) },
      { id: "08-closure", title: "08. Closure", topics: findTopics(["10-advanced-javascript-08-closure"]) },
      { id: "09-time-and-space-complexity", title: "09. Time And Space Complexity", topics: findTopics(["10-advanced-javascript-09-time-and-space-complexity"]) },
      { id: "10-data-structures", title: "10. Data Structures", topics: findTopics(["10-advanced-javascript-10-data-structures"]) },
      { id: "11-algorithms", title: "11. Algorithms", topics: findTopics(["10-advanced-javascript-11-algorithms"]) },
      { id: "12-blind75", title: "12. Blind75", topics: findTopics(["blind-75"]) },
    ],
  },
  {
    id: "11-react-redux-and-remix",
    title: "11. React, Redux, and Remix",
    courses: [
    ],
  },
  {
    id: "12-node",
    title: "12. Node",
    courses: [
      { id: "01-node-tools-for-development", title: "01. Node Tools For Development", topics: findTopics(["01-browser","02-api-client","03-integrated-developers-environment","04-command-line-interface","05-local-version-control","06-remote-version-control"]) },
      { id: "02-node-introduction", title: "02. Node Introduction", topics: findTopics(["01-javascript-language","02-node-getting-started","03-node-version-manager","04-node-installation","05-node-js-runtime","06-node-vs-browsers","07-node-architecture","08-node-event-loop"]) },
      { id: "03-node-jom", title: "03. Node JOM", topics: findTopics(["01-js-objects","02-node-jom","03-node-globals","04-node-errors","05-node-imports-and-exports","06-nsl-intro"]) },
      { id: "04-node-standard-library", title: "04. Node Standard Library", topics: findTopics(["16-node-os-module","17-node-path-module","18-node-fs-module","19-node-readline-module","23-node-stream-module","24-node-readline-module","24-node-timers-module","25-node-decoder-module","25-node-event-module","26-node-http-module","27-node-https-module"]) },
      { id: "05-node-packages", title: "05. Node Packages", topics: findTopics(["01-node-package-manager","02-node-pnpm-package","03-node-yarn-package","04-node-dotenv-package","05-node-js-docs-package"]) },
      { id: "06-node-express-package-part-i", title: "06. Node Express Package Part I", topics: findTopics(["01-server-basics","01-b-express-server","01-c-express-route-definitions","01-d-express-middlware","01-e-express-handlers","01-f-express-controllers","01-g-express-routers"]) },
      { id: "06-b-node-express-package-part-ii", title: "06.b Node Express Package Part II", topics: findTopics(["03-node-nodemon-package","04-node-newman-package","06-node-winston-package","07-node-swagger-package"]) },
      { id: "07-node-express-package-part-ii", title: "07. Node Express Package Part II", topics: findTopics(["00-data-integrity","01-node-joi-package","02-node-validator-package","03-node-express-validator-package"]) },
      { id: "08-node-express-package-part-iii", title: "08. Node Express Package Part III", topics: findTopics(["00-security","43-node-helmet-package","44-node-bcrypt-module","45-node-jsonwebtoken-package","46-node-cookie-parser-package"]) },
      { id: "10-node-express-package-part-iv", title: "10. Node Express Package Part IV", topics: findTopics(["00-databases"]) },
      { id: "11-node-express-package-part-v", title: "11. Node Express Package Part V", topics: findTopics(["00-rendering","01-node-ejs-package","02-node-react-package"]) },
      { id: "12-node-express-package-part-vi", title: "12. Node Express Package Part VI", topics: findTopics(["00-testing","01-node-jest-package","02-node-chai-package","03-node-mocha-package"]) },
      { id: "13-node-for-office-suite", title: "13. Node For Office Suite", topics: findTopics(["63-node-xlsx-and-exceljs-packages","64-node-docx-docstemplater-mammoth-packages","65-node-pptxgenjs-package","66-node-puppeteer-and-pdf-lib-packages"]) },
      { id: "68-deployment", title: "68. Deployment", topics: findTopics(["68-deployment-00-welcome"]) },
      { id: "69-architecture", title: "69. Architecture", topics: findTopics(["69-architecture-00-welcome"]) },
      { id: "70-node-lodash-package", title: "70. Node Lodash Package", topics: findTopics(["70-node-lodash-package-00-welcome"]) },
      { id: "71-node-pm2-package", title: "71. Node PM2 Package", topics: findTopics(["71-node-pm2-package-00-welcome"]) },
      { id: "72-node-eslint-package", title: "72. Node ESLint Package", topics: findTopics(["72-node-eslint-package-00-welcome"]) },
      { id: "73-node-vs-bun-runtime", title: "73. Node vs Bun Runtime", topics: findTopics(["73-node-vs-bun-runtime-00-welcome"]) },
      { id: "74-node-vite", title: "74. Node Vite", topics: findTopics(["74-node-vite-00-welcome"]) },
      { id: "75-node-socket-io-package", title: "75. Node Socket.IO Package", topics: findTopics(["75-node-socket-io-package-00-welcome"]) },
      { id: "76-node-moment-package", title: "76. Node Moment Package", topics: findTopics(["76-node-moment-package-00-welcome"]) },
      { id: "77-node-babel-package", title: "77. Node Babel Package", topics: findTopics(["77-node-babel-package-00-welcome"]) },
      { id: "78-node-cloudinary-package", title: "78. Node Cloudinary Package", topics: findTopics(["78-node-cloudinary-package-00-welcome"]) },
      { id: "79-software-development-kits", title: "79. Software Development Kits", topics: findTopics(["79-software-development-kits-00-welcome"]) },
      { id: "80-node-in-browser-tools", title: "80. Node In Browser Tools", topics: findTopics(["01-node-xterm-package","02-node-xterm-addon-fit-package","03-node-xterm-addon-web-links-package","04-node-webcontainers-api-package","05-node-monaco-editor-package","06-node-wasmer-wasi-package","07-node-wasmer-wasmfs-package","07-node-shell-quote-package","08-node-ansi-to-html-package"]) },
    ],
  },
  {
    id: "13-typescript",
    title: "13. TypeScript",
    courses: [
    ],
  },
  {
    id: "14-rust",
    title: "14. Rust",
    courses: [
      { id: "00-web-assembly", title: "00. Web Assembly", topics: findTopics(["14-rust-00-web-assembly"]) },
      { id: "01-what-is-rust", title: "01. What Is Rust?", topics: findTopics(["14-rust-01-what-is-rust"]) },
      { id: "02-rust-basics", title: "02. Rust Basics", topics: findTopics(["14-rust-02-rust-basics"]) },
      { id: "03-cargo", title: "03. Cargo", topics: findTopics(["14-rust-03-cargo"]) },
    ],
  },
  {
    id: "15-developer-operations",
    title: "15. Developer Operations",
    courses: [
      { id: "configuration-files", title: "Configuration Files", topics: findTopics(["15-developer-operations-configuration-files"]) },
      { id: "continuous-development", title: "Continuous Development", topics: findTopics(["15-developer-operations-continuous-development"]) },
      { id: "continuous-integration", title: "Continuous Integration", topics: findTopics(["15-developer-operations-continuous-integration"]) },
      { id: "deployment", title: "Deployment", topics: findTopics(["15-developer-operations-deployment"]) },
    ],
  },
  {
    id: "16-system-design",
    title: "16. System Design",
    courses: [
      { id: "caching", title: "Caching", topics: findTopics(["16-system-design-caching"]) },
      { id: "redis", title: "Redis", topics: findTopics(["16-system-design-redis"]) },
      { id: "kafka", title: "kafka", topics: findTopics(["16-system-design-kafka"]) },
    ],
  },
  {
    id: "17-job-interviewing",
    title: "17. Job Interviewing",
    courses: [
    ],
  },
  {
    id: "18-blockchain",
    title: "18. Blockchain",
    courses: [
    ],
  },
  {
    id: "19-ai",
    title: "19. AI",
    courses: [
    ],
  },
  {
    id: "20-quantum-computing",
    title: "20. Quantum Computing",
    courses: [
    ],
  },
  {
    id: "21-software-learning",
    title: "21. Software Learning",
    courses: [
      { id: "adobe-suite", title: "Adobe Suite", topics: findTopics(["21-software-learning-adobe-suite"]) },
      { id: "office-suite", title: "Office Suite", topics: findTopics(["21-software-learning-office-suite"]) },
    ],
  },
];
