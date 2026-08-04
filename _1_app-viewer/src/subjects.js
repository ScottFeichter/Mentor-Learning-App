import { sections } from "./sections";

function findTopics(ids) {
  return sections.filter(s => ids.includes(s.id));
}

export const subjects = [
  {
    id: "01-computer-science",
    title: "01. Computer Science",
    courses: [
      { id: "01-intro-to-computer-science", title: "01. Intro To Computer Science", topics: findTopics(["00-what-is-a-signal","01-what-is-electricity","02-what-is-a-circuit","03-circuit-components","04-logic-gates","05-transistors","06-integrated-circuits","07-what-is-a-computer","08-how-the-web-works","09-more-about-networks"]) },
      { id: "02-information-technology", title: "02. Information Technology", topics: findTopics([]) },
      { id: "03-networking", title: "03. Networking", topics: findTopics([]) },
      { id: "04-operating-systems", title: "04. Operating Systems", topics: findTopics(["00-components-of-an-os","00-unix","01-linux","02-mac-os","03-windows","04-ios","05-android","06-chromium","07-graphene"]) },
      { id: "05-programing-languages", title: "05. Programing Languages", topics: findTopics(["strongly-typed-languages","weakly-typed-languages"]) },
      { id: "06-shell-grep-git-github-gh-cli-md", title: "06. Shell, Grep, Git, GitHub, GH CLI.md", topics: findTopics(["01-shell","02-grep","03-git","04-github-cli"]) },
      { id: "07-html-and-css", title: "07. HTML and CSS", topics: findTopics(["00-html","01-css","02-browsers","03-environments-and-core-utilities","04-design-and-accessibility","05-web-builders"]) },
      { id: "08-browsers", title: "08. Browsers", topics: findTopics([]) },
      { id: "09-javascript", title: "09. JavaScript", topics: findTopics(["markdown"]) },
      { id: "10-advanced-javascript", title: "10. Advanced JavaScript", topics: findTopics(["01-misc-js","02-oop-and-context","03-functions","04-callbacks","05-promises","06-async-await","07-recursion","08-closure","09-time-and-space-complexity","10-data-structures","11-algorithms","12-blind75"]) },
      { id: "11-react-redux-and-remix", title: "11. React, Redux, and Remix", topics: findTopics([]) },
      { id: "12-node", title: "12. Node", topics: findTopics(["01-node-tools-for-development-part-i","02-node-tools-for-development-part-ii","03-node-tools-for-development-part-iii","04-node-tools-for-development-part-iv","05-node-introduction","06-node-version-manager","07-node-installation","08-node-js-runtime","09-node-architecture","10-node-vs-browsers","11-node-jom","12-node-globals","13-node-errors","14-node-imports-and-exports","15-node-standard-library","16-node-os-module","17-node-path-module","18-node-fs-module","19-node-readline-module","20-node-event-loop","21-node-timers-module","22-node-event-module","23-node-stream-module","24-node-readline-module","25-node-decoder-module","26-node-http-module","27-node-https-module","28-node-package-manager","29-node-pnpm-package","30-node-yarn-package","31-node-express-part-i-server-basics","32-node-dotenv-package","33-node-nodemon-package","34-node-newman-package","35-node-js-docs-package","36-node-winston-package","37-node-swagger-package","38-node-express-part-ii-data-integrity","39-node-joi-package","40-node-validator-package","41-node-express-validator-package","42-node-express-part-iii-security","43-node-helmet-package","44-node-bcrypt-module","45-node-jsonwebtoken-package","46-node-cookie-parser-package","47-node-express-xss-sanitizer-package","48-node-express-rate-limit-package","49-node-cors-package","50-node-passport-package","51-node-express-part-iv-databases","52-node-express-part-iv-b-rdbms","53-node-mongoose-package","54-node-prisma-package","55-node-sequelize-package","56-node-express-part-v-rendering","57-node-ejs-package","58-node-react-package","59-node-express-part-vi-testing","60-node-jest-package","61-node-chai-package","62-node-mocha-package","63-node-xlsx-and-exceljs-packages","64-node-docx-docstemplater-mammoth-packages","65-node-pptxgenjs-package","66-node-puppeteer-and-pdf-lib-packages","67-node-nodemailer-package","68-deployment","69-architecture","70-node-lodash-package","71-node-pm2-package","72-node-eslint-package","73-node-vs-bun-runtime","74-node-vite","75-node-socket-io-package","76-node-moment-package","77-node-babel-package","78-node-cloudinary-package","79-software-development-kits"]) },
      { id: "13-typescript", title: "13. TypeScript", topics: findTopics([]) },
      { id: "14-rust", title: "14. Rust", topics: findTopics(["00-web-assembly","01-what-is-rust","02-rust-basics","03-cargo"]) },
      { id: "15-developer-operations", title: "15. Developer Operations", topics: findTopics(["configuration-files","continuous-development","continuous-integration","deployment"]) },
      { id: "16-system-design", title: "16. System Design", topics: findTopics(["caching","redis","kafka"]) },
      { id: "17-job-interviewing", title: "17. Job Interviewing", topics: findTopics([]) },
      { id: "18-blockchain", title: "18. Blockchain", topics: findTopics([]) },
      { id: "19-ai", title: "19. AI", topics: findTopics([]) },
      { id: "20-quantum-computing", title: "20. Quantum Computing", topics: findTopics([]) },
      { id: "21-software-learning", title: "21. Software Learning", topics: findTopics(["adobe-suite","office-suite"]) },
    ],
  },
  {
    id: "02-human-language",
    title: "02. Human Language",
    courses: [
      { id: "english", title: "English", topics: findTopics([]) },
      { id: "latin", title: "Latin", topics: findTopics([]) },
      { id: "spanish", title: "Spanish", topics: findTopics([]) },
    ],
  },
  {
    id: "03-motor-vehicles",
    title: "03. Motor Vehicles",
    courses: [
      { id: "cars", title: "Cars", topics: findTopics([]) },
      { id: "motor-scooters", title: "Motor Scooters", topics: findTopics([]) },
      { id: "motorcycles", title: "Motorcycles", topics: findTopics([]) },
      { id: "trucks", title: "Trucks", topics: findTopics([]) },
    ],
  },
  {
    id: "04-economics",
    title: "04. Economics",
    courses: [
      { id: "principles", title: "Principles", topics: findTopics([]) },
    ],
  },
  {
    id: "05-electricity",
    title: "05. Electricity",
    courses: [
      { id: "forces", title: "Forces", topics: findTopics([]) },
    ],
  },
  {
    id: "06-sports",
    title: "06. Sports",
    courses: [
      { id: "football-americano", title: "Football Americano", topics: findTopics([]) },
    ],
  },
  {
    id: "07-music",
    title: "07. Music",
    courses: [
      { id: "blues", title: "Blues", topics: findTopics([]) },
    ],
  },
  {
    id: "08-math",
    title: "08. Math",
    courses: [
      { id: "algebra", title: "Algebra", topics: findTopics([]) },
    ],
  },
  {
    id: "09-art",
    title: "09. Art",
    courses: [
      { id: "forms", title: "Forms", topics: findTopics([]) },
    ],
  },
  {
    id: "10-misc",
    title: "10. Misc",
    courses: [
      { id: "cleaning", title: "Cleaning", topics: findTopics([]) },
      { id: "cooking", title: "Cooking", topics: findTopics([]) },
      { id: "health", title: "Health", topics: findTopics([]) },
      { id: "history", title: "History", topics: findTopics([]) },
      { id: "religion", title: "Religion", topics: findTopics([]) },
      { id: "sexuality", title: "Sexuality", topics: findTopics([]) },
    ],
  },
];
