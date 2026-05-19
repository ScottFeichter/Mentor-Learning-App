import { sections } from "./sections";

function findTopics(ids) {
  return sections.filter(s => ids.includes(s.id));
}

export const subjects = [
  {
    id: "01-computer-science",
    title: "01. Computer Science",
    courses: [
      { id: "00-intro-to-computer-science", title: "00. Intro To Computer Science", topics: findTopics(["00-what-is-a-signal","01-what-is-electricity","02-what-is-a-circuit","03-circuit-components","04-logic-gates","05-transistors","06-integrated-circuits","07-what-is-a-computer","16-how-the-web-works","17-more-about-networks"]) },
      { id: "00-b-information-technology", title: "00.b Information Technology", topics: findTopics([]) },
      { id: "00-c-networking", title: "00.c Networking", topics: findTopics([]) },
      { id: "00-d-operating-systems", title: "00.d Operating Systems", topics: findTopics(["00-unix","01-linux","02-mac-os","03-windows","04-ios","05-android","06-chromium","07-graphene"]) },
      { id: "00-e-programing-languages", title: "00.e Programing Languages", topics: findTopics(["strongly-typed-languages","weakly-typed-languages"]) },
      { id: "01-shell-grep-and-git", title: "01. Shell, Grep, and Git", topics: findTopics(["01-shell","02-grep","03-git"]) },
      { id: "04-html-and-css", title: "04. HTML and CSS", topics: findTopics(["00-html","01-css","02-browsers","03-environments-and-core-utilities","04-design-and-accessibility","05-web-builders"]) },
      { id: "16-javascript", title: "16. JavaScript", topics: findTopics(["images","markdown"]) },
      { id: "17-advanced-javascript", title: "17. Advanced JavaScript", topics: findTopics(["05-misc-js","06-oop-and-context","10-functions","11-callbacks","12-promises","13-async-await","14-recursion","15-closure","18-time-and-space-complexity","19-data-structures","20-algorithms","21-blind75"]) },
      { id: "18-react-redux-and-remix", title: "18. React, Redux, and Remix", topics: findTopics([]) },
      { id: "20-node", title: "20. Node", topics: findTopics(["01-node-tools","02-node-introduction","03-node-version-manager","04-node-installation","05-node-js-runtime","06-node-globals","07-node-errors","08-node-imports-and-exports","09-node-standard-library","10-node-path-module","11-node-fs-module","12-node-os-module","13-node-readline-module","14-node-event-loop","15-node-timers-module","16-node-event-module","17-node-stream-module","18-node-readline-module","19-node-decoder-module","20-node-http-module","21-node-https-module","22-node-package-manager","23-node-pnpm-package","24-node-yarn-package","25-node-express-part-i-server-basics","26-node-dotenv-package","27-node-nodemon-package","28-node-newman-package","29-node-js-docs-package","30-node-winston-package","31-node-swagger-package","32-node-express-part-ii-data-integrity","33-node-joi-package","34-node-validator-package","35-node-express-validator-package","36-node-express-part-iii-security","37-node-helmet-package","38-node-bcrypt-module","39-node-jsonwebtoken-package","40-node-cookie-parser-package","41-node-express-xss-sanitizer-package","42-node-express-rate-limit-package","43-node-cors-package","44-node-passport-package","45-node-express-part-iv-databases","46-node-express-part-iv-b-rdbms","47-node-mongoose-package","48-node-prisma-package","49-node-sequelize-package","50-node-express-part-v-rendering","51-node-ejs-package","52-node-react-package","53-node-express-part-vi-testing","54-node-jest-package","55-node-chai-package","56-node-mocha-package","57-node-nodemailer-package","58-deployment","59-architecture","60-node-lodash-package","61-node-pm2-package","62-node-eslint-package","63-node-bun-runtime","64-node-vite","65-node-socket-io-package","66-node-moment-package","67-node-babel-package","68-node-cloudinary-package","69-software-development-kits"]) },
      { id: "24-typescript", title: "24. TypeScript", topics: findTopics([]) },
      { id: "30-rust", title: "30. Rust", topics: findTopics(["00-web-assembly","00-what-is-rust","01-rust-basics","02-cargo"]) },
      { id: "35-developer-operations", title: "35. Developer Operations", topics: findTopics(["configuration-files","continuous-development","continuous-integration","deployment"]) },
      { id: "40-system-design", title: "40. System Design", topics: findTopics(["caching","redis","kafka"]) },
      { id: "50-job-interviewing", title: "50. Job Interviewing", topics: findTopics([]) },
      { id: "60-blockchain", title: "60. Blockchain", topics: findTopics([]) },
      { id: "61-ai", title: "61. AI", topics: findTopics([]) },
      { id: "62-quantum-computing", title: "62. Quantum Computing", topics: findTopics([]) },
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
    ],
  },
  {
    id: "03-b-electricity",
    title: "03.b Electricity",
    courses: [
    ],
  },
  {
    id: "04",
    title: "04.",
    courses: [
    ],
  },
  {
    id: "06-sports",
    title: "06. Sports",
    courses: [
    ],
  },
  {
    id: "07-music",
    title: "07. Music",
    courses: [
    ],
  },
  {
    id: "07-b-math",
    title: "07.b Math",
    courses: [
    ],
  },
  {
    id: "08-misc",
    title: "08. Misc",
    courses: [
    ],
  },
  {
    id: "09-art",
    title: "09. Art",
    courses: [
    ],
  },
];
