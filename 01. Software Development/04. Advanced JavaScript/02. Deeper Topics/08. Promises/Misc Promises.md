
**Why Promises**

**The Problem**

- Sometimes we need to chain several async funcs
- Nesting callbacks leads to callback hell

**Functionality and Vocabulary**

- **producing code:** code that can take some time
- **consuming code:** code that must wait for the result
- **promise:** an Object that links Producing Code and Consuming Code
  - A promise contains both the producing code and calls to the consuming code
- **action:** the primary function of a promise
- **states:**
  - *pending* \- while the object is working the result is undefined
  - *settled*
    - fulfilled \- the result is a value
    - rejected \- the result is an error object
- You cannot access the Promise properties **state** and **result**
- You must use a Promise method to handle promises
- A promise can only succeed or fail once
  - callbacks will NOT be invoked multiple times
  - cannot change from fulfilled to rejected or vice versa
  - if a promise has already been settled and a callback is added that matches the promises’s state, that callback will be invoked immediately

**Creating a Promise**

- promise constructor
  - new Promise(executer(res, rej))
- executer
  - resolve
    - what args to pass once the promise has been settled
  - rejected
    - what args to pass once the promise has been settled

Promise objects have two important pre-defined methods

- both return a new promise object
- both are chainable

**.then(onFulfilled, onReject)**

**.catch(onRejected)**

.catch is exactly like calling .then(onRejected)

- it is useful to keep code from having multiple lines and thus more readable

**Using Promises**
ajax way using jQuery

- uses **fail** instead of catch
- have access to **done** which only takes a success callback
- have access to **always** which runs its callback when settled no matter what

**Promises**

- Declaring a function creates a function object
- It does not run the function until invocation
- An anonymous function cannot be invoked
  - except as a callback
    - is invoked by the container function
  - or if it is stored in a variable
    - not really anonymous



**Handling Promises**

**async Functions**

**Classic promise example**

**async function declarations**

- creates function so it returns an implicit promise containing its result

**What is AJAX?**

**Classic Full Page Reloads**

**AJAX at a high level**

AJAX is a group of different technologies that work together to allow a website to communicate with a server in the background without requiring the website to reload in order to display new changes.

Specifically, the key difference with AJAX is that when a change happens, the server is no longer responsible for updating the HTML and then sending the entire HTML document back.

Instead, the server would send back data about the change the website could then process that data and update the HTML on the page accordingly.
The user doesn't have to be redirected to a new HTML page if they want to see the data updated on the page.

**Asynchronous JavaScript and XML**

**Notes on AJAX**

As you can see, using AJAX requires a bit more complexity than the old client-server approach. The payoff is an improved user experience: updating just part of the page is almost always quicker than reloading the entire page.

Additionally, AJAX allows you to keep the user in their current context. For example, the user doesn't lose their current position on the page since there's no longer a full page reload.

Over time, JavaScript libraries have emerged that made using AJAX easier (i.e. jQuery, client side templating libraries, etc.) Eventually, AJAX led to the development of Single Page Applications, websites that have one and only one HTML page. You'll learn much more about Single Page Applications once you get to the React portion of this curriculum\!

**fetch**

**JSON**

JSON is just a format for data in the form of text (string)

It looks like JS so it is easier to read

JSON ALWAYS USES DOUBLE QUOTES FOR STRINGS

For actual quotations the quotation marks MUST BE ESCAPED with \\ back slashes

JS array \[1, 2, 3\] \= JSON array  “\[1, 2, 3\]”

JS obj { person: true, name: “Roberta” } \= JSON obj “{ \\”person\\”: true, \\”name\\”: \\“Roberta\\” }”

**serialization \=** turning data into a string so your program can send it to another cpu

**deserialization \=** turning text from another cpu in to data

JS has a built in JSON object that has two methods for converting to and from JSON:

- JSON.stringify(value)
- JSON.parse(str)
