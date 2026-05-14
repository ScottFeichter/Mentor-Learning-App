import { sections as nodeSections } from './sections';

export const subjects = [
  {
    id: "nodejs",
    title: "Computer Science",
    sections: nodeSections,
  },
  {
    id: "spanish",
    title: "Human Language",
    sections: [
      { id: "sp-basics", title: "Spanish Basics", folder: "databases", files: ["01. Database As A Computer.md"] },
      { id: "sp-grammar", title: "Grammar", folder: "databases", files: ["02. Database As A Concept.md"] },
      { id: "sp-vocab", title: "Vocabulary", folder: "databases", files: ["03. Persistent Storage.md"] },
    ],
  },
  {
    id: "vehicles",
    title: "Motor Vehicles",
    sections: [
      { id: "vehicles-maintenance", title: "Maintenance", folder: "databases", files: ["01. Database As A Computer.md"] },
      { id: "vehicles-repair", title: "Repair", folder: "databases", files: ["02. Database As A Concept.md"] },
      { id: "vehicles-mods", title: "Modifications", folder: "databases", files: ["03. Persistent Storage.md"] },
    ],
  },
  {
    id: "economics",
    title: "Economics",
    sections: [
      { id: "econ-micro", title: "Microeconomics", folder: "prisma", files: ["01. Prisma Overview.md"] },
      { id: "econ-macro", title: "Macroeconomics", folder: "prisma", files: ["02. PostgreSQL Ecosystem.md"] },
      { id: "econ-finance", title: "Personal Finance", folder: "prisma", files: ["03. PostgreSQL Terminology.md"] },
    ],
  },
  {
    id: "cooking",
    title: "Cooking",
    sections: [
      { id: "cooking-basics", title: "Basics", folder: "databases", files: ["01. Database As A Computer.md"] },
      { id: "cooking-techniques", title: "Techniques", folder: "databases", files: ["02. Database As A Concept.md"] },
      { id: "cooking-recipes", title: "Recipes", folder: "databases", files: ["03. Persistent Storage.md"] },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    sections: [
      { id: "sports-training", title: "Training", folder: "mongoose", files: ["01. MongoDB Ecosystem.md"] },
      { id: "sports-nutrition", title: "Nutrition", folder: "mongoose", files: ["02. MongoDB Terminology.md"] },
      { id: "sports-strategy", title: "Strategy", folder: "mongoose", files: ["03. BSON.md"] },
    ],
  },
  {
    id: "music",
    title: "Music",
    sections: [
      { id: "music-theory", title: "Music Theory", folder: "mongoose", files: ["01. MongoDB Ecosystem.md"] },
      { id: "music-guitar", title: "Guitar", folder: "mongoose", files: ["02. MongoDB Terminology.md"] },
      { id: "music-production", title: "Production", folder: "mongoose", files: ["03. BSON.md"] },
    ],
  },
  {
    id: "math",
    title: "Math",
    sections: [
      { id: "math-algebra", title: "Algebra", folder: "databases", files: ["01. Database As A Computer.md"] },
      { id: "math-calculus", title: "Calculus", folder: "databases", files: ["02. Database As A Concept.md"] },
      { id: "math-stats", title: "Statistics", folder: "databases", files: ["03. Persistent Storage.md"] },
    ],
  },
  {
    id: "misc",
    title: "Misc",
    sections: [
      { id: "misc-notes", title: "Notes", folder: "databases", files: ["06. Types Of Databases.md"] },
      { id: "misc-resources", title: "Resources", folder: "databases", files: ["07. Server - Database Connections.md"] },
    ],
  },
];
