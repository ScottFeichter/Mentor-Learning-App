
# The Single-Responsibility Principle

The Wikipedia definition for Single-Responsibility Principle is "every module, class or function in a computer program should have responsibility over a single part of that program's functionality".

To apply the Single-Responsibility Principle (SRP) in your current knowledge of JavaScript, your JavaScript function should do one thing and do it well. If your function is doing too many things, you should refactor your code to create one or more helper functions that follow SRP.

## Makes code easier to change

By following the Single-Responsibility Principle, debugging your code when a change is necessary will be simpler than not following SRP. Let's say another developer wants to make a small change to your function. If your function is doing too many things, then it will be hard to isolate the part that needs the change to be applied.

For example, suppose you have the following function for abbreviating words in a sentence. If a word in the sentence is longer than 3 characters, shorten it to be three characters without any vowels (i.e. "Hello World!" => "Hll Wrl").

```
const VOWELS = 'aeiou';

const abbreviateWords = function(sentence) {
  const words = sentence.split(' ');

  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    if (word.length > 3) {
      let newWord = "";
      let charIdx = 0;

      while (charIdx < word.length && newWord.length < 3) {
        let char = word[charIdx];
        if (!VOWELS.includes(char)) {
          newWord += char;
        }
        charIdx++;
      }

      words[wordIdx] = newWord;
    }
  }

  return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl


```

Why does this function look lengthy and hard to read? Because it is attempting to do too many things. The problem can be broken down into these steps:

1. Separate the sentence into words, change the words, then return it
2. For each word, change the word if the length of the word is greater than 3
3. If the length of the word is greater than 3, change the word to have a maximum length of 3 without any vowels

Each of these steps is doing different things and can be extracted into its own function. Here's an example of refactoring the abbreviateWords(sentence) function using SRP.

```
const VOWELS = 'aeiou';

const changeWord = function(word) {
  let newWord = "";
  let charIdx = 0;

  while (charIdx < word.length && newWord.length < 3) {
    let char = word[charIdx];
    if (!VOWELS.includes(char)) {
      newWord += char;
    }
    charIdx++;
  }
  return newWord;
}

const abbreviateWord = function(word) {
  if (word.length > 3) {
    return changeWord(word);
  }
  return word;
}

const abbreviateWords = function(sentence) {
  const words = sentence.split(' ');

  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    words.splice(wordIdx, 1, abbreviateWord(word));
  }

  return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl


```

Now if you or another developer wanted to change the problem even just a little, like changing the word only if the word has more than 5 characters, or changing the word to only include vowels instead of excluding them, you can easily isolate and identify a single part of the code that needs to be changed.

The Single-Responsibility Principle is all about limiting the impact of changing your code. If you change your code and other code or programs depend on it, how big of an impact will it have? Will other code or programs have to change to match the change you make to your code?

## What you've learned

In this article, you learned that you can apply the Single-Responsibility Principle when refactoring your code by making sure each function only has one responsibility or does only one thing. You also learned that you should apply the Single-Responsibility Principle when refactoring code because if the problem that the code is solving is changed, it will be easier to identify the section of code that needs to be changed.

# DRY Principle

There is an age-old principle for writing good code called DRY or Don't repeat yourself. The Wikipedia definition for DRY is "a principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy."

Good programmers always want code to be clear, concise, and efficient. Violations of DRY are typically referred to as WET ("write everything twice") code. To refactor code to be DRY and not WET, start by identifying any patterns in your code that come up at least twice. If there is a pattern in your code, then your code is WET. DRY it up by extracting the pattern to its own function or set of code and use that function or set of code wherever the pattern was used.

One of the things that makes this concept a challenge is that it is abstract, ambiguous, and to some degree, a matter of opinion. There is no perfect test or rule that can confirm or deny the need to refactor code to make it DRYer. You have to make a judgment call based on your own knowledge and experience as applied to the broader view of the nature and goals of the code. The only way to get good at this is to do the best you can to practice, practice, practice.

For example, suppose you have the following function that solves the problem of returning figuring out if an array of numbers includes three consecutive elements that are consecutive numbers (i.e. [5, 1, 2, 3, 6] => true; [5, 1, 2, 4, 6] => false).

```
const threeIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
      return true;
    }
  }
  return false
};

console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
console.log(threeIncreasing([5, 1, 2, 4, 6])); // false


```

Can you see any patterns in this code that make this code WET?

There is one pattern that can be refactored to make it DRYer. The if statement checks if three numbers are consecutive. But, there are two conditionals in the if statement that look very similar. The right-side of the conditionals adds 1 to an element and checks if that sum equals another element.

Can you figure out how to make this repeated pattern into its own set of code?

Here's an example of how the pattern can be refactored to make it DRY.

```
const isConsecutive = function(nums){
  const separatedBy = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if (num1 + separatedBy !== num2) {
      return false;
    }
  }
  return true;
};

const threeIncreasing = function(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    const consecutiveNums = [];
    for (let j = i; j < i + 3; j++) {
      consecutiveNums.push(nums[j]);
    }

    if (isConsecutive(consecutiveNums)) {
      return true;
    }
  }
  return false;
};


console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
console.log(threeIncreasing([5, 1, 2, 4, 6])); // false


```

Notice that the refactored code is actually lengthier than before the refactor. So is this code even better? And why go through all the effort to make it DRYer?

## Makes code easier to change

If there is a repeating pattern in WET code and you want to change any part of that pattern, you need to update it everywhere that the pattern is used. If the code is DRY and the pattern is extracted into its own code, it's easier to update or change the code to reflect any changes in the problem that it's solving.

Using the previous threeConsecutive(nums) example, suppose you want to change the problem so that the function returns true only if three consecutive elements in the array are consecutive numbers separated by 2 instead of 1?

In the pre-refactored version of threeConsecutive(nums), you would have to update the pattern twice.

```
const threeIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 2 === nums[i + 1] && nums[i + 1] + 2 === nums[i + 2]) {
      return true;
    }
  }
  return false
};

console.log(threeIncreasing([5, 1, 2, 3, 6])); // false
console.log(threeIncreasing([5, 1, 2, 4, 6])); // true


```

In the refactored version, not only do you have to only update the pattern once, identifying the area that needs the change is easier for other developers.

```
const isConsecutive = function(nums){
  const separatedBy = 2;

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if (num1 + separatedBy !== num2) {
      return false;
    }
  }
  return true;
};

const threeIncreasing = function(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    const consecutiveNums = [];
    for (let j = i; j < i + 3; j++) {
      consecutiveNums.push(nums[j]);
    }

    if (isConsecutive(consecutiveNums)) {
      return true;
    }
  }
  return false;
};

console.log(threeIncreasing([5, 1, 2, 3, 6])); // false
console.log(threeIncreasing([5, 1, 2, 4, 6])); // true


```

Suppose now you want to change the problem to check four consecutive elements in the number array instead of just three and see if they are consecutive numbers?

In the pre-refactored version of threeConsecutive(nums), you would have to change the code to repeat the pattern three times instead of two. If this pattern needs updates for future changes, you would need to update it three times instead of two. Now, imagine repeating this pattern 100 times instead. It would be a nightmare to update all 100 occurrences of the pattern.

NOTE: A bug was introduced in the code when repeating the pattern. Can you spot it?

```
// Please help debug this code.  It's broken!
const fourIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 2 === nums[i + 1] && nums[i + 1] + 2 === nums[i + 2] && nums[i + 2] + 1 === nums[i + 3]) {
      return true;
    }
  }
  return false
};

console.log(fourIncreasing([5, 1, 2, 3, 4, 6])); // true
console.log(fourIncreasing([5, 1, 2, 4, 3, 6])); // false


```

Again in the refactored version, you only update the pattern once.

```
const isConsecutive = function(nums) {
  const separatedBy = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];
    if (num1 + separatedBy !== num2) {
      return false;
    }
  }
  return true;
};

const fourIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    const consecutiveNums = [];
    for (let j = 0; j < 4; j++) {
      consecutiveNums.push(nums[i + j]);
    }

    if (isConsecutive(consecutiveNums)) {
      return true;
    }
  }
  return false
};

console.log(fourIncreasing([5, 1, 2, 3, 4, 6])); // true
console.log(fourIncreasing([5, 1, 2, 4, 3, 6])); // false


```

The DRY principle may look like more work, but when it comes time to make a change, updating and debugging DRY code is a lot simpler. Refactor your code right after you get working code to make it DRY so that you or other developers will have an easier time maintaining it later.

## What you've learned

In this article, you learned that DRY is a coding principle that stands for Don't Repeat Yourself. If there is a recurring pattern in your code, that means that your code is WET and may be harder to maintain or update when a change is necessary. Make your code DRY by consolidating the repeated patterns into one set of code.

# Introduction to OOP

Object-Oriented Programming (OOP) is an approach or mindset for breaking down large, complex products into simple solutions. The smaller parts can then be implemented and tested separately to provide higher confidence in the overall solution.

For certain problems, OOP is a great approach to make your code more readable and maintainable.

One of the best ways to understand OOP is to explore it through life examples with which you are familiar.

In this article, you're going to think about the object-oriented nature of the physical world and how it is mirrored in object-oriented programming. Your goal is to approach complex problems by breaking them down into simpler problems.

## What is OOP?

Object-Oriented Programming (often written as OOP) is a common design pattern that helps developers break down large, complex problems into simpler pieces. Implementation details of a single feature are bundled into a single API that interacts with other APIs of different features.

The main concept behind OOP is the idea that you can group data and related actions or behaviors together in order to treat them as a single entity within a larger system.

An item containing attributes and behaviors is called an object.

The characteristics are called properties or attributes of the object.

The actions are called methods of the object.

In this way, properties are like an object's "adjectives", and methods are its "verbs".

Think about a car factory where many different parts or "objects" are assembled to create a whole vehicle. Each object is built and tested separately (e.g. fan, motor, air filter, etc.). Then some are combined into another object to serve as a system within the vehicle (e.g. air conditioning). This is repeated until the whole vehicle "object" is assembled and working.

Software programs can also be broken down into objects, and those objects further split into more objects. Each object needs to only be concerned with the details of its part of the whole. Together the parts form a beautiful and maintainable code base providing valuable solutions to its users.

### Breaking down an example problem with OOP

It will help to consider examples from the "real world" in order to guide your understanding of objects and principles of object-oriented Programming.

First, consider an ordinary pen. In order to determine the properties of a Pen API, think about what questions you could ask someone about a pen to pick it out from a pile of various different pens.

- What color is the body?
- What color is the ink?
- How full is the ink level?
- What style is the writing tip?
- Can it be refilled?

(Feel free to add more of your own!)

Then translate these questions into property names, for example you might choose some properties like these:

- bodyColor
- inkColor
- inkLevel
- type (e.g. gel, fountain, rollerball, etc.)

Next, consider what a pen can do and what can be done to it.

- A pen can write
- A person can refill a pen with more ink

These lead you to some methods for the Pen API.

- write
- refillInk

Perhaps you are thinking about a pen which has replacement cartridges. While you may choose to make another method for that, you could also decide that it's another way to refill the ink, so there might be a way to reuse refillInk.

When thinking about objects you can start from the most specific object (e.g. a Sharpie). Or you can start from the most generic as in this thought experiment. To keep it simple for this example, don't get too caught up in the specifics of how pens work. Rather, focus on how a pen can be described as an object.

There's never one perfect way to design an API for a type of object. Like many programming tasks, you have to make you best guess and see how it plays out. Then adapt and adjust as you are coding. This is especially true with design work which you do before you start coding.

Now it's your turn to try one. Consider the pencil. If you'd like to get the most of this reading, grab a pencil (or pen) and jot down a few possibilities for properties and methods of a Pencil API.

...

...

...

Here's one possbility for the properties of the Pencil API.

- type (mechanical, #2, drawing, ...)
- material (wood, plastic, metal)
- color (e.g. yellow, black, ...)
- graphiteThickness
- label

(and more!)

Some OOP methods of the Pencil API may include

- write
- erase
- sharpen

It is likely you have some or all of these on your list. Additionally, it is expected that you came up with others as well and/or used different names!

An API designed by following OOP principles should be able to be easily integrated or used by other API's. For example, the Pen and Pencil API's can be used by a Person API that can write a letter to a friend, writeLetter.

## What you've learned

Object-Oriented Programming, OOP, is an approach for breaking down complex problems into interactive objects or API's that have their own data (or properties) and actions (or methods). It is a commonly used design pattern, but not the only design pattern, that programmers use to tackle bigger problems.

Breaking down a bigger problem into smaller simpler problems makes code more easily readable, testable, and maintainable.

OOP is a skill you will continue to grow and improve throughout your career as a programmer. Designing a readable and maintainable API that can be easily used by other API's is a skill that even the most experienced developers will admit that they are still improving.

# Encapsulation

In this article, you're going to go deeper into the theory of object-oriented programming and explore one of its pillars, Encapsulation.

## What is Encapsulation?

The dictionary definition of encapsulate is "to enclose (something) in or as if in a capsule". Encapsulation in OOP means to put behavior and data together behind an API that hides the implementation details. The code that uses the object doesn't need to know how it works to use it. The complexity is hidden inside of a "black box".

An application of encapsulation in OOP is hiding the complexity of a behavior in an API.

For example, instructions for making pasta can include the following steps:

1. Boil the water
2. Add the pasta into the boiling water
3. Drain the pasta after 10 minutes

Each step has its own smaller steps that the instructions don't tell you to do though. For instance, boiling water can be broken down into mini-steps; fill a pot with water, put it on the stove, turn on the stove, and wait for it to boil. The instructions do not need to add all the small details of how to boil water. Maybe they don't want to use a pot, or maybe they want to use a campfire instead of a stove.

Another application of encapsulation in OOP is separating behavior and data of a problem into multiple objects. In each of the objects, the behavior and data are further separated by how they interact with other objects. If behavior/data is public, then it is allowed to be accessed and used by other objects. If it is private, then it should only be accessed and used by its own object.

For example, going back to making pasta, a person object can interact with a stove object by turning the stove on to a certain level. The person cannot see the exact temperature the stove is attempting to heat the stove top to. The person also cannot tell the (gas) stove to turn the valve to let in gas. The temperature data and the behavior of turning the valve to let in gas are all controlled by the stove object privately. The public interaction that a person can have with the stove is through the knob to heat the stove on to a certain level.

### Thought experiment: the vending machine

![vending machines](../images/image19.jpg)

Imagine, if you will, that you want to buy something from a vending machine. You tap your phone against the payment reader (or insert bills or coins into a slot, or swipe a credit card). Once the payment is authorized in any of those forms, you can make a selection and receive your tasty treat. Thinking about that as a series of steps, you could write them like this.

1. Authorize payment
2. Make selection
3. Retrieve tasty treat

With respect to the concepts of object-oriented programming, the vending machine would be an object. All of the internal workings of the machine, how it communicates wirelessly with a payment vendor or counts cash, how its internal mechanics thrash about to deliver a beverage or snack to you, all of that is hidden behind a plastic advertisement. All of that behavior is encapsulated (and abstracted) inside the machine so that you don't have to worry about the details. Imagine a less-encapsulated world where you had to perform the following steps to get your tasty treat.

1. Call your payment provider.
2. Specify that you want to spend no more than $2 on your next purchase.
3. Write down a confirmation number for an authorization of up to a $2 payment.
4. Call the vending machine company.
5. Give them your payment authorization confirmation number.
6. Key in a 16-digit authorization number that they tell you.
7. Make selection.
8. Tell the vending company the transaction number and the total amount.
9. Retrieve tasty treat.

Now, instead of hiding all the details about how payments work, this imaginary vending machine is forcing you to participate in the payment process. A system such as this relies on people acting as good agents when they report the total amount with the transaction number. A system such as this is inconvenient for the person making the purchase.

However, since the actual vending machine encapsulates the complexity of its internal mechanisms behind easy-to-use interactions, users return to it again and again. The same goes with encapsulation with object-oriented programming.

### Classes and constructors

The specification or definition of an object with properties and methods is called a class. You can think of a class like a blueprint or computer model for a car or car part. The class specifies the framework of the properties and methods (that is, data and actions). This is similar to how a function definition is just the framework of the function; whereas nothing happens until the function has been called. Likewise, a class is just a framework until it is instantiated.

A specific object made from a class is called an instance. For example, if you imagine a class Computer, then the device you are using to read this article is a specific instance of Computer. The Porsche in your driveway (it's good to dream big!) would be an instance of a Vehicle class.

When a class is instantiated, there might be certain actions to do or data values to set right away. A special method called a constructor handles this setup. For one of the car parts in the analogy above, the actions of the constructor are quite literal - that is, to create the part - and in the factory the worker is said to "construct" the piece.

When you write a class, you put behavior (known as methods) and the data it works on (known as properties or instance variables, or fields or members) together. With classes, you can deal with code that declares data structures in the same place as code that modifies them.

Without classes, a programmer might have to deal with code that declares data structures in one file and use them in multiple other files all over the code base. Understanding where data got changed becomes exponentially difficult as the size of software grows - UNLESS classes are used to "black box" the changes to a specific structure all in one central place.

Knowing where data changes is one of the most important aspects of software.

### Classes vs JavaScript Objects

In strictest terms, an object class is the definition of an object, and an object instance is a use of that object. Quite often developers loosely use the generic term "object" to refer to either or both. Or sometimes "object" means a data structure with key-value storage represented by curly-braces (a.k.a. POJO - Plain Old JavaScript Object).

You will quickly learn to tell the difference based on the context. For example, "object" means "object class" whenever discussing how data is stored and changed within the object (that is, the properties & methods); and "object" means the "object instance" (or "instance of an object") whenever speaking of a specific, individual use of the object class.

## What you've learned

You learned that encapsulation is putting all of the details behind an object's data (properties) and behaviors (methods).

Understanding encapsulation can help developers break down large, complex problems into objects and place implementation details of a feature hidden within an object.

Classes are like blueprints for objects - they define how data (properties/fields) and actions (methods) work together for an object. An object can be created or instantiated from a class using the constructor method on the class.

# Putting the Class in JavaScript Classes

JavaScript can be used as an object-oriented language. You've already used some built-in objects in your programming. For example, when you write

```
const array = [1, 2, 3, 4];
const address = {
    street: '1600 Pennsylvania Avenue NW',
    city: 'Washington',
    state: 'DC',
    zipCode: '20500'
};


```

the value stored in array is an object (specifically, Array). The value stored in address is another object (that is Object, or POJO). There are objects all over the place!

OOP in JavaScript means defining your own object classes, so you can go way beyond the built-in ones like Object and Array!

When you finish this article, you should be able to:

- Define a JavaScript class containing a constructor method thatinitializes one or more properties
- Instantiate an instance of a class using the new keyword
- Define instance methods
- Use the instanceof operator to check if an object is an instance of a specific class
- Identify and solve the most common bugs with classes

## Defining a JavaScript class

A class defines the attributes and behavior for an object type. Classes in JavaScript are defined using the class keyword, followed by the name of the class, and a set of curly braces.

The constructor function is marked with the constructor keyword (not function). The constructor acts like a "factory" creating instances of objects of the type defined in the class.

Here's an example of a Book object with its constructor function written as a JavaScript class:

```
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}


```

Note that you CANNOT use the following syntax inside of classes:

```
// THIS IS BAD CODE. DO NOT COPY. ILLUSTRATIVE USE ONLY.
class MyClass {
    function constructor() {
      // The `constructor` keyword indicates special "factory" method,
      // so the `function` keyword is NOT needed.
    }
}


```

Notice that class names begin with a capital letter. Following this convention will help you (and other developers) to correctly identify the name as a class.

While the constructor method is not explicitly required, it is important in the following ways:

- constructor methods don't explicitly return a value. When instantiating class instances with the new keyword, constructor methods implicitly return the newly created object instance. (You'll see an example in a bit.)
- Within a constructor method's body, the this keyword references the newly created object instance. This allows you to initialize properties on the object instance.

## Instantiating an instance of a class

To create or instantiate an instance of a class, use the new keyword:

```
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}

// Notice the use of the 'new' keyword to create an instance of the Book class
const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

console.log(fellowshipOfTheRing);


```

Output:

```
Book {
 title: 'The Fellowship of the Ring',
 series: 'The Lord of the Rings',
 author: 'J.R.R. Tolkien'
}


```

Notice how the first line in the output tells you the name of the class. This is very helpful when you are debugging!

Three things occur when instantiating an instance of a class:

1. A new empty object is created (i.e. {})
2. The constructor method is called and this is bound to the new object
3. The new object is returned after the constructor method has completed

Important: If you return something from a constructor method then you'll break the behavior described in item #3 as the return value will be whatever you're explicitly returning instead of the new object!

## Defining methods

A method is a function that is part of the class. It performs an action (verb) for the class.

Methods are typically invoked on a given instance of the class stored in a variable; for this reason, they are also called instance methods.

To understand how they are invoked, think of the sort method on the Array object. To use it, you first make an instance of an array. Then you call sort on that specific instance.

Therefore, the following is an example of using an instance method. (Note: You are finally ready to understand that [] notation is simply a shortcut for new Array().)

```
const list = new Array(1,5,3,9,11,-3);
console.log(list.sort());                // [ -3, 1, 11, 3, 5, 9 ]
console.log(list.sort((a, b) => a - b)); // [ -3, 1, 3, 5, 9, 11 ]


```

### Defining an instance method

Instance methods, as the name suggests, are invoked on an instance of the class. Instance methods are useful for performing an action on a specific instance. Most of the time, when developers speak of methods without any qualifier, they are referring to instance methods.

The syntax for defining a class instance method is as follows: the method name with the method's parameters wrapped in parentheses, followed by a set of curly braces for the method body. (Note: the function keyword is NOT used!)

Here's an example of an instance method named getInformation() included in the Book class.

```
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
 }

  // Example of an instance method
  getInformation() {
    return `${this.title} by ${this.author}`;
  }
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

console.log(fellowshipOfTheRing.getInformation());


```

Output

```
The Fellowship of the Ring by J.R.R. Tolkien


```

Notice that you must use the this keyword within the method body to access properties (and methods) on the instance of the object.

## Using the instanceof operator to check an object's type

The instanceof operator may be used to check if an object is an instance of a specific class.

```
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

// Use the `instanceof` operator to check if the
// `fellowshipOfTheRing` object is an instance of the `Book` class.
console.log(fellowshipOfTheRing instanceof Book);


```

Output

```
true


```

## What you've learned

- How to define a class using ES6 syntax with a constructor method
- How to define instance methods and variables
- How to create an instance using the new keyword
- What instance methods are
- How to call instance methods on an instance
- How to check if an object is an instance of a class using the instanceof operator.
- How to debug common bugs when using classes in JavaScript

# Static Methods and Variables

In this reading, you will take a closer look at the less common static methods and variables. You will learn:

- What static methods and variables are
- How static methods and variables differ from their instance counterparts
- How to declare static methods and variables

## Static Methods

As opposed to instance methods, static methods are invoked directly on a class, not on an instance. Hence, they are also referred to as class methods. The syntax for defining a static method is the same as an instance method except their declarations start with the static keyword.

Here's an example of a static method named getTitles(). It needed to be static because it handles potentially many Book instances (not just one).

```
class Book {
 constructor(title, series, author) {
   this.title = title;
   this.series = series;
   this.author = author;
 }

  // Example of an instance method
 getInformation() {
   return `${this.title} by ${this.author}`;
 }

 // Static method that accepts a variable number
 // of Book instances and returns an array of their titles.
 // Notice the use of a rest parameter (...books)
 // to capture the passed parameters as an array of values.
 static getTitles(...books) {
   return books.map((book) => book.title);
 }
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

const theTwoTowers = new Book(
 'The Two Towers',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

// Call the static `Book.getTitles()` method
// to get an array of the book titles.
const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(', '));


```

Output

```
The Fellowship of the Ring, The Two Towers


```

The getTitles() static method accepts any number of Book instances and returns an array of their titles.

Notice that the method makes use of a rest parameter, (...books) to capture the passed parameters as an array of values. Using this approach is merely a convenience; the code could be rewritten to require callers to pass in an array of Book instances.

Because static methods aren't invoked on an instance, they can't use the this keyword to access an instance. You can pass one or more instances into a static method via a method parameter, which is exactly what the above getTitles() method does. This allows static methods to perform actions across groups of instances.

Static methods can also be used to perform "utility" actions—actions that are independent of any specific instances but are related to the object type in some way. For example, a comparison function that could used with array sorting.

### Common Uses of Static Methods

As you may recall, the Math functions are called starting with the class name. That is because the Math object actually consists only of static methods.

```
console.log(Math.random());
console.log(Math.max(511, 115));


```

Notice how the methods random and max are called directly on the Math class object, not an instance.

## Static Variables

Similar to static methods, static variables, or properties, are not accessible via class instances, but rather are accessed directly from the class. Static variables, unlike instance variables, aren't declared inside the constructor method. Instead, they are declared like static methods using the static keyword, followed by the variable name and value assignment.

Static variables are useful in caching information about the class, configurations associated with the class, or just any data you don't need replicated across instances.

Here's an example of a static variable, numBooks, that tracks the number of Book instances that are created:

```
class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;

        /* Incrementing the static variable every time a new Book is created
          Notice it is called using the same convention as you would with
          a class method, even still while within the class itself. */
        Book.numBooks += 1;
    }

    /* Static variable is declared like a normal variable except with the
      static keyword */
    static numBooks = 0;
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

const theTwoTowers = new Book(
 'The Two Towers',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

console.log(Book.numBooks)      // 2


```

In the above example, numBooks should be incremented each time the constructor method is run, or in other words, whenever a new Book instance is created. After creating two new Book objects, printing numBook indeed shows a value of 2.

## What you learned

- What static methods and variables are
- How static methods and variables differ from their instance counterparts
- How to declare and use static methods and variables

# Inheritance

In this article, you're going explore another pillar of OOP, Inheritance.

## What is Inheritance?

The dictionary definition of inheritance is "derived from one's ancestors". In the same way that biology passes traits of a parent organism to its descendants, so does object-oriented programming through its support of inheritance.

![grandchild and grandmother](../images/image13.jpg)

Conceptually, a class can be split into two parts:

- Interface: how other code "sees" the class
- Implementation: how the class actually does what it does

In other words, an interface is just a "signature with no body". A class is a subtype of an interface when it implements that interface. The language used is often "is a". Imagine an interface for Car. Then you could say, a Porsche "is a" Car.

Javascript does not use interfaces, therefore it does not have "interface inheritance" or "subtyping". Instead, Javscript strictly uses implementation inheritance.

### Implementation inheritance

Implementation inheritance means that the properties and methods defined on a parent class are available on objects created from classes that inherit from those parent classes. This also means a child class has access to all the implementation (the doing) that was written in its parent class.

So consider a WritingInstrument class as a parent of both the Pencil and Pen child classes. The benefit here is that the action of "writing" is (mostly) the same whether you are using a pen or pencil. Since writing is a complex task, it would be nice to only have to learn (or code) it one time.

There also happen to be a few similar properties, such as material, bodyColor, and label.

### Multiple inheritance

Some programming languages allow developers to specify more than one parent for a class. This is called multiple inheritance.

Consider the eraser. There are stand-alone erasers. There are also erasers on the ends of pencils. (Ignore those pens with erasers for now, just to keep this thought experiment a little easier.)

So then an Eraser class could have a property such as size and a method such as erase. There are times an instance of Eraser is useful. Additionally, Pencil can inherit from both the Writing Instrument and Eraser classes.

Some languages, like JavaScript, do NOT support multiple inheritance. Remember, you will have the opportunity study and practice OOP concepts in more depth in the future.

## What you've learned

You learned that inheritance is the ability to gain behavior and data from parent classes.

In addition to encapsulation, OOP relies on inheritance, where classes receive the properties and methods of their parent or parents.

# Inheritance in JavaScript

In this article, you will learn how to apply inheritance in JavaScript by:

- Extending an existing class
- Using methods inherited by a parent class
- Using the super function in a constructor to call the constructor of the parent class

## Syntax

When you declare a class with no explicit parent class, then JavaScript will make it a child of Object.

```
class MyClass {}

// is the same as
class MyClass extends Object {}


```

If you want to inherit from a parent class other than Object you can use the extends keyword to declare a specific parent class for a child class to inherit from.

```
// child class
class MyChildClass extends MyClass {}


```

## Inheriting Methods

When a child class extends, or inherits from, a parent class, it inherits the methods of the parent class. This means that you can use all the methods defined in the parent class in the methods of the child class.

For example, if a class Animal is defined with constructor and speak instance methods and a pet static method, then any class, like a Dog, that extends it will be able to use those methods.

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  // constructor inherited from Animal so no need to define one here
}

const fluffy = new Dog('Fluffy', 'woof'); 
fluffy.speak(); // woof
Dog.pet(fluffy); // You attempt to pet Fluffy


```

### super

If you want to define a new constructor method in the child class but still use the code in the constructor method of the parent class, you can use the super function inside of the child class' constructor method to call the constructor method of the parent class.

Using the previous Animal example, instead of passing the woof sound on any Dog initiation, let's say you want all Dogs created to have a sound of woof by default. To do this without changing the constructor of the Animal class, you can create a constructor in the Dog class with just the name parameter. Inside of the Dog constructor, you can call the constructor class of the Animal using the super function and pass in the name parameter along with the woof sound.

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'woof');
  }
}

const fluffy = new Dog('Fluffy'); 
fluffy.speak(); // woof
Dog.pet(fluffy); // You attempt to pet Fluffy


```

Now, you can instantiate a new Dog with just a name. The sound will be woof for any Dog. However, couldn't you have just copied the code from Animal's constructor into Dog's constructor to achieve the same thing?

```
// for hypothetical purposes only
class Dog extends Animal {
  constructor(name) {
    this.name = name;
    this.sound = 'woof';
  }
}


```

Sure, you could have achieved the same thing and the code would still run the same way. But this breaks the DRY principle! Make sure that you are not repeating code as much as possible. If you change the Animal's constructor method, you have to update and change the Dog's constructor method. DRY up your code whenever possible!

Note: the super function can only be called inside of a constructor method.

Here are the docs for the super function if you want to learn more about it.

## What you've learned

You learned the syntax of how to having a class inherit methods from a parent class. You also learned how to use the super function inside of the child class to call the constructor function of the parent class.

# Inheritance in JavaScript

In this article, you will learn how to apply inheritance in JavaScript by:

- Extending an existing class
- Using methods inherited by a parent class
- Using the super function in a constructor to call the constructor of the parent class

## Syntax

When you declare a class with no explicit parent class, then JavaScript will make it a child of Object.

```
class MyClass {}

// is the same as
class MyClass extends Object {}


```

If you want to inherit from a parent class other than Object you can use the extends keyword to declare a specific parent class for a child class to inherit from.

```
// child class
class MyChildClass extends MyClass {}


```

## Inheriting Methods

When a child class extends, or inherits from, a parent class, it inherits the methods of the parent class. This means that you can use all the methods defined in the parent class in the methods of the child class.

For example, if a class Animal is defined with constructor and speak instance methods and a pet static method, then any class, like a Dog, that extends it will be able to use those methods.

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  // constructor inherited from Animal so no need to define one here
}

const fluffy = new Dog('Fluffy', 'woof'); 
fluffy.speak(); // woof
Dog.pet(fluffy); // You attempt to pet Fluffy


```

### super

If you want to define a new constructor method in the child class but still use the code in the constructor method of the parent class, you can use the super function inside of the child class' constructor method to call the constructor method of the parent class.

Using the previous Animal example, instead of passing the woof sound on any Dog initiation, let's say you want all Dogs created to have a sound of woof by default. To do this without changing the constructor of the Animal class, you can create a constructor in the Dog class with just the name parameter. Inside of the Dog constructor, you can call the constructor class of the Animal using the super function and pass in the name parameter along with the woof sound.

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'woof');
  }
}

const fluffy = new Dog('Fluffy'); 
fluffy.speak(); // woof
Dog.pet(fluffy); // You attempt to pet Fluffy


```

Now, you can instantiate a new Dog with just a name. The sound will be woof for any Dog. However, couldn't you have just copied the code from Animal's constructor into Dog's constructor to achieve the same thing?

```
// for hypothetical purposes only
class Dog extends Animal {
  constructor(name) {
    this.name = name;
    this.sound = 'woof';
  }
}


```

Sure, you could have achieved the same thing and the code would still run the same way. But this breaks the DRY principle! Make sure that you are not repeating code as much as possible. If you change the Animal's constructor method, you have to update and change the Dog's constructor method. DRY up your code whenever possible!

Note: the super function can only be called inside of a constructor method.

Here are the docs for the super function if you want to learn more about it.

## What you've learned

You learned the syntax of how to having a class inherit methods from a parent class. You also learned how to use the super function inside of the child class to call the constructor function of the parent class.

# Polymorphism

In this article, you're going explore another pillar of OOP, Polymorphism.

## What is Polymorphism?

The dictionary definition of polymorphism is "having several shapes or forms" In object-oriented programming, polymorphism refers to processing various data types and classes through a single, uniform interface. The two most common types of polymorphism are "overloading" and "overriding".

Function overloading refers to sending a different number or type of parameters to a particular function.

Consider sum(number1, number2) and sum(listOfNumbers). The first accepts two numeric parameters; the second, an array of numbers. The returned value from both is the total calculated by adding up all the numbers provided. Each version of parameters needs a different implementation (number1 + number2 vs. a for-loop). Therefore, this is an example of polymorphism.

Function overriding is when a child class gives its own - or a variation of - the implementation of a function from one of its ancestor classes (usually the parent).

This article will focus more on function overriding than function overloading.

### A built-in example of polymorphism

Polymorphism in OOP is the idea that one method can have a different implementation even though it has the same name because the result is equivalent.

All objects in JavaScript share a common parent class, the Object parent class. The Object class has a method named toString() on it. Since all objects in JavaScript are child classes (or grandchild classes or great-grandchild classes or great-great-...), that means that every object in JavaScript has a toString() method

If a class doesn't create its own, then it will fall back to its parent class' implementation of toString(). If the parent class doesn't have an implementation, and the parent's parent class doesn't have an implementation, it will keep going until it gets to the Object class and use that one. (That's some recursion in there. Did you sense that?)

If you like to experience this for yourself, open a terminal, start node, and type the following.

```
> [1, 2, 3].toString();
'1,2,3'
> "some text".toString();
'some text'
> new Date().toString();
'«the current date and time»'
> new Object().toString();
[object Object]


```

You'll notice the following:

- The toString() method of an array takes the values in the array and turns them into a comma-delimited string; that is, it puts commas between each of the items.
- The toString() method of a string does nothing and just returns the string object (you might remember that strings are primitive types, but strings are special, and you can also call methods on them like they are objects)
- The toString() method of a Date object returns a long textual representation of the date and time which the Date object represents.
- The toString() method of Object returns "[object Object]" because that's all it knows about itself.

If you feel like [object Object] is less-than-useful, you can overload the toString() method in your classes

### Another example of polymorphism

Now, consider those pens with erasers. The way they erase is similar to a stand-alone eraser or a pencil. The end result of erasing is to undo a mistake.

Some pens do not have erasers. If you want to erase a mistake you need something like white-out.

So, the WritingInstrument class could inherit from Eraser.

Now, both Pen and Pencil may inherit from Writing Instrument and they will be able to erase. Cool!

Another class, perhaps CalligraphyPen, could then inherit from Pen and replace the erase() method with an implementation using white-out. This is what polymorphism is all about! Accomplishing the same result (undesired mark no longer visible a.k.a. erase()) in another fashion by changing or "morphing" the implementation appropriately for each class (Eraser, WritingInstrument, and CalligraphyPen).

## What you've learned

You learned that polymorphism in OOP is just a way of extending the functionality of a given method in a child class to do something more or different than its parent.

# Polymorphism

In this article, you're going explore another pillar of OOP, Polymorphism.

## What is Polymorphism?

The dictionary definition of polymorphism is "having several shapes or forms" In object-oriented programming, polymorphism refers to processing various data types and classes through a single, uniform interface. The two most common types of polymorphism are "overloading" and "overriding".

Function overloading refers to sending a different number or type of parameters to a particular function.

Consider sum(number1, number2) and sum(listOfNumbers). The first accepts two numeric parameters; the second, an array of numbers. The returned value from both is the total calculated by adding up all the numbers provided. Each version of parameters needs a different implementation (number1 + number2 vs. a for-loop). Therefore, this is an example of polymorphism.

Function overriding is when a child class gives its own - or a variation of - the implementation of a function from one of its ancestor classes (usually the parent).

This article will focus more on function overriding than function overloading.

### A built-in example of polymorphism

Polymorphism in OOP is the idea that one method can have a different implementation even though it has the same name because the result is equivalent.

All objects in JavaScript share a common parent class, the Object parent class. The Object class has a method named toString() on it. Since all objects in JavaScript are child classes (or grandchild classes or great-grandchild classes or great-great-...), that means that every object in JavaScript has a toString() method

If a class doesn't create its own, then it will fall back to its parent class' implementation of toString(). If the parent class doesn't have an implementation, and the parent's parent class doesn't have an implementation, it will keep going until it gets to the Object class and use that one. (That's some recursion in there. Did you sense that?)

If you like to experience this for yourself, open a terminal, start node, and type the following.

```
> [1, 2, 3].toString();
'1,2,3'
> "some text".toString();
'some text'
> new Date().toString();
'«the current date and time»'
> new Object().toString();
[object Object]


```

You'll notice the following:

- The toString() method of an array takes the values in the array and turns them into a comma-delimited string; that is, it puts commas between each of the items.
- The toString() method of a string does nothing and just returns the string object (you might remember that strings are primitive types, but strings are special, and you can also call methods on them like they are objects)
- The toString() method of a Date object returns a long textual representation of the date and time which the Date object represents.
- The toString() method of Object returns "[object Object]" because that's all it knows about itself.

If you feel like [object Object] is less-than-useful, you can overload the toString() method in your classes

### Another example of polymorphism

Now, consider those pens with erasers. The way they erase is similar to a stand-alone eraser or a pencil. The end result of erasing is to undo a mistake.

Some pens do not have erasers. If you want to erase a mistake you need something like white-out.

So, the WritingInstrument class could inherit from Eraser.

Now, both Pen and Pencil may inherit from Writing Instrument and they will be able to erase. Cool!

Another class, perhaps CalligraphyPen, could then inherit from Pen and replace the erase() method with an implementation using white-out. This is what polymorphism is all about! Accomplishing the same result (undesired mark no longer visible a.k.a. erase()) in another fashion by changing or "morphing" the implementation appropriately for each class (Eraser, WritingInstrument, and CalligraphyPen).

## What you've learned

You learned that polymorphism in OOP is just a way of extending the functionality of a given method in a child class to do something more or different than its parent.

# Polymorphism in JavaScript

In this article, you will learn how to implement polymorphism in JavaScript by overriding the methods of the parent class in the child class.

## Overriding parent methods

Polymorphism is when a child class overrides a method of its parent (or has a method with the same name as another class to get the same result with a different "how").

To override a method of a parent class in JavaScript, you can simply create a method in the child class with the same name as the parent method you want to override.

For example, to override Animal class' speak method in the Dog class, you simply add a speak method in the Dog class.

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  speak() {
    console.log('bark bark');
  }
}

const fluffy = new Dog('Fluffy', 'woof');
fluffy.speak(); // bark bark


```

You can overwrite static methods in a similar way.

## Implementation of polymorphism and inheritance

Imagine that you have created the following code in a JavaScript file.

```
class Charity {}

class Business {
  toString() { return 'Give us your money.'; }
}

class Restaurant extends Business {
  toString() { return 'Eat at Joe\'s!'; }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() { return 'Buy some stuff!'; }
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {
  toString() { return 'Upgrade your perfectly good phone, now!'; }
}

console.log(new PhoneStore().toString());
console.log(new ClothingStore().toString());
console.log(new Restaurant().toString());
console.log(new AutoRepairShop().toString());
console.log(new Charity().toString());


```

What do you think those lines will print out? Try enter and running this code to confirm your suspicions.

Important**: When given the opportunity to try out short snippets of code like the above example, do not copy and paste it. This is an opportunity for you to type it into an editor or command line to practice the syntax.

The two class PhoneStore and Restaurant use polymorphism to overloaded the toString() function, so their specific messages are printed.

The three classes AutoRepairShop, Charity, and ClothingStore do not have their own toString() methods. That means that an object of one of those three types can't immediately respond to that method invocation. The JavaScript runtime at that point starts inspecting parent objects (following the inheritance chain) to find a toString() method.

- For AutoRepairShop, it finds a toString() method on its parent class Business, and prints "Give us your money.".
- For ClothingStore, it finds a toString() method on its parent class Retail, and prints "Buy some stuff!".
- For Charity, it finds a toString() method on its implicit parent class Object, and prints "object Object".

## What you've learned

You learned how to implement polymorphism in JavaScript by overriding methods in the parent class by defining methods with the same names in the child class.

To override a method but also call the parent method in the child class, see more on how to use the super function for calling parent methods other than the constructor method.

# Polymorphism in JavaScript

In this article, you will learn how to implement polymorphism in JavaScript by overriding the methods of the parent class in the child class.

## Overriding parent methods

Polymorphism is when a child class overrides a method of its parent (or has a method with the same name as another class to get the same result with a different "how").

To override a method of a parent class in JavaScript, you can simply create a method in the child class with the same name as the parent method you want to override.

For example, to override Animal class' speak method in the Dog class, you simply add a speak method in the Dog class.

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  speak() {
    console.log('bark bark');
  }
}

const fluffy = new Dog('Fluffy', 'woof');
fluffy.speak(); // bark bark


```

You can overwrite static methods in a similar way.

## Implementation of polymorphism and inheritance

Imagine that you have created the following code in a JavaScript file.

```
class Charity {}

class Business {
  toString() { return 'Give us your money.'; }
}

class Restaurant extends Business {
  toString() { return 'Eat at Joe\'s!'; }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() { return 'Buy some stuff!'; }
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {
  toString() { return 'Upgrade your perfectly good phone, now!'; }
}

console.log(new PhoneStore().toString());
console.log(new ClothingStore().toString());
console.log(new Restaurant().toString());
console.log(new AutoRepairShop().toString());
console.log(new Charity().toString());


```

What do you think those lines will print out? Try enter and running this code to confirm your suspicions.

Important**: When given the opportunity to try out short snippets of code like the above example, do not copy and paste it. This is an opportunity for you to type it into an editor or command line to practice the syntax.

The two class PhoneStore and Restaurant use polymorphism to overloaded the toString() function, so their specific messages are printed.

The three classes AutoRepairShop, Charity, and ClothingStore do not have their own toString() methods. That means that an object of one of those three types can't immediately respond to that method invocation. The JavaScript runtime at that point starts inspecting parent objects (following the inheritance chain) to find a toString() method.

- For AutoRepairShop, it finds a toString() method on its parent class Business, and prints "Give us your money.".
- For ClothingStore, it finds a toString() method on its parent class Retail, and prints "Buy some stuff!".
- For Charity, it finds a toString() method on its implicit parent class Object, and prints "object Object".

## What you've learned

You learned how to implement polymorphism in JavaScript by overriding methods in the parent class by defining methods with the same names in the child class.

To override a method but also call the parent method in the child class, see more on how to use the super function for calling parent methods other than the constructor method.
