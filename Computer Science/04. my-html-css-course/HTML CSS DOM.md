# HTML CSS DOM PRACTICE ROUTINE

[HTML	2](#html)

[HTML Particulars	2](#html-particulars)

[HTML Starter Code	4](#html-starter-code)

[CSS	5](#css)

[CSS Syntax	5](#css-syntax)

[CSS Placing Things	8](#css-placing-things)

[CSS Position	8](#css-position)

[CSS Display	9](#css-display)

[CSS Box Model	9](#css-box-model)

[CSS Sizing	9](#css-sizing)

[CSS Shape	9](#css-shape)

[CSS Media Queries	10](#css-media-queries)

[CSS Starter Code	10](#css-starter-code)

[THE BOM	14](#the-bom)

[window.onload	15](#window.onload)

[THE DOM	17](#the-dom)

[DOM Manipulation with JS	17](#dom-manipulation-with-js)

[NODES AND NODELISTS	17](#nodes-and-nodelists)

[HTML ELEMENT NODES	18](#html-element-nodes)

[ATTRIBUTE NODES	18](#attribute-nodes)

[TEXT NODES	18](#text-nodes)

[HTML COLLECTIONS	18](#html-collections)

[innerHTML, innerText and textContent	21](#innerhtml,-innertext-and-textcontent)

[DOM Events	22](#dom-events)

[DOM Event Listeners	23](#dom-event-listeners)

[Event Objects	25](#event-objects)

[event.target	25](#event.target)

[event.preventDefault()	26](#event.preventdefault\(\))

[event.stopPropagation()	26](#event.stoppropagation\(\))

[COOKIES AND STORAGE	26](#cookies-and-storage)

[DATA-ATTRIBUTES	28](#data-attributes)

[NETWORK	29](#network)

[What is a MAC Address?	29](#what-is-a-mac-address?)

[What is a Port?	30](#what-is-a-port?)

[What is DNS?	31](#what-is-dns?)

# HTML {#html}

## HTML Particulars {#html-particulars}

WHITESPACE  
Ignored by HTML (except in text content?)

TAGS  
Opening Tag ie \<h1\>

Closing Tag ie \</h1\>

ATTRIBUTES

	Extra information in tags

Usually attribute=”value” pairs

Always inside opening tag

\<h1 id=”my header”\>Id is a common attribute\</h1\>

Frequently Used Attributes

name – specifies a name so to reference the element in JS?  
id – unique id of an element for css selection  
class – class of an element for css selection  
title – displays text on hover  
src – specifies url of media file  
alt – provides alternative text when element fails to display  
href  \- species the url for the hyperlink  
form  
method  
label  
onsubmit  
table  
headers  
onclick (this is an event attribute. there are many event attributes. events can be assigned to an element via js instead of as an attribute in the html.)

CONTENT  
The information between opening and closing tags (ie the text of an h1)

ELEMENTS  
Includes tag(s), the attributes of tags, and the content in between

\<h1 class=”heading”\>All together this is an element\</h1\>

Component Elements  
\<\!DOCTYPE\>   
\<html\>   
\<head\>   
\<body\>

Document Metadata  
\<link\>   
\<title\>   
\<lang\>   
\<script\>  
\<meta\>  
\<base\>

Text Content  
\<ol\>   
\<ul\>   
\<li\>  
 \<p\>   
\<h1\> etc

Inline Text Semantics  
\<a\> anchor uses href to create hyperlink  
\<br\> break  
\<hr\> horizontal line  
\<em\> emphasis  
\<strong\> bold

Grouping  
\<span\>  
\<div\>  
\<nav\>  
\<header\>  
\<main\>  
\<section\>  
\<footer\>

Forms  
\<form\>  
\<fieldset\>  
\<legend\>  
\<label\>  
\<input\>

## 

## HTML Starter Code {#html-starter-code}

\<\!DOCTYPE html\>  
\<html lang\="en"\>

\<head\>  
   \<meta charset\="UTF-8"\>  
   \<meta name\="viewport" content\="width=device-width, initial-scale=1.0"\>  
   \<link rel\="stylesheet" href\="main.css"\>  
   \<link rel\="stylesheet" href\="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.1/css/all.css"\>  
   \<link rel\="icon" href\="https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/EventSight/e.png"\>  
   \<title\>CSS Positioning\</title\>  
\</head\>

\<body\>  
       \<div class\="element" id\="yellow-box"\>1 \<br\>static\</div\>  
       \<div class\="element" id\="pink-box"\>2 relative  
           \<\!-- \<p\>2 relative\</p\> \--\>  
       \</div\>  
       \<div class\="element" id\="blue-box"\>3 \<br\>absolute\</div\>  
       \<div class\="element" id\="red-box"\>4 \<br\>fixed\</div\>  
       \<div class\="element" id\="orange-box"\>5 \<br\>sticky\</div\>

       \<div id\="waydown"\>waydown\</div\>

\</body\>

\</html\>

# 

# CSS {#css}

	Ways To Apply

External  
CSS in separate file  
	Relative link  
		Absolute link 

\<link rel\="stylesheet" href\="mystyle.css"\>

	Internal  
		CSS in the HTML file

		\<style\>  
body {  
  background-color: linen;  
}

h1 {  
  color: maroon;  
  margin-left: 40px;  
}  
\</style\>

Inline  
	CSS in the HTML tag

\<h1 style\="color:blue; text-align:center;"\>  
This is a heading\</h1\>

Importing

	CSS from web imported to CSS file

## CSS Syntax {#css-syntax}

Rules  
A CSS rule has a selector then declaration block with one or more declarations

Selector indicates which HTML element

Declaration is a CSS property name and value pair

	selector { property: value; }

Simple Selectors

Type  
div {}  
Class  
	.theClass {}  
ID  
	\#theId {}  
Universal (all elements)   
 \* {}  
Attribute   
a\[label\] {}

Compound Selectors

And  
h1, h2 {}

Is both   
p.myquote {}

Complex Selector Combinators 

Descendant (all inside)  
div p {}

All Child (direct children)  
div \>  p {}

Same and Sibling (all p with shared parent)  
div \~ p {}

Adjacent Sibling (same parent but next to each other)  
div \+ p {}

Column (all nodes of a col)  
col || td

	Element Has Selectors

Has general   
\[id\] {}

Has specific   
\[id=my-Address\] {}

Has beginning with   
\[id|=my\] {}

Has ending with   
\[id$=ess\] {}

Has starting with   
\[id^=m\] {}

Has containing word   
\[title\~=beautiful\] {}

Has containing string   
\[id\*=string\] {}

Pseudo Classes 

- used to define a special state of an element  
- selector:pseudo-class {}


  All of pseudo

  :checked {}


  Only when

  a:hover {}


Pseudo Elements 

- used to style specified parts of an element   
- selector::pseudo-element {}


  

  Are first child of 

  p::first-child {}


  First letter of all 


  p::first-letter {}


  First line of all

  p::first-line {}


  

  Specificity

  \!important 

  Inline Style 

  id

  class

  element


  


  Emmitt Abbreviations


  


  


  


## CSS Placing Things {#css-placing-things}

- when positioning with CSS some properties/values act on self element  
  - Margin  
  - Border  
  - Padding  
  - Content(?)  
  - Others  
      
- when positioning with CSS some properties/values act on other element within  
  - Flexbox  
    - Flex Direction  
    - Justify Content  
    - Align Items  
  - Grid  
  - Others  
      
- when positioning with CSS some properties/values affect the relationship to the window  
  - Media Queries  
  - Display  
  - Position

## 

## CSS Position  {#css-position}

- understanding the treeish structure of the HTML is critical

Position:

      Static 

- default position  
- top, right, bottom, left and z-index **have no effect**


     Relative

- movement is relative to where *it would normally be as static*  
- top, right, bottom, left and z-index will move it

     Absolute

- movement is relative to *the viewport*  
- top, right, bottom, left and z-index will move it  
- will always be in same position even when scrolled

     Fixed

- movement is relative to *the nearest positioned ancestor* (if none then body)  
- top, right, bottom, left and z-index will move it  
- it is removed from normal flow and can overlap

     Sticky

- movement is relative to *the user’s scroll position*  
  - top, right, bottom, left and z-index will move it  
  - it toggles between relative and fixed depending on scroll  
  - MUST SPECIFY AT LEAST ONE TOP, BOTTOM, RIGHT OR LEFT  
  - not supported by Explorer

## CSS Display {#css-display}

## CSS Box Model {#css-box-model}

MBPC \- Margin Border Padding Content

## CSS Sizing {#css-sizing}

## CSS Shape {#css-shape}

            **Basic Shape Values**

* clip-path: inset(100px 50px);  
* clip-path: circle(40%)  
* clip-path: ellipse(130px 140px at 10% 20%);  
* clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);  
* clip-path: path('M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z');  
* clip-path: rect(5px 5px 160px 145px round 20%);  
* clip-path: xywh(0 5px 100% 75% round 15% 0);

	**Geometry Box Values**

* clip-path: margin-box;  
* clip-path: border-box;  
* clip-path: padding-box;  
* clip-path: content-box;  
* clip-path: fill-box;  
* clip-path: stroke-box;  
* clip-path: view-box;

## CSS Media Queries {#css-media-queries}

## CSS Starter Code {#css-starter-code}

\* {  
   font-family: "Neue Plak", sans-serif;  
   margin: 0;  
   padding: 0;  
   background-color: var(\--app-background);  
   color: var(\--app-text);  
   box-sizing: border-box;  
}

button {  
   cursor:pointer;  
}

:root {  
   \--app-background: \#eeedf2;  
   \--app-text: \#6f7287;  
   \--app-border: \#6f7287;  
   \--app-text-orange: \#f05537;  
   \--app-background-footer: \#1e0a3c;  
   \--app-text-white: \#FFFFFF;  
}

\#yellow-box {  
   border: black dotted 2px;  
   background-color: \#ffff00;

   display: inline-flex;  
   justify-content: center;  
   align-items: center;  
   text-align: center;  
   font-size: 36px;

   width: 200px;  
   height: 200px;  
   margin: 0;  
   padding: 0;  
   box-sizing: border-box;

   position: static;  
   bottom: 0;  
   left: 0;  
   right: 0;  
   top: 0;  
   z-index: 0;  
   clip-path: none;  
}

\#pink-box {  
   border: black dotted 2px;  
   background-color: \#ff69b4;

   display: inline-flex;  
   align-items: center;  
   justify-content: center;  
   text-align: center;  
   font-size: 36px;

   width: 200px;  
   height: 200px;  
   margin: 0;  
   padding: 0;  
   box-sizing: border-box;

   position: relative;  
   bottom: 0;  
   left: 0;  
   right: 0;  
   top: 0;  
   z-index: 0;  
   clip-path: circle(40%);  
}

\#blue-box {  
   border: black dotted 2px;  
   background-color: \#00eeee;

   display: inline-flex;  
   justify-content: center;  
   align-items: center;  
   text-align: center;  
   font-size: 36px;

   width: 200px;  
   height: 200px;  
   margin: 0;  
   padding: 0;  
   box-sizing: border-box;

   position: absolute;  
   bottom: 0;  
   left: 10em;  
   right: 0;  
   top: 10em;  
   z-index: 0;  
   clip-path: none;  
}

\#red-box {  
   border: none;  
   background-color: \#ff0000;

   display: inline-flex;  
   justify-content: center;  
   align-items: center;  
   text-align: center;  
   font-size: 36px;

   width: 200px;  
   height: 200px;  
   margin: 0;  
   padding: 0;  
   box-sizing: border-box;

   position: fixed;  
   bottom: 0;  
   left: 12em;  
   right: 0;  
   top: 12em;  
   z-index: 0;  
   clip-path: none;  
}

\#orange-box {  
   border: black dotted 2px;  
   background-color: \#ffa500;

   display: inline-flex;  
   justify-content: center;  
   align-items: center;  
   text-align: center;  
   font-size: 36px;

   width: 200px;  
   height: 200px;  
   margin: 0;  
   padding: 0;  
   box-sizing: border-box;

   /\* position: \-webkit-sticky; \*/  
   position: sticky;  
   top: 0;  
   z-index: 0;  
   clip-path: none;  
}

\#waydown {  
   margin-top: 2000px;  
}

# THE BOM  {#the-bom}

If you took a bird's-eye view of the browser, you would see a [hierarchy of browser objects.](http://itwebtutorials.mga.edu/js/chp1/browser-object-model.aspx)

This hierarchy is known as the **BOM, or Browser Object Model**.

The chief browser object is the window object \- the outside Russian doll so to speak. 

The window object has properties and methods to access different objects within the window.

These include:

* window.navigator

  * Returns a reference to the navigator object.

    // Access to the user's state and identity

    *  window.navigator.cookieEnables;  // true

      *  window.navigator.userAgent;        // "Mozilla/5.0 ..." 

 

* window.screen

  * Returns a reference to the screen object associated with the window.

    // Access to screen metadata

    * window.screen.height;            // 1080

      * window.screen.width;             // 1920

      * window.screen.availHeight;   // 977

* window.history

  * Returns a reference to the history object. // Access your tab history

    * window.history.length;  // Number of pages in current tab's history

      * window.history.back;  // Redirects the user to the previous page 

* window.location

  * Gets/sets the location, or current URL, of the window object.

    // Access location information

    * window.location.host;  

      // "developer.mozilla.org

      * window.location.pathname;   

        // "/en-US/docs/Web/API/Document\_Object\_Model"

* window.document 

  * Returns a reference to the document that the window contains.

    // Access to the document object to select/manipulate HTML elements (e.g. body, head, etc. \- the document is the \<html\>...\</html\>)

    * window.document.head;    // \<head\>...\</head\>

      * window.document.body;   // \<body\>...\</body\>

      * window.document.links;  // HTMLCollection 

      * can be shortened to just document 

      * document.body;   // \<body\>...\</body\>


  

[https://www.w3schools.com/jsref/obj\_window.asp](https://www.w3schools.com/jsref/obj_window.asp) for more information

## window.onload {#window.onload}

If you want to wait for all the other assets, including CSS, \<img\> tags, and other media, to load *before* running the script, you can use the window object property window.onload.

Here's what that would look like:

| \<\!DOCTYPE html\>\<html\>  \<head\>    \<title\>DOM Manipulation Fun\</title\>    \<script src\="list-change.js"\>\</script\>  \</head\>  \<body\>    \<h1\>Example Page\</h1\>    \<div\>        \<ul\>            \<li\>Item 1\</li\>            \<li\>Item 2\</li\>            \<li\>Item 3\</li\>        \</ul\>    \<div\>  \</body\>\</html\> |
| :---- |

| window.onload \= () \=\> {  let div \= document.body.children\[1\];  let ul \= div.children\[0\];  let thirdLi \= ul.children\[2\];  thirdLi.innerText \= "New Text";}; |
| :---- |

Refresh your page and you should see the text of the third list element change\! The window.onload property is assigned a callback function that is executed *after* the DOM, as well as all other assets, have finished loading. This way, your JavaScript won't have any references to objects in the DOM that don't exist when executed\!

# 

# 

# 

# 

# THE DOM  {#the-dom}

# 

The **DOM, or Document Object Model** contains a collection of nodes that can be accessed and manipulated. 

It represents the  window.document; the document object is a web page, and the DOM represents the object hierarchy of that document.

## DOM Manipulation with JS {#dom-manipulation-with-js}

### NODES AND NODELISTS {#nodes-and-nodelists}

**Node**   
\- anything inside an HTML document  
\- technically a type of object  
\- 3 kinds of document nodes:

1. element nodes (HTML elements)  
2. attribute nodes  
3. text nodes

**NodeList** 

- an iterable linked list of node objects?  
- uses index starting at 0  
- IS A STATIC COLLECTION\!  
- can use the following properties and methods:  
    
- length  
- entries()  
- forEach()  
- item()  
- keys()  
- values()


  
Getting Nodes: 

      let node \= document.querySelector(“selector”)   
			looks for a node that matches a CSS selector  
			returns a single node  
			returns the first match  
querySelector(“.className”) to get \[0\]  of this class

let nodeList \= document.querySelectorAll(“.className”)   
gets all nodes matched to a CSS selector as a static NodeList  
can configure this using compound CSS selector so ie \#item \> li etc…  
static because any changes to DOM do not affect content collection  
NodeList is different from array but can use forEach() 

let nodeList \= document.getElementsByName(”name”)

let nodeList \= document.body.childNodes

let firstChildNode \= nodeOfAnyKind.firstChild

let lastChildNode \= nodeOfAnyKind.lastChild

let parentNode \= nodeOfAnyKind.parentNode

let nextSiblingNode \= nodeOfAnyKind.nextSibling

let previousSiblingNode \= nodeOfAnyKind.previousSibling

### HTML ELEMENT NODES {#html-element-nodes}

\- is a special type of node that is HTML element ie \<h1 id=”heading”\>The Heading\</h1\>  
\- it will have the properties and methods of a node and more

### ATTRIBUTE NODES  {#attribute-nodes}

### TEXT NODES {#text-nodes}

### HTML COLLECTIONS {#html-collections}

**HTMLColleciton** 

- an iterable linked list of HTML Element Node Objects?  
- uses index starting at 0  
- IS A LIVE COLLECTION\!  
- can use the following properties/methods:

- length  
- item()  
- namedItem()


  

Getting HTML Elements:    *// create a js variable using these js methods*  
   
    let element \= document.getElementById(“id”)

let elementsHTMLCollection \= document.getElementsByTagName(”TagName”)

let elementsHTMLCollection \= document.getElementsByClassName(”ClassName”)

let elementsHTMLCollection \= document.body.children // can be used on elements too

let firstElementChild \= element.firstElementChild

let lastElementChild \= element.lastElementChild

let parentElement \= element.parentElement

let nextElementSibling \= element.nextElementSibling

let previousElementSibling \= element.previousElementSibling

Changing HTML Elements:

element.innerHTML \= content  
element.innerText \= content?

element.attribute \= value

element.style.property \= style

element.getAttribute(attribute)  
element.removeAttribute(attribute)  
element.setAttribute(attribute, value)

Adding and Deleting Elements:

document.createElement(element)  
document.removeChild(element)  
document.appendChild(element)  
document.replaceChild(new, old)

**Can make a JS function to do these tasks for example:**

		const addElement \= () \=\> { 

			*// create a new h1*   
const newElement \= document.createElement(“h1”);

*// set the h1’s id*    
newElement.setAttribute(“id”, “sleeping-giant”);

*// give it content (in the form of a text node in this case)*  
const newContent \= document.createTextNode(“Jell-O, Burled\!”);

*// add the text node to the newly created h1*  
newElement.appendChild(newContent);

*// add the newly created element and its content to the DOM*  
document.body.appendChild(newElement);

};

*// run the script (the function) when the page is loaded*  
window.onload \= addElement;

**Alternatively, here's another way to perform the same task using some different methods:**

const addElementAlt \= () \=\> {  
    document.body.innerHTML \= "\<h1\>Jell-O, Burled\!\</h1\>";  
}

window.onload \= addElementAlt;

In this example, the innerHTML property is assigned a string version of the element we want to create. Using innerHTML as opposed to createElement combined with appendChild can be more efficient when you want to embed a larger HTML block inside another.

For example, if you had a pre-built component that consists of multiple elements nested within each other, it would be much quicker to just write out, or copy-paste, the HTML into innerHTML instead of creating each individual element and then appending them in the right locations.

NOTE: It may seem that innerHTML and innerText are essentially doing the same thing. This is NOT the case. innerHTML interprets the string value as HTML, whereas innerText interprets the string value purely as text.

##  {#innerhtml,-innertext-and-textcontent}

### innerHTML, innerText and textContent {#innerhtml,-innertext-and-textcontent}

| The innerHTML property returns: The text content of the element, including all spacing and inner HTML tags. |
| :---- |
| **The innerText property returns:** Just the text content of the element and all its children, without CSS hidden text spacing and tags, except \<script\> and \<style\> elements. |
| **The textContent property returns:** The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags. |

#### HTML Example

\<p id\="myP"\>   This element has extra spacing 	and contains \<span\>a span element\</span\>.\</p\>

#### JavaScript Examples

let text \= document.getElementById("myP").innerText;

let text \= document.getElementById("myP").innerHTML;

let text \= document.getElementById("demo").textContent;

In the example above:

| The innerText property returns: This element has extra spacing and contains a span element. |
| :---- |
| **The innerHTML property returns:**    This element has extra spacing	and contains \<span\>a span element\</span\>. |
| **The textContent property returns:**    This element has extra spacing	and contains a span element. |

## DOM Events {#dom-events}

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

Events can be designated in HTML, CSS, or via JS depending on circumstances. 

## 

## 

## DOM Event Listeners  {#dom-event-listeners}

Events can happen on or in any of the BOM objects. 

Likewise, event listeners can be created to any of the BOM objects. 

- window.addEventListener(see below for syntax)  
- document.addEventListener(see below for syntax)  
- element.addEventListener(see below for syntax)

An object will be able to have support events to have listeners and will have the addEventListener() method.  

**addEventListener() method**

Regardless of what object the listener is being added to, the method to do so looks the same, and can be configured with a few variations:

addEventListener(type, listener) // no options  
addEventListener(type, listener, options) // with an options object  
addEventListener(type, listener, useCapture) // with a boolean for useCapture 

**type** required case sensitive string representing the event to listen for

**listener** required item receiving notification of event occurrence, 3 possibilities:

\- callback event handler function  
\- an object that has a handleEvent() method  
\- null

**options** optional object with any or all of the following possible properties:

let options \= {  
	capture: boolean  
	once: boolean  
	passive: boolean  
	signal: abort()  
}

**useCapture** optional boolean default false and if true changes from bubbling to capturing. 

**Propagation**

Propagation of the events on nested elements : does it bubble from inner first to outer or does it capture which is outer to inner.

You can prevent propagation with event.stopPropagation()

**Adding an event listener example**

This example looks at the syntax for addEventListener() when used on a DOM element:

Syntax:

const someElement \= document.SomehowGetTheElement(“element”)

		someElement.addEventListener(“event”, function handlerCallback(eventObject) {

something to happen;  
various logic;

}, false);

Example:

const button \= document.querySelector(“button”);

		button.addEventListener(“click”, (e) \=\> {

console.log('Event fired: ${e}');

}, false);

## 

## 

## Event Objects {#event-objects}

An event object is created when the event is triggered (via the listener sensing the action it is listening for). 

The event object can be passed to the handlerFunction(), the callback that is the second argument of the addEventListener() function. 

An event object has many properties and methods.

### event.target {#event.target}

The target property returns the element where the event occurred.

The target property is read-only.

The target differs from the [currentTarget](https://www.w3schools.com/jsref/event_currenttarget.asp) property, which returns the element whose event listener triggered the event.

### event.preventDefault() {#event.preventdefault()}

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

* Clicking on a "Submit" button, prevent it from submitting a form  
* Clicking on a link, prevent the link from following the URL

document.getElementById("myAnchor").addEventListener("click", function(event){  
  event.preventDefault()  
});

Note: Not all events are cancelable. Use the [cancelable](https://www.w3schools.com/jsref/event_cancelable.asp) property to find out if an event is cancelable.

Note: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.

### event.stopPropagation() {#event.stoppropagation()}

event.stopPropagation()

## 

# COOKIES AND STORAGE {#cookies-and-storage}

**Stateful** \- it matters only to the one user in their browser for a particular amount of time.

Stateful data can be persisted in the browser without the need for a database.

* **Cookies**  
    
  * A **session cookie**: string data only, shared between frontend and backend, disappears when browser tab closed  
    * Up to 4KB

    

  * A **persistent cookie**: string data only, shared between frontend and backend, exists until expiration date  
      
* **Web Storage API**  
    
  * **Session storage** variable: string data only, only in frontend application, disappears when browser tab closed (JSON.stringify non-string data)  
    * Up to 5MB

    

  * **Local storage** variable: string data only, only in frontend application, exists until browser cache is cleared (JSON.stringify non-string data)

**Cookie** \- a small file stored on a user’s computer that holds a bite-sized amount of data, under 4KB. Cookies are included with HTTP requests. The server sends the data to a browser, where it's typically stored and then sent back to the server on the next request.

To create a session cookie: 

- const firstCookie \= "favoriteCat=million";  
  - document.cookie \= firstCookie;

To create a persistent cookie: 

- Set cookie expiration to date to future  
  - document.cookie \= "favoriteCat=; expires \= Thu, 01 Jan 2070 00:00:00 GMT";

	To delete a cookie: 

- Set cookie expiration to date in past  
  - document.cookie \= "favoriteCat=; expires \= Thu, 01 Jan 1970 00:00:00 GMT";

should be able to make an educated guess about when to use the following data storage options

* localStorage (client-side)  
  * easy to read and write  
    * can store a decent amount of data  
    * will persist until deleted  
    * can only be read and updated by the client not the server  
    * cannot be read by the server unless data is sent directly in the request  
  * sessionStorage (client-side)  
    * easy to read and write  
    * can store a decent amount of data  
    * will be automatically deleted when browser closes  
    * can only be read and updated by the client not the server  
    * cannot be read by the server unless data is sent directly in the request  
  * session cookies (client-side)  
    * hard to read and write on the client  
    * total cookie storage is only 4kB of data  
    * will be automatically deleted when browser closes  
    * will be sent with every request to the server  
    * can be updated by the server through any responses that come back from the server  
  * persistent cookies (client-side)  
    * hard to read and write on the client  
    * total cookie storage is only 4kB of data  
    * will persist until expire date passes or the maximum age in seconds is reached  
    * will be sent with every request to the server  
    * can be updated by the server through any responses that come back from the server  
  * backend database (server-side)  
    * can hold a lot more data  
    * data can be accessed by all clients  
    * persists until deleted by the server  
    * data must be requested by the client and sent as a response by the server  
    * can restrict information to be sent to the client

use the "Application" tab in the Developer Tools to read/manipulate the different client storage options

# DATA-ATTRIBUTES {#data-attributes}

data- attributes are really useful for storing data that doesn't need to be displayed on HTML elements.

Given the following HTML:

\<div data-banana\="yellow"\>\</div\>

You can read and update data- attributes on an HTML element:

const div \= document.querySelector('div');  
div.dataset.banana; // "yellow"  
div.dataset.coolInfo \= "Hello World\!";

The above code will change the HTML to be:

\<div data-banana\="yellow" data-cool-info\="Hello World\!"\>\</div\>

# NETWORK {#network}

Learning Objectives:

* Compare and contrast a MAC Address, an IP Address, and a port  
* Compare and contrast IP Addresses, Domain Names, and DNS  
* Diagram the process of sending data from a client to a server and back

### What is a MAC Address? {#what-is-a-mac-address?}

* **MAC Address** \- Media Access Control Address, permanent identifiers assigned to network interface hardware  
  * hardcoded into the device, so can't be changed without physically changing the hardware  
  * the only protocol addressing scheme that is considered "permanent"  
  * used to differentiate devices & interface from each other  
  * **MAC filtering** is used to limit access in corporate computer networks or on multiplayer gaming services  
    * you should never rely on MAC filtering as a surefire security feature  
    * you can easily change what MAC address is reported by an operating system, this is called **spoofing**  
  * referred to as a physical address  
  * represented by 6 pairs of hexadecimal digits  
    * ex: A1-B2-C3-D4-E5-F6 or a1b2c3d4e5f6  
  * used by network devices to map network interfaces to one another  
* **frame** \- external wrapper for data transmitted through a network  
  * data is passed in frames  
  * each frame includes:  
    * a source MAC address  
    * a destination MAC address  
    * a payload containing the transport protocol wrapper (TCP vs. UDP)  
    * IP wrapper (IP Address)  
    * and any additional application data

### What is a Port? {#what-is-a-port?}

* **port** \- a virtual interface, acts as a connection point for a particular service or application to the network  
  * each transport protocol (TCP, UDP) has different set of ports and port numbers  
  * defined by a number from 0 \- 65535 and its transport protocol  
    * To distinguish a port between a TCP or a UDP port, you specify the protocol followed by a port number  
    * ex: you have used port TCP 5000 for development, but not UDP 5000 yet  
    * ex: TCP 25 and UDP 25 are different ports even though they have the same port number  
  * when we talk about port numbers, we usually mean TCP ports  
  * similar to a gate at an airport terminal  
  * TCP port assignments today are managed by the IANA and are broken down into three separate ranges:  
    * TCP 0-1023 are System ports  
      * reserved for well-known services and use cases  
    * TCP 1024-49151 are User ports  
      * used to be reserved for services that identified themselves to the IANA  
      * now used for any custom software  
      * 3000, 5000, and 8080 are reserved for development  
    * TCP 49152-65535 are Dynamic ports  
      * ephemeral or short-living  
      * a system service is likely to use these when building sockets for TCP connections  
  * Treat any ports below 1024 as untouchable for your own custom servers, and only work above 49152 if you have a very good reason to do so

### What is DNS? {#what-is-dns?}

* **DNS** \- Domain Name System, a method of translating long numeric identifiers into friendly, human-readable addresses  
  * similar to a phone book where a phone book translates phone numbers into people/businesses and home/business addresses  
  * ex: Google Public DNS IP addresses (IPv4) are 8.8.8.8 and 8.8.4.4  
  * **domain registry** \- an organization that holds records of domain names to their numeric identifier  
    * kind of like the creator of a phone book  
    * these organizations must be registered by ICANN  
  * **domain name** \- the "friendly" name for the website's host, or the server providing the site's content  
    * differs from a URL in that the domain is only the server's identifier, not other application or protocol-related data in the URL  
    * ex: students.appacademy.io  
    * split into three sections  
      * **top-level domain** or TLD \- last part of the domain name, to the right of the last dot in the domain name  
        * ex: domain name: students.appacademy.io, top-level doman: .io  
        * common TLD's include .com, .net and .org  
        * handled by a single domain registry  
          * ex: .gov is managed by the General Services Agency  
      * **second-level domain** \- the left of the last dot in the domain name  
        * can be purchased from a **domain register** \- sells second-level domains  
        * ex: domain name: students.appacademy.io, second-level doman: appacademy  
      * other level domains \- to the left of the second-level domain, don't need to be purchased after domain is purchased  
        * ex: domain name: students.appacademy.io, third-level doman: students  
    * the domain usually means just the second-level and top-level domains