# Introduction to Servers

In this article, you will learn:

- What a server is
- What the role of a server is in a full-stack application

## What is a Server?

A server is a hardware or software that pushes and pulls data across a network. A server's purpose is to send data to a client. A client can request data from a server, and the server processes that request and responds with the desired data.

## Role of a Server in a Full-Stack Application

A full-stack application is a Web application that has a front-end client and a back-end server. The front-end client requests web pages or data from the back-end server. The back-end server sends the web pages or data to the front-end client when requested.

The front-end client in a full-stack application is responsible for displaying web pages to a user.

Back-end servers provide many functionalities in a full-stack application. Some functionalities include:

- Send the requested web pages
- Handle email messages
- Send files
- Store and send data in a database
- Process data
- Handle web traffic

Sometimes, there are multiple servers in a full-stack application to spread out the different roles and responsibilities. For example, there could be a server for sending web pages to the front-end client. That server could request data from a server storing data in a database.

## What you've learned

You learned that a server is a hardware or process that sends data through a network. You also learned that a server can have many responsibilities in a full-stack application, such as sending web pages and storing and processing data. Finally, you learned that a full-stack application can have more than one server.

# Hypertext Transfer Protocol

In the late 1980s, a computer scientist named Tim Berners-Lee proposed the concept of the "WorldWideWeb", laying the foundation for our modern Internet. A critical part of this concept was HTTP, the Hypertext Transfer Protocol.

This article will dive into what makes HTTP such an important part of Web browsing and learn how to leverage it in web applications.

This article will cover:

- the vocabulary of the Web,
- how stateless connections work,
- and HTTP request & response types.

## HT-: HyperText

Hypertext is simply "content with references to other content". This term is used specifically to refer to content in computing, and may include text, images, video, or any other digital content. If "hypertext" sounds familiar, that's because you've heard it before: HTML stands for "HyperText Markup Language".

Hypertext is what makes the Web a "web", and it's the most fundamental part of how we interact online. Hyperlinks or links are references between hypertext resources.

The Internet is like a massive collection of separate books: each blog, news report, and social media site would exist in total isolation from each other. The ability to link these pages is what makes the kind of interactivity you're learning to build possible, and it was a revolutionary concept when it was introduced!

## -TP: Transfer Protocol

A protocol in computer science is a set of guidelines surrounding the transmission of data. Protocols define the process of exchanging data, but don't define exactly what that data must be.

Think of it like a multi-course meal: you expect the appetizer, then the entree, then the dessert, but you could have any type of food for each of those courses! As long as the plates arrive in the particular order you expect, protocol is being followed.

HTTP acts as a transfer protocol. It defines the expectations for both ends of the transfer, and it defines some ways the transfer might fail. More specifically, HTTP is defined as a request/response protocol.

An HTTP exchange is more like a series of distinct questions & answers than a conversation between two systems.

## Protocol for exchanging data between a Client and a Server

HTTP defines the process of exchanging hypertext between systems. Specifically, HTTP works between clients and servers. A client (sometimes called the user agent) is the data consumer. This is usually your web browser. A server (sometimes referred to as the origin) is the data provider, often where an application is running.

In a typical HTTP exchange, the client sends a request to the server for a particular resource: a webpage, image, or application data. The server provides a response containing either the resource that the client requested or an explanation of why it can't provide the resource.

Here's a high-level overview of the exchange:

## Properties of HTTP

There are a few important properties of HTTP that you need to understand in order to use it effectively.

### Reliable connections

Let's consider the example of two friends passing a note. If the note contains important information, the sender will want to make sure that it gets to its destination. They'll likely take a little extra time to deliver it carefully, and they'll expect confirmation once it's been received.

In computing, it's referred to as a reliable connection: messages passed between a client & server sacrifice a little speed for the sake of trust, and you can rest assured that each message will be confirmed.

HTTP doesn't work well if messages aren't received in the correct order, so it's critical that the connection your hypertext is crossing is reliable!

### Stateless transfer

HTTP is considered a stateless protocol, meaning it doesn't store any information. Each request you send across an HTTP connection should contain all its own context. This is unlike a stateful protocol, that might include specifications for storing data between requests.

This can be nice because you only ever need to read a single HTTP request to understand its intent, but it can cause headaches when it comes to things like maintaining your login status or the contents of your shopping cart!

You'll learn more about how to store some kinds of data on the client to work around the protocol's stateless nature.

### Intermediaries

The Web is a big place, and it's unlikely that your request will go directly to its destination! Instead, it will pass through a series of intermediaries: other servers or devices that pass your request along. These intermediaries come in three types:

- proxies, which may modify your request so it appears to come from a different source,
- gateways, which pretend to be the resource server you requested,
- and tunnels, which simply pass your request along.

Here's an idea of how these intermediaries might be laid out:

You'll learn more about these intermediaries more in later lessons. For now, the takeaway is that HTTP isn't limited to your browser & application server. Lots of devices support HTTP in their own special way.

## Digging deeper with the HTTP spec

If you're interested in learning more, you can go straight to the source: the HTTP spec. A spec (short for specification) describes a protocol in great detail. It's the document generated by the idea's founders, and it's reviewed and carefully edited before being adopted by the IETF (Internet Engineering Task Force).

Specs are intended to be exhaustive, so they can be overwhelming at first! This is definitely not light reading but any question you have about a particular protocol can likely be answered from its spec.

## What you've learned

Whew, that's a lot of jargon! Hopefully the fundamental aspects of HTTP are clearer to you now.

After completing this lesson, you should have a clear understanding of HTTP's origin & purpose, special properties of HTTP, and how to learn more from the HTTP spec.

# The Request-Response Cycle

Browsing the Web might seem like magic, but it's really just a series of requests and responses. When you search for information or navigate to a Web page, you are requesting something, and you expect to get a response back.

You can think about the request-response cycle as the communication pattern between a client, or browser, and a server. Whenever you type a URL into the address bar of a browser, you are making a request to a server for information back. The most common of these is an http request.

## The request-response cycle diagram

Take a look at this diagram of the request-response cycle:

On the left is the client side, or the browser. On the right is the server side, with a database where data is stored. The internet, in the middle, is a series of these client requests and server responses.

## The browser's role in the request-response cycle

As depicted in the diagram, the browser plays a key role in the request-response cycle. Besides letting the user make the request to the server, the browser also:

1. Parses HTML, CSS, and JS
2. Renders that information to the user by constructing and rendering a DOM tree

When a successful request is made to the server, you are able to view a Web page with content and functionality. Unsuccessful requests prevent the page from loading and displaying information. You've probably seen a 404 page before!

Understanding the request-response cycle is fundamental to developing for the Web. If a server is down, or something is wrong with the request, you'll most likely see an error on the client side. Learning how to debug these errors and set up error handling is a common task for Web developers.

You can go to the Network tab of your browser's Developer Tools to view these requests and responses. Open a new tab and open up the Network Tab in the Developer Tools in your browser. Make sure All in the Network tab is selected to see all the requests made. Then navigate to google.com. Watch all the different requests made to servers and their responses in the Network tab list!

## What you've learned

You learned that the request-response cycle is how data is passed between the client's browser and the server across the web. You learned that the internet is a series of requests and responses. You also learned that the browser allows a user to make a request to a server. Finally, you learned how to see all the requests that a browser makes and the servers' responses by using the Network tab in the browser's Developer Tools.

# Node HTTP

Now you know how a server sends data to the client, it's time to create a server!

In this article, you will learn how to create a Node.js server in a built-in package called http. You will be able to:

- Create a server
- Make the server listen for request on a specified port
- Become familiar with the Request object to interact with components of the request
- Become familiar with the Response object to formulate and send a response

## Creating a Server

To create a server using http, first import the built-in http package in any Node.js file. Then, call the createServer method on the import and pass in a function as a single argument.

This function should accept two parameters, a Request object and a Response object. There will be more details on those objects later, but by convention, the names of those parameters are shortened to req (for request) and res (for response).

Here's an example of how to create a server in Node.js:

```
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  // ...
});


```

If you run this file now, nothing will really happen yet because the server isn't connected to your network to listen for incoming requests and send outgoing responses.

## Listening for Requests on a Port

To connect your newly created server to your local network, you need to make the server listen for requests on a specific port in your network.

First, define the port number and assign it to a variable called port. Port numbers can range from 0 to 65535, but some ports are reserved so it's best to use ports that are conventionally used for development purposes. Common development port numbers to use are 3000, 5000, and 8000. You can choose from any one of these to connect your server to.

Next, use the listen method on the newly created server and pass in two arguments. The first is the port, and the second is a callback function. The callback function will run once the server connection to the port is successful. Common practice is to log a message to the console saying that the server is connected and listening on the specified port.

Here's an example of this:

```
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  // ...
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));


```

Start your server by running the file in Node.js in your terminal.

For example, if your server file is named server.js, then you can start the server with the following command:

```
node server.js


```

You should see the logged console message in the terminal.

Now you can actually make requests to the newly created server using your browser or Postman! Nothing will actually happen because there is no response formulated in the createServer function because the createServer function will run whenever a request gets sent to the server.

## Request object

When a server gets a request, http will create a Request object that holds methods and properties to interact with the components of the request. To examine the contents of the Request object, you will need to do two things:

1. Log the req parameter in the createServer function
2. Make any request to http://localhost:5000 using your browser or Postman

```
const server = http.createServer((req, res) => {
  console.log(req);
});


```

Examine your terminal. You should see a massive object with many properties and methods.

There are only a few properties and methods that you will be using:

- method - Property whose value is a string of the method of the request
- url - Property whose value is a string is the url path of the request

- For example, for a request to http://localhost:5000/hello-world, the url will be a string of /hello-world.

- headers - Property whose value is an object with the key-value pairs as the header names and values
- on - Method that listens for an event on the request and triggers a callback function to run when that event is triggered

The method, url, and headers properties will be used to identify the route of the request and formulate a response based on that route.

The on method will be used to parse the body of the request.

## Response object

To formulate a response to send, http will create a Response object with every request made to the server. This object also has properties and methods to interact and formulate the components of a response. To examine the contents of the Response object, you will need to do similar steps as examining the Request object:

1. Log the res parameter in the createServer function
2. Make any request to http://localhost:5000 using your browser or Postman

```
const server = http.createServer((req, res) => {
  console.log(res);
});


```

Examine your terminal. You should see another massive object.

There are only a few properties and methods on res that you will be using:

- statusCode - Property whose value is the status code of the response
- setHeader - Method that sets a header name to a value
- write - Method that allows you to add to the body of the request
- end - Method that allows you to add to the body of the request AND send the response

## What you've learned

In this article, you will learned how to create a Node.js server in a built-in package called http. You also learned how to connect the server to a port so that the server can accept requests from a client through that port. Finally, you learned what the Request and Response objects are that http creates for you whenever a request gets sent to the server.

Next, you'll learn how to formulate and send a response.

# Parsing the Body of the Request

In this article you will learn more about how to parse the body of the request that have a Content-Type header of application/x-www-form-urlencoded.

## Reading the body of the request

The body of the request is in the form of a readable stream when the request hits the http server. This means that the entire body of the request will be separated into data packets that you have to put together to get the entire request body as a single string.

To read a data packet and add to the body of the request in http, you have to listen for the data event on the req object. The data event will be triggered whenever a data packet is received. Then, you need to add the contents of the data packet to the content compiled from data packets that were already received.

Call the req.on method to listen to the data event. Concatenate the data received to a string representing the body of the request getting put together.

```
const server = http.createServer((req, res) => {
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });
});


```

The end event on the request object will be triggered once the entire server finishes receiving the request body. You can log the entire request body inside of the req.on method listening to the end event.

```
const server = http.createServer((req, res) => {
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    console.log(reqBody);
  });
});


```

Now, you should have the entire body of the request and be able to read it. From here, however, depending on the Content-Type header of the request, you will need to parse the body differently.

## Parsing application/x-www-form-urlencoded

When the Content-Type of the request is application/x-www-form-urlencoded, the request body will be a string with the names and values of HTML form inputs are separated by &, with a = between the key and the value.

Here's an example request body:

```
name=Fido&color=black&age=1&description=Hello+World%21


```

To convert these key-value pairs from this encoded string into an object, you need to parse the string into a JavaScript object. The following steps will describe how turn the above example into an object:

```
{
  name: "Fido",
  color: "black",
  age: "1",
  description: "Hello World!"
}


```

First, separate the key-value pairs in the string from each other by separating the string by the &.
[name=Fido, color=black, age=1, description=Hello+World%21]

```

```


Next separate the key from the value by separating the key-value pair by the =.
[[name, Fido], [color, black], [age, 1], [description, Hello+World%21]]

```

```


Then, replace the plus symbols, +, in the values with a space,  .
[[name, Fido], [color, black], [age, 1], [description, Hello World%21]]

```

```


Also, decode the values from Percent Encoding. (Use Node.js built-in decodeURIComponent(encodedString) function)
[[name, Fido], [color, black], [age, 1], [description, Hello World!]]

```

```


Finally turn the key-value pairs into an object!
{

```
  name: "Fido",
  color: "black",
  age: "1",
  description: "Hello World!"
}

```


You can start to think about how to code these steps, but you will actually implement these steps in a later practice.

## What you've learned

You learned how to read the body of the request in http and how to convert body from a readable stream into a string. You also learned the steps to parse the body of a request that has a Content-Type of application/x-www-form-urlencoded into an object with key-value pairs.

# Formulating and Sending a Response

In this article you will learn more about how to formulate a response in an http server by:

- Setting the status code of the response
- Setting a header on the response
- Writing to the body of the response
- Sending the response

## Set the status code

To set the status code of the response, set the statusCode property on the res object inside of the createServer function to the desired code.

For example, to set the status code of the response to 500 for every request that comes into the server:

```
const server = http.createServer((req, res) => {
  res.statusCode = 500;
});


```

## Set the header

To set a header of the response, use the setHeader method on the res object inside of the createServer function. Pass in the header name as the first argument and the header value as the second argument.

For example, to set the Content-Type header of the response to text/css for every request that comes into the server:

```
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/css");
});


```

## Write the response body

There are two ways to add to the body of the response. One way to do this is using the write method on the res inside of the createServer function. The write method doesn't set the body of the response, it adds to the body of the response. You can call this method multiple times on the same res object to continuously add to the body.

Pass the text you wish to send as the body inside of the write method to add to the body of the response.

For example, to write Hello World! text to the body of the response, you can either pass in the full string into write, or separate it out into multiple write method calls like so:

```
const server = http.createServer((req, res) => {
  res.write('Hello');
  res.write(' ');
  res.write('World');
  res.write('!');
});


```

## Sending the Response

The second way to add to the body of the response is the end method on the res object. The end method also doesn't set the body of the response, but adds to the body. The end method has one more functionality though. Which is to end the creation of the response and send it.

Also, since only one response can be sent for a single request, you cannot call the end method multiple times for a single request.

To add Hello World! to the body of a response using write and end then send the response right after:

```
const server = http.createServer((req, res) => {
  res.write('Hello');
  res.write(' ');
  res.write('World');
  res.end('!');
});


```

You can also choose not to pass in any arguments into the end method to finish sending the response.

For example, to send a response with the status code of 200 without any body:

```
const server = http.createServer((req, res) => {
  res.status = 200;
  res.end();
});


```

To test this, start the server and use Postman to make a request to the server. Examine the response sent back to Postman to confirm the status code, headers, and body of the response formulated.

## Hanging Server

If there is no response returned for a request made to the server, the server becomes a hanging server. This means that the server becomes unresponsive and cannot take anymore requests unless the client quits the connection for the original request. So make sure you are always sending a response for all your requests to your http server even if you have to send an error response!

## What you've learned

You learned the syntax of how to create a response with a status code, headers, and a body in http. You also learned how to finish formulating a response and send it to the client. Finally, you learned to always send a response for every request made to your server.

# Creating http Route Handlers

A server usually doesn't just send one kind of response. Routes are used to ask the server for different kinds of information. To get the server to send information based on specific routes, you need to create different route handlers that will tell the server to send different responses.

You know how to read the components of a request and how to formulate a single response from an http server. Now, you'll learn how to formulate different responses for requests based on their route.

In this article, you will learn:

- How to send a response based on the components of a request
- How to send different responses for different requests

## Defining a Route Handler

A route handler is a set of code that will be executing for a particular route or request method and URL path combination. A response formulated and sent by one route handler will be different from the another route handler.

In http, you can create a route handler by simply using a conditional to check if the method and the url properties on the req match a route. If the route matches, then create formulate the route-specific response.

To create a route handler for a GET request with a URL path of / that sends a plain text, 'Splash Page', with a status code of 200:

```
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Splash Page');
  }
});


```

The server will send a response with the body of Splash Page only if the request has a method of GET and a URL path of /.

## Multiple Route Handlers

To add more route handlers, simply add more conditionals in http to check for different method and url combinations.

```
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Splash Page');
  }
  if (req.method === 'POST' && req.url === '/cat') {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Created a Cat!');
  }
});


```

Notice how you are returning right after you end the response, return res.end(...). The response cannot be changed after you call res.end, but it's best practice to exit out of the request/response cycle after you send the response.

## What you've learned

You learned that a route handler is sends a route-specific response. You also learned how to create multiple route handlers in an http server.

# Static Assets

A server is used for sending all kinds of data. In this article you will learn about a specific type of data that a server handles, static assets.

## What is a static asset?

A static asset is some data or resource that doesn't change no matter how many times you ask the server for it. It's usually just a file that the server holds in memory and sends to a client when asked for.

Examples of static assets include CSS and image files.

## Serving Static Assets

The URL path for requesting a static asset usually includes the static asset's file extension at the end of the URL path. For example, a request for a file called dog.jpg would have a URL path of something like /images/dog.jpg.

## What you've learned

You learned that a static asset is a resource that the server has stored in memory and sends when asked for. You also learned that the URL path of a static asset usually ends in the static asset's file extension.

# Serving Static Assets using http

A static asset is a file that a server holds in memory. The contents don't change and the asset can be requested and sent by the server.

In this article you will learn how to:

- Find and read files using the fs library
- Send a static asset from a server using the http library

## Finding and Reading Files

To find and read a file in memory, you can use the built-in fs Node.js library. readFileSync is a method in the library that takes in a file path and returns the contents of the file at that path. If you pass in a string of utf-8 as a second argument, then the file contents can be read as a string.

```
const fs = require('fs');

const fileContents = fs.readFileSync('./file-name.txt', 'utf-8');


```

The file path is the relative file path from the current file to the desired file, or an absolute path. Relative file paths are usually preferred.

If the file is not found, the method will throw an error.

## Sending Files

To send a file as a static asset in your http server as a response, you can write the contents of a file that you read as the body of the response. Then, set the appropriate status code. Finally set the Content-Type header specific for the file.

For example, if you want to send a png image as the response from your server:

```
const server = http.createServer((req, res) => {
  const catImage = fs.readFileSync('./images/cat.png');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.end(catImage);
});


```

It's best practice to set the Content-Type headers specific to the extension of the file you are sending. For a list of extensions to headers, see MDN docs for Common MIME Types.

## What you've learned

You learned how to find and read the contents of a file. You also learned how to send a single static asset from an http server.

# HTML Templating

In this article you will learn:

- What HTML templating is
- What a template engine is
- Popular HTML template engines

## The Problem

So far, you have learned how to serve and show a static HTML page from a server. However, what if you want to insert data into the HTML page? For example, there are about 200 billion tweets on Twitter created a year. To be able to display all those tweet pages to users using static HTML files, you would have to generate an HTML file for every single tweet. That's over 200 billion files!

It's not practical and space efficient to do this.

## The Solution

Instead of creating an HTML page for every single tweet, what if you could insert the data of a single tweet into a template? Each tweet page is the exact same except the data about the tweet displayed.

That's where HTML templating comes in! HTML templating is when you insert specific elements of data into an HTML file.

## Template Engines

A template engine is usually a package or library that processes HTML template files and inserts data into it. Template engines usually have their own conventions or even new programming languages to create dynamic HTML content from static HTML files and data variables. They attempt to make HTML templating easier for developers.

Each programming language has its own set of template engines to choose from. For example, popular template engines for Node.js include Pug and Handlebars, while popular template engines for Python include Genshi and Jinja.

## What you've learned

You learned what HTML templating is and the problem that HTML templating solves. You also learned that a template engine is a package or library that makes HTML templating easier. Finally, you learned that there are different template engines for different programming languages.

# Basic HTML Templating

In this article you will learn:

- How to create a basic HTML template
- How to insert information into a basic HTML template

## Creating a Basic HTML Template

To create a basic HTML template, first you need to figure out how you will identify the insertion of data into the HTML file.

In JavaScript, you can use string interpolation to insert variable values into a string by using ${}.

This concept will be applied to basic HTML templating.

In JavaScript string interpolation, ${} (dollar sign with curly braces) is wrapped around the variable name which you wish to interpolate. Instead of using ${} in the HTML template, #{} (hash tag sign with curly braces) will be used to indicate the start and end of the variable name.

For example, in the following HTML file called profile-page.html, the user's username should be inserted in the place of #{username} and the user's biography should be inserted in the place of #{biography}.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>#{username}'s Profile Page</title>
</head>
<body>
  <h1>Welcome to #{username}'s profile page!</h1>
  <p>#{biography}</p>
  <h2>Comment Box</h2>
  <form method="post" action="/comment">
    <p>To send a comment to #{username}, fill out this form</p>
    <textarea name="commentBody"></textarea>
    <button type="submit">Comment</button>
  </form>
</body>
</html>


```

This is a basic HTML template that can be used to produce user profile pages for any user.

## Using an HTML Template

To use an HTML template to produce a specific user profile page in Node.js, you need to read the file contents to a string, then replace the variables inside of the string with the appropriate user information.

The result of reading an HTML file using fs.readFileSync turns the file contents into a JavaScript string.

To replace variables inside of the resulting string, use the String.replace method replace variables inside of the template string with values.

For example, for a user with a username of DemoUser and a biography of "Hello World!", you would do the following in JavaScript.

```
const fs = require('fs');

// Get the file contents of the profile-page.html as a string
const htmlTemplate = fs.readFileSync('./profile-page.html', 'utf-8');

const htmlPage = htmlTemplate
  // replace all instances of #{username} in the HTML file with 'DemoUser'
  .replace(/#{username}/g, 'DemoUser')
  // replace all instances of #{biography} in the HTML file with 'Hello World!'
  .replace(/#{biography}/g, 'Hello World!');


```

The htmlPage variable will output the following HTML string:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DemoUser's Profile Page</title>
</head>
<body>
  <h1>Welcome to DemoUser's profile page!</h1>
  <p>Hello World!</p>
  <h2>Comment Box</h2>
  <form method="post" action="/comment">
    <p>To send a comment to DemoUser, fill out this form</p>
    <textarea name="commentBody"></textarea>
    <button type="submit">Comment</button>
  </form>
</body>
</html>


```

Now you can make HTML pages that have dynamic content!

## What you've learned

You learned how to create a basic HTML template and how to replace variables inside of the template with other values to create a dynamic content in HTML pages.
