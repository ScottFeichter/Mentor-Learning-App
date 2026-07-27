

## ES6 Modules

* used to import/export JavaScript files into other JavaScript files
* export default ... \- statement to export one unnamed item per file
  * the item will be named when imported
  * can only have one default or unnamed export per file
* export ... \- keyword to export multiple named items per file
  * the items will be named when exported
  * can have as many named exports per file
* import ... from ... statement to import items from one file to another
  * define the items you want to import between import and from
  * define the file path of the file you want to import from after from
    * takes in a relative file path
    * must have the file extension name in the file path
    * ex: ./exported-items.js
  * ex: import printHelloWorld from './export.js' where printHelloWorld is the default exported item from the export.js file in the same folder as the file that you are importing into
* as keyword (in an import ... from ... statement) to alias and namespace all of a file's exported items

### Examples

Given HTML:

\<\!DOCTYPE html\>
\<html\>
 \<head\>
   \<title\>Importing JavaScript to HTML\</title\>
   \<script type\="module" src\="import.js"\>\</script\>
 \<head\>
 \<body\>
   ...
 \</body\>
\</html\>

How to import an exported unnamed item:

// export.js
export default function() {
  console.log('Hello World\!');
}

// import.js
import printHelloWorld from './export.js';

printHelloWorld(); // "Hello World\!" will be printed to the console

How to import multiple exported named items:

// export.js
export const hello \= "Hello World\!";
export const oneStep \= "One Step at a Time...";
export function printPhrase(phrase) {
  console.log(phrase);
}

// import.js
import { hello, printPhrase } from './export.js';

printPhrase(hello); // "Hello World\!" will be printed to the console
printPhrase(oneStep); // Error: oneStep is not defined

OR using an alias:

// import.js
import \* as allNamedItems from './export.js';

console.log(allNamedItems); // { hello, oneStep, printPhrase }

allNamedItems.printPhrase(allNamedItems.hello); // "Hello World\!" will be printed to the console
allNamedItems.printPhrase(allNamedItems.oneStep); // "One Step at a Time..." will be printed to the console

How to import multiple exported named items AND an unnamed item:

// export.js
export const hello \= "Hello World\!";
export const oneStep \= "One Step at a Time...";
export default (phrase) \=\> {
  console.log(phrase);
}
// default export above could have been written as:
// export default function nameDoesntMatterHere(phrase) {
//   console.log(phrase);
// }

// import.js
import printPhrase, { hello, oneStep } from './export.js';

printPhrase(hello); // "Hello World\!" will be printed to the console
printPhrase(oneStep); // "One Step at a Time..." will be printed to the console
