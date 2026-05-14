import { sections } from "./sections";

function findTopics(ids) {
  return sections.filter(s => ids.includes(s.id));
}

export const subjects = [
  {
    id: "computer-science",
    title: "Computer Science",
    courses: [
      { id: "00-a-my-cs-course", title: "a my-cs", topics: findTopics(["16-how-the-web-works"]) },
      { id: "00-b-my-it-course", title: "b my-it", topics: findTopics([]) },
      { id: "00-c-my-networks-course", title: "c my-networks", topics: findTopics([]) },
      { id: "00-d-my-shortcut-course", title: "d my-shortcut", topics: findTopics([]) },
      { id: "01-my-shell-course", title: "shell", topics: findTopics([]) },
      { id: "02-my-grep-course", title: "grep", topics: findTopics([]) },
      { id: "03-my-git-course", title: "git", topics: findTopics([]) },
      { id: "04-my-html-css-course", title: "html-css", topics: findTopics([]) },
      { id: "16-javascript-practice-routine", title: "JAVASCRIPT PRACTICE ROUTINE", topics: findTopics(["markdown"]) },
      { id: "17-my-jsadvanced-course", title: "jsAdvanced", topics: findTopics(["05-misc-js","10-functions","11-callbacks","12-promises","13-async-await","18-time-and-space-complexity","19-data-structures","20-algorithms","21-blind75"]) },
      { id: "18-my-react-course", title: "react", topics: findTopics([]) },
      { id: "20-node", title: "Node", topics: findTopics(["01-node-tools","13-node-event-loop","15-node-event-module","19-node-http-module","2-node-introduction","21-node-package-manager","22-node-express-part-i-server-basics","25-node-newman-package","28-node-swagger-package","29-node-express-part-ii-data-integrity","3-node-version-manager","30-node-joi-package","31-node-validator-package","32-node-express-validator-package","33-node-express-part-iii-security","34-node-helmet-package","35-node-bcrypt-module","36-node-jwt-module","37-node-cors-package","38-node-passport-package","39-node-express-part-iv-databases","4-node-installation","40-node-express-part-iv-b-rdbms","41-node-mongoose-package","42-node-prisma-package","42-b-node-sequelize-package","43-node-express-part-v-rendering","45-node-express-part-vi-testing","5-node-js-runtime","6-node-globals","7-node-errors","8-node-imports-and-exports","9-node-standard-library"]) },
      { id: "24-my-ts-course", title: "ts", topics: findTopics([]) },
      { id: "30-my-rust-course", title: "rust", topics: findTopics(["00-what-is-rust","01-rust-basics"]) },
      { id: "35-my-dev-ops-course", title: "dev-ops", topics: findTopics([]) },
      { id: "40-my-system-design-course", title: "system-design", topics: findTopics([]) },
      { id: "50-my-interview-course", title: "interview", topics: findTopics([]) },
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
