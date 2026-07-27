## .JS Notes

//===============================================================================----JAVASCRIPT----==========================================================================//

//---------------------------------------------------------------------------------WHAT IS A SCRIPT------------------------------------------------------------------------//

// In computer programming, a script is a program or sequence of instructions that is interpreted or carried out by another program rather than by the computer processor (as a compiled program is).

// In general, script languages are easier and faster to code in than the more structured and compiled languages such as C and C++.

// However, a script takes longer to run than a compiled program since each instruction is being handled by another program first (requiring additional instructions) rather than directly by the basic instruction processor.

// Separate meaning: A script is sometimes used to mean a list of operating system commands that are prestored in a file and performed sequentially by the operating system's command interpreter whenever the list name is entered as a single command.

// This other meaning is referred to as shell scripting since it uses a script in the shell.

// This is opposed to shell interacting which is when human interacts with shell by typing commands.

//--------------------------------------------------------------------------------WHAT IS JAVASCRIPT------------------------------------------------------------------------//

// JavaScript is based on the ECMAScript standard (often shortened to ES). The latest version of this standard is ES11.

// It was created by Brendan Eich in 1995, and it took him ten days.

// The processing of user input, the ability to send/receive data from servers and other interactive behavior are provided by JavaScript.

//----------------------------------------------------------------------------ECMA SCRIPT IN JAVASCRIPT------------------------------------------------------------------------//

// Ecma International: An organization that creates standards for technologies.

// While ECMA-262 is the name of the standard, it represents the scripting language specification ECMAScript.

// ECMAScript provides the rules, details, and guidelines that a scripting language must observe to be considered ECMAScript compliant.

// The full name of the orginazaiton is European Association for Standardizing Information and Communication Systems.

// Though before 1994, ECMA was known as “European Computer Manufacturers Association”, after 1994, when the organization became global, the “trademark” “Ecma” was kept for historical reasons.

// https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/

// https://www.ecma-international.org/about-ecma/history/

//------------------------------------------------------------------------------ENGINE IN JAVASCRIPT------------------------------------------------------------------------//

// JavaScript engines are commonly found in web browsers, including V8 in Chrome, SpiderMonkey in Firefox, and Chakra in Edge.

// Each engine is like a language module for its application, allowing it to support a certain subset of the JavaScript language.

// Conptia teaches that Edge is based on (V8 and) Chrome, perhaps Chakra is MS version of V8?

//------------------------------------------------------------------------------RUNTIME IN JAVASCRIPT------------------------------------------------------------------------//

// The environment in which the JavaScript code runs and is interpreted by a JavaScript engine.

// The runtime provides the host objects that JavaScript can operate on and work with.

// The JavaScript runtime is the “existing entity or system” mentioned in the scripting language definition.

// Code passes through the JavaScript engine, and once parsed and understood, an entity or system performs the interpreted actions.

// Applications make themselves available to JavaScript scripting by providing “host objects” at runtime.

// For the client side, the JavaScript runtime would be the web browser, where host objects like windows and HTML documents are made available for manipulation.

// Have you ever worked with the window or document host objects?

// The window and document objects are not actually a part of the core JavaScript language.

// They are Web APIs, objects provided by a browser acting as JavaScript’s host environment.

// For the server side, the JavaScript runtime is Node.js.

// Server-related host objects such as the file system, processes, and requests are provided in Node.js.

// An interesting point: different JavaScript runtimes can share the same JavaScript engine.

// V8, for example, is the JavaScript engine used in both Google Chrome and Node.js — two very different environments.

// I think this is often called Runtime Environment as opposed to just Runtime.

//-------------------------------------------------------------------------------THE V8 ENGINE FOR JAVASCRIPT------------------------------------------------------------------------//

// A program that converts Javascript code into a lower-level machine code, i.e. a code that can be understood by the processor.

// Was developed by a team from the Danish branch of Google and was used as the basis for the Chrome browser.

//-------------------------------------------------------------------------------NODE.JS FOR JAVASCRIPT------------------------------------------------------------------------//

// Node.js allows for JavaScript to be run outside the browser

// open source

// cross platform

// can be used for server side or to write desktop programs

// allows JS interaction with input/output devices outside the browser

// based on the V8 engine

// There are many good languages for backend development - why use JS?

// one language for both client side and server side increases efficiency in development

// Node.js is single-threaded and asynchronous which provides high speed

// you can use npm

//---------------------------------------------------------------------------------npm FOR JAVASCRIPT------------------------------------------------------------------------//

//----------------------------------------------------------------------------IDE WEBSTORM FOR JAVASCRIPT------------------------------------------------------------------------//

// INTEGRATED DEVELOPMENT ENVIRONMENT

// COMPONENTS OF AN IDE:

// TEXT EDITOR

// TRANSLATOR (COMPILER AND/OR INTERPRETER)

// BUILD AUTOMATION TOOLS

// DEBUGGER

// FILE NAVIGATOR

// CAN SUPPORT MULTIPLE LANGUAGES

// COMBINES VARIOUS UTILITIES INTO ONE PRODUCT TO HELP DEVELOPMENT BE MORE EFFECIENT

// MUST HAVE NODE.JS INSTALLED ON YOUR DEVICE

//------------------------------------------------------------------------------HEADERS IN JAVASCRIPT------------------------------------------------------------------------//

"use strict"; // prevents errors by disallowing undeclared variables and other bad syntax

//----------------------------------------------------------------------------STYLE GUIDES FOR JAVASCRIPT------------------------------------------------------------------------//

// https://airbnb.io/javascript/

// AVOID LINES LONGER THAN 100

// good

const thePaymentIsActive = isPaymentFromToday(payment.date)

&& isPaymentFromAvaliableAdresses(payment.id)

&& isPaymentToShow(payment.id)

// bad

const thePaymentIsActive = isPaymentFromToday(payment.date) && isPaymentFromAvaliableAdresses(payment.id) && isPaymentToShow(payment.id)

// USE TWO SPACES

// good

function myFunction() {

const name = "Alex";

}

// only one space is bad

function myFunction() {

const name = "Alex";

}

// four spaces are bad

function myFunction() {

const name = "Alex";

}

// PLACE ONE SPACE BEFORE THE FIRST BRACKET

// good

function show() {

console.log("My name is Helen");

}

// bad

function show(){

console.log("My name is Helen");

}

// PLACE ONE SPACE BEFORE THE OPENING PANETHESIS

// good

if (a === b) {

console.log(a)

}

// bad

if(a === b) {

console.log(a)

}

// USE ONLY ONE EMPTY LINE TO SEPARATE YOUR CODE

// good

if (a > b) {

console.log ("a is bigger than b");

}

// bad

if (a > b) {

console.log ("a is bigger than b");

}

// DON'T FORGET ; AT THE END OF STATEMENTS

// good

const a = 5;

const b = 7;

const c = 10;

// bad

const a = 5

const b = 7

const c = 10

// USE CAMEL CASE

// good

function myFunctionToCheckValues() {

//...

}

// bad

function MyFunctionToCheckValues() {

//...

}

// bad

function myfunctiontocheckvalues() {

//...

}

// ANOTHER POPULAR STYLE GUIDE IS FROM GOOGLE: https://google.github.io/styleguide/jsguide.html

// LINTERS: a tool that will help you check all patterns automatically

// You need to specify the necessary settings, and it will notify you if you wrote something wrong.

// The most popular linters are:

/*

JSLint — a linter without an extensive list of configuration settings.

JSHint — this style has more config parameters than JSLint.

ESLint — one of the most common linters. It can not only show you errors but also fix your scripts automatically.

*/

//---------------------------------------------------------------------------ACCESSING JAVASCRIPT FROM HTML-------------------------------------------------------------------------//

// when using JavaScript with HTML the <script> tag is necessary.

// INTERNAL IN HTML

// The JavaScript code can be placed inline of the HTML in between the <script></script> tags.

// Can be in either the head or body.

// EXTERNAL FILE

// The JavaScript could also be placed in a .js file and referenced from the HTML as an external JavaScript.

// Reference external .js file by using the src="filename.js" attribute inside the <script> tag.

// <script src="filename.js"></script>

// EXTERNAL WEBSITE

// <script src="https://www.w3schools.com/js/myScript.js"></script>

// NO SCRIPT

// the HTML <noscript> tag defines an alternate content to be displayed.

// users can disable scripts in their browser or have a broswer that doesn't support scripts.

// <noscript>Sorry, your browser does not support JavaScript!</noscript>

//---------------------------------------------------------------------------SCRIPT TAG PLACEMENT-------------------------------------------------------------------------//

// If script is at the top it can cause problems because DOM manipulation methods run before the nodes are created

// You can fix this by putting the script tag at the bottom of HTML

// Or you use the defer keyword to load the js after the HTML is parsed:

// <script src="js-file.js" defer></script>

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#applying_css_and_javascript_to_html

//-----------------------------------------------------------------------ABSOLUTE FILE PATHS JAVASCRIPT FROM HTML-------------------------------------------------------------------------//

// An absolute file path is the full URL to a file.

// This example uses a full URL to link to myScript.js:

// <script src="https://www.w3schools.com/js/myScript.js"></script>

//-----------------------------------------------------------------------RELATIVE FILE PATHS JAVASCRIPT FROM HTML-------------------------------------------------------------------------//

// A relative file path points to a file relative to the current page.

// file is located in same folder of current page:

// <script src="filename.js"></script>

// file is located in javascript folder in current folder:

// <script src="javascript/filename.js"></script>

// file is located in javascript folder at the root of current web:

// <script src="/javascript/filename.js"></script>

// file is located in javascript folder in the folder one level up from the current folder:

// <script src="../javascript/filename.js"></script>

//-------------------------------------------------------------------------------INPUT AND OUTPUT--------------------------------------------------------------------//

/* ways to display data with JavaScript include:

Writing into an HTML element, using innerHTML property.

Writing into the HTML output using document.write().

Writing into an alert box, using window.alert().

Writing into the browser console, using console.log().

JavaScript does NOT have any print objects or print methods. You cannot access output devices from JavaScript.

However, you can call the window.print() method in the browser to print the content of the current window.

*/

//----------------------------------------------------------------------------CONSOLE INPUT AND OUTPUT--------------------------------------------------------------------//

console.log("Hello JavaScript World"); // output to console

console.log("\nI am learning JavaScript"); // \n to make a line break

// NOTE: there is not an input method from console UNLESS you are using Node.js

// With node the readline() package can help

//-------------------------------------------------------------------------------MORE CONSOLE OUTPUT--------------------------------------------------------------------//

// In addition to console.log() there are several other console methods:

/*

METHOD            DESCRIPTION

assert()          Writes an error message to the console if a assertion is false

clear()           Clears the console

count()           Logs the number of times that this particular call to count() has been called

error()           Outputs an error message to the console

group()           Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called

groupCollapsed()  Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it

groupEnd()        Exits the current inline group in the console

info()            Outputs an informational message to the console

log()             Outputs a message to the console

table()           Displays tabular data as a table

time()            Starts a timer (can track how long an operation takes)

timeEnd()         Stops a timer that was previously started by console.time()

trace()           Outputs a stack trace to the console

warn()            Outputs a warning message to the console

*/

// try console.table(array) or console.table(object) for a beautiful surprise :)

//----------------------------------------------------------------------------BROWSER INPUT AND OUTPUT--------------------------------------------------------------------//

alert('This alert pops up in the browser');

prompt('This prompt pops up in the browser to ask for input.');

confirm("This confirm pops up in the browser to confrim something happened");

//--------------------------------------------------------------------------USING innerHTML IN JAVASCRIPT--------------------------------------------------------------------//

// To access an HTML element, JavaScript can use the document.getElementById(id) method.

// The id attribute defines the HTML element. The innerHTML property defines the HTML content:

/*

<!DOCTYPE html>

<html>

<head>

</head>

<body>

<h1>My First Web Page</h1>

<p>My First Paragraph</p>

<p id="demo"></p>

<script>

document.getElementById("demo").innerHTML = 5 + 6;

</script>

</body>

</html>

*/

//-----------------------------------------------------------------------USING document.write() IN JAVASCRIPT--------------------------------------------------------------------//

// NOTE:- Using document.write() after an HTML document is loaded, will delete all existing HTML!!!!

// The document.write() method should only be used for testing!!!

/*

<!DOCTYPE html>

<html>

<head>

</head>

<body>

<h1>My First Web Page</h1>

<p>My first paragraph.</p>

<script>document.write(5 + 6);

</script>

</body>

</html>

<!DOCTYPE html>

<html>

<head>

</head>

<body>

<h1>My First Web Page</h1>

<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it

</button>

</body>

</html>

*/

//------------------------------------------------------------------------USING window.alert() IN JAVASCRIPT--------------------------------------------------------------------//

// You can use an alert box to display data:

/*

<!DOCTYPE html>

<head>

</head>

<html>

<body>

<h1>My First Web Page</h1>

<p>My first paragraph.</p>

<script>window.alert(5 + 6);

</script>

</body>

</html>

*/

// You can skip the window keyword.

//--------------------------------------------------------------------------USING console.log() IN JAVASCRIPT--------------------------------------------------------------------//

// For debugging purposes, you can call the console.log() method in the browser to display data.

/*

<!DOCTYPE html>

<html>

<head>

</head>

<body>

<script>

console.log(5 + 6);

</script>

</body>

</html>

*/

//-----------------------------------------------------------------------------------DOM TREE OF NODES----------------------------------------------------------------------------//

// Document Object Model - a tree of nodes representation of a web page

// In which html elements and their attributes and values are nodes in this concept of hierarchy

// But in the concept of programming the elements are objects.

// Therefore, elments are objects are nodes

// Parent Element, Child Element, Sibling Elements and Branches etc

// The nodes are the HTML Elments and they are all defined as objects for manipulation

/*

NAVIGATING BETWEEN NODES

parentNode

childNodes[nodenumber]

firstChild

lastChild

nextSibling

previousSibling

*/

// <html> is a root node - it has no parents (except document?)

// NOTE: an element node is the tags - the text in between the tags is considered a text node

// https://www.w3schools.com/js/js_htmldom_navigation.asp scroll towards bottom for good example

//-----------------------------------------------------------------------------------NODE LIST----------------------------------------------------------------------------//

// querySelectorAll may return a Nodelist

// a Nodelist is not an array

// but you can use Array.from() to make it an array

//-----------------------------------------------------------------------------------DOM MANIPULATION BASICS----------------------------------------------------------------------------//

// HTML DOM properties  are values of HTML Elements you can set or change   ie: innerHTML

// HTML DOM methods     are actions you can perform on HTML Elements        ie: getElementById()

// Together you can use JS to change the Element  ie: document.getElementById('myH1').innerHTML = "Changing content of the Element that has the id of myH1";

// The HTML DOM Document Object is the owner of all other objects in the web page

//-----------------------------------------------------------------------------------DOM MANIPULATION FINDING HTML ELEMENTS----------------------------------------------------------------------------//

// document.getElementById('id');

// document.getElementsByTagName('name');

// document.getElementByClassName('name');

// Finding HTML Elements by CSS Selectors

//    - CSS-style selectors

//    - Relationship properties

//    - Query Selectors

//        element.querySelector(selector)     returns a reference to the first match of selector

//        element.querySelectorAll(selectors) returns a "nodelist" containing references to all matched selectors

//-----------------------------------------------------------------------------------DOM MANIPULATION CHANGING HTML ELEMENTS----------------------------------------------------------------------------//

// PROPERTIES

// element.innerHTML = changes of content

// element.$attribute = changes of value

// element.style.$property = changes of style

// METHOD

// element.setAttribute(attribute, value)

//-----------------------------------------------------------------------------------DOM MANIPULATION ADDING AND DELETING ELEMENTS----------------------------------------------------------------------------//

// document.createElement('element')

// document.removeChild('element')

// document.appendChild('element')

// document.replaceChild('new', 'old')

// document.write(text)

//-----------------------------------------------------------------------------------MORE DOM MANIPULATION----------------------------------------------------------------------------//

// DOM Methods: nodes (html elements) are objects with properties and methods

//    - Element Creation

//        document.createElement(tagName, [options]) creates in memory a new element of tag type tagName. [optional parameters]

//    - Append Elements

//        parentNode.appendChild(childNode) appends the childNode as the last child of parentNode

//        parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

//    - Remove Elements

//        parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child

//    - Altering Elements - Adding Inline Style

//        div.style.color = "blue";

//        div.setAttributes('style', "color: blue; background: white;");

//    - Editing Attributes

//        div.setAttributes('id', 'theDiv')

//        div.getAttribute('id')

//        div.removeAttribute('id')

//-----------------------------------------------------------------------------------DOM MANIPULATION EVENTS----------------------------------------------------------------------------//

// EVERYTHING THE BROWSER DOES IS AN EVENT

// HTML DOM allows JS to react to HTML events ie: onclick=someJS

/*

EXAMPLES OF EVENTS

When a user clicks the mouse

When a web page has loaded

When an image has been loaded

When the mouse moves over an element

When an input field is changed

When an HTML form is submitted

When a user strokes a key

*/

// Assign events to HTML Elements with event attributes

// Or use JS to assign events to HTML Elements

// ONLOAD and ONUNLOAD Events are triggered when the user enters or leaves the page

// ONCHANGE event is often used with validation of input fields

// ONMOUSEOVER, ONMOUSEOUT, ONMOUSEDOWN, ONMOUSEUP, and ONCLICK are Mouse Events

// ONFOCUS

//-----------------------------------------------------------------------------------DOM MANIPULATION EVENTLISTENER----------------------------------------------------------------------------//

// addEventListener(event, functionToCall, useCapture) attaches an event handler to the element without overwriting existing event handlers

// removeEventListener() removes the event listener

// EVENT PROPAGATION: defining the element order when an event occurs

// bubbling - the inner most element's event is handled first then the outer

// capturing - the outer most element's event is handled first then the inner

//-----------------------------------------------------------------------------------JS BROWSER BOM----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------------BREATHE----------------------------------------------------------------------------//

// BREATHE IN THE AIR

//------------------------------------------------------------------------------VARIABLES IN JAVASCRIPT-------------------------------------------------------------------------//

// Variables are containers for storing data (storing data values).

//-----------------------------------------------------------------------VARIABLES IDENTIFIERS IN JAVASCRIPT-------------------------------------------------------------------------//

// IDENTIFIERS ARE VARIABLE NAMES

/*

There are no specific requirements for characters that can be used in JavaScript to create names.

However, there are two restrictions that you can easily remember:

1. a name can only consist of letters, numbers, and symbols _, $;

2. it shouldn't start with a digit.

*/

// IN JS CASE MATTERS - firstname AND firstName ARE NOT THE SAME

// RESERVED KEYWORDS CANNOT BE USED AS NAMES:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

// NAMING CONVENTIONS

// The variable name must be:

// readable

// descriptive

// and it should explain to the reader what sort of values it stores.

// camelCase is preferred to snake_case

//-------------------------------------------------------------------MORE ON VARIABLES IDENTIFIERS IN JAVASCRIPT-------------------------------------------------------------------------//

/* IDENTIFIERS - THE NAMING OF VARIABLES

All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.

- Names must begin with a letter

- Names can also begin with $ and _ (but we will not use it in this tutorial)

- Names are case sensitive (y and Y are different variables)

- Reserved words (like JavaScript keywords) cannot be used as names

*/

var camelCaseIsGood = "Camel case is good for variable identifiers (names)";

//--------------------------------------------------------------------------VARIABLE DECLARATION IN JAVASCRIPT-------------------------------------------------------------------------//

/* THERE ARE 4 WAYS TO DECLARE A VARIABLE IN JAVASCRIPT

Using keyword var

Using keyword let

Using keyword const

Using no keyword

*/

var varVariable = "varVariable";

let letVaraible = "letVariable";

const constVariable = "constVariable";

undeclaredVariable = "undeclaredVariable"

/* VARIABLE DECLARATION

Always declare JavaScript variables with var,let, or const.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browser, you must use var.

const is a read-only variable

let and var can be overwritten or reassigned so to speak but they have differing scope

*/

// UNDEFINED

var declaredUnassignedVariable; // UNDEFINED is the default for when a variable is declared but not assigned a value

// ASSIGNEMENT

declaredUnassignedVariable = "now it is assigned (defined)" // ASSIGN the variable a value using = the assignment operator

// RE-DECLARING VARIABLES

// If you re-declare a JavaScript variable declared with var, it will not lose its value.

var declaredUnassignedVariable; // since we declared it above then assigned it this variable when re-declared here will have the value "now it is assigned (defined)"

/* YOU CANNOT RE-DECLARE let OR const VARIABLES!!!!!!!!!!!!!!

Redeclaring a JavaScript variable with var is allowed anywhere in a program

With let, redeclaring a variable in the same block is NOT allowed

Redeclaring a variable with let, in another block, IS allowed

*/

/* LET

The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.

*/

/* CONST

The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.

*/

//------------------------------------------------------------------------------VAR, LET, AND CONST IN JAVASCRIPT-------------------------------------------------------------------------//

//           REDECLARED   REASSIGNED   MUTATABLE   LOCAL SCOPE   ACCESSED BEFORE DECLARATION

// CONST         NO           NO          YES        BLOCK              NO

// LET           NO          YES          YES        BLOCK              NO

// VAR          YES          YES          YES       FUNCTION           YES*

// * Variables created with var are hoisted or moved to the top of the script before execution

//------------------------------------------------------------------------------CONST AND PRIMITIVE VS REFERENCE-------------------------------------------------------------------------//

// CONST WITH REFERENCE TYPES CAN MUTATE BECAUSE THE MEM ADDRESS DOES NOT CHANGE

//------------------------------------------------------------------------------SHALLOW COPY VS DEEP COPY - PRIMITIVE VS REFERENCE-------------------------------------------------------------------------//

// SHALLOW COPY

// THE COPY IS REFERENCING THE ENTITY IT IS COPYING

// IN OTHER WORDS TWO IDENTIFIERS POINT TO THE SAME MEMORY ADDRESS

// ANY ACTION ON ONE WILL BE AN ACTION ON THE OTHER BECAUSE THEY ARE THE SAME

// DEEP COPY

// THEY POINT TO DIFFERENT MEMORY

// MAY HAVE SAME VALUE

// ACTIONS ARE INDEPENDENT AND DO NOT AFFECT THE OTHER

//------------------------------------------------------------------------------EXECUTION CONTEXT IN JAVASCRIPT-------------------------------------------------------------------------//

// DESCRIBES THE INTERNAL WORKINGS OF JAVASCRIPT CODE

// REPRESENTS THE ENVIRONMENTS IN WHICH OUR CODES RUN

// BASICALLY 3 DIFFERENT TYPES OF EXECUTION CONTEXTS

// GLOBAL EXECUTION CONTEXT

// LOCAL EXECUTION CONTEXT

// EVAL EXECUTION CONTEXT

// AN EXECUTION CONTEXT IS SIMILAR TO A CONTAINER THAT STORES VARIABLES AND THE CODE GETS EVALUATED AND EXECUTED

// IT DECIDES WHICH CODE SECTION HAS ACCESS TO THE FUNCTION, OBJECTS, AND VARIABLES USED IN THE CODE

// EVERY EXECUTION CONTEXT IS CREATED IN TWO PHASES

// THE CREATION PHASE

// THE EXECUTION PHASE

// THE CREATION PHASE BEGINS WHEN AN EXECUTION CONTEXT IS CREATED BUT BEFORE THE CODE RUNS

// WE CAN THINK OF THE CREATION PHASE AS A FORM OF A TEMPLATE

// A TEMPLATE IS CREATED DURING CREATION PHASE

// DURING CREATION THE ENGINE SCANS THE CODE

// WHEN IT FINDS DECLARATIONS IT SAVES THE VARIABLES OR FUNCTIONS

// IT DOES NOT SAVE THE VALUES (EXCEPT FUNCITON ARGUMENTS)

// THE TEMPLATE IS FILLED WITH RELEVANT INFORMATION AT EXECUTION PHASE

// THE ENGINE WILL RUN OVER THE TEMPLATE AND EXECUTE EACH RELEVANT PART

// THIS PROCESS REPEATS ITSELF EVERY TIME A NEW EXECUTION CONTEXT IS CREATED

// GLOBAL EXECUTION CONTEXT

// THE DEFAULT EXECUTION CONTEXT CREATED WHEN THE FILE LOADS IN THE BROSWER

// ANY JS CODE THAT DOES NOT BELONG TO ANY FUNCTION WILL BE PRESENT IN THE GEC

// SINCE THE JS ENGINE IS SINGLE THREADED THERE CANNOT BE MORE THAN ONE GEC

// WHEN THE JS ENGINE STARTS TO READ THE FILE IT CREATES AN EXECUTION CONTEXT EVEN IF THERE IS NO CODE

// GEC IS ALSO CALLED THE BASE EXECUTION CONTEXT

// IT CREATES 2 SPECIAL THINGS

// WINDOW - A GLOBAL OBJECT FOR THE BROWSER (DIFFERENT IN NODE)

// THIS - A GLOBAL VARIABLE WHOSE VALUE POINTS TO AN OBJECT TO WHICH CURRENT CODE IS BEING EXECUTED

this === window // true! (?)

// THIS AND WINDOW ARE AUTOMATICALLY CREATED AND THEY ARE EQUAL

var name = 'Hyperskill';

function sayName() {

console.log(this.name);

}

// see the Execution Context PDF in your language learn files for diagrams of how this code executes

// also use this awesome site:  https://ui.dev/javascript-visualizer

// LOCAL EXECUTION CONTEXT AKA FUNCION EXECUTION CONTEXT

// EVERY TIME A FUNCION IS EXECUTED A NEW EXECUTION CONTEXT IS CREATED FOR THAT FUNCTION

// THERE CAN BE MORE THAN ONE FEC

// AN FEC CAN ACCESS THE ENTIRE CODE OF THE GEC

// THE GEC CANNOT ACCESS ALL THE CODE OF THE FEC

// EVAL EXECUTION CONTEXT

// ANY JS CODE THAT GETS EXECUTED WITHIN THE EVAL FUNCTION CREATES AND HOLDS ITS OWN EXECUTION CONTEXT

// THE EVAL FUNCTION IS NOT USED BY THE JS DEVELOPERS BUT IS PART OF THE EXECUTION CONTEXT

// EXECUTION CONTEXT STACK

// GEC AT THE BOTTOM

// NEXT ARE EXECUTIONS FOR EACH FUNCTION (FECs)

// A FUNCTION CALLED INSIDE THE FIRST FUNCTION WOULD THEN GO ON TOP

// THE STACK IS BUILT THEN THE TOP IS EXECUTED, POPPED OUT, AND ETC.

// I GUESS THE STACK IS FILO

// These topics will help better understand Closure, Hoisting, Asynchronous functions, and many more.

//------------------------------------------------------------------------------THE GLOBAL OBJECT IN JAVASCRIPT----------------------------------------------------------------------------//

// https://developer.mozilla.org/en-US/docs/Glossary/Global_object

//--------------------------------------------------------------------------------VARIABLE SCOPE IN JAVASCRIPT-------------------------------------------------------------------------//

// GLOBAL SCOPE - a variable declared outside a function, loop, or other block but is accessible anywhere

// LOCAL SCOPE - a variable declared inside a function or block of code

// FUNCTION SCOPE - local scope variable declared inside and available inside the whole function....

// BLOCK SCOPE - local scope variable declared inside and available just in the block of code, between { and }....

/* BLOCK SCOPE

Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

*/

{

let x = 2;

}

// x can NOT be used here

/* VAR HOISTING

Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared

If you want to learn more about hoisting, study the chapter JavaScript Hoisting.

*/

/* LET HOISTING

Variables defined with let are also hoisted to the top of the block, but not initialized.

Meaning: Using a let variable before it is declared will result in a ReferenceError:

*/

//-----------------------------------------------------------------------------SCOPE DEMO UNFINISHED IN JAVASCRIPT-------------------------------------------------------------------------//

let a = "a";

const b = "b";

var c = "c";

function reveal() {

console.log(a, b, c);

let d = "d";

const e = "e";

var f = "f";

function revealMore() {

console.log(a, b, c, d, e, f);

let g = "g";

const h = "h";

var i = "i";

}

revealMore();

// console.log(g, h, i); // ReferenceError: not defined (for all)

}

reveal();

// console.log(d, e, f); // ReferenceError: not defined (for all)

//------------------------------------------------------------------------------MORE VARIABLE SCOPE IN JAVASCRIPT-------------------------------------------------------------------------//

// LOCAL SCOPE

// When we create a variable inside a function or block of code,

// we actually create a local variable that is available only within a certain part of code but not in the entire program.

// Let's look at the example:

function someFunc() {

let someVar = "local";

console.log("Some variable in local scope - " + someVar);

}

someFunc();

console.log("Some variable in global scope - " + someVar); // Uncaught ReferenceError: someVar is not defined

// When we call a function, we can access the variable and display its value on the screen.

// However, a variable declared inside the function is not available outside of it.

// Therefore, the variable someVar is local, in other words, it belongs to the local scope.

// Local variables in their turn can have function and block scope.

// A variable declared with var is available inside the whole function and has a function scope.

// The variable also may be available just in the block of code, between { and };

// this variable is declared with let and has a block scope.

// We can have several blocks of code in one function:

function someFunc2() {

let funcVar = "function scope variable";

console.log("Some variable in function local scope - " + funcVar);

if (funcVar == "function scope variable") {

let block1Var = "some variable in block local scope";

console.log(funcVar + 'is available in if block as ' + block1Var);

} else {

let block2Var = "some variable in another block of code";

console.log("In else block is available " + block2Var + " and " + funcVar);

}

}

someFunc2();

// As you can see, we can access a variable declared in external function from the internal if and else blocks of code.

// GLOBAL SCOPT

// A global variable is accessible from anywhere in the program, not just a particular block of code. Here is an example:

let someVar = "global";

function someFunc() {

console.log("Some variable in local scope - " + someVar);

}

someFunc();

console.log("Some variable in global scope - " + someVar);

// We will get the following output:

/*

Some variable in local scope - global

Some variable in global scope - global

*/

// The variable someVar here is global, because it can be called from anywhere in the program,

// not just in the function where it was declared.

// If a variable is declared without a special keyword it's considered a global variable by default,

// no matter where in the program it was declared. For example, try running this in the console:

function someFunc() {

someVar = "global";

console.log("Some variable in local scope - " + someVar);

}

someFunc();

console.log("Some variable in global scope - " + someVar);

// You'll see that the output will look like this:

/*

Some variable in local scope - global

Some variable in global scope - global

*/

// PRIORITY OF VARIABLES

// local and global variables differ in their priority: it is higher for local variables.

// Let's consider the following example:

someVar = "global";

function someFunc() {

let someVar = "local";

console.log("Some variable in local scope - " + someVar);

}

someFunc();

console.log("Some variable in global scope - " + someVar);

// As a result, we'll get the following:

/*

Some variable in local scope - local

Some variable in global scope - global

*/

// Even though the variable someVar in a global scope was declared earlier,

// when we access the variable someVar inside the function,

// the local variable is received because of the priority of local variables.

// of local variables.

// let Vs const Vs var

// As you know, besides let, there are two more identifiers for declaring variables: const and var.

// Unlike with the let identifier, variables declared with const cannot be overridden. See the example below:

const someVar = "constant variable";

someVar = "mutable variable";

// We will get TypeError.

// In earlier versions of JavaScript, it was customary to use var to declare a variable.

// However, today this method is considered obsolete. As we said above,

// the variable declared with var is available inside the whole function and has a so-called function scope.

// For example:

function someFunc() {

var i;

for (i = 0; i <= 5; i++) {

var someVar = i * i;

}

console.log(i);

console.log(someVar);

}

someFunc();

// Here we will get the last values of i and someVar:

function someFunc() {

let i;

for (i = 0; i <= 5; i++) {

let someVar = i * i;

}

console.log(i);

console.log(someVar);

}

someFunc();

// However, here we will get ReferenceError as a result, if we try to access someVar,

// because the let identifier has a block scope,

// so the variables declared with it are accessible inside the block of code between the {} brackets.

//--------------------------------------------------------------------------------KEYWORDS/RESERVED WORDS IN JAVASCRIPT-------------------------------------------------------------------------//

/*

KEYWORDS            DESCRIPTION

abstract

arguments

await*

boolean

break

byte

case

catch

char

class*

const

continue

debugger

default

delete

do

double

else

enum*

eval

export*

extends*

false

final

finally

float

for

function

goto

if

implements

import*

in

instanceof

int

interface

let*

long

native

new

null

package

private

protected

public

return

short

static

super*

switch

synchronized

this

throw

throws

transient

true

try

typeof

var

void

volatile

while

with

yield

*/

//----------------------------------------------------------------------------UNARY, BINARY, TERNARY OPERATORS IN JAVASCRIPT-------------------------------------------------------------------------//

// UNARY - WORKS ON ONE OPERAND

// BINARY - WORKS ON TWO OPERANDS

// TERNARY - WORKS ON THREE OPERANDS

//--------------------------------------------------------------------------------ASSIGNMENT OPERATORS IN JAVASCRIPT-------------------------------------------------------------------------//

/*

OPERATOR    EXAMPLE     SAME AS

=                              x = y                     x = y

+=                            x += y                   x = x + y

-=                            x -= y                   x = x - y

*=                            x *= y                   x = x * y

/=                            x /= y                   x = x / y

%=                            x %= y                   x = x % y

<<=                            x <<= y                   x = x << y

>>=                            x >>= y                   x = x >> y

>>>=                    x >>>= y           x = x >>> y

&=                            x &= y                   x = x & y

^=                            x ^= y                   x = x ^ y

|=                            x |= y                   x = x | y

**=                            x **= y                   x = x ** y

*/

//--------------------------------------------------------------------------------ARITHMETIC OPERATORS IN JAVASCRIPT-------------------------------------------------------------------------//

/*

OPERATOR        DESCRIPTION

+                             Addition

-                            Subtraction

*                            Multiplication

**                    Exponentiation (ES2016)

/                            Division

%                            Modulus (Division Remainder)

++                    Increment

--                    Decrement

*/

//----------------------------------------------------------------------------COMPARISON OPERATORS IN JAVASCRIPT------------------------------------------------------------------------------//

// RITHM SCHOOL DOES NOT LIKE == AND INSISTS YOU USE === (SAME FOR INEQUALITY USE !== INSTEAD OF !=)

/*

OPERATOR    DESCRIPTION

==          equal to (with type coercion)

===         equal value and equal type (without type coercion)

!=          not equal

!==         not equal value or not equal type

>           greater than

<           less than

>=          greater than or equal to

<=          less than or equal to

?           ternary if operator

*/

//-------------------------------------------------------------------------------LOGICAL OPERATORS IN JAVASCRIPT------------------------------------------------------------------------------//

/*

OPERATOR    DESCRIPTION

&&          logical and

||          logical or

!           logical not

*/

// AND and OR test truthy or falsey, not just true or false

// They evaluate the "determining subpart"

// The logical and && evaluates left to right and returns the first falsey value and then it stops (boolean trap)

//                If both values are true it will return the last value because it must return something

// The logical or || evaluates left to right and returns the first truthy value and then it stops (boolean trap)

//                If both values are false it will return the last value because it must return something

//--------------------------------------------------------------------------------BITWISE OPERATORS IN JAVASCRIPT----------------------------------------------------------------------------//

// BITWISE MAKES THE OPERATOR WORK ON EACH OF THE BINARY DIGITS

// THIS IS HELPFUL WHEN PROGRAMMING ELECTRONICS

// NOT AS USEFUL WHEN COMPUTER PROGRAMMING

// EXCEPT THAT THESE HAVE A SHORT CIRCUIT FOR FINISHING COMPARISON IMMEDIATELY IF CONDITION MET????

// | BITWISE OR OPERATOR

// & BITWISE AND OPERATOR

// ~ BITWISE COMPLIMENT OPERATOR

// ^ BITWISE XOR OPERATOR

// Bitwise operators and Binary operators do not mean the same thing but the words are sometimes interchanged

// https://www.techopedia.com/definition/23953/binary-operator

// https://www.techopedia.com/definition/3467/bitwise-operator

// https://www.w3schools.com/js/js_bitwise.asp

//-------------------------------------------------------------------------------OPERATOR PRECEDENCE IN JAVASCRIPT - ALL----------------------------------------------------------------------------//

// Programming languages tend to follow the BODMAS or PEMDAS order from Mathematics

// If considering unary operators it is PUEMDAS

/*

VALUE   OPERATOR    DESCRIPTION                 EXAMPLE

21      ( )         Expression grouping         (3 + 4)

20      .           Member                      person.name

20      []          Member                      person["name"]

20      ()          Function call               myFunction()

20      new         Create                      new Date()

18      ++          Postfix Increment           i++

18      --          Postfix Decrement           i--

17      ++          Prefix Increment            ++i

17      --          Prefix Decrement            --i

17      !           Logical not                 !(x==y)

17      typeof      Type                        typeof x

16      **          Exponentiation (ES2016)     10 ** 2

15      *           Multiplication              10 * 5

15      /           Division                    10 / 5

15      %           Division Remainder          10 % 5

14      +           Addition                    10 + 5

14      -           Subtraction                 10 - 5

13      <<          Shift left                  x << 2

13      >>          Shift right                 x >> 2

13      >>>         Shift right (unsigned)      x >>> 2

12      <           Less than                   x < y

12      <=          Less than or equal          x <= y

12      >           Greater than                x > y

12      >=          Greater than or equal       x >= y

12      in          Property in Object          "PI" in Math

12      instanceof  Instance of Object          instanceof Array

11      ==          Equal                       x == y

11      ===         Strict equal                x === y

11      !=          Unequal                     x != y

11      !==         Strict unequal              x !== y

10      &           Bitwise AND                 x & y

9       ^           Bitwise XOR                 x ^ y

8       |           Bitwise OR                  x | y

7       &&          Logical AND                 x && y

6       ||          Logical OR                  x || y

5       ??          Nullish Coalescing          x ?? y

4       ? :         Condition                   ? "Yes" : "No"

3       +=          Assignment                  x += y

3       /=          Assignment                  x /= y

3       -=          Assignment                  x -= y

3       *=          Assignment                  x *= y

3       %=          Assignment                  x %= y

3       <<=         Assignment                  x <<= y

3       >>=         Assignment                  x >>= y

3       >>>=        Assignment                  x >>>= y

3       &=          Assignment                  x &= y

3       ^=          Assignment                  x ^= y

3       |=          Assignment                  x |= y

2       yield       Pause Function              yield x

1       ,           Comma                       5 , 6

*/

//-------------------------------------------------------------------------------OPERATOR PRECEDENCE IN JAVASCRIPT - LOGICAL----------------------------------------------------------------------------//

// !   (aka bang, aka not operator)

// &&

// ||

// ??

//-------------------------------------------------------------------------ASSOCIATIVITY IF OPERATORS OF EQUAL PRECEDENCE IN JAVASCRIPT----------------------------------------------------------------------------//

// Assignment Operators: right associativity

// This gets hairy... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

//-----------------------------------------------------------------------------------COMMENTS IN JAVASCRIPT----------------------------------------------------------------------------//

// SINGLE LINE COMMENT

/*

MULTI

LINE

COMMENT

*/

// focus on "WHY" instead of "WHAT"

// Sometimes you may find a slightly modified syntax of multi-line notes:

// the comment opens with the /** tag, and each line starts with an *:

/**

* The first program

* Author: Bob

*/

console.log("Hi, I'm Bob");

// Such comments often contain information about the programming file including its name, version, and the author of the script.

/**

* THIS IS A DOC STRING COMMENT

*

* CAN BE AUTO GENERATED

*

* DESCRIBES THE FUNCTION:

* WHAT DOES IT DO?

* WHAT DOES IT TAKE?

* WHAT DOES IT RETURN?

*  */

//-----------------------------------------------------------------------ESCAPE CHARACTERS AND SEQUENCES IN JAVASCRIPT----------------------------------------------------------------------------//

/*

\ backslash escape character turns special characters into string characters:

CODE                                                                 RESULT                                                                 DESCRIPTION

\'                  '                                                                                        Single Quote

\"                                                                         "                                                                                 Double Quote

\\                  \                     Backslash

There are some special characters to use with \

\b                 Backspace

\f                                                      Form Feed

\n                 New Line

\r                 Carriage Return

\t                 Horizontal Tabulator

\v                 Vertical Tabulator

*/

//---------------------------------------------------------------------------------SPREAD/REST OPERATOR IN JAVASCRIPT----------------------------------------------------------------------------//

// SPREAD OPERATOR are different REST OPERATOR even though they are both ...

// REST OPERATOR is for var args and it makes the arguments passed an array

function sumMany(notVar, ...varArgs) {

let sum = 0;

for (let n of varArgs) {

sum += n;

}

return sum;

}

// SPREAD OPERATOR is used in front of a an argument to put each item of array as a single arg

function takesFour(one, two, three, four) {

console.log(one);

console.log(two);

console.log(three);

console.log(four);

}

const names = ['Spencer', 'Brit', 'Kate', 'Joel'];

takesFour(...names);

// Spencer

// Brit

// Kate

// Joel

/*

...

Spread operator can be helpful to make a deep copy EXCEPT IF THERE IS NESTED MATERIAL IT IS NOT DEEP...

JSON.stringify vs JSON.parse

these do the opposite

stringify puts the halloween costume on

parse takes it off

This is helpful to make a deep copy

const clonnedMovies = JSON.parse(JSON.stringify(movies))

*/

//-------------------------------------------------------------------------------PRIMITIVE DATA TYPES IN JAVASCRIPT-------------------------------------------------------------------------//

let greeting = "hello"; // string

let favoriteNum = 33; // number (JavaScript only has one type for numbers...sort of)

let isTrue = true; // boolean

let foo; // undefined is the default for a declared variable that is not yet assigned

let setToUndefined = undefined; // can also specify the value as undefined

let empty = null; // null signifies the intential absence of data and is different from undefined

// typeof - use this to identify the data type

typeof ""; // string

typeof 5; // number

typeof false; // boolean

typeof Symbol(); // symbol

typeof undefined; // undefined

typeof null; // object (?) - an object is not a primitive

//-----------------------------------------------------------------------PRIMITIVE vs REFERENCE TYPES IN JAVASCRIPT-------------------------------------------------------------------------//

/*

Primitives vs Reference types

Primitive aka scalar or simple

Primitive have one value

Primitive fit into memory easily

Primitive are immutable - the value does not change (the variable does)

JS: null, undefined, Boolean, Number, String, Symbol

Reference aka complex or container

Reference can contain multiple values

Reference types are mutible

Reference points to a memory address (changeable)

JS: Object, Array, Function

*/

// DO NOT USE === ON REFERENCE TYPES

// With primitives === compares value and type

// With references === compares memory addresses

//-------------------------------------------------------------------------NULL VS UNDEFINED VS NaN IN JAVASCRIPT----------------------------------------------------------------------------//

// NULL: when a variable was explicitly assigned an empty or non-existent value. It is a keyword.

// UNDEFINED: when a variable was declared, but its value wasn't set. It is a predefined global constant.

// NaN: when JS thinks it should be a number but cannot reach a proper value. It is a property of the global object and a number type.

//--------------------------------------------------------------------------------THIS IN JAVASCRIPT----------------------------------------------------------------------------//

// this is a reserved keyword that refers to the object it belongs

console.log(this); // {}

console.log(typeof(this)); // object

// A function's this keyword behaves a little differently in JavaScript compared to other languages.

// It also has some differences between strict mode and non-strict mode.

// it's value is determined at function execution!!!!!!!!!!

// it depends on the way you call the function

// hey Scott - look up the new keyword

// the new keyword creates an object

// this is helpful in oop and also in methods of objects

let instructor = {

firstName: "Elie",

sayHi: function() {

return `Hi ${this.firstName}`

}

}

instructor.sayHi(); // implicit binding

// every function in Javascript gets its own this EXCEPT arrow functions

// REPEAT FOR EMPHASIS: ARROW FUNCTIONS DO NOT HAVE THEIR OWN 'THIS' CONTEXT - IF YOU FUNCTION USES THE KEYWORD "THIS" IT CANNOT BE AN ARROW FUNCTION

// Follow one of four rules:

// Global - in the global scope it refers to the global

// Implicit Binding - go to the left of the dot

// Explicit Binding - use call(), apply(), or bind()

// new

// browser the global object is window in node it is global

// window is an object in JS

// global is an object in Node

// in JS everything is called on something....so JS doesn't really have functions it has methods

// window.alert is the same as alert....all functions made in global scope are on the global object

// review global object in JS

// VERY TRICKY - REVIEW THESE SOURCES:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// https://www.w3schools.com/js/js_this.asp

// look up "execution context"

//--------------------------------------------------------------------------------CLOSURE IN JAVASCRIPT----------------------------------------------------------------------------//

// THE ABILITY FOR INNER FUNCITON TO REMEMBER VARIABLES DEFINED IN OUT FUNTIONS ....

//-------------------------------------------------------------------------------BOOLEANS IN JAVASCRIPT----------------------------------------------------------------------------//

// the standard true and false booleans are used in JavaScript.

// However, in JavaScript you can ask the boolean of any value using Boolean().

// Certain values besides true will return true and are often referred to as truthy.

// Certain values besides false will return false and are often referred to as falsey.

//-------------------------------------------------------------------------TRUTHY FALSEY VALUES IN JAVASCRIPT----------------------------------------------------------------------------//

// EVERYTHING WITHOUT A "VALUE" IS FALSE OR FALSEY WHICH IS COMPRISED OF 6 NON-VALUE "VALUES"

let x8 = false; // boolean false

Boolean(x8); // false

let x9 = 0; // zero or minus zero

Boolean(x9); // falsey

let x10 = ""; // empty string

Boolean(x10); // falsey

let x11; // undefined

Boolean(x11); // falsey

let x12 = null; // null (empty)

Boolean(x12); // falsey

let x13 = 10 / "Hallo"; // NaN

Boolean(x13); // falsey

// EVERYTHING WITH A "VALUE" IS TRUE OR TRUTHY

// EVERYTHING THAT IS NOT FALSE OR FALSY IS TRUE OR TRUTHY

let x = true; // boolean true

Boolean(x); // true

let x2 = 100; // number

Boolean(x2); // truthy

let x3 = 3.14; // number

Boolean(x3); // truthy

let x4 =-15; // number

Boolean(x4); // truthy

let x5 = "Hello"; // string

Boolean(x5); // truthy

let x6 = "false"; // string

Boolean(x6); // truthy

let x7 = 7 + 1 + 3.14; // number

Boolean(x7); // truthy

// falsy values == N0 FUN

// NaN

// 0 (-0) or ""

// false

// undefined

// null

// COERCE A VALUE INTO ITS BOOLEAN FORM WITH !!

!!false // false

!!-1    // true

!!-0    // false

!![]    // true

!!{}    // true

!!""    // false

!!null  // false

// BE CAREFULL BECAUSE THE == WILL COERCE THINGS

// [] == false // true because [] is coerced to empty string

// BOOLEANS AS OBJECTS (don't do it)

// Normally JavaScript booleans are primitive values created from literals:

let literalVar = false;

// But booleans can also be defined as objects with the keyword new:

let objectVar = new Boolean(false);

/*

Do not create Boolean objects.

The new keyword complicates the code and slows down execution speed.

Boolean objects can produce unexpected results

*/

//-----------------------------------------------------------------COMPARING NULL, UNDEFINED, 0, AND NaN IN JAVASCRIPT----------------------------------------------------------------------------//

// null behaves strangely in terms of mathematics when compared to 0:

console.log(null > 0);  // false

console.log(null < 0); // false

console.log(null >= 0); // true --> NOTE THIS IS TRUE - WHY?

console.log(null <= 0); // true --> NOTE THIS IS TRUE - WHY?

console.log(null == 0); // false

console.log(null === 0); // false

console.log(null == null); // true

console.log(null === null); // true

console.log(null == undefined); // true --> NOTE THIS IS TRUE - WHY?

console.log(null === undefined); // false

console.log(null == NaN); // false

console.log(null === NaN); // false

// comparison of undefined with 0 is always false.

// JS has another strange rule: undefined can only equal undefined or == null and nothing more:

console.log(undefined > 0);  // false

console.log(undefined < 0);  // false

console.log(undefined <= 0); // false

console.log(undefined >= 0); // false

console.log(undefined == 0); // false

console.log(undefined === 0); // false

console.log(undefined == undefined); // true

console.log(undefined === undefined); // true

console.log(undefined == null);  // true --> NOTE THIS IS TRUE - WHY?

console.log(undefined === null); // false

console.log(undefined == NaN); // false

console.log(undefined === NaN); // false

// NaN seems to be false in every scenario

console.log(NaN > 0);  // false

console.log(NaN < 0);  // false

console.log(NaN <= 0); // false

console.log(NaN >= 0); // false

console.log(NaN == 0);  // false

console.log(NaN === 0);  // false

console.log(NaN == NaN); // false

console.log(NaN === NaN); // false

console.log(NaN == undefined); // false

console.log(NaN === undefined); // false

console.log(NaN == null); // false

console.log(NaN === null); // false

// be careful with all comparison operations with null or undefined, so as to avoid errors in your scripts.

// comparison of 0:

console.log(0 > 0); // false

console.log(0 < 0); // false

console.log(0 >= 0); // true

console.log(0 <= 0); // true

console.log(0 == 0); // true

console.log(0 === 0); // true

console.log(0 == -0); // true

console.log(0 === -0); // true

console.log(0 == null); // false

console.log(0 === null); // false

console.log(0 == NaN); // false

console.log(0 === NaN); // false

console.log(0 == undefined); // false

console.log(0 === undefined); // false

//----------------------------------------------------------------------------------NUMBERS IN JAVASCRIPT----------------------------------------------------------------------------//

// NO DISTINCITON BETWEEN INT AND FLOAT

// JS HAS Ifinity and -Infinity

// NaN means Not a Number

// But typeof will tell us that NaN is a Number

typeof NaN // Number

// essentialy NaN is when JS thinks it should be a number but cannot reach a proper value

// nothing is ever equal to NaN included NaN

NaN === NaN // false

// to check if something is not NaN (in otherwords it is a number)

isNaN(12); // false (because 12 is a number)

inNaN(NaN); // true (because NaN is not a number...even though NaN is a number type...?)

inNaN("NaN"); // true (because it is a string)

//---------------------------------------------------------------------EXPONENTS AND SCIENTIFIC NOTATION IN JAVASCRIPT----------------------------------------------------------------------------//

//--------------------------------------------------------------------------BIGINT, MIN, MAX IN JAVASCRIPT----------------------------------------------------------------------------//

//--------------------------------------------------------------------------NaN, Infinity, -Infinity IN JAVASCRIPT----------------------------------------------------------------------------//

// These are all of the type number.

// They are the only non numbers in the number type???

// They represent numbers that are not computational.....???

// https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43

//--------------------------------------------------------------------------RANDOM NUMBER GENERATION IN JAVASCRIPT----------------------------------------------------------------------------//

// There are helpful methods as part of the built-in Math object used for various mathematical operations.

// Math.random() returns a random floating-point number from 0 to 1 (the number is greater than or equal to 0, but less than 1).

console.log(Math.random());

// To generate a larger number multiply the generated values by 10 or any other number which represents the maximum value:

console.log(Math.random() * 10);

// Use Math.floor() to round a number down to the nearest integer.

function getRandomInteger(value) {

return Math.floor(Math.random() * value);

}

console.log(getRandomInteger(10));

// To get numbers of any range we pass two arguments representing the minimum and maximum possible values to our function.

function getRandomInteger(min, max) {

return Math.floor(Math.random() * (max - min)) + min;

}

console.log(getRandomInteger(10, 20));

// To access an array element, we use its index.

// This can be represented as a random integer that is less than the array's length.

const songs = ["Stairway to Heaven", "Imagine", "Yesterday", "Light My Fire"];

function getRandomElement(array) {

let index = Math.floor(Math.random() * array.length);

return array[index];

}

console.log(getRandomElement(songs)); // Imagine

console.log(getRandomElement(songs)); // Stairway to Heaven

//---------------------------------------------------------------------------------SYMBOLS IN JAVASCRIPT----------------------------------------------------------------------------//

//---------------------------------------------------------------------------REGULAR EXPRESSIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// A REGULAR EXPRESSION IS A PATTERN OF CHARACTERS

// IT IS USED TO DO PATTERN MATCHING SEARCH AND REPLACE ON TEXT

// IN JS A REGEX OBJECT IS A PATTERN WITH PROPERTIES AND METHODS

let stringTest = "This is the longest string ever everThis?";

let regex;

regex = /this/;                        // no modifier

console.log( regex.test(stringTest) ); // false

regex = /this/i;                       // case insensitive

console.log( regex.test(stringTest) ); // true

regex = /^this/i;                      // does this appear at the beginning

console.log( regex.test(stringTest) ); // true

regex = /this$/i;                      // does this appear at the end

console.log( regex.test(stringTest) ); // false because it is connected to ? therefore it is not the end

regex = /this.$/i;                     // does this appear at the end and have any character connected

console.log( regex.test(stringTest) ); // true

regex = /this\.$/i;                    // does this appear at the end and have . connected

console.log( regex.test(stringTest) ); // false because we escaped the . with \ so now it is looking for . literal

/* SYNTAX------------------------------------------------------

/pattern/modifier

*/

/* MODIFIERS---------------------------------------------------

Modifier  Description

g      Perform global match (find all matches rather than stopping after the first match)

i      Perform case-insensitive matching

m      Perform multiline matching

*/

/* BRACKETS----------------------------------------------------

Bracket  Description

[abc]    Find any character between the brackets

[^abc]   Find any character NOT between the brackets

[0-9]    Find any character between the brackets (any digit)

[^0-9]   Find any character NOT between the brackets (any non-digit)

[x|y]    Find any of the alternatives specified

*/

/* METACHARACTERS----------------------------------------------------

Metacharacter Description

.     Find a single character, except newline or line terminator

\w      Find a word character

\W      Find a non-word character

\d      Find a digit

\D      Find a non-digit character

\s      Find a whitespace character

\S      Find a non-whitespace character

\b      Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b

\B      Find a match, but not at the beginning/end of a word

\0      Find a NULL character

\n      Find a new line character

\f      Find a form feed character

\r      Find a carriage return character

\t      Find a tab character

\v      Find a vertical tab character

\xxx    Find the character specified by an octal number xxx

\xdd    Find the character specified by a hexadecimal number dd

\udddd  Find the Unicode character specified by a hexadecimal number dddd

*/

/* QUANTIFIERS---------------------------------------------------

Quantifier  Description

n+      Matches any string that contains at least one n

n*      Matches any string that contains zero or more occurrences of n

n?      Matches any string that contains zero or one occurrences of n

n{X}    Matches any string that contains a sequence of X n's

n{X,Y}  Matches any string that contains a sequence of X to Y n's

n{X,}   Matches any string that contains a sequence of at least X n's

n$      Matches any string with n at the end of it

^n      Matches any string with n at the beginning of it

?=n     Matches any string that is followed by a specific string n

?!n     Matches any string that is not followed by a specific string n

*/

/* PROPERTIES----------------------------------------------------

Property  Description

constructor   Returns the function that created the RegExp object's prototype

global        Checks whether the "g" modifier is set

ignoreCase    Checks whether the "i" modifier is set

lastIndex     Specifies the index at which to start the next match

multiline     Checks whether the "m" modifier is set

source        Returns the text of the RegExp pattern

*/

/* METHODS-------------------------------------------------------

Method      Description

compile()   Deprecated in version 1.5. Compiles a regular expression

exec()      Tests for a match in a string. Returns the first match

test()      Tests for a match in a string. Returns true or false

toString()  Returns the string value of the regular expression

*/

//---------------------------------------------------------------------------REGULAR EXPRESSION SEARCH METHODS IN JAVASCRIPT----------------------------------------------------------------------------//

// In JavaScript, a regular expression text search, can be done with different methods.

// With a pattern as a regular expression, these are the most common methods:

/*

Example               Description

text.match(pattern)   The String method match()

text.search(pattern)  The String method search()

pattern.exec(text)    The RexExp method exec()

pattern.test(text)    The RegExp method test()

*/

//--------------------------------------------------------------------------------CHARACTERS IN JAVASCRIPT----------------------------------------------------------------------------//

// JavaScript does not have a character type.

// A single character in JavaScript is a string type.

// However, strings behave similar to an array of char as in other languages.

// There are built in functions to find a char of a string, so to speak.

//----------------------------------------------------------------------------------STRINGS IN JAVASCRIPT----------------------------------------------------------------------------//

// IN JAVASCRIPT STRINGS ARE A PRIMITIVE TYPE BUT ARE ARRAYS OF CHARACTERS: THEY ARE INDEXED, BUT IMMUTABLE

// A JavaScript string is zero or more characters written inside quotes.

// Can use single or double quotes or backticks.

// TEMPLATE LITERALS (USING BACKTICKS) ARE BEST:

// THEY PRINT CLEAN

// OTHER VARIABLES ARE CLEAR

// MAKE NEW LINES WITH ENTER KEY

// CAN BE USED TO CONCATENATE

// HANDLE QUOTES EASILY WITHOUT ESCAPE SEQUENCES

// ALLOW FOR EASY EXPRESSIONS ON OTHER VARIABLES INSIDE

// STRING VARIABLES INITIALIZED WITH BACKTICKS BEHAVE IN THE NORMAL WAY

// MATHEMATICAL OPERATORS WITH STRINGS

// + CONCATENATION - forms a new string by gluing the original strings together

let mystring = 'Hello, ' + 'World!';

console.log(mystring); // Hello, World!

// JS WILL IMPLICITLY CAST NUMBER TO STRING DURING CONCATENATION

console.log('21' + 21); // '2121'

console.log(46 + '7'); // '467'

console.log(12.34 + '56'); // '12.3456'

// -, *, / JS WILL ATTEMPT TO CONVERT EVERYTHING TO A NUMBER FIRST

console.log('12' - 10); // 2

console.log('90.10' - 10); // 80.10

console.log('12' * 12); // 144

console.log('12' * '12'); // 144

console.log('12' / '12'); // 1

// CHARACTERS THAT CAN'T CONVERT TO NUMBER WILL RESULT IN NaN

console.log('we' - 2); // NaN

console.log(':(' * 2); // NaN

console.log('&9' / 2); // NaN

// EXPRESSIONS WITHIN A STRING

let a = 20;

let b = 5;

let result = `The result of ${a} + ${b} is ${a + b}`;

console.log(result); // The result of 20 + 5 is 25

//---------------------------------------------------------------SPACES IN STRINGS IN JAVASCRIPT-------------------------------------------------------------------------//

// you can see the unicode value of a space in strings...

//------------------------------------------------------------COMMON STRING OPERATIONS IN JAVASCRIPT-------------------------------------------------------------------------//

// COMMON STRING OPERATIONS

str[idx]

// Return character at (0-based) index idx

// Never raises error — returns undefined if past string end

str.length

// Return # characters in string

// FINDING THINGS

str.indexOf(chars)

// Return index (0-based) of chars or -1 if not found

str.includes(chars)

// Returns true/false for whether chars is present

// SLICING

str.slice(start, end)

// Returns new string of chars from start up to (not including) end

// Can leave off end to go through all remaining of string

// Can provide negative indexes (-1 is last, -2 next-to-last)

// CASE (Capitalization)

// String comparison in JS is case-sensitive ("a" !== "A")

// Often you’ll convert case of strings:

str.toLowerCase()

// Returns lower-cased version of string

str.toUpperCase()

// Returns upper-cased version of string

// MISCELLANEOUS

str.startsWith(str2)

// Does str start with str2?

str.endsWith(str2)

// Does str end with str2?

str.split(separator, limit)

// Return array of str split at every separator until limit.

// Call with an empty string to split at every character

str.repeat(num)

// Return new string with str repeated num times

//-----------------------------------------------------------------------SPLIT STRINGS METHOD IN JAVASCRIPT-------------------------------------------------------------------------//

// The split() method splits the string into an array of substrings and returns an array of substrings.

// This method accepts a parameter and based on this parameter the string is split into substrings and a new array is formed. The syntax of the split() method looks like this:

string.split(separator, limit);

// The above syntax consists of the following:

// string, a string to which the split method is applied.

// separator (optional). It can be a simple string or a regular expression.

// The separator specifies the point from which separation takes place.

// If the separator is not present, then the entire string becomes an element of a single array.

// If the separator has multiple characters, then the sequence of the entire character is found to split.

// limit (optional), a non-negative integer that specifies the number of splits.

// If a limit is passed to the split method, it will split the string into the specified number of substrings.

// After the number substrings reaches the limit, the method stops.

// Let's take a look at an example to better understand the split() method.

let numbers = "123,456,789";

// separator is ","

let splitNumbers = numbers.split(",");

console.log(splitNumbers); // [ '123', '456', '789' ]

let text = "jetbrains@gmail.com";

// separator is "@"

let splitText = text.split("@");

console.log(splitText); // [ 'jetbrains', 'gmail.com' ]

// As seen in the examples above, the string gets split where the separator occurs and returns an array of strings.

//Let's see more examples in which limit is also passed to the split method.

let languages = "JavaScript, Java, C++, C, Python, Kotlin";

// separator is "," and limit is "3"

let splitLang = languages.split(",", 3);

console.log(splitLang); // [ 'JavaScript', ' Java', ' C++' ]

let text = "JetBrains";

// separator is empty string

let textSplit = text.split("", 5);

console.log(textSplit); // ['J', 'e', 't', 'B', 'r']

// Let's include some Regexp in the separator and see how the split method works.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

let numbers = "2, 4, 6, 8, 10";

// separator is a regexp

let splitNumbers = numbers.split(/\s*,\s*/);

console.log(splitNumbers); // ['2', '4', '6', '8', '10']

let text = "box, beatbox, boxer, boxing, postbox, box-sizing";

// separator is a regexp and limit is "4"

let regexp = /\bbox/

let splitText = text.split(regexp, 4);

console.log(splitText); // [ '', ', beatbox, ', 'er, ', 'ing, postbox, ' ]

// The above example shows that the numbers are split and the elements are stored in an array.

// In another example, regexp is passed as a parameter to the split method and the limit is "4".

// Here, the strings, which have box at the start, are split but only 4 splits will occur as the limit passed to the split method is 4.

//-----------------------------------------------------------------------REPLACE STRINGS METHOD IN JAVASCRIPT-------------------------------------------------------------------------//

// The JavaScript replace() method is used to replace a part of the string with the new substring.

// This method returns the new string after replacing the part of the string or the whole string itself.

// The replace() method accepts a regexp and replacement string as arguments,

// searches for the specified regexp in the given string,

// and replaces that part with the replacement string if the match occurs.

//The syntax of the replace() method looks like this:

string.replace(originalStr, newStr);

// The above syntax consists of the following:

// string, a string on which the replace method is applied and in which some part of the string is to be replaced.

// originalStr. It is searched on the given string and replaced by newStr.

// newStr, the string which replaces the originalStr.

let text = "Javascript Javascript javascript";

text.replace(/Javascript/, "JavaScript"); // 'JavaScript Javascript javascript'

text.replace(/Javascript/g, "JavaScript"); // 'JavaScript JavaScript javascript'

text.replace(/Javascript/gi, "JavaScript"); // 'JavaScript JavaScript JavaScript'

// If the regexp has the g flag set, the method replaces all the matches in the string with the replacement string.

// Otherwise, it replaces only the first match it finds.

// If the first argument to the replace() method is a string rather than regexp,

// the method searches for the given string instead of converting it into regexp.

//----------------------------------------------------------------PRINTING STRINGS WITH VARIABLES TYPING IN JAVASCRIPT-------------------------------------------------------------------------//

// RITHM PREFERRED WAY

let city = "Paris";

let temp = "24";

console.log("Now, the temperature in ", city, " is ", temp, " degrees Celsius.");

// CONCATENATIONS WITH +

let city = "Paris";

let temp = "24";

console.log("Now, the temperature in " + city + " is " + temp + " degrees Celsius.");

// TEMPLATE LITERALS

let city = "Paris";

let temp = "24";

console.log(`Now, the temperature in ${city} is ${temp} degrees Celsius.`);

// template literals have the benefit of symbols of a new line therefore no \n needed:

console.log(`String text line 1

String text line 2`);

// template literals also make code cleaner while avoiding unintended concatenation:

let a = 1;

let b = 2;

console.log(`The sum of numbers ${a} and ${b} is not equal to ${ 10 * a + b }.`);

// Without the template literals, this code would look like this:

let a = 1;

let b = 2;

console.log("The sum of numbers " + a + " and " + b + " is not equal to "+ (10 * a + b) + ".");

// TEMPLATE LITERALS ARE BEST:

// THEY ARE CLEAN

// VARIABLES ARE CLEAR

// EASILY MAKE NEW LINES

// CAN BE USED TO CONCATENATE WITH + IF DESIRED

// HANDLE QUOTES EASILY WITHOUT ESCAPE SEQUENCES

// STRING VARIABLES INITIALIZED WITH BACKTICKS BEHAVE IN THE NORMAL WAY

let variable = `This is`;

console.log(`I'm a string.

${variable} "m` +  `y spout"

'This is my handle'`);

for (let i in variable) {

console.log(i, variable[i]);

}

console.log(variable.length);

//-----------------------------------------------------------------------ALL STRING POPERTY AND METHODS IN JAVASCRIPT-------------------------------------------------------------------------//

/* PROPERTIES------------------------------------------------------------

Property              Description

constructor           Returns the string's constructor function

length                Returns the length of a string

prototype             Allows you to add properties and methods to an object

*/

/* METHODS------------------------------------------------------------

Method                Description

charAt()              Returns the character at a specified index (position)

charCodeAt()          Returns the Unicode of the character at a specified index

concat()              Returns two or more joined strings

endsWith()            Returns if a string ends with a specified value

fromCharCode()        Returns Unicode values as characters

includes()            Returns if a string contains a specified value

indexOf()             Returns the index (position) of the first occurrence of a value in a string

lastIndexOf()         Returns the index (position) of the last occurrence of a value in a string

localeCompare()       Compares two strings in the current locale

match()               Searches a string for a value, or a regular expression, and returns the matches

repeat()              Returns a new string with a number of copies of a string

replace()             Searches a string for a value, or a regular expression, and returns a string where the values are replaced

search()              Searches a string for a value, or regular expression, and returns the index (position) of the match

slice()               Extracts a part of a string and returns a new string

split()               Splits a string into an array of substrings

startsWith()          Checks whether a string begins with specified characters

substr()              Extracts a number of characters from a string, from a start index (position)

substring()           Extracts characters from a string, between two specified indices (positions)

toLocaleLowerCase()   Returns a string converted to lowercase letters, using the host's locale

toLocaleUpperCase()   Returns a string converted to uppercase letters, using the host's locale

toLowerCase()         Returns a string converted to lowercase letters

toString()            Returns a string or a string object as a string

toUpperCase()         Returns a string converted to uppercase letters

trim()                Returns a string with removed whitespaces

valueOf()             Returns the primitive value of a string or a string object

*/

//--------------------------------------------------------------------------------DYNAMIC TYPING IN JAVASCRIPT-------------------------------------------------------------------------//

// The same variable can be used to hold different datatypes:

let x;           // Now x is undefined

x = 5;           // Now x is a Number

x = "John";      // Now x is a String

//--------------------------------------------------------------------------------CONVERTING TYPE IN JAVASCRIPT-------------------------------------------------------------------------//

// CONVERT TO STRING The toString method will convert any value which is not undefined or null into a string.

// Here are a couple of examples:

let num = 5;

num.toString(); // "5"

let bool = true;

bool.toString(); // "true"

// there is String() and toString() and I am not clear on the difference.

// CONVERT TO NUMBER Many ways to do this: common ways are parseInt or parseFloat

// parseInt means basically find Int; parseFloat means basically find Float

// NOTE: parseInt DOES NOT ROUND

parseInt("2"); // 2

parseFloat("2"); // 2

parseInt("3.14"); // 3

parseFloat("3.14"); // 3.14

parseInt("2.3someLetters"); // 2

parseFloat("2.3someLetters"); // 2.3

parseInt("w2.3someLetters"); // NaN

parseFloat("w2.3someLetters"); // NaN

// parsing is from left to right

// CONVERT TO NUMBER Number function tries to convert entire string to a number

Number("2"); // 2

Number("3.14"); // 3.14

Number("2.3someLetters"); // NaN

Number("w2.3someLetters"); // NaN

// can use the UNARY + operator as a shorthand for Number (?)

+"2"; // 2

+"3.14"; // 3.14

+"2.3alkweflakwe"; // NaN

+"w2.3alkweflakwe"; // NaN

console.log(typeof(+"2"));

// NaN  Not a Number

// You commonly get back NaN when JavaScript does not know how to convert something to a number - here are some examples:

parseInt("taco") // NaN

Number("no way!") // NaN

// isNaN function will return true if the expression can not be converted to a number

let validConversion = Number("2")

console.log("Is validConversion NaN?", isNaN(validConversion))

// Is validConversion NaN? false

let invalidConversion = Number("hello world")

console.log("Is invalidConversion NaN?", isNaN(invalidConversion))

// Is invalidConversion NaN? true

// CONVERTING TO A BOOLEAN

// !! will convert a value to its boolean equivalent

let greeting2 = "hi";

let nothing = 0;

!! greeting2; // true

!! nothing; // false

//---------------------------------------------------------------------------------TYPE COERSION IN JAVASCRIPT----------------------------------------------------------------------------//

/*

Coercion is just the automatic (implicit) attempt or process of converting a value from one type to another.

JavaScript uses coercion pretty liberally among programming languages, so if you don't understand how coercion

in JavaScript works, it can be easy to introduce bugs into your code.

In other languages this generally only happens between similar data types for example int to float.

*/

5 == "5"; // true - because the string "5" gets coerced to number 5

5 === "5"; // false

"true" == true; // false - because the coercion is of the boolean true to 1 and "true" is compared to 1 which is false

"true" === true; // false

true == 1; // true - because the coercion is of the boolean true to 1 and 1 is compared to 1 which is true

true === 1; // false

undefined == null; // true

undefined === null; // false

// ALWAYS USE === INSTEAD OF ==

// ALWAYS USE !== INSTEAD OF !=

// EXCEPT IN RARE AND SPECIFIC CIRCUMSTANCES

// BECAUSE USING === ADN !== HELPS TO AVOID UNINTENTIONAL COERSION

//---------------------------------------------------------------------------------TYPE CASTING IN JAVASCRIPT----------------------------------------------------------------------------//

// explicitly converting a type ie via String() method?

//-----------------------------------------------------------------------------STRING CONCATENATION IN JAVASCRIPT----------------------------------------------------------------------------//

5 + "hi"; // "5hi"

/*

In a lot of programming languages, this would throw an error, but JavaScript is more accomodating!

It evaluates the expression 5 + "hi" by first coercing 5 into a string, and then interpreting the "+" operator as string concatenation.

So it combines the string "5" with the string "hi" into the string "5hi".

*/

//-----------------------------------------------------------------------------TYPE CONVERSION TABLE IN JAVASCRIPT----------------------------------------------------------------------------//

// The table below shows the result of converting different JavaScript values to Number, String, and Boolean:

/*

Original        Converted to        Converted to        Converted to

Value           Number              String              Boolean

false           0                   "false"             false

true            1                   "true"              true

0               0                   "0"                 false

1               1                   "1"                 true

"0"             0                   "0"                 true

"1"             1                   "1"                 true

NaN             NaN                 "NaN"               false

Infinity        Infinity            "Infinity"          true

-Infinity       -Infinity           "-Infinity"         true

""              0                   ""                  false

"20"            20                  "20"                true

"twenty"        NaN                 "twenty"            true

[ ]             0                   ""                  true

[20]            20                  "20"                true

[10,20]         NaN                 "10,20"             true

["twenty"]      NaN                 "twenty"            true

["ten","twenty"]NaN                 "ten,twenty"        true

function(){}    NaN                 "function(){}"      true

{ }             NaN                 "[object Object]"   true

null            0                   "null"              false

undefined       NaN                 "undefined"         false

*/

//------------------------------------------------------------------------------CONDITIONAL LOGIC IN JAVASCRIPT----------------------------------------------------------------------------//

// CONDITIONAL STATEMENTS if, else if, ternary operator, switch

// TERNARY OPERATOR expression ? pathIfTrue : pathIfFalse

let guess2 = prompt("Guess what number I'm thinking of!");

guess2 === "7" ? console.log("Correct!") : console.log("Incorrect!");

// When the aim of the program is to assign a variable depending on a condition we can use the ternary operator.

let time = 11;

let isHungry = (time >= 6) ? true : false;

// it is essentially an if statement with simplified syntax

// IF STATEMENT

let age = prompt("Enter your age");

if (age < "18") {

console.log("Too young to buy alcohol");

// IF STATEMENT with ELSE STATEMENT

let guess = prompt("Guess what number I'm thinking of!");

if (guess === "7") {

console.log("Correct!");

} else {

console.log("Incorrect!");

}

// ELSE IF STATEMENT

let number = prompt("What's your favorite number?");

if (number >= 1000) {

console.log("Woah, that's a big number!");

} else if (number >= 0) {

console.log("That's a cool number.");

} else {

console.log("Negative numbers?! That's just bananas.");

}

// SWITCH STATEMENT

let feeling = prompt("How are you feeling today?").toLowerCase();

// what do you think the .toLowerCase does at the end?

switch(feeling){

case "happy":

console.log("Awesome, I'm feeling happy too!");

break;

case "sad":

console.log("That's too bad, I hope you feel better soon.");

break;

case "hungry":

case "starving":

console.log("Me too, let's go eat some pizza!");

break;

default:

console.log("I see. Thanks for sharing!");

break;

}

// notice both "hungry" and "starving" will prompt the same message

// DON'T FORGET THE BREAK STATEMENTS!

//----------------------------------------------------------------------------------ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// An Array is a list of values

// An Array is not a primitive type - it is a reference type

// Arrays in JavaScript are in fact objects

// Generally an Array is a memory effecient data structure

// In JavaScript you can mix data types in an Array (not in Java)

// DECLARE AN ARRAY IN JAVASCRIPT USING []

let primes = [2, 3, 5, 7, 11];

let names = ["Alice", "Bob", "Charlie"];

let booleans = [true, false, false, true];

let mixedTypes = [1, "sweet", true, null, NaN, "bye!"];

let woahhh = ["What's up with this? -->", ["Woah", "crazy!"]];

let emptyArray = [];

// Arrays are indexed starting with [0]

//-------------------------------------------------------------------LITERAL ARRAYS VS CONSTRUCTOR ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// typeof will return "object" for arrays in JavaScript

// LITERAL NOTATION you can create an array without the key word "new" and this is LITERAL NOTATION

const cars1 = ["Saab", "Volvo", "BMW"];

// you can also create an array with the key word "new" and this is CONSTRUCTOR NOTATION

const cars2 = new Array("Saab", "Volvo", "BMW");

// DYNAMIC when we define something at run time this is called DYNAMIC

// STATIC when we define something before compile time this is called STATIC

// In JavaScript everything is DYNAMIC

/*

The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.

*/

//-------------------------------------------------------------------------------STRINGS VS ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

/*

Arrays

Mutatable

Remember the place of value

Indexed

Acknowledge duplicates

In JS can contain mixed primitive datatypes

In JS can contain mixed reference types

*/

/*

Strings

Cannot be mutated in JS

Can only make new strings from existing strings

*/

//---------------------------------------------------------------------------------IMMUTABILITY IN JAVASCRIPT----------------------------------------------------------------------------//

// https://www.sitepoint.com/immutability-javascript/

//----------------------------------------------------------------------------ARRAYS VS OBJECTS IN JAVASCRIPT----------------------------------------------------------------------------//

// ARRAYS ARE A SPECIAL KIND OF OBJECT IN JAVASCRIPT BUT IT IS BEST TO DESCRIBE THEM AS ARRAYS

// ARRAYS CONTAIN ELEMENTS

// AN ELEMENT CONSISTS OF AN INDEX AND A VALUE

// Arrays use numbers (index) to access its "ELEMENTS"

const person1 = ["John", "Doe", 46];

person[0] // returns John

// OBJECTS CONTAIN PROPERTIES

// A PROPERTY CONSISTS OF A KEY AND A VALUE

// Objects use names to access its PROPERTIES aka MEMBERS

const person2 = {firstName:"John", lastName:"Doe", age:46};

person.firstName // returns John

//------------------------------------------------------------------------------ASSOCIATIVE ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

/*

Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.

If you use named indexes, JavaScript will redefine the array to an (different?) object.

After that, some array methods and properties will produce incorrect results.

*/

//------------------------------------------------------------------------------ACCESSING ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// TO ACCESS THE ARRAY SPECIFY THE ARRAY NAME AND THE POSITION (AKA INDEX)

let arr = [5,3,10];

arr[0]; // should equal 5

arr[1]; // should equal 3

arr[2]; // should equal 10

arr[3]; // should be undefined -- remember, arrays are zero-indexed!

arr[1+1]; // the same as arr[2], which is 10

arr[arr.length-1]; // shorthand for the last element of an array, in this case 10

//-------------------------------------------------------------------------------UPDATING ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// USE THE ASSIGNMENT OPERATOR TO ASSIGN OR REASSIGN AN ELEMENT AT A GIVEN INDEX

let arr2 = [5, 3, 10];

arr2[0] = -1000;

arr2[2] = "dope";

arr2; // should be [-1000, 3, "dope"]

//-------------------------------------------------------------------------------fill() METHOD IN JAVASCRIPT----------------------------------------------------------------------------//

// fill() is used to return a modified version of an array.

// it changes the array's elements to a static value.

// This method takes up to three arguments:

// fill(value, start, end)

// value: the value the array will be filled with.

// start: the index where the filling should begin. Optional. Default is 0.

// end: the index where the filling should finish. Optional. Default is the array's length.

//-------------------------------------------------------------------------------ADDING TO ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// There are a number of ways you can add elements to an array.

// One way is by setting a value at a new index in the array.

let arr3 = [1,2,3];

arr3[3] = 4;

arr3; // [1,2,3,4]

// Be careful with this approach, though -- you can add an element at any index, and any elements that don't

// have values in them will be filled with undefined values.

let arr4 = [1,2,3];

arr4[5] = "whoa";

arr4; // [1, 2, 3, undefined, undefined, "woah"]

// NOTE: if many undefined elements are present and in sequence the console may display "  empty items"

let marks = [45, 50, 44, 30, 29];

marks[10] = 65;

console.log(marks); // [ 45, 50, 44, 30, 29, <5 empty items>, 65 ]

// SOME USEFUL ARRAY FUNCITONS FOR ADDING ELEMENTS

// arr.unshift() - add to the begining of an array (returns the array length)

let arr4_3 = [1,2,3];

arr4_3.unshift(0); // now arr4_3 = [0, 1,2,3] but the return of the funciton is the length (4 in this case)

// arr.push() - add to the end of an array (returns the array length)

let arr4_2 = [1,2,3];

arr4_2.push(4); // now arr4_2 = [1,2,3,4] but the return of the funciton is the length (4 in this case)

//-----------------------------------------------------------------------------REMOVING FROM ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// There are a number of ways you can remove elements from an array.

// One (not common) way to remove elements is to manually set the length of the array to a number smaller than its current length.

let arr5 = [1,2,3];

arr5.length = 2; // returns the new length

arr5; // [1,2]

// THE delete KEYWORD REMOVES A VALUE BUT REPLACE IT WITH UNDEFINED - NOT CHANGING THE ARRAY LENGTH

let arr5_1 = [5, 4, 3, 2];

delete arr5_1[1];

arr5_1; // [5, undefined, 3, 2]

// SOME USEFUL ARRAY FUNCITONS FOR REMOVING ELEMENTS FROM ARRAYS

//arr.shift() - remove from the begining of an array (returns value of the just removed element)

let arr5_3 = [1,2,3];

arr5_3.shift(); // now arr5_3 = [2, 3] but the return of the funciton is the value of deleted element (1 in this case). NOTE no argument is needed.

// arr.pop() - remove element from end of an array (returns value of the just removed element)

let arr5_2 = [1,2,3];

arr5_2.pop(); // now arr5_2 = [1, 2] but the return of the funciton is the value of deleted element (3 in this case). NOTE no argument is needed.

//----------------------------------------------------------------------REMOVING AND ADDING FROM ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

/* SPLICE

The splice method accepts at least two arguments.

The first argument is the starting index, indicating where values will be removed or added.

The second parameter is the number of values to remove.

Optionally, you can pass in an unlimited number of additional arguments;

These correspond to values you'd like to add to the array.

The splice method always returns an array of the removed elements. Here are some examples

*/

let arr6 = [1,2,3,4];

arr6.splice(0,1); // returns [1]

arr6; // [2,3,4]

let arr7 = [1,2,3,4];

arr7.splice(0,1,5); // returns [1]

arr7; // [5,2,3,4]

let arr8 = ["a","b","c","d"];

arr8.splice(1,2,"x","y","z"); // ["b", "c"]

arr8; // ["a", "x", "y", "z", "d"]

/*

One of the more powerful array methods is splice, which allows you to either add to an array or remove elements or even do both!

You can think of splice as a powerful generalization of push, pop, unshift, and shift all in one!

*/

//-----------------------------------------------------------------------ARRAY PROPERTY AND METHODS IN JAVASCRIPT----------------------------------------------------------------------------//

// NOTE: we are using the word property because arrays are in fact objects in JS - is this accurate?

// PROPERTY VS FUNCTION length vs length()

// length() is a function with no pre determined action

// length property returns the length of a specified array (also works with strings)

let arr9[1,2,3,4];

arr9.length; // 4

arr9[arr9.length]; // undefined

arr9[arr9.length-1]; // 4 - this is a nice way to access the last element of an array when you don't know how many elements are inside it

let thisString = "Hello World";

let thisStringLength = thisString.length; // returns 11 because 10 letters and one space

// MODIFICATION METHODS: join(), slice(), concat(), push(), pop(), shift(), unshift(), splice()

// COPYING ELEMENTS OF AN ARRAY slice();

let arr10[1,2,3,4];

let copyArr10 = arr10.slice();

/*

Alternatively, you can pass in two arguments to slice.

Like splice, the first argument indicates the starting index of the subarray you want.

The second argument indicates the ending index.

The subarray you get will consist of all the values starting from the starting index and going up to (but not including) the ending index:

*/

let arr11 = [7, 6, 5, 4, 3, 2];

arr11.slice(1, 2); // [6]

arr11.slice(2, 5); // [5, 4, 3]

arr11.slice(2, 1); // []

// JOINING TWO ARRAYS TOGETHER concat();

// concat joins two arrays together

let arr12 = [1,2,3];

let arr13 = [4,5,5];

let combined = arr12.concat(arr13);

combined; // [1,2,3,4,5,6]

// In fact, you can pass multiple arrays into concat and it will still return a single array to you:

let arr14 = ["a","b","c"];

let arr15 = ["d","e","f"];

let arr16 = ["g","h","i"];

let combined = arr14.concat(arr15,arr16);

combined; // ["a","b","c","d","e","f","g","h","i"];

//What's more, you don't even need to pass an array into concat! Any comma-separated list of values can be concatenated with the original array:

let openingWords = ["It","was","a"];

let moreOpeningWords = openingWords.concat("dark","and","stormy","night");

moreOpeningWords; // ["It", "was", "a", "dark", "and", "stormy", "night"]

// JOIN ELEMENTS OF AN ARRAY join();

// join joins elements of an array into a string separated by whatever you pass in as an argument to join.

// This argument is frequently referred to as a delimiter. Here are a couple of examples:

let arr17 = ["Hello", "World"];

arr17.join(" "); // "Hello World"

let arr18 = ["I", "have", "a", "big", "announcement"];

arr18.join("! ") + "!"; // "I! have! a! big! announcement!"

// SEARCHING METHODS: indexOf, lastIndexOf

// FINDING FIRST INDEX indexOf();

// indexOf finds the first index of the element passed in (starting from the left).

// If the element is not found, it returns -1. Here are some examples:

let arr19 = [1,2,3,4,5,4,4];

arr19.indexOf(2); // 1

arr19.indexOf(3); // 2

arr19.indexOf(1); // 0 - remember, arrays are zero indexed

arr19.indexOf(4); // 3 - indexOf stops once it finds the first 4.

arr19.indexOf(10); // -1

// You'll see this function very commonly used to check if an element is in an array or not. Here's an example:

let moviesIKnow = [

"Wayne's World",

"The Matrix",

"Anchorman",

"Bridesmaids"

];

let yourFavoriteMovie = prompt("What's your favorite movie?");

if (moviesIKnow.indexOf(yourFavoriteMovie) > -1) {

alert("Oh, cool, I've heard of " + yourFavoriteMovie + "!");

} else {

alert("I haven't heard of " + yourFavoriteMovie + ". I'll check it out.");

}

// FINDING LAST INDEX lastIndexOf();

lastIndexOf works just like indexOf, but starts searching from the end of the array rather than the beginning.

let arr20 = [1,2,3,4,5,4,4];

arr20.indexOf(4); // 3

arr20.lastIndexOf(4); // 6 - this one is different now as it starts from the end!

arr20.lastIndexOf(10); // -1 - still returns -1 if the value is not found in the array

//-----------------------------------------------------------------------------MORE WORK WITH ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// CREATING NEW ARRAYS

arr.concat() // This does NOT mutate the original array but returns new array and CONCATENATES the arguments

// COMMON ARRAY OPERATIONS

arr[idx] // Return element at index idx NOTE: this never raises error - returns undefined if past array end

arr.length // Return # items in array

// FINDING THINGS

arr.indexOf() // Return index (0-based) of elem or -1 if not found

arr.includes() // Returns true/false for whether elem is present

// CHANGING ARRAYS (These all MUTATE current array instead of creating new array)

arr.push() // Add elem to end of array and RETURNS length

arr.push(10, 12, 14) // Can provide multiple elements

arr.pop() // Remove & return item at end of array

arr.unshift() // Like push, but adds at beginning

arr.shift() // Like pop, but removes from beginning

// SLICING AND SPLICING

arr.slice() // Returns new array of items from start up to (not including) end

// Can leave off end to go through end of array

// Can provide negative indexes (-1 is last, -2 next-to-last)

arr.splice()// Starting at start, delete deleteCount items (can be 0)

// Then, add item(s)

// Can provide negative indexes (-1 is last, -2 next-to-last)

//--------------------------------------------------------------------FULL LIST W3 SCHOOLS ARRAY METHODS IN JAVASCRIPT----------------------------------------------------------------------------//

/*

NAME                          DESCRIPTION

concat()                      Joins arrays and returns an array with the joined arrays

constructor                   Returns the function that created the Array object's prototype

copyWithin()                  Copies array elements within the array, to and from specified positions

entries()                     Returns a key/value pair Array Iteration Object

every()                       Checks if every element in an array pass a test

fill()                        Fill the elements in an array with a static value

filter()                      Creates a new array with every element in an array that pass a test

find()                        Returns the value of the first element in an array that pass a test

findIndex()                   Returns the index of the first element in an array that pass a test

forEach()                     Calls a function for each array element

from()                        Creates an array from an object

includes()                    Check if an array contains the specified element

indexOf()                     Search the array for an element and returns its position

isArray()                     Checks whether an object is an array

join()                        Joins all elements of an array into a string

keys()                        Returns a Array Iteration Object, containing the keys of the original array

lastIndexOf()                 Search the array for an element, starting at the end, and returns its position

length                        Sets or returns the number of elements in an array

map()                         Creates a new array with the result of calling a function for each array element

pop()                         Removes the last element of an array, and returns that element

prototype                     Allows you to add properties and methods to an Array object

push()                        Adds new elements to the end of an array, and returns the new length

reduce()                      Reduce the values of an array to a single value (going left-to-right)

reduceRight()                 Reduce the values of an array to a single value (going right-to-left)

reverse()                     Reverses the order of the elements in an array

shift()                       Removes the first element of an array, and returns that element

slice()                       Selects a part of an array, and returns the new array

some()                        Checks if any of the elements in an array pass a test

sort()                        Sorts the elements of an array

splice()                      Adds/Removes elements from an array

toString()                    Converts an array to a string, and returns the result

unshift()                     Adds new elements to the beginning of an array, and returns the new length

valueOf()                     Returns the primitive value of an array

*/

//-----------------------------------------------------------------------FULL EXAMPLES W3 SCHOOLS ARRAY METHODS IN JAVASCRIPT----------------------------------------------------------------------------//

// SAMPLE ARRAYS-----------------------------------------------------------------

let arrNum = [1, 2, 3, 4];

let arrString = ["Array", "of", "strings"];

let arrBool = [true, false, false, true];

let arrFalsey = [undefined, null, NaN, -0];

let arrChar = ['a', 'B', 'c', 'z', 'c', 'p'];

let arrFloat = [3.14, 69.69, 37.01, 37.10];

let arrArray = [

[7, 8, 9],

[10, 11, 12],

[13, 14, 15],

[16, 17, 18]

];

let arrObject;

let obj = {

number: 2219,

street: "Drake Drive",

city: "Fort Wayne",

state: "IN",

country: "USA",

planet: "Earth"

}

let arrChangeMe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrReverseMe = ["My", "name", "is", "Prince"];

let sortMeString = ["A", 'Zebra', 'named', 'debra', 'Deborah', 'Debra'];

let sortMeNum = [6, 3, 5, 7, 99, -3, 200, 1, 0];

// ARRAY PROPERTIES-----------------------------------------------------------------

// returns the number of elements in an array

let arrDotLength = arrArray.length;

console.log(arrDotLength);

// add new properties and methods to arrays

// is a property available with all JS objects

// WARNING: don't change prototypes of built in JS datatypes

// Array.prototype.name = value

// ARRAY METHODS--------------------------------------------------------------------

// concatenates two or more arrays to new array

let arrConcat = arrNum.concat(arrString);

console.log(arrConcat);

// returns an array as a string - does not change original array - default separator is ,

let arrJoin = arrNum.join(" + ");

console.log(arrJoin);

// returns a string with array values separated by commas - does not change og

let arrToString = arrNum.toString();

console.log(arrToString);

// reverses the order of the elements - overwrites og

console.log(arrReverseMe)

let arrReverse = arrReverseMe.reverse();

console.log(arrReverse);

console.log(arrReverseMe);

// sorts the elements - overwrites og

// sorts elements as strings in alphabetical ascending order

// sorting numbers can produce incorrect results - combine with compareFunction

console.log(sortMeString);

let arrSortStrings = sortMeString.sort();

console.log(sortMeString);

console.log(arrSortStrings);

console.log(sortMeNum);

let arrSortNum1 = sortMeNum.sort();

console.log(sortMeNum);

console.log(arrSortNum1);

let arrSortNum2 = sortMeNum.sort(((a, b) => {

return a - b;

}));

console.log(sortMeNum);

console.log(arrSortNum2);

// changes and overwrites original - (target, start, end) WATCH OUT FOR PASS VALUES!!!

let arrCopyWithin = arrBool;

console.log(arrCopyWithin);

console.log(arrCopyWithin.copyWithin(0, 1, 2));

console.log(arrCopyWithin);

console.log(arrBool); // THIS HAS BEEN CHANGED EVEN THOUGH WE HAD IN NEW VARIABLE!!!

// changes and overwrites original - (newValue, start, end)

let arrFill = arrString;

console.log(arrFill.fill("changed", 1, 2));

// removes the last element - changes og - returns the removed element

console.log(arrChangeMe);

let arrPop = arrChangeMe.pop();

console.log(arrPop);

console.log(arrChangeMe);

// adds new items to end of array - changes length of og - returns new length

// (items to add, minimum one item required...)

console.log(arrChangeMe);

let arrPush = arrChangeMe.push(11, 12, 13);

console.log(arrPush);

console.log(arrChangeMe);

// adds new items to beginning of array - changes length of og - returns new length

// (items to add, minimum one item required...)

console.log(arrChangeMe);

let arrUnshift = arrChangeMe.unshift(-3, -2, -1,);

console.log(arrUnshift);

console.log(arrChangeMe);

// removes first element - changes og - returns the shifted element

console.log(arrChangeMe);

let arrShift = arrChangeMe.shift();

console.log(arrShift);

console.log(arrChangeMe);

slice() // NEED MORE INFO HERE

splice() // NEED MORE INFO HERE

// returns the array itself - does not change og

let arrValueOf = arrNum.valueOf();

console.log(arrNum);

console.log(arrValueOf);

// returns first index of value - if not found -1 - (value, start default is 0) - starts at far left works right

let arrIndexOf = arrChar.indexOf('c');

console.log(arrIndexOf);

// returns last index of value - if not found -1 - (value, start default is length-1) - starts at far right works left

let arrLastIndexOf = arrChar.lastIndexOf('c');

console.log(arrLastIndexOf);

// returns true if array contains value - is case sensitive - (value, start default is 0)

let arrIncludes = arrFloat.includes(69.69);

console.log(arrIncludes);

// returns Array Iterator object with key:value pairs

let arrEntries = arrChar.entries();

console.log(arrEntries);

for (let v of arrEntries) {

console.log(v);

}

// returns Array Iterator object with the keys of an array - does not change og

let arrKeys = arrChar.keys();

console.log(arrKeys);

for (let v of arrKeys) {

console.log(v);

}

// gives information

let arrConstructor = arrNum.constructor;

console.log(arrConstructor);

// SPECIAL ITERATOR METHODS ((v, i, a), tV) function for each array element ---------------------------

// Sometimes called Functional Idiom Functions or High Order Functions (take a callback)

// return true if all true - does not overwrite og

let arrEvery = arrNum.every(((v, i, a) => {

return v < 3;

}));

console.log(arrEvery);

// create new array with elements that pass function test - does not overwrite og

let arrFilter = arrBool.filter(((v, i, a) => {

console.log(v, i);

return v === true;

}));

console.log(arrFilter);

// like filter but returns first value that passes test - does not overwrite og

let arrFind = arrBool.find(((v, i, a) => {

console.log(v, i);

return v === true;

}))

console.log(arrFind);

// returns the index of first element that passes test - does not overwrite og

let arrFindIndex = arrBool.findIndex(((v, i, a) => {

console.log(v, i);

return v === true;

}))

console.log(arrFindIndex);

// returns undefined

// similar to map but when you want to do a side effect

let arrForEach = arrArray.forEach(((v, i, a) => {

console.table(v);

}));

console.log(arrForEach); // always returns undefined

// return results of function for each element - does not change og

let arrMap = arrNum.map(((v, i, a) => {

return v + 1;

}));

console.log(arrMap);

// executes reducer function for array element - returns single value the function's accumulated result

// does not change og - works left to right

// there is an initiator parameter of reduce that is important to include and often set to 0

let arrReduce = arrNum.reduce(((total, v, i, a) => {

console.log(total, v);

return total - v;

}0));

console.log(arrReduce);

// executes reducer function for array element - returns single value the function's accumulated result

// does not change og - works right to left

// there is an initiator parameter of reduce that is important to include and often set to 0

let arrReduceRight = arrNum.reduceRight(((total, v, i, a) => {

console.log(total, v);

return total - v;

}0));

console.log(arrReduceRight);

// checks if elements pass function test

// returns true and stops if one element yields function return true

// returns false if the function returns false for all elements

// does not change og

let arrSome = arrChangeMe.some(((v, i, a) => {

return v === 0;

}))

console.log(arrChangeMe);

console.log(arrSome);

// SPECIAL STATIC ARRAY METHODS---------------------------------------------------------------

// NEED HELP ON THIS ONE

// returns array from any object with a length property - returns an array from iterable object

// can convert object to array

// this is a static property - can only use it as Array.from()

// Array.from(object, mapFunction, thisValue)

let arrFrom = Array.from(obj);

console.log(arrFrom);

// returns true if an object is an array

// this is a static property - can only use it as Array.isArray()

let arrIsArray = Array.isArray(arrNum);

console.log(arrIsArray);

//-------------------------------------------------------------------Array.from() IN JAVASCRIPT----------------------------------------------------------------------------//

// turns things that have a length propery into array

// by iterating over the items and pushes them into an array

// can use this to turn Nodelist into array

// or to build empty arrays of a certain size

// or to remove duplicates in an array by converting it to a set and back to array

//-------------------------------------------------------------------REFERENCE VALUE VS PRIMITIVE VALUE IN JAVASCRIPT----------------------------------------------------------------------------//

/*

An essential distinction between primitives and objects (including arrays, which are a type of object in JavaScript)...

is how their values are passed when assigned to new variables.

Take a look at the following example:

*/

let instructor = "Elie";

let anotherInstructor = instructor;

anotherInstructor // "Elie";

// Let's assign a new value to anotherInstructor:

anotherInstructor = "Matt";

instructor; // "Elie"

anotherInstructor; // "Matt"

/*

In this example, even though we changed the anotherInstructor variable, it did not affect the instructor variable.

This is because each one of these primitive types has a specific address in memory (it is a bit more complex than that, but we'll keep things simple to start).

Another way to think of this is that when we assigned anotherInstructor to equal instructor, JavaScript created a copy of the string "Elie" and assigned that value to anotherInstructor.

So even though those two variables were storing identical-looking strings, they can be modified independently of one another.

*/

/*

This may seem confusing until we compare this with what happens when dealing with reference types.

Let's take a look at this array:

*/

let instructors = ["Elie", "Matt"];

let instructorsCopy = instructors;

instructors === instructorCopy // true

instructorCopy.push("Tim");

instructorsCopy; // ["Elie", "Matt", "Tim"]

instructors; // ["Elie", "Matt", "Tim"]

/*

We see here that the original instructor array was changed when we pushed Tim to instructorCopy!

This is because the instructorCopy did not create a new array, it just created a reference (or pointer) to the instructors array.

In other words, unlike with our previous example, setting instructorCopy equal to instructors doesn't create a copy of the instructors array in JavaScript.

Instead, both variable names refer to the exact same array! You also notice here that we are comparing two arrays using === and it evaluates to true.

When comparing two arrays (and objects) using ===, that expression will always evaluate to false unless they are the same reference.

*/

let instructors2 = ["Elie", "Matt"];

let instructors2Copy = instructors2;

instructors2 === instructors2Copy // true

let instructors2Again = ["Elie", "Matt"];

instructors2 === instructors2Again // false (not the same reference)

let instructors2CopyWithSlice = instructors2.slice()

instructors2 === instructors2CopyWithSlice // false (not the same reference)

/*

Reference === Variable                 vs                 Primitive === Variable

=== compares data type and value                         === compares memory location (NOTE: JS does not ever show memory address)

*/

//------------------------------------------------------------------PRIMITIVE TYPE VS REFERENCE TYPE IN JAVASCRIPT----------------------------------------------------------------------------//

// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

// There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// https://developer.mozilla.org/en-US/docs/Glossary/Symbol

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type

//-------------------------------------------------------------------------------ITERATABLES IN JAVASCRIPT----------------------------------------------------------------------------//

// Technically the Iterables in JS are: String, Map, Set, Array

// These are the items that you can use a for...of loop

// Though objects are not considered an iterable you can use for...in one them to iterate

//-------------------------------------------------------------------------------ITERATION IN JAVASCRIPT----------------------------------------------------------------------------//

// ITERATION IS LOOPING

// FOR LOOP: START; STOP; STEP aka INITIALIZER; CONDITION; COUNTER

// Initializer - declare variable to be used in the loop, usually i

// Condition - an expression that returns true or false, as long as true keep looping

// { code block to execute }

// Counter - this is how we change the initializer after each iteration, commonly increment or decrement

for (let i = 0; i < 5; i++) {

console.log(i);

}

// WHILE LOOP: INITIALIZE OUTSIDE AND BEFORE THE LOOP, INCREMENT INSIDE THE LOOP IN THE CODE BLOCK

let i = 0;

while (i < 5) {

console.log(i);

i++;

}

// If you forget to increase the variable used in the condition, the loop will never end.

// This will crash your browser.

// DO WHILE LOOP: CONDITION IS SPECIFIED AT THE END, ENSURED AT LEAST ONE EXECUTION

let i_while = 0;

while (i_while < 0) { // NOTHING WILL BE LOGGED HERE BECAUSE 0 < 0 IS FALSE

console.log(j);

i++;

}

let i_doWhile = 0;

do {

console.log(i_doWhile) // 0 GETS LOGGED SINCE THE CODE INSIDE THE BLOCK RUNS ONCE BEFORE CONDITION CHECKED

i_doWhile++;

} while (i_doWhile < 0);

// BREAK: WHEN WE WANT TO EXIT A LOOP BEFORE IT HAS FINISHED

for(let i = 0; i<5; i++){

if(Math.random() > 0.5){

console.log("Breaking out of the loop when i is " + i);

break;

}

else {

console.log(i);

}

}

// CONTINUE: WHEN WE WANT TO SKIP THE CURRENT ITERATION AND CONTINUE AT THE NEXT STEP

for(let i = 0; i<5; i++) {

if(Math.random() > 0.5) {

console.log("Skipping the console.log when counter i is " + i + " therefore Math.random() must be GREATER THAN 0.5");

continue;

}

console.log("I did not get skipped when counter i is " + i + " therefore Math.random() must be LESS THAN 0.5");

}

console.log("We are not seeing the Math.random() > 0.5 information therefore we will not know what exact value it gave.");

// continue can be used inside any kind of loop:

// Inside the while or do-while loop, it returns directly to the loop condition.

// Inside the for loop, it first calculates the increment expression and then returns to the condition.

// You cannot use break and continue with the ? operator because such constructions lead to errors.

// FOR OF: SIMPLER LOOP TO ITERATE WITH LESS CODE - used with Arrays and Strings (works with index)

let names = ["Elie", "Matt", "Tim"];

for (let name of names) {

console.log(name);

}

// FOR IN: SIMPLER LOOP TO ITERATE WITH LESS CODE - used with Objects (works with keys)

let student = {

name: 'Monica',

class: 7,

age: 12

}

for (let key in student) {

console.log(key + "=" + student[key]);

}

//------------------------------------------------------------INFINITE LOOP IN JAVASCRIPT----------------------------------------------------------------------------//

An infinite loop is a loop whose execution never stops because there is no condition for exiting the loop (the second condition in the brackets). To write an infinite loop, just skip the condition for exiting the loop to make a construction like this:

for (i=0; ; i++) {

console.log(i);

}

... or this:

for (i=0; ;) {

console.log(i);

}

... or even this!

for (; ;) {

console.log('Hi!');

}

Why is that? Since none of the conditions in brackets are mandatory, we can skip a few or even all of them. But since we skip the condition for exiting the loop, the loop becomes infinite.

Be careful with infinite loops: since there's no exit from an infinite loop, sooner or later the memory will overflow. This will make your computer freeze, and you will have to reboot it in emergency mode. Still, sometimes we need the loop to run endlessly, for example, when programming games or microcontrollers, so in these cases, the use of infinite loops is reasonable.

//------------------------------------------------------------LOOP SUMMARY IN JAVASCRIPT----------------------------------------------------------------------------//

/*

for         - loops through a block of code a number of times

for/of      - loops through the values of an array (iterable object)

for/in      - loops through the properties of an object

while       - loops through a block of code while a specified condition is true

do/while    - also loops through a block of code while a specified condition is true

*/

//--------------------------------------------------SOME ARRAY FUNCTIONS/METHODS FOR ITERATION IN JAVASCRIPT----------------------------------------------------------------------------//

// THESE ARE ALSO COVERED IN THE FUNCTIONS SECTION BECAUSE THEY ARE (ALL?) EXAMPLES OF CALLBACKS

//------------------------------------------------------------forEach() FOR ITERATION ON ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// forEach() IS A METHOD THAT CALLS A FUNCTION FOR EACH ELEMENT IN AN ARRAY

// forEach()

// array.forEach(function(value, index, array), thisValue)

// forEach() has two parameters:

//          - the first is a callback with 3 of its own parameters

//          - the second is a value passed to the function as its "this" value

// return value for forEach() is ALWAYS undefined

// forEach() PARAMETERS

//       function(value, index, array) - Required. Is a callback function to run for each element

//                function() PARAMETERS

//                             value - Required. The value of current element.

//                             index - Optional. The index of the current element.

//                             array - Optional. The (entire?) array of the current element.

//       thisValue - Optional. Default undefined. A value passed to the funciton as its "this" value.

// forEach() IS NOT EXECUTED FOR EMPTY ELEMENTS

// https://www.w3schools.com/jsref/jsref_foreach.asp

/* Per Rithm:

Generally avoid using forEach.

We’re using forEach here just as an example of a callback-taking function, but you should avoid using it.

It predates the addition of for…of, which is a far-more capable and flexible way to generally

loop over an array, and, without the overhead of a function call, will always outperform forEach.

*/

//-------------------------------------------------------map() FOR ITERATION ON ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// map() CREATES A NEW ARRAY FROM CALLING A FUNCTION FOR EVERY ARRAY ELEMENT

// map()

// array.map(function(value, index, array), thisValue)

// map() has two parameters:

//          - the first is a callback with 3 of its own parameters

//          - the second is a value passed to the function as its "this" value

// return value for map() is ALWAYS an array - the results of a function for each input array element.

// map() PARAMETERS

//       function(value, index, array) - Required. Is a callback function to run for each element

//                function() PARAMETERS

//                             value - Required. The value of current element.

//                             index - Optional. The index of the current element.

//                             array - Optional. The (entire?) array of the current element.

//       thisValue - Optional. Default undefined. A value passed to the funciton as its "this" value.

// map() IS A METHOD THAT CALLS A FUNCTION FOR EACH ELEMENT IN AN ARRAY

// map() IS NOT EXECUTED FOR EMPTY ELEMENTS

// map() DOES NOT CHANGE THE ORIGINAL ARRAY

// https://www.w3schools.com/jsref/jsref_map.asp

//-------------------------------------------------------filter() FOR ITERATION ON ARRAYS IN JAVASCRIPT----------------------------------------------------------------------------//

// filter() CREATES A NEW ARRAY THAT PASS A TEST PROVIDED BY A FUNCTION

// filter()

// array.filter(function(value, index, array), thisValue)

// filter() has two parameters:

//          - the first is a callback with 3 of its own parameters

//          - the second is a value passed to the function as its "this" value

// return value for filter() is ALWAYS an array - contains elements that pass the test - if none then empty array.

// filter() PARAMETERS

//       function(value, index, array) - Required. Is a callback function to run for each element

//                function() PARAMETERS

//                             value - Required. The value of current element.

//                             index - Optional. The index of the current element.

//                             array - Optional. The (entire?) array of the current element.

//       thisValue - Optional. Default undefined. A value passed to the funciton as its "this" value.

// filter() IS A METHOD THAT CALLS A FUNCTION FOR EACH ELEMENT IN AN ARRAY

// filter() IS NOT EXECUTED FOR EMPTY ELEMENTS

// filter() DOES NOT CHANGE THE ORIGINAL ARRAY

// https://www.w3schools.com/jsref/jsref_filter.asp

//---------------------------------------------------------------------------from() IN JAVASCRIPT----------------------------------------------------------------------------//

// The from() method

// The Array.from() method creates a new Array instance from an array-like or iterable object (such as a Map).

// The syntax of the from() method is as follows:

Array.from(object, mapFunction, thisValue)

// object: the object to convert to an array. This is a required field.

// mapFunction: the map function to call on each element of the array. This is an optional field.

// thisValue: a value to use as this when executing the mapFunction — also an optional field.

// Let's look at some examples that demonstrate how to create an array with Array.from().

// Using a string:

Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']

// Using function arguments:

function createArray() {

return Array.from(arguments);

}

createArray(2, 4, 6); // [2, 4, 6]

// Passing an arrow function to the mapFunction parameter:

Array.from([3, 5, 7], x => x * x); // [9, 25, 49]

//---------------------------------------------------------------------------of() IN JAVASCRIPT----------------------------------------------------------------------------//

// The of() method

// It creates a new Array instance containing the given arguments, regardless of their type or number.

// The syntax of the of() method is Array.of(element_1, element_2, ..., element_n).

// You can see some examples of how to create an array using Array.of() below:

Array.of(15); // [15]

Array.of(101, 202, 303); // [101, 202, 303]

Array.of(undefined); // [undefined]

// The difference between Array.of() and the Array constructor lies in the handling of integer arguments:

// Array.of(10) creates an array with a single element, 10, whereas Array(10) creates an array of ten undefined values.

//---------------------------------------------------------------------------reduce() IN JAVASCRIPT----------------------------------------------------------------------------//

// reduce() adds all the values of an array

let arr = [1,2,3,4,5];

arr.reduce(function(total, currentValue, currentValue, currentIndex, arr), initialValue);

// as arrow function

console.log(arr.reduce((total, num) => total + num));

// or same thing inside a variable:

let total = 0;

total = arr.reduce((total, num) => {

return total+num;

});

total = arr.reduce((total, num) => total + num); // default return is the same

//---------------------------------------------------------------------------LABELS FOR STATEMENTS IN JAVASCRIPT----------------------------------------------------------------------------//

// LABELS STATEMENTS WITH LOOPS: AN IDENTIFIER THAT LETS YOU REFER TO IT ELSEWHERE - can be anything except reserved words

markLoop:

while (theMark === true) {

doSomething();

}

// BREAK WITH LABELS

// When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch

// immediately and transfers control to the following statement.

for (let i = 0; i < a.length; i++) {

if (a[i] === theValue) {

break;

}

}

// When you use break with a label, it terminates the specified labeled statement.

let x = 0;

let z = 0;

labelCancelLoops: while (true) {

console.log('Outer loops: ' + x);

x += 1;

z = 1;

while (true) {

console.log('Inner loops: ' + z);

z += 1;

if (z === 10 && x === 10) {

break labelCancelLoops;

} else if (z === 10) {

break;

}

}

}

// CONTINUE WITH LABELS

The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while,

do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the

break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps

back to the condition. In a for loop, it jumps to the increment-expression.

When you use continue with a label, it applies to the looping statement identified with that label.

The following example shows a while loop with a continue statement that executes when the value of i is 3.

Thus, n takes on the values 1, 3, 7, and 12.

let i = 0;

let n = 0;

while (i < 5) {

i++;

if (i === 3) {

continue;

}

n += i;

console.log(n);

}

//1,3,7,12

let i = 0;

let n = 0;

while (i < 5) {

i++;

if (i === 3) {

// continue;

}

n += i;

console.log(n);

}

// 1,3,6,10,15

A statement labeled checkiandj contains a statement labeled checkj. If continue is encountered, the program terminates the current iteration of checkj and begins the next iteration. Each time continue is encountered, checkj reiterates until its condition returns false. When false is returned, the remainder of the checkiandj statement is completed, and checkiandj reiterates until its condition returns false. When false is returned, the program continues at the statement following checkiandj.

If continue had a label of checkiandj, the program would continue at the top of the checkiandj statement.

let i = 0;

let j = 10;

checkiandj:

while (i < 4) {

console.log(i);

i += 1;

checkj:

while (j > 4) {

console.log(j);

j -= 1;

if ((j % 2) === 0) {

continue checkj;

}

console.log(j + ' is odd.');

}

console.log('i = ' + i);

console.log('j = ' + j);

}

//----------------------------------------------------------------------------------OBJECTS IN JAVASCRIPT----------------------------------------------------------------------------//

// OBJECTS MAP KEYS TO VALUES TO CREATE KEY VALUE PAIRS

let firstObj = {

firstName: "Tim",

lastName: "Garcia",

isINstructor: true

}

// notice a comma after each value except the final value

// THE KEY AND THE VALUE TOGETHER ARE CALLED A PROPERTY

// ACCESSING OBJECT VALUES

// using DOT NOTATION

firstObj.firstName; // returns "Tim"

// using BRACKET NOTATION

firstObj["firstName"]; // returns "Tim"

//---------------------------------------------------------------------BRACKET NOTATION VS DOT NOTATION IN JAVASCRIPT----------------------------------------------------------------------------//

// Best practice is to use dot notation if you can - but there are cases in which you need to use bracket notation

let obj = {};

let person = "Tom";

obj[person] = "This is a person";

obj[1+1+1] = "Three";

obj;

/*

obj now should look like this:

{

Tom: "This is a person",

3: "Three"

}

*/

obj.3;// Syntax Error! Can't use the dot notation

obj[3]; // "Three" - we NEED to use the bracket notation

obj[person]; // "This is a person"

obj["Tom"]; // "This is a person"

obj.person; // undefined

/*

In short, use the bracket notation when you need to evaluate some expression or pass in a variable to get the name of the key,

but when you know the name of the key and it is not a variable or expression, always use the dot notation.

However, the bracket notation is "more safe" because it covers all contexts.

*/

//---------------------------------------------------------------------OBJECT SHORTHAND IN JAVASCRIPT----------------------------------------------------------------------------//

// OBJECT SHORTHAND---------------------

const firstName = "Spencer";

const lastName = "Armini";

// ES5

const developer = {

firstName: firstName,

lastName: lastName,

}

const firstName = "Spencer";

const lastName = "Armini";

// ES6

const developer = {

firstName,

lastName,

}

// OBJECT METHODS---------------------

// ES5

var instructor = {

sayHello: function () {

return "Hello!";

}

}

// ES2015 - do NOT use arrow func!

let instructor = {

sayHello() {

return "Hello!";

}

}

// COMPUTED PROPERTY NAMES---------------------

// ES5

var firstName = "Elie";

var instructor = {};

instructor[firstName] = "That's me!";

instructor.Elie; // "That's me!"

// ES2015

let firstName = "Elie";

let instructor = {

[firstName]: "That's me!",

}

instructor.Elie; // "That's me!"

// OBJECT DESTRUCTURING---------------------

// OLD WAY

let userData = {

username: 'janet',

id: 12345,

firstName: 'Janet',

lastName: 'Cho',

age: 34,

};

let username = userData.username;

let firstName = userData.firstName;

let lastName = userData.lastName;

let id = userData.id;

//NEW WAY

const userData = {

username: 'janet',

id: 12345,

firstName: 'Janet',

lastName: 'Cho',

age: 34,

};

// declare variables: username, firstName, lastName, id

//   values taken from the keys of the same name in userData

const { username, firstName, lastName, id } = userData;

console.log(username);  // janet

console.log(id);        // 12345

//-----------------------------------------------------------------------KEYS ARE ALWAYS STRINGS IN JAVASCRIPT----------------------------------------------------------------------------//

// THE TYPE OF A KEY IN JAVASCRIPT IS ALWAYS A STRING

var fruits = {    // fruits is an object with properties

"apple": "red", // This is a property - it has a key (apple) and a value (red)

"berry": "blue",

"cherry": "red",

}

var fruits2 = {

apple: "red",    // there is no need to put the keys in quotes

berry: "blue",   // keys are always strings

cherry: "red",   // JS will turn them in to strings for you

}

// THEREFORE THERE IS NO NEED TO USE "" FOR THE KEYS

// A KEY CAN BE A SYMBOL BUT THIS IS SO RARE AND OBSCURE NOT WORTH NOTING

let idToName = {

754: "Tim", // even though we did not put 754 in quotes JavaScript automatically converts teh number into a string

843: "Matt",

921: "Janey",

192: "Elie"

};

// Now we want to access the key 754 to get the value "Tim". We cannot use the dot notation for this:

idToName.754;  // causes an error

// Instead we need to use the bracket notation. And the value inside the bracket notation is a string:

idToName["754"];  // returns "Tim"

/*

So even though we did not quote the key name when we created the idToName object, JavaScript automatically converts the number into a string.

Every key in a JavaScript object is a string!

*/

//-----------------------------------------------------------------------ADDING TO OBJECTS IN JAVASCRIPT----------------------------------------------------------------------------//

/*

To add properties or functions (which are sometimes called methods) to our objects, we can use the . or [] operator

(as before, the dot notation is preferred, but not always possible).

*/

let obj2 = {

name: "Jon Snow",

watchMember: true

};

obj2.gameOfThrones = "awesome";

obj2;

/*

{

name: "Jon Snow",

watchMember: true,

gameOfThrones: "awesome"

}

*/

//-----------------------------------------------------------------------REMOVING FROM OBJECTS IN JAVASCRIPT----------------------------------------------------------------------------//

// We can remove a key from an object by using the delete keyword. Here's an example:

let obj3 = {

name: "Elie",

job: "Instructor"

};

delete obj3.job; // returns true

obj3;

/*

{

name: "Elie"

}

*/

//----------------------------------------------------------------------LOOPING OVER OBJECTS IN JAVASCRIPT----------------------------------------------------------------------------//

// Iterating basically means looping

// If we want to print the values of an object we could print them individually one per line

let obj = {

firstName: "Elie",

lastName: "Schoppik",

favoriteColor: "purple",

job: "instructor",

isDeveloper: true

};

console.log(obj.firstName);

console.log(obj.lastName);

console.log(obj.favoriteColor);

console.log(obj.job);

console.log(obj.developer);

// But looping can do this much easier

// Using a For In loop

let instructor = {

name: "Matt",

mathWizard: true,

dogOwner: true

};

for(let singleKey in instructor){

console.log(instructor[singleKey]);

}

// the loop will log:

// "Matt"

// true

// true

/*

In the code example, singleKey is a variable that will be assigned to each key in the instructor object.

To access the key's value, we must use the bracket notation.

*/

// Using a If In loop - TO DETERMINE IF A KEY EXISTS IN AN OBJECT

let obj = {

favoriteNumber: 33,

favoriteColor: 'blue'

}

if ("favoriteNumber" in obj){

console.log("The favoriteNumber key exists!");

}

// "The favoriteNumber key exists!"

if ("nothing" in obj){

console.log("The nothing key exists!");

}

// console.log will not execute in this case

/*

A quick note on for...of with objects

You might remember from our previous notes that we can use the handy for...of to iterate over arrays and strings easily.

While for...of is a great way to loop over strings and arrays it does not work on objects (you will get an error).

If you need to iterate over an object, always use for...in.

*/

//-------------------------------------------------------------------------COMPARING OBJECTS IN JAVASCRIPT----------------------------------------------------------------------------//

// SIMILAR TO ARRAYS YOU CAN'T USE == OR === TO COMPARE DIFFERENT OBJECTS

// THIS ONLY WORKS IF IT'S THE SAME REFERENCE

//-------------------------------------------------------------------------OBJECTS METHODS IN JAVASCRIPT----------------------------------------------------------------------------//

// OBJECT METHODS - THE FUNCTIONS YOU CAN USE AS OBJECT PROPERTIES

let product = {

name: "Microwave",

description: "With oven mode",

price: 398

};

product.giveDiscount = function() {

console.log("You have a 10% discount!");

};

product.giveDiscount(); // You have a 10% discount!

// In this code, we have allowed the object to report a discount on the product by writing the method giveDiscount.

// CAN ALSO BE SET INSIDE THE OBJECT

let person = {

greetings: function() {

console.log("Hello");

}

};

// CAN OMIT THE KEYWORD FUNCTION

let person = {

greetings() {

console.log("Hello");

}

};

//-------------------------------------------------------------------------THIS KEYWORD IN JAVASCRIPT----------------------------------------------------------------------------//

// In natural language, we can point to a specific person, animal, or object using pronouns.

// In JavaScript you may just as well refer to a specific object using the keyword this:

let user = {

firstName: "Elliot",

lastName: "Alderson",

fullName() {

return this.firstName + " " + this.lastName;

}

};

console.log(user.fullName()); // Elliot Alderson

// In the above example, with the help of this, the fullName function has accessed the firstName and lastName information stored in the user object, because it is declared inside it.

// Applying this to nested objects can create some confusion. In such situations, you should keep it in mind that the keyword this refers to the object in whose method it is used.

//----------------------------------------------------------------------MORE WORK WITH OBJECTS IN JAVASCRIPT----------------------------------------------------------------------------//

// GETTING THE VALUE OF AN OBJECT (HASH) IS MUCH SIMPLER THAN GETTING THE KEY BECAUSE...CAN'T REMEMBER

// OBJECT PROPERTIES ARE KEY: VALUE PAIRS

var fruits = {    // fruits is an object with properties

"apple": "red", // This is a property - it has a key (apple) and a value (red)

"berry": "blue",

"cherry": "red",

}

var fruits2 = {

apple: "red",    // there is no need to put the keys in quotes

berry: "blue",   // keys are always strings

cherry: "red",   // JS will turn them in to strings for you

}

var nums = {

1: "one",

2: "two",

}

nums["1"]; // "one"

nums[1]; // "one" (same as previous)

var city = {

name: "San Francisco",

squareMiles: 49,

awesome: true,

nicknames: ["SF", "Frisco", "The City"],

}

// ADDING TO OBJECT

fruits2.banana = "yellow" // dot notation

fruits2["banana"] = "yellow" // bracket notation

console.log(fruits2);

// DOT VS BRACKET NOTATION

// If you know with 100% certainty what the key is — always use dot

// If you are not 100% sure what the key will be, you must use bracket

// JavaScript evaluates whatever you put in and converts it to a string!

var fruits3 = {

apple: "red",

berry: "blue",

cherry: "red",

};

var favFruit = "apple";

console.log(fruits3.apple);       // "red"

console.log(fruits3[favFruit]);   // "red"

// COMPARING OBJECTS

// Similar to array, can’t use == or === to compare different objects:

var a = {"apple": "red"};

var b = {"apple": "red"};

a === b; //false

a == b; //false

// This only works if it’s the same reference:

var a = {"apple": "red"};

var b = a;

a === b; //true

a == b; //true

// CHECKING FOR KEY IN OBJECT

// Not good because could be falsey and cause a break:

if (fruits.apple) {

// ...

}

// Much better and always works:

if ("apple" in fruits) {

// ...

}

// GETTING ALL KEYS/VALUES

var fruits4 = {

"apple": "red",

"berry": "blue",

"cherry": "red",

}

Object.keys(fruits4); // ["apple", "berry", "cherry"]

Object.values(fruits4); // ["red", "blue", "red"]

// LOOPING OVER OBJECTS

// Use for ... of to loop over arrays and strings

// Use for ... in to loop over objects (by key):

var fruits5 = {

apple: "red",

berry: "blue",

cherry: "red"

}

for (var fruit in fruits5) { // Here we declared a var fruit...in an array we would often use i...

console.log("A", fruit, "is", fruits[fruit]);

}

//---------------------------------------------------------------------- FUNCTIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// Functions are objects in JS

// Functions are First Class Objects which means:

// - they can have properties and methods

// - they can be passed as an argument

//------------------------------------------------------------------------RETURN IN JAVASCRIPT----------------------------------------------------------------------------//

/*

RETURN DOES 2 THINGS:

1. IT ENDS THE FUNCTION/METHOD

2. IT TELLS WHAT VALUE WOULD BE STORED IN A VARIABLE THAT HAS THE FUNCTION/METHOD AS IT'S VALUE

*/

//--------------------------------------------------------------------RETURN VS BREAK IN JAVASCRIPT----------------------------------------------------------------------------//

//--------------------------------------------------------------------FUNCTIONS REVIEW IN JAVASCRIPT----------------------------------------------------------------------------//

// FUNCTIONS ALLOW EXECUTION OF AN OPERATION MULTIPLE TIMES

/*

We can choose:

What input the function accepts

What the function outputs (using return keyword)

Once we return we’re done!

Define using function keyword and execute by placing () right after

*/

// EXAMPLE

function add(a,b) {

return a + b;

}

add(10, 20); // 30

// FUCNTION PARAMETERS AND ARGUMENTS

/*

In JS, these terms parameters and arguments are often used interchangeably.

We’re going to be more explicit:

*/

// PARAMETERS ARE VARIABLES IDENTIFIERS DEFINED IN THE DEFINITION OF A FUNCTION

function add(a, b) { /* ... */ }

// ARGUMENTS ARE VALUES OF THE PARAMETERS PASSED TO THE FUNCTION WHEN IT IS INVOKED

add(10, 20);

Too Many / Too Few Arguments»

function add(x, y) {

return x + y;

}

// If you pass too many arguments, JS ignores the extra arguments:

add(2, 3, 4);  // 4 is ignored!

// If you pass too few arguments, JS uses undefined for missing values:

add(2);  // `y` will be `undefined`

//-----------------------------------------------------------------------CALLBACKS IN JAVASCRIPT----------------------------------------------------------------------------//

// THE CALLBACK FUNCTION HAS A FUNCTION AS A PARAMETER BUT THE FUNCTION IS NOT DETERMINED

// THE CALLBACK FUNCTION FUNCTION ARGUMENT GETS DETERMINED WHEN THE PARENT FUNCTION IS INVOKED

/*

Functions can accept other functions.

Not all languages allow for this! JavaScript is special.

A function passed as an argument to a function is called a callback.

Why bother with callbacks?

This helps us reduce duplication!

You can pass in a defined function or make up one on the spot.

They can provide infinite levels of flexibility.

Let’s see what we mean!

*/

// A scenario: Write a function that accepts an array and returns a new array with all even numbers

function filterOddNumbers(nums){

let evenNums = [];

for (let num of nums) {

if (num % 2 === 0) {

evenNums.push(num);

}

}

return evenNums;

}

// This works just fine, but what happens if we want to filter all odd numbers?

// What about other conditions?

// What about ranges?

// Here’s where callbacks can help!

// Refactoring to use a callback:

function filter(array, callback) {

let filteredArray = [];

for (let val of array) {

let result = callback(val)

if (result === true) {

filteredArray.push(val);

}

}

return filteredArray;

}

filter([1,2,3,4,5,6], function(num) {

return num % 2 === 0;

}); // [2,4,6]

filter([1,2,3,4,5,6], function(num) {

return num > 2;

}); // [3,4,5,6]

// This function already exists! It is a built in method for arrays - see filter()

// Useful functions with callbacks

/*

Let’s meet three functions we can call on arrays that use callbacks:

forEach()

map()

filter()

*/

// forEach - Iterate over items in array, running callback function for each:

let users = [

{ name: "Maya", hobby: "Swimming" },

{ name: "Malik", hobby: "Biking" },

{ name: "Anil", hobby: "Swimming" },

]

users.forEach(function (user) {

console.log(user.hobby);

});

// map - Create a new array by “transforming” each item in original array with callback function:

let users = [

{ name: "Maya", hobby: "Swimming" },

{ name: "Malik", hobby: "Biking" },

{ name: "Anil", hobby: "Swimming" },

]

users.map(function (user) {

return user.hobby;

});

// filter - Create a new array of only those items that the callback returns true for:

let users = [

{ name: "Maya", hobby: "Swimming" },

{ name: "Malik", hobby: "Biking" },

{ name: "Anil", hobby: "Swimming" },

]

users.filter(function (user) {

return user.hobby === "Swimming";

});

/*

Always make sure to return in map and filter

You can combine these functions together!

You can practice more here!

*/

//------------------------------------------------------------forEach(), map(), and filter() IN JAVASCRIPT----------------------------------------------------------------------------//

// JavaScript also has a number of built-in methods on arrays, called iterators, which can often be used in place of for loops.

// Choosing the right iterator can allow you to write code that's both shorter and easier to read.

//--------------------------------------------------------------------forEach() IN JAVASCRIPT----------------------------------------------------------------------------//

// forEach()

// the first parameter to forEach is a callback

// This callback can have up to three parameters:

//          the value at the current array index

//          the current array index

//          and the array itself

// forEach ALWAYS returns undefined!!!!

// With or without the return keyword, it does not make a difference.

// If you need to return something from your iterator, forEach is not the right choice for you.

let arr = [4,3,2,1];

arr.forEach(function(val,index,arr){

console.log(val);

});

// 4

// 3

// 2

// 1

arr.forEach(function(val,index,arr){

console.log(index);

});

// 0

// 1

// 2

// 3

let doubledValues = arr.forEach(function(val,index,arr){

return val*2;

});

doubledValues; // undefined

// It's important to note that you don't need to supply all three arguments to the callback if you don't need them all.

// For instance, the first example above could also be written as:

let arr = [4,3,2,1];

// the callback here just takes a single parameter, but works exactly the same as before!

arr.forEach(function(val){

console.log(val);

});

//-----------------------------------------------------------------------filter() IN JAVASCRIPT----------------------------------------------------------------------------//

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

//-------------------------------------------------------------------------map() IN JAVASCRIPT----------------------------------------------------------------------------//

//--------------------------------------------------------------------FUNCTION AVAILIBILITY IN JAVASCRIPT----------------------------------------------------------------------------//

// FUNCTION DECLARATIONS ARE SCANNED AND MADE AVAILABLE

// THIS ALLOWS THAT A FUNCTION CAN BE CALLED IN CODE ABOVE THE DECLARATION

// UNLESS THE FUNCTION IS DECLARED INSIDE A VARIABLE

//------------------------------------------------------------DECLARED FUNCTIONS VS FUNCTION EXPRESSIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// YOU CAN USE A FUNCTION DECLARATION OR A FUNCITON EXPRESSION

// DECLARED FUNCTIONS ARE NOT EXECUTED IMMEDIATELY

// THEY ARE SAVED FOR LATER USE WHEN THEY ARE CALLED

function myFunciton(a, b) {

return a * b;

}

// JAVASCRIPT USES SEMICOLONS TO SEPARATE EXECUTABLE STATEMENTS

// SINCE A FUNCTION DECLARATION IS NOT AN EXECUTABLE STATEMENT IT DOES NOT NEED A SEMICOLON

// FUNCITON EXPRESSIONS ARE EXECUTED IMMEDIATELY WITHOUT INVOKING IT

// IT IS INVOKED AT THE SAME TIME OF CREATION

(function() {

console.log("annonymous");

} ) ();

// THIS FUNCTION IS ANONYMOUS BECAUSE IT DOES NOT HAVE A NAME

// SINCE THIS IS A FUNCTION EXPRESSION IT IS AN EXECUTABLE STATEMENT AND REQUIRES SEMICOLON

//--------------------------------------------------------------------ANONYMOUS FUNCTIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// YOU MAY WANT TO PASS ARGUMENTS INTO IT

let person = {

firstName: 'John',

lastName: 'Doe'

}  ;

(function() {

console.log(person.firstName, " ", person.lastName);

} ) (person);

// THE LAST PARANTHESIS IS THE OBJECT WE ARE ACCESSING

// STORED INSIDE A VARIABLE TO CALL IT MULTIPLE TIMES IF WE WANT

let a = 5;

let b = 5;

let show = function() {

let sum = a + b;

console.log(sum);

};

// TO CALL IT ONLY NEED CALL THE VARIABLE NAME

show();

// HERE WE CAN SEE IT IN CONSOLE

console.log(show());

//--------------------------------------------------------------------ARROW FUNCTIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// ARROW FUNCTIONS

/*

Arrow functions are shorthand for anonymous functions.

The arrow replaces the keyword function.

They cannot be named and they only work as function expressions. (can they be put in variables? - yes)

*/

function sayHi() {

return "Hi!";

};

// is the same as

let sayHi = () => {

return "Hi!";

};

// Arrow Functions have an implicit return if you leave out the curly braces

function add (num1, num2) {

return num1 + num2;

};

// is the same as

let add = (num1, num2) => num1 + num2;

/*

Summary

Can only be used as shorthand for anonymous function expressions

Must put parentheses around parameters if there are 0 or 2+ parameters

Return statement is implied if you leave out curly braces

They do not make their own this

*/

//--------------------------------------------------------------------IMPLICIT RETURN IN JAVASCRIPT----------------------------------------------------------------------------//

// LET'S LOOK CLOSER AT IMPLICIT RETURN VS NOT IMPLICIT RETURN

// You can use two methods to assign arrow functions:

let append = (a, b) => a + b; // short syntax

// and

let append = (a, b) => { return a + b; }; // block syntax

// The main difference is that curly brackets, unlike round ones, allow us to write multiline instructions inside a function.

// However, remember that when using this method, you must specify a return directive to return the value.

// If there is one parameter in your function, you do not need to frame it with parentheses. For example:

let sum = a => a + 2;

sum(1);  // 3

// At the same time, parentheses are needed in functions without parameters.

// Where arrow functions are most useful is with callback functions like map and filter!

let arrMF = [1,2,3,4];

arrMF.map(function(num) {

return num * 2;

});

// is the same as

arrMF.map(num => num * 2)

// Things you do not need to know “yet”

// CLOSURES A closure is a function that has access to variables in its outer scope.

// RECURSION A recursive function is a function that calls itself. Alternative to iteration suitable for a smaller subset of problems.

//----------------------------------------------------------------------THIS AND ARROW FUNCTIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// Arrow functions cannot bind this. In other words, the arrow functions do not have their own this.

// If we use this inside an arrow function, its value is taken from an external function declared the usual way:

let movie = {

name: "The Thirteenth Floor",

age: 1999,

getInfo() {

let arrow = () => console.log("The movie " + this.name + " was shot in " + this.age);

arrow();

}

};

movie.getInfo(); // The movie The Thirteenth Floor was shot in 1999

// In fact, the specifics of using this in JavaScript are not limited to the examples described above. Here we've covered only the basics of working with this keyword, so there's a lot more to learn.

//----------------------------------------------------------------COMPARING FUNCTION SYNTAX IN JAVASCRIPT----------------------------------------------------------------------------//

// Let's create some functions using different syntax and compare them:

function mult1(a, b) {                    // traditional syntax

return a * b;

}

let mult2 = (a, b) => { return a * b; };  // block arrow function syntax

let mult3 = (a, b) => a * b;              // short arrow function syntax

console.log(mult1(3, 2)) // 6

console.log(mult2(3, 2)) // 6

console.log(mult3(3, 2)) // 6

// As you can see, the results of all these functions are identical...

// ...but the shorter syntax of the arrow function makes it more convenient to write.

// It's important to use a tool appropriate for the particular problem.

// If you have code where all functions are written in a traditional way, don’t use Arrow functions.

// Always think in terms of the existing code structure.

//------------------------------------------------------------MORE COMPARING FUNCTION SYNTAX IN JAVASCRIPT----------------------------------------------------------------------------//

// SUMMARY: FUNCTION SYNTAX IS COMPLICATED AND NUANCED

// THIS SECTION DOES NOT INCLUDE INFO ON CALLBACK FUNCTIONS

// THIS SECTION DOES NOT INCLUDE INFO ON RECURSION

// TWO CATEGORIES OF FUNCTIONS WITH SLIGHTLY DIFFERENT STACK BEHAVIORS

// DECLARED FUNCTIONS   AKA "REMOTELY" CALLED/INVOKED FUNCTIONS

// ARE LIKE AN ADVANCED VARIABLE WITH VAR

// CAN BE REDECLARED

// GET HOISTED TO GLOBAL SCOPE

// FUNCTION EXPRESSIONS AKA IMMEDIATELY CALLED/INVOKED FUNCTIONS

// ARE ENCASED IN PARANTHESIS

// MUST HAVE SEMI COLON AT END

// THE FUNCTION EXECUTION ORDER IS THE CALL/INVOKE ORDER FROM TOP TO BOTTOM

// THIS IS TRUE FOR IMMEDIATELY CALLED

// THEY STILL WAIT THEIR TURN IN TOP DOWN ORDER OF CALLS

// CAN A REMOTE FUNCTION BE CALLED BEFORE DECLARED????

// YES BECAUSE FUNCTIONS ARE SCANNED IN AN EARLY EXECUTION CONTEXT

// IN OTHER WORDS THE DECLARATION CAN BE BELOW THE CALL IN THE PROGRAM

// FUNCTION CAN BE SPAWNED IN 2 WAYS

// USING FUNCTION KEYWORD

// CAN BE ANONYMOUS OR NAMED

// USING ARROW SYMBOL

// MUST BE ANONYMOUS

// FUNCTIONS CAN BE THE VALUE OF A VARIABLE

// WHEN FUNCTION IS VALUE OF THE VARIABLE THEY ESSENTIALLY TAKE THE VARIABLE IDENTIFIER AS THEIR OWN

// THE FUNCTION CAN HAVE ITS OWN NAME IN THE VARIABLE

// BUT THIS NAME CANNOT BE USED TO CALL THE FUNCTION OUTSIDE THE VARIABLE

// THE VARIABLE IDENTIFER MUST BE USED TO CALL THE FUNCTION

// PARANTHESIS CAN ACCOMPANY THE VARIABLE IDENTIFIER TO PASS ARGUMENTS AT CALL

// FUNCTIONS CAN BE A PARAMETER/ARGUMENT OF ANOTHER FUNCTION - CALLBACK?

// FUNCTIONS CAN CALL THEMSELVES - RECURSION?

// PARAMETERS ARE ALWAYS AT THE BEGINNING PARENTHESIS OF FUNCTION - SCOTT NAME: PARAMETER PARANTHESIS

// ARGUMENTS ARE ALWAYS AT THE END PARENTHESIS OF A FUNCTION      - SCOTT NAME: ARGUMENT PARANTHESIS

// WHEN CALLING A FUNCTION THIS LOOKS LIKE BEGINNING FOR ARGUMENTS

// BUT IT IS NOT BECAUSE THE PARAMETER PARENTHESIS ARE NOT DISPLAYED IN IDENTIFIER WHEN CALLING

// FUNCTIONS WITHOUT PARAMETERS WILL LOOK FOR MATCHING GLOBAL VARIABLES IF NO MATCHING LOCAL VARIABLES

// ARGUMENTS AT CALL ARE IGNORED

// FUNCTIONS WITH PARAMETERS WILL LOOK FOR ARGUMENTS

// IF NO ARGUMENTS GIVEN THEY DO NOTTTTTT LOOK FOR GLOBAL VARIABLES

// MAY YIELD UNEXPECTED OR INCORRECT RESULTS

// RETURN IS THE FINAL VALUE ASSIGNMENT OF THE FUNCTION

// IT ALSO ENDS THE FUNCTION

// VALUE CAN VARY DEPENDING ON ARGUMENTS IN A SPECIFIC CALL

// CONSOLE.LOG(FUNCTION()) WILL PRINT THE RETURN

// CONSOLE.LOG(FUNCTION) WITHOUT USING THE () WILL PRINT THE OBJECT

// THE ESSENTIAL COMPONENTS OF A FUNCTION ARE:

// "CREATOR"

// MIGHT BE function    SCOTT NAME: DECLARATIVE KEYWORD FUNCTION

// MIGHT BE =>          SCOTT NAME: DECLARATIVE SYMBOL ARROW

// PARAMETER PARANTHESIS

// MIGHT ONLY BE SEEN AT DECLARATION

// MIGHT BE EMPTY

// CAVEAT - ON AN ANONYMOUS IMMEDIATELY INVOKED ARROW FUNCTION WITH NONE OR ONE? PARAMETER THESE ARE NOT REQUIRED

// ARGUMENT PARANTHESIS

// MIGHT ONLY BE SEEN AT CALL

// MIGHT BE EMPTY

// THE OPTIONAL COMPONENTS OF A FUNCTION ARE:

// IMMEDIATE INVOCATION PARANTHESIS (AT VERY BEGINING AND VERY END)

// IDENTIFIER

// PARAMETER VARIABLE IDENTIFIERS (PARAMETERS)

// RETURN

// THERE ARE OCCASIONS WHEN RETURN IS IMPLICIT

// CODE BLOCK

// ARGUMENT VALUES PASSED (ARGUMENTS)

// ANYTHING ELSE INSIDE A FUNCTION IS NOT AN INNATE COMPONENT OF FUNCTIONS

// UNLESS IT IS ANOTHER NESTED FUNCTION (TECHNICALITY)

// TEST VARIABLES

let a = "two";

let b = "three";

let c = 2;

let d = 3;

let e = "test";

let f = "call"

console.log(""); // line break for readability

// DECLARED KEYWORD STYLE

// NO PARAMETERS

// ARGUMENTS AT CALL IGNORED - function body looks for a and b variables in global

function add_1_1() {

let result = a + b;

console.log("add_1_1: keyword no parameter: " + result);

return result;

}

add_1_1()         // returns twothree

add_1_1(a, b);    // returns twothree - but not from the arguments

add_1_1(c, d);    // returns twothree

add_1_1(3, 3);    // returns twothree

console.log(""); // line break for readability

// DECLARED KEYWORD STYLE

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

function add_1_2(a, b) {

let result = a + b;

console.log("add_1_2: keyword with parameter: " + result);

return result;

}

add_1_2()               // returns NaN

add_1_2(a, b);          // returns twothree

add_1_2(c, d);          // returns 5

add_1_2(3, 3);          // returns 6

console.log(""); // line break for readability

// DECLARED IN VARIABLE

// ALSO DECLARED KEYWORD STYLE

// NO PARAMETERS

// ARGUMENTS AT CALL IGNORED - function body looks for a and b variables in global

let add_2_1 = function add_2_1() {

let result = a + b;

console.log("add_2_1: keyword in a variable no parameter: " + result);

return result;

}

add_2_1()               // returns twothree

add_2_1(a, b);          // returns twothree - but not from the arguments

add_2_1(c, d);          // returns twothree

add_2_1(3, 3);          // returns twothree

console.log(""); // line break for readability

// DECLARED IN VARIABLE

// ALSO DECLARED KEYWORD STYLE

// WITH DIFFERENT NAME THAN VARIABLE

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

let add_2_5 = function add_2_5_different(a, b) {

let result = a + b;

console.log("add_2_5: keyword in a variable with parameter and different identifier: " + result);

return result;

}

add_2_5()               // returns NaN

add_2_5(a, b);          // returns twothree

add_2_5(c, d);          // returns 5

add_2_5(3, 3);          // returns 6

// add_2_5_different();  // will NOT call the function

console.log(""); // line break for readability

// DECLARED IN VARIABLE

// ALSO DECLARED KEYWORD STYLE

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

let add_2_2 = function add_2_2(a, b) {

let result = a + b;

console.log("add_2_2: keyword in a variable with parameter: " + result);

return result;

}

add_2_2()               // returns NaN

add_2_2(a, b);          // returns twothree

add_2_2(c, d);          // returns 5

add_2_2(3, 3);          // returns 6

console.log(""); // line break for readability

// DECLARED IN VARIABLE

// ALSO DECLARED WITH KEYWORD

// ANONYMOUS STYLE

// NO PARAMETERS

// ARGUMENTS AT CALL IGNORED - function body looks for a and b variables in global

let add_2_3 = function () {

let result = a + b;

console.log("add_2_3: keyword and anonymous in a variable no parameters: " + result);

return result;

}

add_2_3()               // returns twothree

add_2_3(a, b);          // returns twothree - but not from the arguments

add_2_3(c, d);          // returns twothree

add_2_3(3, 3);          // returns twothree

console.log(""); // line break for readability

// DECLARED IN VARIABLE

// ALSO DECLARED WITH KEYWORD

// ANONYMOUS STYLE

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

let add_2_4 = function (a, b) {

let result = a + b;

console.log("add_2_4: keyword and anonymous in a variable with parameters: " + result);

return result;

}

add_2_4()               // returns NaN

add_2_4(a, b);          // returns twothree

add_2_4(c, d);          // returns 5

add_2_4(3, 3);          // returns 6

console.log(""); // line break for readability

// DECLARED IN VARIABLE

// DECLARED WITH ARROW

// ANONYMOUS STYLE

// NO PARAMETERS

// ARGUMENTS AT CALL IGNORED - function body looks for a and b variables in global

let add_3_1 = () => {

let result = a + b;

console.log("add_3_1: arrow and anonymous in a variable no parameters: " + result);

return result

};

add_3_1()               // returns twothree

add_3_1(a, b);          // returns twothree - but not from the arguments

add_3_1(c, d);          // returns twothree

add_3_1(3, 3);          // returns twothree

console.log(""); // line break for readability

// DECLARED IN VARIABLE

// DECLARED WITH ARROW

// ANONYMOUS STYLE

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

let add_3_2 = (a, b) => {

let result = a + b;

console.log("add_3_2: arrow and anonymous in a variable with parameters: " + result);

return result

};

add_3_2()               // returns NaN

add_3_2(a, b);          // returns twothree

add_3_2(c, d);          // returns 5

add_3_2(3, 3);          // returns 6

console.log(""); // line break for readability

// IMMEDIATELY INVOKED

// DECLARED WITH KEYWORD

// NAMED

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

(function immediate(a, b) {

let result = a + b;

console.log("immediately invoked, named, keyword, with parameters, with arguments: " + result);

return result

}) (c, d);

// immediate(); cannot be called outside the expression

console.log(""); // line break for readability

// IMMEDIATELY INVOKED

// DECLARED WITH KEYWORD

// ANONYMOUS STYLE

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

(function (a, b) {

let result = a + b;

console.log("immediately invoked, anonymous, keyword, with parameters, with arguments: " + result);

return result

}) (c, d);

console.log(""); // line break for readability

// IMMEDIATELY INVOKED

// DECLARED WITH KEYWORD

// ANONYMOUS STYLE

// NO PARAMETERS

// ARGUMENTS AT CALL IGNORED - function body looks for a and b variables in global

(function () {

let result = a + b;

console.log("immediately invoked, anonymous, keyword, no parameters, with arguments (ignored): " + result);

return result

}) (c, d);

console.log(""); // line break for readability

// IMMEDIATELY INVOKED

// DECLARED WITH KEYWORD

// ANONYMOUS STYLE

// NO PARAMETERS

// ARGUMENTS AT CALL IGNORED - function body looks for a and b variables in global

(function () {

let result = a + b;

console.log("immediately invoked, anonymous, keyword, no parameters, no arguments: " + result);

return result

}) ();

console.log(""); // line break for readability

// IMMEDIATELY INVOKED

// DECLARED WITH ARROW

// ANONYMOUS

// WITH PARAMETERS

// ARGUMENTS AT CALL USED IN FUNCTION BODY

// IF NO ARGUMENTS IT DOES NOT LOOK FOR GLOBAL VARIABLE

((a, b) => {

let result = a + b;

console.log("immediately invoked, anonymous, arrow with parameters, with arguments: " + result);

return result

}) (c, d);

console.log(""); // line break for readability

// IMMEDIATELY INVOKED

// DECLARED WITH ARROW

// ANONYMOUS

// NO PARAMETERS

// ARGUMENTS AT CALL IGNORED - function body looks for a and b variables in global

(() => {

let result = a + b;

console.log("immediately invoked, anonymous, arrow with parameters, with arguments: " + result);

return result

}) (c, d);

console.log(""); // line break for readability

// TO TEST STACK/EXECUTION ORDER

function testCall(a, b) {

let result = a + b;

console.log("this is function testCall with return: " + result);

return result;

}

testCall(e, f);

console.log(""); // line break for readability

add_1_1(e, f);

add_1_2(e, f);

add_2_2(e, f);

add_2_3(e, f);

add_2_4(e, f);

add_2_5(e, f);

add_3_1(e, f);

add_3_2(e, f);

//------------------------------------------------------------MORE ON ANONYMOUS FUNCTIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// Let’s remember a common way to define a function:

function myFunction() {

// ...

}

myFunction();

// However, it's also possible to rewrite the code above in a different way:

const myFunction = function() {

//...

}

myFunction();

// the second way is anonymous, that is, a function declared without specifying its name

// When you define a named function, you can call it in any part of your code.

// This is because the browser creates a reference to this function before calling it.

// THerefore it doesn't matter if you place the function definition before or after calling it:

// this code works

setPrice = function setPrice() {

// ...

}

setPrice();

// this code works too

setColor();

const setColor = function setColor() {

// ...

}

// However, this is not the case with anonymous functions.

// These functions are created when they are called.

// Thus, you can only access an anonymous function after it has been defined.

// this code works

const setPrice = function() {

// ...

}

setPrice();

// this code doesn't work

setColor();

const setColor = function() {

// ...

}

//------------------------------------------------------------ANONYMOUS FUNCTIONS AS PARAMETERS IN JAVASCRIPT----------------------------------------------------------------------------//

// One of the most common cases is passing anonymous functions as arguments to other functions:

setTimeout(function () {

console.log("Timer has finished!")

}, 5000);

// Anonymous functions are also useful for doing simple operations like multiplication, for example:

let multiplication = function (x, y) {

return x * y;

};

multiplication(5, 8);

// In the example above we declare an anonymous function in the variable multiplication.

// Since we don't have a reference to an anonymous function this is a simple way to call it in other parts of the code.

// Programmers like to apply anonymous functions as arguments because they're short.

//------------------------------------------------------------IMMEDIATELY INVOKED ANONYMOUS FUNCTIONS IN JAVASCRIPT----------------------------------------------------------------------------//

// Sometimes you need to define a function and call it immediately.

// It makes sense to use a function without a name for cases when you do not need to call it again.

(function() {

console.log("I've been launched!");

}());

// We wrapped the anonymous function in parentheses and initiated the function call by adding () at the end.

// This function will be executed as soon as the browser reads this code.

// The main idea is to use local variables inside an anonymous function without affecting variables with the same name located outside of this function.

// This approach works well for plugins and other additional developer tools.

// You can also use arguments immediately when calling an anonymous function:

const text = "I've been launched!";

(function(text) {

console.log(text);

}(text));

// As before, you will see the text "I've been launched!" in the console.

//------------------------------------------------------------MULTIPLE WAYS TO WRITE SAME FUNCTION IN JAVASCRIPT----------------------------------------------------------------------------//

// START WITH SOME VARIABLES WE WILL PASS AS ARGUMENTS

let a = 5;

let b = 6;

// THEN WE MAKE A FUNCITON THE OLD FASHIONED WAY

function sample(a, b) {

if (a === b) {

console.log('equal');

} else console.log('not equal');

console.log(a + b);

return a + b;

};

// THEN WE MAKE AN ANONYMOUS FUNCTION

(function(){

if (a === b)

console.log('equal');

else console.log('not equal');

console.log(a + b);

return a + b;

}) (a, b);

// THEN WE MAKE AN ANONYMOUS FUNCTION USING ARROW???????????

WORK ON THIS

(function(){

if (a === b)

console.log('equal');

else console.log('not equal');

console.log(a + b);

return a + b;

}) (a, b);

// THEN WE MAKE AN ANONYMOUS FUNCTION INSIDE A VARIABLE

let sample2 = function (a,b)

{

if (a === b)

console.log('equal');

else console.log('not equal');

console.log(a + b);

return a + b;

};

// THEN WE MAKE AN ANONYMOUS FUNCTION INSIDE A VARIABLE USING ARROW

let sample3 = (a, b) => {

if (a === b) console.log('equal');

else console.log('not equal');

console.log(a + b);

return a + b;

}

sample(a,b);

sample2(a,b);

sample3(a,b);

//-----------------------------------------------------------------SCHEDULING A CALL IN JAVASCRIPT----------------------------------------------------------------------------//

// setTimeout

// used to have a timed delay for something

// this method can have three parameters or more:

//      the function to call after the delay

//      the delay period in milliseconds

//      arugments for the function

// with anonymous function expression

setTimeout(function() {

console.log("Welcome to our website! You have a special discount today!");

}, 5000)

// with declared function

function welcome(name) {

console.log(name + ", welcome to our website! You have a special discount today!");

}

let userWelcomeMessage = setTimeout(welcome, 5000, "Mary");

// you can set the delay to zero and the function won't wait...

// however this function will be executed AFTER functions that are lower than it.

// setInterval

// used to call a function repeatedly over a specific time period - similar to an alarm

// this method can have three parameters or more:

//      the function to call after the interval

//      the interval period in milliseconds

//      arugments for the function

function alarm(time) {

console.log("Wake up! It’s " + time + " o'clock!");

}

setInterval(alarm, 3000, 8);

// CLEARING INTERVALS

// when you launch a timer the browser keeps running the task forever which uses resources

// therefore you should avoid running timers that are not needed

// use clearTimeout and clearInterval

let timerId = setTimeout(...);

clearTimeout(timerId);

const intervalId = setInterval(alarm, 2000);

clearInterval(intervalId);

//-----------------------------------------------------------------------ERRORS IN JAVASCRIPT----------------------------------------------------------------------------//

// SYNTAX ERROR

/*

You’ve seen this one before!

You have to fix these right away!

"awesome;

function first( {}

let = "nice!";

*/

// REFERENCE ERROR

/*

Thrown when you try to access a variable that is not defined

This does not mean undefined

function sayHi() {

let greeting = "hi!";

}

sayHi();

greeting;   // ReferenceError

*/

// TYPE ERROR

/*

Trying to do something with a type that you can not

Accessing properties on undefined or null

Invoking (“calling”) something that is not a function

"awesome".splice(); // TypeError

let obj = {};

obj.firstName.moreInfo; // TypeError

*/

// RANGE ERROR

/*

I think this is stack overflow

Happens with callback or recursive functions sometimes

*/

//--------------------------------------------------------------------TRY CATCH BLOCK----------------------------------------------------------------------------//

// When an error occurs, JS will normally stop and generate an error message

// The technical term for this is JS will throw and exception

// exception = error

// JS will actually create an Error object with two properties: name and message

// Errors interrupt the code

// To prevent this disruption we use try catch blocks

try {

adddlert("Welcome guest!");

} catch (error) {

document.getElementById("demo").innerHTML = err.message;

} console.log("This console.log will definately run bc it is outside the block");

// The try statement defines a code block to try to run.

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

throw "Too big";    // throw a text

throw 500;          // throw a number

//-----------------------------------------------------------------------ERROR HANDLING----------------------------------------------------------------------------//

// You can also throw erros to indicate a problem:

function getHighestGrade(tests) {

if (tests.length === 0) {

throw new Error("No tests provided!");

}

// ... rest of code follows ...

}

// This creates an error object that can be handle by a try catch

// these throw errors are built in under the hood in the pre baked methods in JS

// learn about the throw key word...

//----------------------------------------------------------------------WRITING TESTS----------------------------------------------------------------------------//

// Manually testing software is boring

// Therefore we tend not to re-run things that "work"

// And therefore don't notice when they break

// Tests often clarify expectations of a function

// What should legal input/output be?

// Tests are often a great way to understand what code does

// It's a core skill for developers

// We can write automated tests

// We will use Jasmine which is a popular JS testing framework

// Jasmine mandatory files:

// 1 css? file

// 4? js files

// Include your regular JS file & JS test file

// the test file should be fileName.test.js

// in the test file there are different specs aka test cases

// you will use an it statement with a label and callback function

// inside the callback will be one or multiple expect statements

// it("label", function(){

//    expect()

// })

//----------------------------------------------------------------------JASMINE EXAMPLE----------------------------------------------------------------------------//

// the function I create to do something:

function calculateTaxes(income) {

if (income > 30000) {

return income * 0.25;

} else {

return income * 0.15;

}

}

console.log(calculateTaxes(500))

// write a test file:

it('should calculate lower-bracket taxes', function () {

expect(calculateTaxes(10000)).toEqual(1500);

expect(calculateTaxes(20000)).toEqual(3000);

});

it('should calculate higher-bracket taxes', function () {

expect(calculateTaxes(50000)).toEqual(12500);

expect(calculateTaxes(80000)).toEqual(20000);

});

//----------------------------------------------------------------------JASMINE MATCHERS----------------------------------------------------------------------------//

.toEqual(obj)

// Has the same values (eg, different lists with same values match)

.toBe(obj)

// Is the same object (eg, different lists with same items don’t)

.toContain(obj)

// Does object/array contain this item?

.not.

// Add before matcher to invert (eg expect(...).not.toEqual(7))

/* What To Test»

- Test every function in at least one way

- Think about “edges”

- What if the list were empty?

- What about non-integer numbers?

- What if the file can’t be found?

- Is the first case/last case handled differently?

*/

/* Testable Code»

Write code that is easier to test!

- More functions & smaller functions: easier to test (& debug!)

- Don’t mix logic & UI in a function

*/

//--------------------------------------------------------------------BUGS IN JAVASCRIPT----------------------------------------------------------------------------//

// AN ERROR IS THROWN - EASIER

// YOU DIDN'T GET WHAT YOU WANTED - HARDER

// A PROCESS FOR DEBUGGING

/*

Make assumptions

Test assumptions

Prove assumptions

Repeat

*/

// console.log

/*

Be mindful about what you print out

Great for a sanity check

Even better when you add a message indicating what is being logged

console.log("We made it!");

console.log("x =", x);

*/

//--------------------------------------------------------------------DEBUGGING IN JAVASCRIPT----------------------------------------------------------------------------//

// COMMON DEBUGGING TECHNIQUES ARE WRITING MESSAGES TO CONSOLE AND SETTING BREAK POINTS

// A BREAKPOINT IS A SPECIAL POINT IN THE CODE THAT INTERRUPTS THE PROGRAM EXECUTION

// AN EASY WAY TO SET A BREAKPOINT IS TO USE THE debugger KEYWORD

// debugger = breakpoint

let friend = "John";

function greet(name) {

debugger; // breakpoint

return "Hello, " + name + "!";

}

console.log(greet(friend)); // Hello, John!

// YOU CAN ALSO SET BREAKPOINTS IN DEVELOPER TOOLS

// YOU SHOULD TAKE A CLASS DEDICATED TO BROWSER DEVELOPMENT TOOLS - LOOK ON LYNDA

// To set a breakpoint in the Developer Tools, you should click on the number on the left side of the code.

// The debugger keyword is convenient when you use a code editor.

// But if you also interact with the browser, you can set the breakpoint in the Developer Tools.

// PRINT TO CONSOLE AS NEEDED TO SEE WHAT IS HAPPENING

// RUN A DEBUGGER PROGRAM

//                        - you can run the program step by step

//                        - set breakpoints in the margin (must set at least one)

//                        - view variables and their values at each step

//                        - view registers and call stack

// RUBBER DUCK - talk through the problem step by step

//--------------------------------------------------------------------HELPFUL CONSOLES----------------------------------------------------------------------------//

console.log();

console.info();

console.warn();

console.debug();

console.table();

//--------------------------------------------------------------------SET IN JAVASCRIPT----------------------------------------------------------------------------//

// A SET IS LIKE AN ARRAY EXCEPT IT CANNOT HAVE TWO OF THE SAME VALUE

// A SET DOES NOT HAVE INDEXING

// SET IS A CLASS AND WE MUST USE CONSTRUCTOR NOTATION TO MAKE IT

let numbersSet = new Set(1, 22, 22, 22, 23);

console.log(numbers); // { 1, 22, 23}

let stringSet = new Set("bookkeeping");

console.log(string); // { 'b', 'o', 'k', 'e', 'p', 'i', 'n', 'g' }

// USE THE .add() METHOD TO ADD AN ELEMENT TO THE END OF A SET

let data = new Set();

data.add(4);

data.add(3);

data.add("computer");

data.add("science");

data.add("computer");

data.add('a');

data.add('b');

data.add('a');

console.log(data); // { 4, 3, 'computer', 'science', 'a', 'b' }

//--------------------------------------------------------------------COMPUTATIONAL THINKING----------------------------------------------------------------------------//

Describe the problem

What exactly needs to be done? What input data are you given and what does the desired outcome look like?

Identify the important details needed to solve this problem

Before thinking of a solution, make sure you take into account all the important aspects of the problem. The devil is in the details, and in case of programming, it hides in edge cases.

Decompose

Break the problem down into small, logical steps until you know exactly how to code each part of it.

Use these steps to create an algorithm that solves the problem

Connect the pieces of the problem in a way that would produce the desired outcome in all specified cases.

Evaluate the process

Usually, a problem has at least a few solutions, and it’s very useful to evaluate your idea to make sure you've chosen a way that is as efficient as possible.

Decomposition

Extracting and Generalizing patterns

Abstraction

Evaluation

//--------------------------------------------------------------------OBJECT ORIENTATED PROGRAMING----------------------------------------------------------------------------//

// Objects interact with each other to perform the program functions

// Objects are characterized by having states and behaviors

// An object's current state is represented by its fields aka attributes (data, variables etc) and methods (functions)

// Objects can sometimes model real world entities.

// In OOP everything is viewed as an object, even a class.

// INTERFACE

// Sometimes objects don't have a state or method. An example is an interface.

// INTERFACE: a class that only serves to be ingerited from in order to guarantee an interface to its descendant class.

// It is a stateless class.

// CLASS

// Often many individaul objects have similar characteristics. We can say they belong to the same class.

// In OOP a class describes a common structure of similar objects.

// It may be considered a template or a blueprint for similar objects.

//---------------------------------------------------------------PRINCIPLES OF OBJECT ORIENTATED PROGRAMING----------------------------------------------------------------------------//

/*

ENCAPSULATION

Ensures bundling (encapsulating) of data and the methods operating on that data into a single unit.

It also refers to the ability of an object to hide the internal structure of its properties and methods.

ABSTRACTION

Objects should provide the simplified, abstract version of their implementations.

The details of their internal work usually aren't necessary for the user, so there's no need to represent them.

Abstraction also means that only the most relevant features of the object will be presented.

INHERITANCE

Is a mechanism for defining parent-child relationships between classes.

Often objects are very similar, so inheritance allows programmers to reuse common logic

and at the same time introduce unique concepts into the classes.

POLYMORPHISM

Literally means "having many forms" and is a concept related to inheritance.

It allows programmers to define different implementations for the same method.

Thus, the name (or interface) remains the same, but the actions performed may differ.

For example, imagine a website that posts three main types of text: news, announcements, and articles.

They are somewhat similar in that they all have a headline, some text, and a date.

In other ways, they are different: articles have authors, news bulletins have sources,

and announcements have a date after which they become irrelevant.

It is convenient to write an abstract class with general information for all publications

to avoid copying it every time and store what is different in the appropriate derived classes.

These are the key concepts of OOP.

Each object-oriented language implements these principles in its own way,

but the essence stays the same from language to language.

*/

//---------------------------------------------------------------LIBRARY----------------------------------------------------------------------------//

// Somebody else's code that exposes functionality for a specific purpose

//---------------------------------------------------------------jQuery----------------------------------------------------------------------------//

// Vanilla JS is JS without any library or framework

// jQuery is a libray for:

//    - Manipulating the DOM

//    - Adding event listeners

//    - Animating elements

//    - Making HTTP requests (AJAX)

// The DOM used to be not so great

// JQuery was very helpful in these days

// Why should you learn jQuery?

//    - Brevity and clarity

//    - Cross-Browser support  (caniuse.com = great resource)

//    - AJAX

//    - 77% of the top 1,000,000 most visited pages use it

//    - it makes some tasks syntactically easier ie chaining

//-------------------------------------------------------INCLUDING jQuery and Selecting Elements----------------------------------------------------------------------------//

// Loading jQuery <script src="https://code.jquery.com/"></script>

// once you include jQuery script, you have access to global $

// It's as easy as mastering your CSS selectors! (Except you need to remember your CSS selectors)

$("ul")

// like document.querySelectorAll,

// this will select ALL uls

$("#todo-container")

// like document.getElementById, this will

// select the elements with that ID

$(".carousel-image")

// like document.querySelectorAll, this will

// select ALL the elements with that class

// This gives a JQuery object (not a DOM element object)

// You can get a plain vanilla DOM element/list fom jQuery objects

// but it is uncommon to want to do this - use the jQuery object!

let $listItems = $("li");

$listItems; // a jQuery object

$listItems.get();

// an array of HTML LI Elements

$listItems.get(0);

// the first HTML LI Element

//-------------------------------------------------------jQuery SELECTORS----------------------------------------------------------------------------//

$("*")

Syntax  Description

$("*")                      Selects all elements

$(this)                     Selects the current HTML element

$("p.intro")                Selects all <p> elements with class="intro"

$("p:first")                Selects the first <p> element

$("ul li:first")            Selects the first <li> element of the first <ul>

$("ul li:first-child")      Selects the first <li> element of every <ul>

$("[href]")                 Selects all elements with an href attribute

$("a[target='_blank']")     Selects all <a> elements with a target attribute value equal to "_blank"

$("a[target!='_blank']")    Selects all <a> elements with a target attribute value NOT equal to "_blank"

$(":button")                Selects all <button> elements and <input> elements of type="button"

$("tr:even")                Selects all even <tr> elements

$("tr:odd")                 Selects all odd <tr> elements

//-------------------------------------------------------jQuery METHODS----------------------------------------------------------------------------//

// a great way to learn these is to compare them to vanilla JS methods!

.attr()                                               // sets and / or gets the specified attribute / value

.val()                                                // sets or returns the value of form fields

.text()                                               // sets or returns the text content of selected elements

.html()                                               // sets or returns the content of selected elements

.css() // inline CSS

.addClass() / .removeClass() / .toggleClass()

.empty() / .remove()

.append() / .prepend()                                // inserts content at the end / begining of the selected element

.after() / .before()                                  // inserts content after / before selected element

.find() / .closest() / .parent() / .next() / .prev()

//-------------------------------------------------------STORING jQuery Objects in variables----------------------------------------------------------------------------//

// It's a common convention to store jQuery objects in variable names that begin with $

// This isn't necessary but clearly communicates your intent that this is a jQuery variable not a Vanilla JS variable

let $firstName = $("#firstName");

let firstName = $("#firstName").val();

// 200 lines later...

console.log($firstName);

// the jQuery object for the input element

console.log(firstName);

// not the jQuery object for the element!

//-------------------------------------------------------jQuery GETTER / SETTER PATTERN----------------------------------------------------------------------------//

// Vanilla JS: .getAttribute(attName) and .setAttribute(attrName, newValue)

// jQuery: .attr(attrName, newValue) (second param is optional)

// Here jQuery does both of these tasks in just one function

// This is common with jQuery methods

//-------------------------------------------------------CHAINING WITH jQuery----------------------------------------------------------------------------//

// Almost all jQuery methods return a jQuery object, which allows for method chaining

// Instead of performing DOM operations line-by-line, we can chain method calls together on a single jQuery object

// Vanilla JS:

const tasks = document.querySelectorAll(".Task");

for (const task of tasks) {

task.style.color = "red";

task.innerText = "Please do this!";

task.addEventListener("click", completeTask);

}

// jQuery:

$(".Task")

.css("color", "red")

.text("Please do this!")

.on("click", completeTask);

//-------------------------------------------------------CREATING ELEMENTS WITH jQuery----------------------------------------------------------------------------//

// Instead of using document.createElement("li") we can simply create an element using:

$("<li>")

// Do not confuse this with the jQuery for selecting an existing li element:

$("li")

// Vanilla JavaScript

let footer = document.getElementById("footer");

let newItem = document.createElement("b");

newItem.classList.add("message");

newItem.innerText = "Hey!";

newItem.insertBefore(footer);

// jQuery

let $footer = $("#footer");

$("<b class='message'>Hey!</b>").insertBefore($footer);

//-------------------------------------------------------Waiting for DOM to load with jQuery----------------------------------------------------------------------------//

// Vanilla JS we have DOMContentLoaded

// jQuery: $(mainFunction); or $(document).ready(mainFunction);

//

//-------------------------------------------------------EVENTS with jQuery----------------------------------------------------------------------------//

// jQuery's on() works similarly to addEventListener

// logs when item with id "submit" clicked

$("#submit").on("click", function() {

console.log("Another click");

});

//alerts when ANY button is clicked

$("button").on("click", function() {

console.log("button clicked!");

});

/* TIP Why Use on()?

In most cases, click() and on(“click”) will both get the job done. However, there is one key difference:

.click(callback) is a shorthand for .on(“click”, callback)

on() accepts optional argument between type of event and callback

This flexibility allows us to leverage event delegation.

*/

//-------------------------------------------------------EVENT DELEGATION with jQuery----------------------------------------------------------------------------//

// we can attach an event listener to a parent element

// the parent can then delegate the event listener to dynamicaaly created elements

// it can be such that we only invoke the callback if the event target matches a certain selector (the dynamically created child)

//---------------------------------------------------------HOW THE WEB WORKS----------------------------------------------------------------------------//

// NETWORKS a set of computers that can intercommunicate

// INTERNET is a really big network

// LOCAL the internet is made up of smaller local networks

// IP ADDRESSES a unique address to find that computer on the network ie 123.77.32.121

// four numbers (0-255) connected by dots

// there is another way to specify - IPv6

// some computers can have multiple IP addresses

// multiple computers can share an IP address and use a router to direct traffic

// 127.0.0.1 is a special address for "this computer that you're on"

// In addtion to their IP address on the network, all computers can reach themselves at this address

// The name "localhost" always maps to 127.0.0.1

// URL uniform resource locator

// the human readable alias for an IP address

// protocol   -   hostname  -   port  -   resource  -   query

// https          site.com      80        /some/page.html       ?x=1

// PROTOCOLS set of rules, regulations, and conventions

// HTTP hypertext transer protocol (standard web)  (how browsers and servers communicate)

// HTTPS secure (how browsers and servers communicate with encryption)

// FTP file transfer protocol (an older protocol for sending files over the internet)

// there are many protocols but these are the common ones

// HOSTNAMES just nicknames for servers - server can have many hostnames ie site.com

// DNS domain network service turns this into an IP address ie site.com resolve to 123.45.67.89

// WWW world wide web is software (client server information sharing model) that lets you use the contect built on the internet

// CLIENT sends http requests and recieves http responses, browsers are the software responsible for this (client software)

// SERVER receives http requrests and provide http response, hosts documents

// PORT every server has 65,535 unique "ports" you can talk to

// DEFAULT PORT for http is 80 for https is 443

// Ports can be thought of as extensions to the IP

// machines can "listen" to certain points

// RESOURCE this always talks to some "web server" program on the server

// For some servers, may just have them read an actual file on disk: /home/page.html

// For many servers, "dynamically generates" a page

// QUERY string that provides "extra information" - search terms, info from forms, etc.

// The server is provided this info; might use to change page

// Sometimes, JavaScript will use this information in addtion/instead

// Query strings are initiated with ? followed by arguments

// Multiple arguments are separated by &: ?x=1&y=2

// Argument can be given several times: ?x=1&x=2

// an example is ?language=en vs ?language=es

// query string will be key value pairs

// the server determines the query string keys and values

// SUMMARY

// http://site.com/some/page.html?x=1 means:

// Turn "site.com" into 123.45.67.89

// Connect to 123.45.67.89

// On port 80 (the default)

// Using the http protocol

// Ask for /some/page.html

// why use http instead of https?

// because getting an SSL costs money

// may not be necessary if not handling logins or commerce

// is a static website

// when you try to go to http the browser will tell you it is unsecure

// DNS "I want to talk to site.com" "site.com is at 123.45.67.89"

// Browser -> Computer Cache -> Router -> ISP -> DNS Servers

// Browser checks each entity until it finds answer

// It can store the answer in these entities so that does not have to go to DNS Servers each time

// Unix (and OSX and Linux) systems ship with a utility, "host"

// which will translate a hostname into an IP address for you

// provides debugging information about the process by which it answered this

// $ host -t A site.com

// $ host -v -t site.com

// SOFTWARE is what makes a server a server and a client a client - a machine can do both if desired

// BROWSERS AND SERVERS

// REQUEST AND RESPONSE

// When you point your browser to a webpage on a server your browsers makes a request to that server

// This is almost always a GET request and it contains the exact URL you want

// The server then responds with the exact HTML text for that page

// It is often the case, though, that the web server itself will have to do some work to get teh page you want, often interacting with other things, such as database servers

// Headers are sent back in the response, they contain the body of the resonse and meta data

// REQUEST

// Method (eg GET)

// HTTP protocol version (almost always 1.1)

// Resource URL you want

// Headers

// Hostname you're asking about

// Date your browser thinks it is

// Language your browser wants information in

// Any cookies that server has sent

// And more!

// RESPONSE

// HTTP protocol version (almost always 1.1)

// Response Status Code (200, 404, etc)

// Headers

// Content Type (typically text/html for web pages)

// Date/time the server thinks it is

// Any cookies server wants to set

// Any caching information

// And more!

// Any time you click a link you are sending a GET request

// When you fill out a form and click send you are sending a POST request

// RESPONSE CODES

// 200 OK

// 301 What you requested is elsewhere

// 404 Not Found

// Server had an internal problem

// nc is a program which will allow you to interact with other computers over the IP network in a raw fashion

// Serving Over HTTP

// Just opening an HTML file in browser uses "file" protocol, not http

// you will notice instead of http:// it will be file://

// Some things don't work same (esp security-related stuff)

// It's often useful to start a simple HTTP server for testing

// You can start a simple, local HTTP server with Python: $ python3 -m http.server

// Then you can access it in a browser with:

// localhost:(the port number)

// 127.0.0.1:(the port number)

// Requesting 1 webpage often involves many serparate requests

// ie css or js or img url...

// Browsers issue these requests asynchronously

// They'll assemble the final result as requests come back

// You can view this in the browser console - Network

// TRYING ON COMMAND LINE

// Curl (OSX) - will make an HTTP request on the command line

// You will then see the body of the response

// Everything in the body of the response is a string (I think JSON)

// Methods: GET vs POST

// GET

// requests without side effects (ie, don't change server data)

// Typically, arguments are passed along in query string

// If you know the arguments, you can change the URL

// Entering-URL-in-browser, clicking links, and some form submissions

// POST

// requests with side effects (ie, change data on server)

// Some form submissions (but never entering-URL-in-browser or links)

// Always do this if there's a side-effect: sending mail, charge credit card, etc

// "Are you sure you want to resubmit?"

// HTTP Methods

// GET and POST are "HTTP methods" (also called HTTP verbs)

// They're the most common, by far, but there are others

//---------------------------------------------------------------AJAX----------------------------------------------------------------------------//

// Web Requests mean HTTP requests

// Traditional browser requests happen in response to:

// Entering a URL in the browser bar

// Clicking on a link

// Submitting a form

// In all cases:

// Browser makes requests

// Receives resonse

// Replaces entire resource with result

// These are called "Traditional Requests" or "Full Page Refresh"

// AJAX is a technique in JS for sending http requests and receiving responses from a server without having to reload the browser page.

// AJAX web request

// Made from JS in browser

// JS makes request (GET POST or others)

// You receive a response

// Do whatever you want ith result!

// What does AJAX stand for?

//  Originally was an acronym for Asynchronous Javascript and XML

// Many people don't send XML over AJAX nowadays

// Usually now it is more common to send HTML or JSON

// The technology is still the same, though, even if the data payload is commonly different.

// Ultimately AJAX is a cooler sounding acronym than AJAJ or AJAH

// Why use AJAX?

// Don't need to reload entire page if just 1 thing is changing

// Interactive web sites

// Fewer full page loads from server

// Your JS can talk to other servers directly

// Less info has to go across network

// Use Dev Tools to view these

// In the Network tab

// click fetch/XHR (fetch is a newer tool in JS) (XHR is XMLHttpRequest)

//---------------------------------------------------------------AJAX w AXIOS----------------------------------------------------------------------------//

// Axios is a library

// AJAX with Axios

// You don't have to use Axios for this

// There is an old, clunky built-in tood: (XMLHttpRequest)

// Or a newer-but-still-clunky built in tool: (fetch)

// Or lots of other libraries (including jQuery)

// ...but we'll use axios for now bc it is featureful and popular.

// Getting Axios

// <script src="https://unpkg.com/axios/dist/axios.js"></script>

// to check type axios in console (can also do this with jQuery)

// Making a Simple Request

// axios.get(url)

// Make a GET request to that URL

// Not What We Expected

let card = axios.get("/api/card");

console.log(card);

// "Promise {<pending>}"

// blocking code: code that is running and blocking other code - creates a blocked thread

// blocking code aka synchronous code

// asychronous chode does not necessarily run in order

// when there is a symbol indicating loading this is a block

// this is related to single threading and multi threading

// JS has concurrency

// synchronous is not necessarily bad

// but there are situations where asynchronous is a better user experience

// What's A Promise???

// We'll talk about it in more detail when we get to Node.

// For now, all you need to know is that a promise is like a placeholder for a future value.

// We want to wait for the promise to have that value before proceeding.

// But we don't know hwen the promise will receive its value!

// use the await keyword to wait for the promise

// Chrome allows us to use await in console

// Otherwise in JS it must be used in a certain way:

let card = axios.get("/api/card");

// or you must use the async keyword before a function:

async function getCardInfo() {

let reponse = await axios.get("/api/card");

console.log("got", respose);

return response.data;

}

// NO MATTER WHAT YOU RETURN IN AN ASYNC AWAIT FUNCTION YOU ALWAYS RETURN A PROMISE

// WE WOULD NEED TO ADD THE AWAIT KEYWORD BEFORE THE FUNCTION CALL BY WRAPPING THE FUNCTION IN ANOTHER ASYNC FUNCTION

async function main() {

console.log("first");

await getCardInfo();

console.log("second");

}

// Callbacks Vs Async/Await

// Callbacks are what we've used for event handlers and timers

// But they're trick to nest or do other complex things

//

// Axios API

// .get

// axios.get(url, ?config)

// config is an optional object many Axios methods use

// It holds speciic configuration for what you need.

// .get with Query Paramters:

// To make request for /resource?a=1&b=2 can either use:

// axios.get("/resource?a=1&b=2")

// OR

// axios.get("/resource", {params: {a: 1, b: 2}})

// .post

// axios.post(url, ?data, ?config)   (the ? means it is optional)

// axios.post(url, {a: 1, b:2})

// This is passed as JSON to the server

// JSON

// JSON is a string that looks like a JS object

// Most APIs use JSON to communicate

// What's an API? We'll talk about it soon!

// By default, Axios recognizes JSON response & turns into JS object

// By default, Axios sends POST data as JSON

// JSON has only two functions? parse and stringify?

Global JSON object

JavaScript comes with a global JSON object which can convert strings of JSON into JavaScript objects, and vice versa. These methods are JSON.stringify (object → JSON) and JSON.parse (JSON → object).

JSON.stringify({

name: "Whiskey",

favFood: "popcorn",

birthMonth: 7

});

// '{"name": "Whiskey", "favFood": "popcorn", "birthMonth": 7}'

JSON.parse('{"name": "Whiskey", "favFood": "popcorn", "birthMonth": 7}');

// {name: "Whiskey", favFood: "popcorn", birthMonth: 7}

NOTE “Form Encoded” POST requests

By default, Axios sends POST data as JSON. This is what almost all modern APIs expect.

When web browsers submit POST forms in the traditional way (ie, not using AJAX), they don’t send this data in JSON — they send it in an older format, “form-encoded”.

It’s not common that you’d want Axios to send POST data this way. But you may be working with older APIs that expect data in this format, or you may want to work on switching over an older, non-AJAX application to an AJAX one, and find it helpful for the server to receive traditional form-encoded data. For an example of how to do so, see https://www.npmjs.com/package/axios#browser

// SUMMARY

// TRADITIONAL WEB REQUESTS

// MADE BY BROSWER (VIA LINK, FORM URL BAR ETC)

// REPLACE ENTIRE PAGE WITH THING LINKED TO

// AJAX REQUESTS

// MADE VIA JS AJAX CALLS

// JS GET DATA; JS DECIDES WHAT TO DO WITH IT

// AXIOS IS THE POPULAR AJAX CLIENT WE'LL USE

// AJAX CALLS ARE ASYNCHRONOUS & RETURN A "PROMISE"

// YOU NEED TO "AWAIT" THOSE TO GET REAL RESULTS

// FUNCTION THAT USE AWAIT MUST BE "ASYNC"

// JSON

// AXIOS PARSES JSON RESPONSES AUTOMATICALLY FOR US

//--------------------------------------------------------------------JSON IN JAVASCRIPT----------------------------------------------------------------------------//

// WHAT IS JSON?

// JSON (or JavaScript Object Notation) is a text-based format for storing and transmitting structured data.

// It comes from the JavaScript language, but it is still considered to be language-independent:

// it works with almost any programming language.

// With JSON's lightweight syntax, you can easily store and send to other apps everything from numbers and strings to arrays and objects.

// You can also create more complex data structures by linking arrays to each other.

// JSON looks similar to JS objects, but all keys must be "double quoted".

// A JSON payload must be sent as a string over HTTP requests.

// To convert JS to JSON string: JSON.stringify(myObject)

// To convert JSON string to JS object: JSON.parse(jsonString)

// Most libraries do this for you

// BASIC SYNTAX

/*

JSON text can be built on one of two structures:

A collection of key:value pairs (associative array);

An orderly set of values (array or list).

JSON objects are written in curly braces {}, and their key:value pairs are separated by a comma ,.

The key and the value in the pair are separated by a colon :.

Here is an example for you:

*/

{

"first_name": "Sophie",

"last_name": "Goodwin",

"age": 34

}

// Here you can see some user's data in JSON format.

// Keys in an object are always strings, but values can be any of seven types of values,

// including another object or array.

// Note that there is no need to put a comma (,) after the last key:value pair.

// Arrays are written in square brackets [] and their values are separated by a comma ,.

// The value in the array, again, can be of any type, including another array or object.

// Here is an example of an array:

["night", "street", false, [ 345, 23, 8, "juice"], "fruit"]

// Most often, an array will include similar elements.

// JSON does not support comments.

// NESTED OBJECTS

// JSON is a highly flexible format. You can nest objects inside other objects as properties:

{

"persons": [

{

"firstName": "Whitney",

"lastName": "Byrd",

"age": 20

},

{

"firstName": "Eugene",

"lastName": "Lang",

"age": 26

},

{

"firstName": "Sophie",

"lastName": "Goodwin",

"age": 34

}

]

}

// If objects and arrays contain other objects or arrays, the data has a tree-like structure.

// The nested objects are fully independent and may have different properties:

{

"persons": [

{

"firstName": "Whitney",

"age": 20

},

{

"firstName": "Eugene",

"lastName": "Lang"

}

]

}

// But in practice, such objects often look similar.

// camelCase VS snake_case

/*

If you have read the JSON objects examples really carefully, you might have a lingering question: what style of compound word writing should be used for JSON?

CamelCase is a style where compound words are written together and without spaces, but each word inside the phrase starts with a capital letter. The style is called camelCase because the capital letters inside the word resemble camel's humps.

In snake_case style, compound words are written through the bottom underline.

In fact, the choice of the right JSON naming convention depends directly on your programming language and libraries. You can use both camelCase and snake_case, any choice will be valid, but do not mix them together in one JSON.

*/

// THE ADVANTAGES OF JSON

/*

JSON is widely spread for data exchange on the Internet because of its strong advantages:

compactness;

flexibility;

high readability, even for people far from programming;

most programming languages have functions and libraries for reading and creating JSON structures.

The JSON is a general format to pass structured data through the network because after you serialize data to JSON, you can deserialize it back without losing any information. The main advantage of JSON comparing to plain text is the ability to describe relations between objects via nesting and key-value pairs. So, it's high chances that the sites you're often visiting use JSON too.

Other popular applications of JSON are data storage and configuration files for other programs.

*/

// CONCLUSION

// Now you have seen that JSON is easy to understand and use,

// and it's quite awesome since it's a very useful tool for transferring data between applications.

// In working practice, you probably won't have to create JSON files yourself, you will get them from other sources,

// but if you want to save the code on your computer, you should save the files in the .json extension.

//--------------------------------------------------------------------XML----------------------------------------------------------------------------//

// Syntactically similar to HTML, but does not describe presentation like HTML

// Many of the tags are custom

// It has fallen out of favor primarily because it is difficult to have nested data structures

//--------------------------------------------------------------------APIs----------------------------------------------------------------------------//

// APPLICATION PROGRAMMING INTERFACE

// Expedia uses multiple APIs to get flight data from all of the airlines

// It is essentially how does software communicate

// There are different kinds of APIs

// API - a set of clearly defined mthods of communication between various components.

// An API may be for a web-based system, operating system, database system, computer hardware, or software library

// jQuery and Axios use their own APIs

// arrays built in JS are APIs - they are the interface that we use to interact with an array in JS

// APIs are not limited to something on the web

// They are how you communicate with software

// WEB BASED APIs mostly concern how companies will provide access to their data (sometimes not for free)

// the data is sent via JSON or XML

// Data Formats

// When we browse on the web, we make HTTP requests and get HTML back

// Web APIs don't respond with HTML

// HTML contains info about page structure

// APIs respond with data, not structure

// It is JSON and XML but nowadays it is mostly JSON

//--------------------------------------------------------------------API SECURITY----------------------------------------------------------------------------//

// Some APIs require you to have an API key or password to use them

// You'll need to read tehir docs to understand ho to get those.

// Separate from that concer, many APIs cannot be used via AJAX because of the same origin policy.

// Same Origin Policy - By default, you can only get a resource via AJAX if the page making the request is

// the "same origin" as the API URL.

// SAME ORIGIN - same hostname, same protocol, same port

// Example: https://site.com/users

// https://api.site.com/books         NOT SAME ORIGIN   different hostname

// http://site.com/api/books          NOT SAME ORIGIN   different protocol

// https://site.com:5000/api/books    NOT SAME ORIGIN   different port

// https://site.com/api/books         SAME ORIGIN

// When an AJAX request is blocked by the "same origin policy" the browser refuses to make the request

// You don't get things like a 404 error (those come from the server).

// Instead you get messages like this:

Access to fetch at *https://api.twitter.com/* from origin

*https://site.com* has been blocked by CORS policy.

// If you get any status code (400, 500, etc), the same origin policy didn't block the AJAX request

// Some APIs allow themselves to be used by other sites via AJAX

// So, from an AJAX call from Rhithm School's Website, this works:

await fetch("https://api.github.com")

// Other APIs do not:

await fetch("https://api.twitter.com")

// (That would work if request was made from https://api.twitter.com, because that's the "same origin" as the AJAX call)

// Same Origin Policy is something that is set on the server to prevent requests from JS in the browser

// There is a way around this that we will talk about later

//--------------------------------------------------------------------INSOMNIA----------------------------------------------------------------------------//

// A GUI for making HTTP requests

// use the whole URL to reach the end point - then give options if available

// you can group associated requests in collections (folders)

// POSTMAN is another app that does the same thing

// Curl does the same thing as Insomnia and Postman

// Curl : is used in commmand lines or scripts to transfer data

// Open source and comes with your computer - so it's easy to use right out of the box

// Use it when making a simple HTTP(S) request or when you don't have nay other option

// Or use it when you're doing scripting

// You will also see it in almost all API documentation for examples

// Making a request using Curl:

// in Terminal

// Simplest and most common request/operation made using HTTP is to GET a URL:

// $ curl 'https://curl.haxx.se'

// This will return the entire resouce from the server.

// $ curl 'https://api.github.com/users/elie'

// This will retur a JSON response from the Github API

// Flags with Curl

// -d or --data       to send information

// -d '{"username": "xyz", "password": "xyz"}'

// -X or --request to specify HTTP verb (-X POST)

// -H or --header to specify additional headers

// -H "Content-Type: application/json"

//--------------------------------------------------------------------BOOTSTRAP----------------------------------------------------------------------------//

// BOOTSTRAP is a CSS Framework

// It is "mobile first"

// The reason most people use Bootstrap is for responsive layout

// Declaritive look and feel

// Easier to theme

// Familiar for writing custom CSS

// Big Ideas: Responsive & Semantic

// Responsive Groups

// Semantic Colors

// try getbootstrap.com and enter responsive view in dev tools and try different devices

// USING BOOTSTRAP

// Include their CSS:

// <link rel="stylesheet" href="https://unpkg.com/bootstrap@5/dist/css/bootstrap.css">

// To use interactive components, include JS:

// <script src="https://unpkg.com/bootstrap@5/dist/js/bootstrap.bundle.js"></script>

// LAYOUT

// All content should descend from a container element:

.container-fluid

// Full-browser-width container (with small amount of breathing room)

.container

// Full-browser-width but at specific breakpoints. Makes UI testing easier: far fewer possible layouts to test.

// Content that doesn't need to be in columns can go directly in this.

// GRIDS

// 12 Column Layout

// Cells (divs) can span any umber of columns

// After all columns are used, wil become new row

// To use: all columns must be in a .row

// RESPONSIVE GRID

// Can specify a breakpoint: that size and above use this

// Specification without breakpoint is for xs

// Auto Columns

// Can leave off numbers and divide by available size

// Useful when you don't know how many items there will be

// you can adjust the class="col-1 text-bg-warning" text to make adjustments

// Bootstrap is built on top of flexbox

// The Bootstrap is full of loads of classes

// IMAGES

// .img-fluid

// make image repsonsive, won't be wider than parent

// TABLES

// .table           Get nice standard table look (use this plus other classes)

// .table-hover     Hover-effect over a row

// .table-sm        Tighten up margin around cells

// .table-striped   Stripe alternative rows

// ALERTS

// Useful for providing feedback/warnings

// .alert (use this plus other classes)

// .alert-[semantic-color]  Use color scheme for this level of message

// BUTTONS

// .btn (use this plus other classes)

// .btn-[semantic-color]   Use color scheme for this level of message

// .btn-link               Make button look link a <a> link

// .btn-lg / .btn-sm       Make larger or smaller button

// Can use <a> links to look like buttons-very useful!

// UI Components

// Breadcrumbs

// Forms

// Lists

// Media Cards

// Pagination sets

// and more!

// JS Components

// Need to add JS CDN link for Bootstrap

// Carousels

// Collapse

// Dropdown

// Modals

// Popovers

// Tootips

// and more!

// Bootstrap Wrap-Up

// Does Everyone Use Bootstrap? NO

// But almost everyone uses some CSS framework

// Other popular frameworks:

// Foundation

// Tailwind

// Theming Bootstrap

// Can write your own CSS to change things (put it after the Bootstrap CSS)

// Can make your own Bootstrap with SASS (advanced)

// Can find thousands of Bootstrap themes

// Can easily use Bootswatch

// Bootstrap Icons

// Excellent image icons: Bootstrap Icons

// Icons come as fonts allowing them to scale easily

// Include this:

<link rel="stylesheet"

href="https://www.unpkg.com/bootstrap-icons/font/bootstrap-icons.css">

// Use icons by name on a i or span tag

// <!-- bi stands for bootstrap icon -->

// <i class="bi bi-apple"></i> <!-- Apple icon -->

// <i class="bi bi-star-fill"></i>  <!-- solid star -->

// <i class="bi bi-star"></i>  <!-- regular (outline) of star -->

// <!-- font-size can be applied to an icon to resize -->

//   <i class="bi bi-search" style="font-size: 30px"></i>

//   <i class="bi bi-search" style="font-size: 80px"></i>

// <!-- icons scale in size to fit their parent element -->

//   <!-- search icon inside a small button -->

//   <button type="submit" class="btn btn-primary btn-sm">

//     <span class="bi-search"></span>

//     Search

//   </button>

//   <!-- search icon inside a large button -->

//   <button type="submit" class="btn btn-primary btn-lg">

//     <span class="bi-search"></span>

//     Search

//   </button>

// FONT AWESOME

// Font Awesome

// Another popular font library is Font Awesome.

// While this has historically been very popular,

// the core open source part of it has become harder to use outside of their commercial offering.
