import { sections } from "./sections";

function findTopics(ids) {
  return sections.filter(s => ids.includes(s.id));
}

export const subjects = [
  {
    id: "computer-science",
    title: "Computer Science",
    courses: [
      { id: "00-a-my-cs-course", title: "00.a my-cs-course", topics: findTopics(["00-what-is-a-signal","01-what-is-electricity","02-what-is-a-circuit","03-circuit-components","04-logic-gates","05-transistors","06-integrated-circuits","07-what-is-a-computer","16-how-the-web-works","17-more-about-networks"]) },
      { id: "00-b-my-it-course", title: "00.b my-it-course", topics: findTopics([]) },
      { id: "00-c-my-networks-course", title: "00.c my-networks-course", topics: findTopics([]) },
      { id: "00-d-my-shortcut-course", title: "00.d my-shortcut-course", topics: findTopics([]) },
      { id: "00-e-programing-languages", title: "00.e programing languages", topics: findTopics([]) },
      { id: "01-my-shell-course", title: "01. my-shell-course", topics: findTopics([]) },
      { id: "02-my-grep-course", title: "02. my-grep-course", topics: findTopics([]) },
      { id: "03-my-git-course", title: "03. my-git-course", topics: findTopics([]) },
      { id: "04-my-html-css-course", title: "04. my-html-css-course", topics: findTopics([]) },
      { id: "16-javascript-practice-routine", title: "16. JAVASCRIPT PRACTICE ROUTINE", topics: findTopics(["images","markdown"]) },
      { id: "17-my-jsadvanced-course", title: "17. my-jsAdvanced-course", topics: findTopics(["05-misc-js","10-functions","11-callbacks","12-promises","13-async-await","14-recursion","15-closure","18-time-and-space-complexity","19-data-structures","20-algorithms","21-blind75"]) },
      { id: "18-my-react-course", title: "18. my-react-course", topics: findTopics([]) },
      { id: "20-node", title: "20. Node", topics: findTopics(["01-node-tools","02-node-introduction","03-node-version-manager","04-node-installation","05-node-js-runtime","06-node-globals","07-node-errors","08-node-imports-and-exports","09-node-standard-library","10-node-path-module","11-node-fs-module","12-node-os-module","13-node-event-loop","14-node-timers-module","15-node-event-module","16-node-stream-module","17-node-readline-module","18-node-decoder-module","19-node-http-module","20-node-https-module","21-node-package-manager","22-node-express-part-i-server-basics","23-node-dotenv-package","24-node-nodemon-package","25-node-newman-package","26-node-js-docs-package","27-node-winston-package","28-node-swagger-package","29-node-express-part-ii-data-integrity","30-node-joi-package","31-node-validator-package","32-node-express-validator-package","33-node-express-part-iii-security","34-node-helmet-package","35-node-bcrypt-module","36-node-jwt-module","37-node-cors-package","38-node-passport-package","39-node-express-part-iv-databases","40-node-express-part-iv-b-rdbms","41-node-mongoose-package","42-node-prisma-package","42-b-node-sequelize-package","43-node-express-part-v-rendering","44-node-ejs-package","44-b-node-react-package","45-node-express-part-vi-testing","46-node-jest-package","47-node-chai-package","48-node-mocha-package","50-deployment","51-architecture","60-node-lodash-package","61-node-pm2-package","63-node-eslint-package","64-node-pnpm","65-node-bun-runtime","66-node-vite","67-node-socket-io-package","68-node-moment-package","69-node-babel-package","70-node-cloudinary-package","71-software-development-kits"]) },
      { id: "24-my-ts-course", title: "24. my-ts-course", topics: findTopics([]) },
      { id: "30-my-rust-course", title: "30. my-rust-course", topics: findTopics(["00-what-is-rust","01-rust-basics","02-cargo"]) },
      { id: "35-my-dev-ops-course", title: "35. my-dev-ops-course", topics: findTopics([]) },
      { id: "40-my-system-design-course", title: "40. my-system-design-course", topics: findTopics([]) },
      { id: "50-my-interview-course", title: "50. my-interview-course", topics: findTopics([]) },
    ],
  },
  {
    id: "human-language",
    title: "Human Language",
    courses: [
      { id: "english", title: "English", topics: findTopics([]) },
      { id: "latin", title: "Latin", topics: findTopics([]) },
      { id: "spanish", title: "Spanish", topics: findTopics([]) },
    ],
  },
  {
    id: "motor-vehicles",
    title: "Motor Vehicles",
    courses: [
    ],
  },
];
