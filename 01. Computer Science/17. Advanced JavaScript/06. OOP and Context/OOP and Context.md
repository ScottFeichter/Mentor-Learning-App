
POJO

APIE
function overloading
function overriding

instance method/variable
static method/variable

new

class
extends

constructor
super

static

this

bind
call
apply

“use strict”

**For my js practice routine:**

this

* *this is a keyword, not a variable*
* *you cannot change the value of this*
* *but it refers to an object*
* *which object depends on context and usage*
- in object method this refers to the object
- alone, this refers to global object
- in function, refers to global object
- in an event, this refers to the element that received the event

let copyOfFuncBound \= func.bind(targetThisContext, …optPrependArgs);

* *the bind() method allows an object to borrow a method from another object*
* *sometimes the bind() method has to be used to prevent losing this*
* *for example when a func is a cb, this is lost*
* *the this value of copyOfFuncBound is the assigned context no matter where it is invoked*
* *the behavior is different is bound function is constructed using the new keyword*

let returnValOfBoundFunc \= func.call(targetThisContext, optComma, optSeperated, optArgs, optToBePased, …optOrSpreadArgs);
let returnValOfBoundFunc \= func.apply(targetThisContext, opt\[array, of, args\]);

* *these are interchangeable*
  * *it is sort of legacy code because before the spread operator it was needed to have two versions, call and apply, depending on what is passed*
* *follow same rules as bind*
* *difference is that:*
  * call and apply invoke the function
  * return the return of the bound function

\!\!\! CANNOT USE BIND() ON A FUNCTION DEFINED WITH FAT ARROW SYNTAX \=\>
\!\!\! THEY ARE AUTOMATICALLY BINDED TO WHAT THEY ARE CREATED IN
\!\!\! ARROW FUNCTIONS RETAIN THE CONTEXT

**Terms of note**

POJO

APIE
function overloading
function overriding

instance method/variable
static method/variable

context (this object)
bound function aka exotic function

strict mode vs sloppy mode
