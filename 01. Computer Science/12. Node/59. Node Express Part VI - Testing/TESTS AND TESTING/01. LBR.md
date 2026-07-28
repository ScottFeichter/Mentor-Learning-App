# TESTS AND TESTING

[ERRORS	1](#errors)

[TESTING	2](#testing)

[BENCHMARKING	3](#benchmarking)

[Intro to Cypress Testing	4](#intro-to-cypress-testing)

## ERRORS {#errors}

1. **SyntaxError** \- represents an error in the syntax of the code.  
2. **ReferenceError** \- represents an error thrown when an invalid reference is made.  
3. **TypeError** \- represents an error when a variable or parameter is not of a valid type.  
4. **RangeError** \- representing an error for when a numeric variable or parameter is outside of its valid range.  
5. **InternalError** \- represents an error in the internal JavaScript engine.  
6. **EvalError** \- represents an error with the global eval function.  
7. **URIError** \- represents an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.

Error is an object with a constructor function Error

const myError \= new Error(\[optMessage\[, optFileName{, optLineNumber\]\]\]);

You don’t have to use the “new” keyword but I guess you should

Throw an error (usually part of an if statement ie if (typeof num \!== “number”); )

throw new Error(“Give me a number\!”);

**Compile Time**

**Run Time**

**Try…Catch…Finally**

If there is no try…catch the throw STOPS PROGRAM EXECUTION

	try {  
	  // statements that will be attempted  
	} catch (error) {  
	  // if an error is thrown it will be “caught” and this statement is executed  
	  // allowing the program to continue execution  
	  // these statements will be run and the program will continue\!  
         	} finally {  
	  // finally is optional and will always run whether or not an error occurs  
	}

console.error(message) // will be more readable in the console than console.log

## TESTING {#testing}

**Testing Pyramid**

* **End-to-End Tests \-** aka E2E test whole application  
* **Integration Tests \-** test the interactions between pieces of application  
* **Unit Tests \-** test the smallest pieces of application in isolation

**Test Driven Development** 

* Ensures code written works.  
* Reduces unnecessary functionality.  
* Helps enforce code modularity.   
* Makes expectations of code clearer.  
* Code is guaranteed to be testable.    
* Makes for easier collaboration.   
* Basically a form of Polya’s.   
* The process:  
  * writing failing tests first   
  * then minimal code   
  * then refactor code  
      
      
    

**Mocha and Chai**

* Mocha is a testing framework and Chai is an assertion library.   
* Tests live in “test” folder with “calculator-spec.js” naming convention.  
* There are 3 very important functions for specs:  
  * describe()  
  * it()  
  * assert()  
* Many very helpful helpers:  
  * expect()  
  * before()  
  * after()  
  * context()  
* package.json summary of the data and dependencies of the tests  
  * npm install will install all the dependencies listed  
  * I believe the installs will be in the node\_modules directory  
* package-lock.json has more details of exact versions

	**Common Test Cases**

* **Edge Cases \- extremes**  
  * Not of desired type  
  * Empty, null, undefined, falsey value  
  * Maximum value  
  * Minimum value  
  * Maximum input  
  * Minimum input  
  * Very large input  
  * Very small input

    

* **Unintuitive Cases \- other possible errors**  
  * Same length

## BENCHMARKING {#benchmarking}

in node use ctrl \+ c (z?) to stop execution

FATAL ERROR means process was killed (probably due to program running out of memory)

**Timing Benchmarks**  
two methods for determining time a function takes:

**console.time()** \- use with console.timeLog() and console.timeEnd() to measure how long an operation takes

console.time("addNums");  
addNums(1000000);

console.timeEnd("addNums");

**Date.now()** \- use this with the Unix Epoch to show the time since Jan 1 1970\. Take two measurements and subtract. 

You can paste values in Google Sheets and do Insert \- Chart to make a graph. 

### Intro to Cypress Testing {#intro-to-cypress-testing}

cypress-example-project

- package.json  
- cypress.json  
- cypress   
  - integration  
  - test-spec.js

FOLLOW THESE STEPS WHEN COMPLETING A PRACTICE THAT HAS CYPRESS TEST

cd cypress-example-project  
npm install

- The first time you install Cypress, the installation could take a few minutes to complete.  
- After a successful installation, you will be able to run Cypress tests using the following command, or similar command(s) provided in the project README:  
  - npm test

reading cypress test results

- Tests are written in JS  
- Describe user actions and expected results

common error messages

- Assertion Error \- html element cannot be found on the page or .should() text not match

**Running Cypress Tests**

Challenges

- Cypress can be difficult to set up initially  
- Cypress can be slower to run than Mocha, especially for fails

Therefore running Cypress tests during guided practices is **optional**.

When to run Cypress Tests

- Only after completing an entire phase of the practice  
  - Complete single phase  
  - Check work visually  
  - Run the test to confirm solution

Cypress Troubleshooting

- Contact instructor

