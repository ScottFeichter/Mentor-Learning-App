import { sections } from "./sections";

function findTopics(ids) {
  return sections.filter(s => ids.includes(s.id));
}

export const subjects = [
  {
    id: "01-fundementals",
    title: "01. Fundementals",
    courses: [
      { id: "01-communications", title: "01. Communications", topics: findTopics(["00-what-is-communication","01-signals-and-signal-types","02-analog-vs-digital","03-encoding-and-modulation","04-transmission-media","06-bandwidth","07-noise-and-interference","08-compression","09-encryption-and-secure-communication","10-communication-protocols","11-serial-vs-parallel-communication","12-synchronous-vs-asynchronous-communication","13-communication-models","14-history-of-communications","15-telecommunications","16-satellite-communication","17-radio-and-broadcast","18-optical-communication","19-the-internet-as-a-communication-system"]) },
      { id: "02-information-technology", title: "02. Information Technology", topics: findTopics(["01-hardware","02-cloud","03-software","04-artificial-intelligence"]) },
      { id: "03-computer-science", title: "03. Computer Science", topics: findTopics(["07-algorithms","08-data-structures","09-computation-theory","10-compilers-and-interpreters","11-computer-architecture","12-software-engineering","13-computer-graphics","14-human-computer-interaction","15-distributed-systems","16-cryptography","17-numerical-methods"]) },
      { id: "04-networks", title: "04. Networks", topics: findTopics(["01-more-about-networks","02-network-basics","03-web-architecture","04-apis","05-web-tbd","06-network-fundamentals","07-network-models-and-layers","08-ip-addressing-and-subnetting","09-dns","10-routing-and-switching","11-controllers","12-protocols","13-firewalls-and-network-security","14-wireless-networks","15-vpns","16-network-hardware","17-network-topologies","18-bandwidth-and-throughput","19-ports-and-sockets","20-mac-addresses","21-network-monitoring-and-testing","22-content-delivery-networks","23-load-balancing","24-proxies-and-reverse-proxies","25-network-address-translation","26-software-defined-networking"]) },
      { id: "05-operating-systems", title: "05. Operating Systems", topics: findTopics(["00-unix","01-linux","02-mac-os","03-windows","04-ios","05-android","06-chromium","07-graphene"]) },
      { id: "06-command-line-tools", title: "06. Command Line Tools", topics: findTopics(["01-shell","02-grep","03-git","04-github-cli","05-aws-cli"]) },
    ],
  },
  {
    id: "02-html-and-css",
    title: "02. HTML and CSS",
    courses: [
      { id: "00-html", title: "00. HTML", topics: findTopics(["02-html-and-css-00-html"]) },
      { id: "01-css", title: "01. CSS", topics: findTopics(["02-html-and-css-01-css"]) },
      { id: "02-browsers", title: "02. Browsers", topics: findTopics(["02-html-and-css-02-browsers"]) },
      { id: "03-environments-and-core-utilities", title: "03. Environments and Core Utilities", topics: findTopics(["02-html-and-css-03-environments-and-core-utilities"]) },
      { id: "04-design-and-accessibility", title: "04. Design and Accessibility", topics: findTopics(["02-html-and-css-04-design-and-accessibility"]) },
      { id: "05-web-builders", title: "05. Web Builders", topics: findTopics(["02-html-and-css-05-web-builders"]) },
    ],
  },
  {
    id: "03-javascript",
    title: "03. JavaScript",
    courses: [
      { id: "images", title: "images", topics: findTopics([]) },
      { id: "markdown", title: "markdown", topics: findTopics(["15-js-notes-breakout"]) },
    ],
  },
  {
    id: "04-advanced-javascript",
    title: "04. Advanced JavaScript",
    courses: [
      { id: "01-first-principles", title: "01. First Principles", topics: findTopics(["01-nomenclature","02-syntax","03-values-and-types","05-execution-context","06-functions"]) },
      { id: "02-deep-topics", title: "02. Deep Topics", topics: findTopics(["07-callbacks","08-promises","09-async-await","10-recursion","11-closure"]) },
      { id: "03-misc-js", title: "03. Misc JS", topics: findTopics(["01-syntactic-sugars","02-common-operations","12-object-oriented-programming"]) },
      { id: "04-performance-solving", title: "04. Performance & Solving", topics: findTopics(["12-time-and-space-complexity","13-data-structures","14-algorithms","15-blind75"]) },
    ],
  },
  {
    id: "05-react-redux-and-remix",
    title: "05. React, Redux, and Remix",
    courses: [
    ],
  },
  {
    id: "06-node",
    title: "06. Node",
    courses: [
      { id: "01-node-tools-for-development", title: "01. Node Tools For Development", topics: findTopics(["01-browser","02-web-api-client","03-integrated-developers-environment","04-command-line-interface","05-local-version-control","06-remote-version-control"]) },
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
    id: "07-typescript",
    title: "07. TypeScript",
    courses: [
    ],
  },
  {
    id: "08-rust",
    title: "08. Rust",
    courses: [
      { id: "00-web-assembly", title: "00. Web Assembly", topics: findTopics(["08-rust-00-web-assembly"]) },
      { id: "01-what-is-rust", title: "01. What Is Rust?", topics: findTopics(["08-rust-01-what-is-rust"]) },
      { id: "02-rust-basics", title: "02. Rust Basics", topics: findTopics(["08-rust-02-rust-basics"]) },
      { id: "03-cargo", title: "03. Cargo", topics: findTopics(["08-rust-03-cargo"]) },
    ],
  },
  {
    id: "09-developer-operations",
    title: "09. Developer Operations",
    courses: [
      { id: "configuration-files", title: "Configuration Files", topics: findTopics(["09-developer-operations-configuration-files"]) },
      { id: "continuous-development", title: "Continuous Development", topics: findTopics(["09-developer-operations-continuous-development"]) },
      { id: "continuous-integration", title: "Continuous Integration", topics: findTopics(["09-developer-operations-continuous-integration"]) },
      { id: "deployment", title: "Deployment", topics: findTopics(["09-developer-operations-deployment"]) },
    ],
  },
  {
    id: "10-system-design",
    title: "10. System Design",
    courses: [
      { id: "caching", title: "Caching", topics: findTopics(["10-system-design-caching"]) },
      { id: "redis", title: "Redis", topics: findTopics(["10-system-design-redis"]) },
      { id: "kafka", title: "kafka", topics: findTopics(["10-system-design-kafka"]) },
    ],
  },
  {
    id: "11-job-interviewing",
    title: "11. Job Interviewing",
    courses: [
    ],
  },
];
