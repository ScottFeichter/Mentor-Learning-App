


COMMON JS IMPORTING AND EXPORTING

**module.exports**

*export as object:*

module.exports \= {
key: value,
key: value,
key: value,
};

*shorthand version:*

module.exports \= {
key,
key,
key,
};

*single export:*

module.exports \= key;

*export as array:*

module.exports \= \[ key, key, key \]

**require(\`./filePath\`)**

const variableName \= require(\`./filePath’);

*access the methods or properties like its an object after the require()*

const add \= calculator.add

*use destructuring instead to get everything*

const { add, subtract, operations } \= require(\`./filePath\`);

**index.js**

helps as a root file for a module folder

node will look for index.js and use it to import from

const { modulo } \= require(\`./filePath/Relative/Module-Folder/index.js\`);

**Aliasing**

Change the name of a function being imported

const { add: coolerAdd } \= require(‘./export’);

Change the name of a function on export (not common to do):

module.exports \= { coolerAdd \= add };

## **Wednesday** {#wednesday-2}

**Important JS keywords:**

module.exports
require(\`.`/filePath`\`)
