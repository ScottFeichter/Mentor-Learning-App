
# DOM vs. BOM

## The BOM: Interacting with the Browser

If you took a bird's-eye view of the browser, you would see that the document object is part of a [hierarchy of browser objects.](http://itwebtutorials.mga.edu/js/chp1/browser-object-model.aspx)

This hierarchy is known as the **BOM, or Browser Object Model**.

![][image1]

The chief browser object is the window object, which contains properties and methods we can use to access different objects within the window.

These include:

* window.navigator
  * Returns a reference to the navigator object.

 // Access to the user's state and identity

  window.navigator.cookieEnables;    // true

  window.navigator.userAgent;        // "Mozilla/5.0 ..."

* window.screen
  * Returns a reference to the screen object associated with the window.

 // Access to screen metadata

  window.screen.height;       // 1080

  window.screen.width;        // 1920

  window.screen.availHeight   // 977

* window.history
  * Returns a reference to the history object.

 // Access your tab history

  window.history.length;     // Shows how many pages are in the current tab's history

  window.history.back;       // Redirects the user to the previous page

* window.location
  * Gets/sets the location, or current URL, of the window object.

 // Access location information

  window.location.host;       // "developer.mozilla.org

  window.location.pathname;   // "/en-US/docs/Web/API/Document\_Object\_Model"

* window.document, which can be shortened to just document
  * Returns a reference to the document that the window contains.

 // Access to the document object to select/manipulate HTML elements (e.g. body, head, etc.)

  window.document.body;   // \<body\>...\</body\>

  window.document.title;  // "(Insert Tab Name Here)"

  window.document.links;  // HTMLCollection \[\]

Note how you can shorten window.document to document. For example, the document in document.title actually refers to window.document. All of the methods above can be shortened in the same way.

## The DOM: Interacting with HTML

The **DOM, or Document Object Model** contains a collection of nodes (HTML elements), that can be accessed and manipulated.

It represents the  window.document; the document object is a Web page, and the DOM represents the object hierarchy of that document.

## **Tuesday** {#tuesday-7}

## **Wednesday** {#wednesday-6}

# DOMContentLoaded vs. window.onload

# Hello, World DOMination: Adding a CSS Class After DOM Load Event

In our previous JS examples, we used window.onload to run a function after the window has loaded the page, which ensures that all of the objects are in the DOM, including images, scripts, links, and subframes. However, we don't need to wait for stylesheets, images, and subframes to finish loading before our JavaScript runs because JS isn't dependent on them. And, some images may be so large that waiting on them to load before the JS runs would make the user experience feel slow and clunky. There is a better method to use in this case: DOMContentLoaded.

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)

[Links to an external site.](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)

, "the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading."

We'll use DOMContentLoaded to add CSS classes to page elements immediately after they are loaded. Let's add the CSS class "i-got-loaded" to the body element when the window fires the DOMContentLoaded event. We can do this in the script block or in an external JS file, as we did in the examples above.

**Javascript**

window.addEventListener("DOMContentLoaded", event \=\> {
  document.body.className \= "i-got-loaded";
});

After adding the Javascript above, refresh the HTML in your browser, inspect the page, and notice that the body element now has a class of "i-got-loaded".

## **Thursday** {#thursday-6}

## **day** {#day}

# Study Guide for Monday

# Browser, DOM, Events, and Storage Study Guide I

Use this outline to guide you through today's readings and practices. This will focus your attention on the most important points to prepare you for the upcoming assessment.

## Browser Basics

Learning Objectives:

* Run JavaScript on the browser by importing scripts into HTML files
* Import JavaScript from one file into another
* Diagram the process in which the browser loads HTML, images, CSS stylesheets, scripts, fonts, and other assets
* Compare and contrast running JavaScript in Node in a console vs. the runtime environment on the browser
* Execute specified JavaScript after all of the elements in a page have loaded
* Compare and contrast DOM and BOM
* Manipulate key elements of the BOM, including the window and the document, using JavaScript

## Chrome Developer Tools

* Elements tab
  * test and manipulate your HTML and CSS
* Console tab
  * test JavaScript and debug JavaScript code on the frontend
* Sources tab
  * inspect an application's file structure and create/edit files to the application
* Network tab
  * see HTTP requests the page is making
* Application tab
  * view and manipulate the application's data (Web Storage and Cookies)

## Importing JavaScript files into HTML

* Using the \<script\> HTML tag with the src attribute, you can load JavaScript files into an application that will be run when loaded
* The JavaScript files will be loaded in the order that they are placed in the HTML document (from top-down)
* Placement of the \<script\> tags determine when the JavaScript file that it imports gets loaded
* Best practices for where to place the \<script\> tags:
  1. As children in the \<head\> HTML element
     * JavaScript files that are imported this way may be loaded and run BEFORE all the HTML DOM elements are constructed in the \<body\> HTML element
  2. As the last child elements of the \<body\> HTML element
     * This will guarantee the JavaScript files that are imported to be loaded and run AFTER all the HTML DOM elements are constructed before them

Example of imported JavaScript files inside of the \<head\> HTML element:

\<\!DOCTYPE html\>
\<html\>
 \<head\>
   \<title\>Importing JavaScript to HTML\</title\>
   \<script src\="your-script-here.js"\>\</script\>
   \<script src\="../your-other-script-here.js"\>\</script\>
   \<script src\="/another-script-here.js"\>\</script\>
 \<head\>
 \<body\>
   ...
 \</body\>
\</html\>

Example of imported JavaScript files at the end of the \<body\> HTML element:

\<\!DOCTYPE html\>
\<html\>
 \<head\>
   \<title\>Importing JavaScript to HTML\</title\>
   ...
 \<head\>
 \<body\>
   ...
   \<script src\="your-script-here.js"\>\</script\>
   \<script src\="../your-other-script-here.js"\>\</script\>
   \<script src\="/another-script-here.js"\>\</script\>
 \</body\>
\</html\>

## DOM vs. BOM

* **BOM** \- Browser Object Model, the chief browser object is the window
  * useful properties on the window object:
    * navigator \- information about the browser and device
      * ex: window.navigator.cookieEnables or navigator.cookieEnables
    * screen \- information about the dimensions and how the HTML is rendered
      * ex: window.screen.height or screen.pixelDepth
    * history \- interface for reading and manipulating the browser history
      * ex: window.history.back() or history.go(-1)
    * location \- interface for reading and manipulating the URL
      * ex: window.location.host or location.pathname
    * document \- interface for reading and manipulating the HTML elements
      * ex: window.document.title or document.body
      * document.body.children results in an array-like object whose elements are the child HTML elements of the \<body\> HTML element
* **DOM** \- Document Object Model, or window.document or just document
  * contains a collection of HTML elements
  * the web page and the object hierarchy of the HTML document
