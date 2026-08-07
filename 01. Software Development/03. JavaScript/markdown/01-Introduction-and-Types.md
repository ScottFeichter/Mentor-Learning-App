
JAVASCRIPT PRACTICE ROUTINE

DON’T FORGET TO USE LET OR CONST IN LOOPS

BE CAREFUL ABOUT PASSING VALUE VS REFERENCE

BE CAREFUL WITH RETURN OF METHODS AND THOSE THAT CLOBBER

MY WEAK AREAS NEEDING ATTENTION:

- try/catch and the error object
- Promise object, Promise.catch() vs try/catch, Promise.then()
- async await
- fetch() (is in the browser but not in node - need to use an import for node)
- .bind()
- closure

Primitive Types        19

Reference Types        19

Special Types        19

variables        19

boolean        20

numbers        20

null        20

JSON        20

XML        21

regex        22

Literals and Templates        22

Escaping        23

Boolean        25

Strings        25

Arrays        26

Spread Operator        31

Objects        31

POJO vs COJO        32

Global Objects        32

Global Object Useful Methods        32

Sets        33

Maps        33

Classes        33

Modules        33

Exporting with JS        33

Loops        33

Conditionals        33

Labels        34

Functions        34

HTML        35

CSS        37

DOM Manipulation        39

DOM Event Listeners        39

DOM Events        40

Reserved Words        41

JS BOM        41

JS AJAX        41

JS APIs        41

jQuery        41

Helpful Notes From App Academy        41

Terminology for general programming concepts and tools        41

Generic Terms Specific to Programming        44

Why all of these definitions? / What About this applies to Learning JavaScript?        47

A brief history of JavaScript        52

Why JavaScript is so useful today        53

Static vs dynamic web content        53

Performing asynchronous tasks        54

Same specification, different implementation        54

Running JavaScript Code        56

Node REPL vs. JavaScript File        56

Using the Node REPL        57

Using JavaScript Files        60

What you learned        63

Using npm to Perform Common Tasks - Part One        63

Using npm to manage npm        63

Using npm to manage a project's dependencies        65

Initializing a project to use npm        65

Finding packages in the npm registry        69

Installing a dependency        72

Git and the node_modules folder        74

Using a dependency in code        75

Dependency types        77

Installing a development dependency        78

What we've learned        79

Using npm to Perform Common Tasks - Part Two        80

Installing an existing project's dependencies        80

Uninstalling a dependency        82

Updating a dependency        85

Updating all project dependencies        88

Re-installing a dependency with updated semver information        89

Finding and fixing package security vulnerabilities        90

Writing and running npm scripts        99

Defining custom scripts        101

What we've learned        102

Using Modules in Node.js        103

Introducing Node.js modules        103

The CommonJS module system        104

Adding a local module to a Node.js application        105

Exporting from a module        109

Option A: Set properties on the module.exports object        109

Option B: Assigning an object to the module.exports property        111

Option C: The exports shortcut        113

Abstraction        114

Importing from a module        115

The require() function        116

Simplifying imports using destructuring        120

What you learned        121

Mocha Setup        122

Testing Frameworks - Mocha and Chai        123

Installing Mocha        124

Running Tests        125

CommonJS Modules        127

Node.js modules        128

Exporting multiple items from a module        129

Option A: Assigning an object to the module.exports property        129

Option B: Set properties on the module.exports object        132

Option C: The exports shortcut        134

Exporting a single item from a module        136

Importing using require        137

Importing multiple items from a module        139

Importing an item from a module with a single export        140

Folder module        142

What you've learned        143

Introduction to Functions        144

The difference between Parameters and Arguments        144

Extra arguments        144

Not enough arguments        145

Arrow Functions        145

Arrow functions solving problems        146

Anatomy of an arrow function        147

Single expression arrow functions        151

Syntactic ambiguity with arrow functions        154

Arrow functions are anonymous        156

What you learned        157

The Object Type        158

The object of my affections        159

Setting keys and values        160

Keys without values        162

Using variables as keys        164

Using different notations        168

Bracket notation vs Dot notation        169

Putting it all together        171

Operator precedence revisited        172

What you learned        175

Iterating Through Objects        175

A new Kind of for Loop        176

Methods vs Functions        179

Useful Object Methods        182

Iterating through keys using Object.keys        183

Iterating through keys using Object.values        184

Iterating through an Object's keys & values        185

What you learned        185

Reference vs. Primitive Types        186

Primitives vs. Objects        186

Immutability        187

Mutability        192

What you learned        195

Array Looping Methods        196

Review        197

Introducing forEach        199

Introducing map        202

Bonus example        205

Introducing filter        206

Putting it all together        209

What you've learned        212

Control Flow - Conditional Statements        213

Configuring GitHub Authentication        213

Git Credential Manager        214

Translating Wireframes and Specifications into Code        214

Understanding Error Messages        216

Debugging HTML        216

How to tell if a value is an array        217

Using the Spread Operator and Rest Parameter Syntax        218

Accepting arguments        218

Functions with fewer arguments than specified        219

More arguments than specified        220

Utilizing Rest Parameters        220

Utilizing Spread Syntax        223

Spreading elements        224

Spreading arguments        226

What you learned        227

Destructuring        228

Destructuring data into variables        228

Swapping variables using destructuring        230

Destructuring objects into variables        231

Destructuring and the rest pattern        236

Destructuring parameters        239

What you learned        242

All About Scope        242

Advantages of utilizing scope        243

Different kinds of scope        243

Global scope        243

Local scope        245

Block scope        246

Scope chaining: variables and scope        247

Lexical scope        251

What you learned        253

Different Kinds of Variables        253

Declaring variables        254

The different ways to declare variables        254

Hoisting and scoping with variables        255

Function-scoped variables        256

Hoisting with function-scoped variables        257

Block-scoped variables        259

Using the keyword let        259

Using the keyword const        261

Hoisting with block-scoped variables        264

Function scope vs. block scope        267

Global variables        269

What you learned        271

Stacking the Odds in our Favor: the Call Stack        272

The call stack        273

The practical consequences of the call stack        283

What you've learned        286

Re-learning Functions With Recursion        286

Re-what now?        287

A note on language        289

Two cases        290

A recursive example        291

What we've learned        293

When To Hold & When To Fold(Fold(Fold())): Recursion vs. Iteration        294

A deeper dive into recursion        295

London Stack is falling down!        296

Step by step        300

Types of recursion        301

When to iterate, when to recur        302

Compare these approaches        304

What you've learned        306

Recursion Tips        306

Move towards the base case        306

Think of the function iteratively        309

Start from the base case        310

Assume your recursive function works        313

What have you learned        315

Default Parameters        316

What is a default parameter?        316

What are some uses for default parameters?        318

What have you learned?        321

Stop Feeling Iffy about IIFEs!        321

Quick review of function expressions        322

IIFE syntax        323

IIFEs keep functions and variables private        325

What you learned        327

Hanging by a Single Thread: A Yarn on JavaScript's Execution        328

Single-threaded vs multi-threaded execution        329

Single-threaded        330

Multi-threaded        331

Keeping the thread from unraveling        332

What you've learned        334

Better Late Than Never: An Intro to Asynchronous JavaScript        334

Synchronous vs asynchronous code        335

Synchronous        335

Asynchronous        337

Can't believe it's async?        339

Why do we need asynchronous code?        342

What you've learned        343

All in Good Time: Setting Timeouts and Intervals        343

Time-out! What are the arguments?        344

Cancelling timeouts        347

Running Intervals        350

What you've learned        351

Reading Between the Lines: Getting User Input and Callback Chaining        351

Node's readline module        352

Callback chaining        357

What you've learned        365

An Unexpected Turn of Events: the event loop and Message Queue        365

The event loop        366

The message queue        367

What you've learned        377

Reading Between the Lines: Getting User Input and Callback Chaining        377

Node's readline module        378

Callback chaining        383

What you've learned        391

The Single-Responsibility Principle        391

Makes code easier to change        392

What you've learned        397

DRY Principle        397

Makes code easier to change        402

What you've learned        408

Introduction to OOP        408

What is OOP?        409

Breaking down an example problem with OOP        410

What you've learned        414

Encapsulation        414

What is Encapsulation?        414

Thought experiment: the vending machine        416

Classes and constructors        418

Classes vs JavaScript Objects        420

What you've learned        420

Putting the Class in JavaScript Classes        421

Defining a JavaScript class        422

Instantiating an instance of a class        424

Defining methods        427

Defining an instance method        428

Using the instanceof operator to check an object's type        430

What you've learned        431

Static Methods and Variables        432

Static Methods        432

Common Uses of Static Methods        435

Static Variables        436

What you learned        439

Inheritance        439

What is Inheritance?        439

Implementation inheritance        440

Multiple inheritance        441

What you've learned        442

Inheritance in JavaScript        442

Syntax        443

Inheriting Methods        444

super        445

What you've learned        449

Polymorphism        449

What is Polymorphism?        449

A built-in example of polymorphism        450

Another example of polymorphism        452

What you've learned        453

Polymorphism in JavaScript        454

Overriding parent methods        454

Implementation of polymorphism and inheritance        456

What you've learned        458

Inheritance in JavaScript        459

Syntax        459

Inheriting Methods        460

super        462

What you've learned        465

Polymorphism        465

What is Polymorphism?        465

A built-in example of polymorphism        466

Another example of polymorphism        469

What you've learned        470

Polymorphism in JavaScript        470

Overriding parent methods        470

Implementation of polymorphism and inheritance        472

What you've learned        474

Context in JavaScript        475

What about this?        476

Issues with scope and context        480

When methods have an unexpected context        481

Strictly protecting the global object        486

What you learned        489

Changing Context using bind        489

What you learned        494

Other Ways to Bind Context        494

What you learned        497

Arrow Functions and Context        498

The context of an arrow function is as where it was defined        498

Defining a class method as an arrow function        502

What you learned        506

Awesome Context Flow Chart        506

A Comedy of Errors in JavaScript        507

Types of JavaScript errors        508

SyntaxError        509

ReferenceError        510

TypeError        511

Looking up errors        513

What you learned        514

Throwing and Catching Errors        514

JavaScript Errors        515

Creating your own errors        515

Throwing your own errors        516

Catching known errors        521

...finally        523

How do I best use this?        524

What you learned        525

All About Testing!        525

Why do we test?        526

What do we test?        528

Test the public interface        528

The testing pyramid        529

What you learned        531

Test-Driven Development        531

Motivations for TDD        532

The three steps of TDD: red, green, refactor!        534

What you learned        536

Unit Testing with Mocha and Chai        536

Part One: Setting up your test environment        537

Part Two: Setting up the test files        540

Part Three: Writing tests with Mocha and Chai        542

Part Four: Specifying functionality with tests        545

Part Five: DRYing your tests with Mocha Hooks        548

What you learned        550

Determining common test cases        550

Two cases for tests        550

Example: Stickers        551

Testing unintuitive cases        554

Testing edge cases        556

What you learned        559

Custom Error in JavaScript        559

Walk-though        560

Example 1 - Minimum        562

Example 2 - Additional information and custom message        563

What you have learned        566

Code Performance: Timing Benchmarks        567

Computer Safety        567

ctrl + c: Halt code execution        568

Memory crashes        569

Danger: Modifying your filesystem        569

Timing your code        570

console.time()        571

Date.now()        573

Visualizing performance        574

What you learned        577

Time Complexity: Big-O        577

Big-O        577

Large ns        580

Ignoring coefficients, insignificant factors        583

Best case, worst case, average case        584

Linear growth: O(n)        586

Constant growth: O(1)        588

Quadratic growth: O(n2)        592

Nested loops vs. constant loops vs. adjacent loops        594

What you've learned        599

Space Complexity        599

Constant space complexity: O(1)        600

Linear space complexity: O(n)        601

Quadratic space complexity: O(n2)        602

Modifying arrays in-place        603

What you learned        607

Truth and Logic        607

Logic and Truth Tables        608

XOR        612

What you learned        613

Simplifying Logic        614

Counting to Zero        614

What you learned        622

Intro To Number Bases: Binary, Decimal, and Hexadecimal        622

Base-10: Decimal        622

Base-2: Binary        624

Translating from binary to decimal        625

Base-16: Hexadecimal        627

Bytes, kilobytes, megabytes, gigabytes, terabytes        630

Representing letters in binary        631

Built-in JavaScript conversion methods        632

String.fromCharCode()        632

String.protoype.charCodeAt()        632

Convert binary and hexadecimal to base 10 and back        633

What you've learned        634

Memory        634

RAM        634

Turing Machines        635

Memory addresses, pointers, references        637

Speed of memory access        639

What you've learned        641

Arrays: Under the hood        641

What is an Array?        642

Array representation in memory        643

Array indexing        646

Arrays in different programming languages        648

What you learned        649

Dynamic Arrays        649

Array resizing        650

Overallocation to speed up resizing        652

Testing overallocation        654

push() vs unshift() vs splice()        656

Testing push() vs unshift()        658

What you've learned        662

Stacks        662

LIFO: Last in, first out        663

Push and Pop        665

Stack Implementation        665

Stack Applications        668

Performance        669

Call Stack        669

What you learned        673

Linked Lists        674

What is a linked list?        674

Adding to the head of a Linked List        677

Time complexity of addToHead        679

Traversing a linked list        680

Linked Lists in memory        681

Questions        684

What you've learned        685

Linked list Analysis and Optimization        685

Linked list performance review        685

addToTail()        686

Optimizing addToTail        689

removeFromHead() and removeFromTail()        693

Doubly Linked List        696

Cost of a Doubly Linked List        698

What you've learned        699

Queues        700

FIFO: First in, first out        700

Implementing a queue with an array        702

Implementing a queue with a linked list        703

Performance testing        705

Tradeoffs        707

What you have learned        709

Hash Functions        709

What is a hash function?        709

A simple hash function        710

SHA256 hashing        712

What you've learned        714

Hash Tables        714

What is a hash table?        715

Hash table data storage        716

Inserting into a hash table        719

Retrieving values from a hash table        720

Hash collisions        722

Performance analysis        723

What you've learned        724

Hash Tables        724

What is a hash collision?        725

Resolving hash collisions with Linked List chaining        729

Performance of linked list chaining        733

Avoiding collisions through array resizing        733

Load factor        735

Other methods of resolving hash collisions.        735

What you've learned        736

Hash Table Optimization        736

Resize        737

Calling resize() to improve HashTable performance        740

What you've learned        742

Intro to Sorting        742

Doesn't JavaScript have a built in sort function? Why do I need to know this stuff?        743

How should I approach these sorting problems?        744

Review: swaps and shifts        744

Swapping        745

Shifting        746

What you learned        747

Bubble Sort        747

Bubble sort example        748

Pseudocode        752

What you learned        753

Insertion Sort        754

Out-of-place insertion sort (easy)        755

In-place insertion sort (medium)        758

Your task        765

Selection Sort        766

Out-of-place selection sort (easy)        767

In-place selection sort (medium)        769

Your task        772

Recursive Sorting        774

Recursion review        774

A recursive sorting example        775

Time and space complexity analysis        778

Divide and Conquer: Improving time complexity        779

What you learned        780

Recursive Sorting        780

Recursion review        780

A recursive sorting example        782

Time and space complexity analysis        785

Divide and Conquer: Improving time complexity        786

What you learned        787

Merge Sort        787

The merge sort algorithm        788

Merge sort example        788

Merge        789

Time complexity of Merge        791

Calling a sort within a sort        792

Time complexity of merge sort        793

Space complexity of merge sort        794

Pseudocode for App Academy Implementation        796

What you learned        798

Quicksort        799

The quicksort algorithm        799

Quicksort example        799

Recursive sorting        801

Time complexity of quicksort        801

Space complexity of quicksort        804

Pseudocode        804

What you learned        806

Funky sorts        806

Zeroes to the right        806

Zeroes to the right revisited        808

Even/Odd sort        810

What you learned        814

JavaScript's built-in sort        814

What algorithm does JavaScript use to sort?        814

How do I use JavaScript's sort?        815

Funky sorting with JavaScript's sort        817

What you learned        819

Binary Logarithms        820

What is a logarithm?        820

What is a binary logarithm?        821

Why are logarithms important?        824

What you learned        825

Binary Search        826

Divide and Conquer        826

Pre-conditions for a binary search        827

Binary search in code        828

Binary search pseudocode        832

Time and space complexity of binary search        833

Performance testing binary search        835

What you learned        837

Introduction to Trees        837

What is a Graph?        838

What is a Tree?        839

What is a Binary Tree?        839

Representing a Binary Tree with Node Instances        840

Basic Tree Terminology Review        843

What you learned        843

Binary Tree Traversal        844

Tree terminology (review)        845

Searching a binary tree        845

Traversing a binary tree        848

Pre-order traversal        850

In-order traversal        851

Post-order traversal        852

Depth-first search        852

Breadth-first traversal        854

Depth-first traversal with a stack        858

What you learned        861

Binary Search Trees        861

Tree terminology review        862

Properties of a binary search tree        863

Searching a binary search tree        865

Time complexity of searching a binary search tree        868

Adding and removing values in BST        870

Unbalanced binary search trees        875

What you learned        878

Framing HTTP, REST, APIs, Servers, Promises - I        878

Explore        879

Setup        879

Search Terms and Auto-Completion        880

Submit the Search Terms        881

Click on a Search Result        883

Try to Explain        884

Looking Ahead        885

HTTP Request Components        885

Retrieving hypertext        886

Components of an HTTP request        887

Breaking down the request        888

Request-line        888

Headers        889

Body        889

5 Common HTTP Verbs        890

Content-Type Header        893

Other Common Headers        894

What you've learned        896

HTTP Response Components        897

Hypertext delivered        897

Components of an HTTP Response        898

Status        899

Status codes 100 - 199: Informational        900

Status codes 200 - 299: Successful        901

Status codes 300 - 399: Redirection        901

Status codes 400 - 499: Client Error        903

Status codes 500 - 599: Server Error        904

Research task        905

Headers        906

Content-Type        906

Other Common Headers        907

Body        909

What you've learned        910

Request and Response        910

Request Object        912

Response Object        912

RESTful        913

Servers        914

Creating A Server        915

Creating Route Handlers        915

Parsing the Request Body        917

Serving Static Assets        917

Templating        918

Asynchronicity        918

Promises        919

Async Await        919

Fetch        920

Web API        920

JSON        920

Testing API Endpoints        921

TCP/IP and Networking        921

HTML Form Submission Requests        922

HTML Form Review        922

Server Response        924

What you've learned        925

RESTful Routes        925

Routes vs. Endpoints        926

Route Parameters        927

Rules of ReST        928

What does a RESTful route look like?        929

Two kinds of URLs: Collection vs. Singular        929

How to create RESTful Endpoints        931

Nesting Resources        935

RESTful vs other conventions        937

What you've learned        938

Introduction to Servers        938

What is a Server?        939

Role of a Server in a Full-Stack Application        939

What you've learned        940

Hypertext Transfer Protocol        940

HT-: HyperText        941

-TP: Transfer Protocol        942

Protocol for exchanging data between a Client and a Server        943

Properties of HTTP        943

Reliable connections        944

Stateless transfer        944

Intermediaries        945

Digging deeper with the HTTP spec        946

What you've learned        946

The Request-Response Cycle        947

The request-response cycle diagram        947

The browser's role in the request-response cycle        948

What you've learned        950

Node HTTP        950

Creating a Server        951

Listening for Requests on a Port        953

Request object        956

Response object        958

What you've learned        960

Parsing the Body of the Request        960

Reading the body of the request        961

Parsing application/x-www-form-urlencoded        964

What you've learned        969

Formulating and Sending a Response        969

Set the status code        970

Set the header        971

Write the response body        972

Sending the Response        973

Hanging Server        976

What you've learned        977

Creating http Route Handlers        977

Defining a Route Handler        977

Multiple Route Handlers        979

What you've learned        982

Static Assets        982

What is a static asset?        982

Serving Static Assets        983

What you've learned        983

Serving Static Assets using http        983

Finding and Reading Files        984

Sending Files        985

What you've learned        987

HTML Templating        987

The Problem        987

The Solution        988

Template Engines        988

What you've learned        989

Basic HTML Templating        989

Creating a Basic HTML Template        989

Using an HTML Template        993

What you've learned        998

.JS Notes        999

# Primitive Types

string

number

boolean

object

function

# Reference Types

Object

Date

Array

String

Number

Boolean

(all are objects)(?)

# Special Types

null

undefined

(these cannot hold a value)

# variable declaration keywords

let

const

var

# boolean

true

false

truthy

falsey

# numbers

NaN

0

-0

Infinity

-Infinity

Math

BigInt

undefined

a value is not assigned

# null

the intentional absence of a value

# JSON

JavaScript Object Notation

- a self-describing, lightweight format
- for storing and transporting data (data-interchange)
- not actual JS only derived from it (language independent)
- is plain text only
- syntactically identical to the code for creating JS objects making conversion easy
- data is in name/value pairs
- JSON names require double quotes (JS names do not)
- data is separated by commas
- curly braces hold objects
- square brackets hold arrays

JSON string object

'{"name":"John", "age":30, "car":null}'

JSON string array

'["Ford", "BMW", "Fiat"]'

Convert from JSON to JS Object

let obj = JSON.parse(JSON text in the form of a string)

Convert from JS Object to JSON

let myJSON = JSON.stringify(JS object or array)

JSON values cannot be one of the following data types:

- a function
- a date
- Undefined

eval() can be helpful to convert JSON function that lost their scope back to functions

# XML

kind of the JSON of HTML

- Both JSON and XML are "self describing" (human readable)
- Both JSON and XML are hierarchical (values within values)
- Both JSON and XML can be parsed and used by lots of programming languages
- Both JSON and XML can be fetched with an XMLHttpRequest

- JSON doesn't use end tag
- JSON is shorter
- JSON is quicker to read and write
- JSON can use arrays

- XML has to be parsed with an XML parser.
- JSON can be parsed by a standard JavaScript function.
- XML is much more difficult to parse than JSON.
- JSON is parsed into a ready-to-use JavaScript object.

# regex

JS is/has(?) a regex engine

# Literals and Templates

https://www.digitalocean.com/community/tutorials/understanding-template-literals-in-javascript

Interpolation

Expression Interpolation

Template Interpolation

# Escaping

Destructuring

destructuring arrays:

let numArray = [10, 20];

let [firstEl, secondEl] = numArray;

swapping variables using destructuring:

let num1 = 10;

let num2 = 20;

[num1, num2] = [num2, num1];

destructuring object into variables:

let obj = { name: "Apples", breed: ["tabby", "short hair"] };

let { name, breed } = obj;

console.log(name); // "Apples"

console.log(breed); // ["tabby", "short hair"]

Another example:

let { a, c } = { a: 1, b: 2, c: 3 };

a; // 1

c; // 3

alias object destructuring:

let obj = { apple: "red", banana: "yellow" };

let { apple: newApple, banana: newBanana } = obj;

console.log(newApple); // "red"

console.log(newBanana); // "yellow"

// here we are specifying that within the animal object we want to assign the

// *species* variable to the value held by the *species* key

let object = { animal: { name: "Fiona", species: "Hippo" } };

let {

animal: { species }

} = object;

console.log(species); // => 'Hippo'

destructuring and the rest pattern:

let foods = ["pizza", "ramen", "sushi", "kale", "tacos"];

let [firstFood, secondFood, ...otherFoods] = foods;

console.log(firstFood); // => "pizza"

console.log(secondFood); // => "ramen"

console.log(otherFoods); // => ["sushi", "kale", "tacos"]

Another Example

let { a, c, ...obj } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a); // => 1

console.log(c); // => 3

console.log(obj); // => { b: 2, d: 4 }

destructuring parameters:

let cat = { name: "Rupert", owner: "Curtis", weight: 10 };

// This unpacks the *owner* key out of any incoming object argument and

// assigns it to a owner parameter(variable)

function ownerName({ owner }) {

console.log("This cat is owned by " + owner);

}

ownerName(cat);

# Boolean

Convert from truthy/falsey to boolean:

let bool = Boolean(expression);

Convert from truthy/falsey to the OPPOSITE boolean:

let bool = !(expression);

Convert from truthy/falsey to boolean sneaky way:

let bool = !!(expression);

# Strings

common string properties:

let num = string.length      // a property NOT a method

common string methods:

let nuArray = string.split(optionalStringOrRegexSeperator, optionalLimitNumber)

split() // entire string is one element

split(“”) // each char is an element

split(“ “) // each space delimits elements

let nuString = string.toUpperCase(none)

let nuString = string.toLowerCase(none)

        let nuArray = string.match(stringOrRegex)

let nuString = string.trim(none) // removes whitespace from both ends

let nuString = string.slice(startIndexInclusive, optionalEndIndexExclusive)

// rtrns extracted

let nuString = string.substring(startIndexInclusive, optionalEndIndexExclusive)

// rtrns extracted

let nuString = string.replace(currentValueOrRegex, newValueOrRegex)

let bool = string.includes(chars, optionalStartIndex)

        let bool = string.startsWith(chars, optionalStartIndex)

let bool = string.endsWith(chars, optionalEndIndex)

let indexNum = string.indexOf(chars, optionalStartIndex)

let indexNum = string.lastIndexOf(chars, optionalStartIndex)

let indexNum = string.search(charsOrRegex)

let char = string.charAt(index)

let nuString = string1.concat(string2, optionalStringThree) // or use +

# Arrays

common array properties:

let num = array.length // a property

common array static methods:

let bool = Array.isArray(arrayname) // a static method

Static array methods that return an array:

let nuArr = Array.from(any object with a length property or any iterable object);

common array methods (non iterators):

let bool = array.includes(primitiveItem, optionalStartPosition)

let indexNum = array.indexOf(primitiveItem, optionalStartPosition)

let indexNum = array.lastIndexOf(primitiveItem, optionalStartPosition)

let nuString = array.join(optionalSeparator)

join() // comma default - every char separated by comma

join(“”) // all elements are concatenated

join(“ “) // all elements are separated by spaces

let nuArr = array.slice(optionalStartIndex, optionalEndIndex) // does NOT change og

let nuArr = array1.concat(array2) // does NOT change ogs

let removedItem = array.pop() // changes og array by removing last element

let shiftedItem = array.shift() // changes og array by removing first element

let nuLength = array.push(item) // changes og array by adding element to end

let nuLength = array.unshift(item) // changes og array by adding element to start

let nuArrRemovedEles = array.splice(startIndex, optionalAmountToRemove,

optionalElementToAdd)

// changes og array by removing elements and adding elements

let nuArrReversed = array.reverse() // changes og array with elements reversed

let nuArrSorted = array.sort(optionalCompareFunction())

// changes og array with elements sorted *

*note:

- sort() uses the first character and the ascii value
- It works great for sorting strings alphabetically in an array
- To sort numerically it needs a helper compare function:

compareFunction(a, b) {return a-b} // ascending sort

compareFunction(a, b) {return b-a} // descending sort

copyWithin()

fill()

flat()

high order array methods (iterators that take a callback aka looping functions):

note: the callback can be an already existing fn or created in the method

undefined = array.forEach(function(curVal, optCurIndex, optArr) {

Touches each non-empty element to access or modify

}, optThisVal);

—---------------------------------------------------------------------------------------

let boolean = array.some(function(curVal, optCurIndex, optArr) {

Checks if any elements in an array pass a test

}, optThisVal);

let boolean = array.every(function(curVal, optCurIndex, optArr) {

Checks if every element in an array pass a test

}, optThisVal);

—---------------------------------------------------------------------------------------

let nuArray = array.filter(function(curVal, optCurIndex, optArr) {

Creates new array filled with element values that pass a test

}, optThisVal);

—---------------------------------------------------------------------------------------

let nuArray = array.map(function(curVal, optCurIndex, optArr) {

Creates new array from callback for every element

}, optThisVal);

let nuArray = array.flatMap(function(curVal, optCurIndex, optArr) {

Combines map() and flat()

}, optThisVal);

—---------------------------------------------------------------------------------------

let accResult = array.reduce(function(acc, curVal, optCurIndex, optArr), {

return acc + curValue;

}, optInitialAccVal);

Returns accumulated result running from beginning of array to end

let accResult = array.reduceRight(function(acc, curValue, optCurIndex, optArr), {

return acc + curValue;

}, optInitialAccValue);

Returns accumulated result running from end of array to beginning

—---------------------------------------------------------------------------------------

let firstEleValue = array.find(function(curVal, optCurIndex, optArr) {

Returns value of first element that passes a test; if none then undefined

}, optThisVal);

let lastEleValue = array.findLast(function(curVal, optCurIndex, optArr) {

Returns value of last element that passes a test; if none then undefined

}, optThisVal);

let firstEleIndex = array.findIndex(function(curVal, optCurIndex, optArr) {

Returns index of first element that passes a test; if none then -1

Similar to indexOf except it takes a callback instead of a value

}, optThisVal);

let lastEleIndex = array.lastIndexOf(function(curVal, optCurIndex, optArr) {

Returns index of last element that passes a test; if none then -1

Similar to lastIndexOf except it takes a callback instead of a value

}, optThisVal);

—---------------------------------------------------------------------------------------

# Spread Operator

The … operator expands an iterable (ie array) into more elements:

const q1 = [“Jan”, “Feb”, “Mar”];

const q2 = [“Apr”, “May”, “Jun”];

const h1 = [...q1, ...q2];

console.log(h1) // [“Jan”, “Feb”, “Mar”, “Apr”, “May”, “Jun”]

# Objects

Looping over an object:

                For…In

// Create an Object

const person = {

name: "John",

age: 30,

city: "New York"

};

// Build a Text

let text = "";

for (let x in person) {

text += person[x] + " ";

};

Static object methods that return an array:

Example Object:

let obj = {

first: "Scott",

last: "Jones",

age: 42,

bool: true,

};

let nuArrOfKeysAsStrings = Object.keys(obj); // [“first”, “last”, “age”, “bool”]

let nuArrOfValuesAsStrings = Object.values(obj); // [“Scott”, “Jones”, “42”, “true” ]

let nuMatrixArrOfPairsAsStrings = Object.entries(obj);

// [ [“first”, “Scott”], [“last”, “Jones”], [“age”, “42”], [“bool”, “true”] ]

common object methods (non iterators):

# POJO vs COJO

# Global Objects

Window (browser)

Global Object (node)

Date

Math

Random

# Global Object Useful Methods

setTimeout()

timeoutID { } = setTimeout(callback, delayInMilliseconds, param1, param2)

clearTimeout()

setInterval()

intervalID { } = setInterval(callback, delayInMilliseconds, param1, param2)

clearInterval()

# Sets

# Maps

# Classes

# Modules

# Exporting with JS

export default statement to export one item per file

export keyword to export multiple items per file

import ... from statement to import items from one file to another

export default statement to export an unnamed item and rename the item in an import statement

as keyword (in an import ... from statement) to alias and namespace all of a file's exported items

# Loops

for

while

do while

Break - ends the loop

Continue - ends this iteration of the loop

for of (arrays)

for in (objects)

Array iterator methods

Object iterator methods

# Conditionals

If

Else if

Ternary

Switch
try catch finally

break

continue

# Labels

# Functions

Rest Parameter

The rest parameter allows capture of more args than number of parameters.

- It must be the last parameter
- It gets the rest so to speak

function logArgs (insignificant, …restParameter) {

console.log(restParameter);

}

logArgs(“apple’, 15, 3); // prints [“apple”, 15, 3]

This is essentially varArgs

Spread Operator

The spread operator has two basic behaviors:

1. Take a data type and spread the values where elements are expected

let numArray = [1, 2, 3];

let moreNums = [...numArray, 4, 5, 6];

note: spread operator in this use case can be placed in any position

let colors = { red: “scarlet”, blue: “aquamarine”};

let moreColors = { brown: “poopstain”, …colors };

note: spread operator in this use case can be placed in any position

1. Take an iterable data type and spread the elements where arguments

The spread operator allows you to pass an array as an argument to a function and the values of that array be will be spread to fill in the separate parameters.

Function Declaration

function doSomeMath(a, b) {

let c = a + b;

return c;

}

Anonymous Function

function (a, b) {

let c = a + b;

return c;

}

Function Expression (Anonymous)

const doMoreMath =

# HTML

TAGS

Opening Tag <h1>

Closing Tag </h1>

ELEMENTS

Includes tag(s) and the content in between

<h1>All together this is an element</h1>

Section Elements

<html>

<head>

<body>

Document Metadata

<link>

<title>

<script>

<meta>

Text Content

<div>

<ol>

<ul>

<li>

<p>

<h1> etc

Inline Text Semantics

<a> anchor uses href to create hyperlink

<br> break

<em> emphasis

<strong> bold

Grouping

<span>

<div>

ATTRIBUTES

Usually name=”value” pairs

Always inside opening tag

<h1 id=”my header”>Id is a common attribute</h1>

Frequently Used Attributes

name – specifies a name so to reference the element in JS

id – unique id for css selection

class – class for css selection

title – displays text on hover

src – specifies url of media file

alt – provides alternative text when element fails to display

href  - species the url for the hyperlink

form

label

onsubmit

table

headers

onclick (there are many event attributes)

# CSS

Ways To Apply

External

CSS in separate file

Relative link

Absolute link

<link rel="stylesheet" href="mystyle.css">

Internal

CSS in the HTML file

<style>

body {

background-color: linen;

}

h1 {

color: maroon;

margin-left: 40px;

}

</style>

Inline

CSS in the HTML tag

<h1 style="color:blue;text-align:center;">

This is a heading</h1>

Syntax

CSS has selector then declaration block with one or more declarations

Selector indicates which HTML element

Declaration is a CSS property name and value pair

selector { property: value; }

Selectors

Type

div {}

Class

.theClass {}

ID

#theId {}

Universal

* {}

Attribute

a[label] {}

Compound Selectors

Example Compound Selectors

.box .yellow {}

h1, h2 {}

h1#heading {}

H2.subheading {}

Combinator Selectors

Descendant Selector

div p {}

Child Selector

diiv > p {}

Adjacent Sibling Selector

div + p {}

General Sibling Selector

div ~ p {}

Pseudo Classes

used to define a special state of an element

selector:pseudo-class {}

a:hover {}

Pseudo Elements

used to style specified parts of an element

Selector::pseudo-element {}

p::first-line {}

Specificity

!important

Inline Style

id

class

element

Layout Stylings

Flexbox

Grid

Media Queries

Document Object Model

Representation of content and structure of site

# DOM Manipulation

Finding HTML Elements:

document.getElementById(“id”)

document.getElementByTagName(”TagName”)

document.getElementByClassName(”ClassName”)

querySelector(“element”) or querySelector(“.className”) to get first of this class

querySelectorAll(“.className”)

Changing HTML Elements:

element.innerHTML = content

element.style.property = style

element.attribute = value

element.setAttribute(attribute, value)

Adding and Deleting Elements:

document.createElement(element)

document.removeChild(element)

document.appendChild(element)

document.replaceChild(new, old)

document.write(text)

# DOM Event Listeners

First step is to get the HTML element into a JS variable.

Second step is to add the event listener and specify event type and consequence.

Syntax:

const elementVariable = document.SomehowGetTheElement(“element”)

element.addEventListener(“event”, callback {

something to happen;

}, false);

Example:

const button = document.querySelector(“button”);

button.addEventListener(“click”, (e) => {

console.log('Event fired: ${e}');

}, false);

# DOM Events

User Interface Events:

load

unload

error

resize

scroll

Focus and Blur Events:

focus

blur

focusin

focusout

Mouse Events:

click

dbclick

mousedown

mouseup

mouseover

mouseout

mousemove

Keyboard Events:

input

keydown

keypress

keyup

Form Events:

submit

change

Input

Mutation Events and Observers:

DOMNodeInserted

DOMNodeRemoved

DOMSubtreeModified

DOMNodeInsertedIntoDocument

DOMNodeInsertedFromDocument

HTML5 Events:

DOMContentLoaded

hashchange

beforeunload

CSS Events:

transitionend

animationstart

animationiteration

animationend

# Reserved Words

https://www.w3schools.com/js/js_reserved.asp

# JS BOM

# JS AJAX

# JS APIs

# jQuery
