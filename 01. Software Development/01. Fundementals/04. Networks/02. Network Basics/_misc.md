












## RESTful

The first thing to review is the difference between a route and an endpoint. Fortunate for us, there is not much to remember. We can think of a route as a path to a resource. How would we get to your desktop directory from the route directory? cd /Users//home/desktop (something like that). So if we wanted to get a user's comments we would define a path like /users/1/comments. Now, what if we wanted to create a comment vs get all comments? We would need a verb (method) to tell our server what to do once someone makes a request to that route. So when we combine a route and a verb GET /users/1/comments or POST /users/1/comments we have defined an endpoint. An endpoint without the verb is just a route.

Review RESTful Routes Conventions for a more in-depth explanation. This will cover how we take this concept of routes and endpoints, and organize it in a way developers can read and understand. You will find it's best to follow these conventions. It's okay for you to put your desktop in your root directory and all someone would say is "that's unconventional".

# Servers

This section covers lots of material. What's great is that the concepts from today build upon each other so you get to see the same code transform little by little throughout the topics. Most of the concepts today are understood best almost strictly through coding. The more you code this out and work on understanding data flow the better you become at writing server code.

## Creating A Server

Before handling a series of endpoints we must first understand how to create a server. We use Node's built in HTTP package in order to do so. The Formulate a Response in HTTP is a great practice for this. It's also a great place to start noticing what must be done before sending a response. You will find that even though our code may get slightly complicated, the dataflow will be consistent.

## Creating Route Handlers

Once we understand how to formulate a response in HTTP we can then learn how to create route handlers. Route handlers are simply if statements that have been defined to match a particular endpoint.

```
if (req.method === "GET" && req.url === "/comments") {
  // get comments
}

if (req.method === "POST" && req.url === "/comments") {
  // create a comment
}


```

Rather than have our server respond to any request, we create these endpoints to match specific requests and if none of them match we typically return a 404 status code.

## Parsing the Request Body

Parsing data from the request body must be done whenever we expect some information to have been sent from the client to the server. If there is no data being sent over, then there is no need to parse the request body. Parsing the request body is a good practice on how we break down our incoming request data and "clean up" the query string. Special characters ie: (!, ?, " ", etc) are replaced with encoded values that must be decoded. Reference Parse the Request Body short practice for a step by step guide on how to do so.

## Serving Static Assets

Part of sending a response body is being able to read and serve a static asset. These may be html, css, or even image files. When code is designed this way it may also be referred to as server side rendering. Until now we have considered the response body to be some form of text but by utilizing the readFile library we can read files local to our server code and serve them when requested. Reference the Serve Static Assets in http short practice and homework reading.

## Templating

Templating takes serving static assets and adds one more layer of complexity to it. Fortunately as we go through these practices we notice the layers are only a few lines of code. We can also do a quick dataflow check to confirm that regardless of how complex our applications have become, we are still maintaining the initial dataflow mentioned above. Once a user interacts with our page we may want to render the same page once more but replace some place holder, which #{looksLikeThis}, in our html. The replace method is the hero in this section and the best materials to reference to practice this concept are What is HTML Templating and Basic HTML Templating in http.

# Asynchronicity

## Promises

Promises are everywhere in web development. Anytime you are making a request to a server it responds with a promise in the form of a response object. Our main goal with promises is to be able to handle them appropriately by understanding the different states a promise can be in.

The Promises homework reading does a great job going over what the promise object is and what it means to have a promise that is fulfilled, rejected, or pending.

A good follow up practice would be Create and Handle Promises found in the Guided Practice section.

## Async Await

After working through Create and Handle Promises you may notice using .then() chaining helps us handle promises...but there must be a cleaner, more recognizable way of handling promises. async await is not a replacement to .then(), but an alternative. The async await short practice in the guided practice section is perfect for learning how to convert .then() to using async/await.

## Fetch

Fetch is going with you for the rest of your App Academy career and most likely after. It is a function that allows us to communicate to a server from the client through requests. It is important to know how to make GET, POST, PUT/PATCH and DELETE requests to a server using the fetch function.

This is the first time we are sending over a request body through a function and not a form or postman. We are introduced to URLSearchParams and MDN gives us lots of examples on how we can formulate a response body using this class.

Work out the last two fetch practices as they both incorporate fetch fundamentals that will be useful throughout the rest of the course.

# Web API

## JSON

The entire week we were working with traditional servers only capable of handling two methods, GET and POST. We are finally introducing the remaining methods, PUT/PATCH and DELETE as they are useful when working with JSON objects. The great thing about this content is that we are almost revisiting the first day's content content. This is our introduction to Web APIs.

## Testing API Endpoints

The Create API Endpoint documentation short practice is perfect in helping us understand the difference between a Traditional Server and a Web API server. The best way to work out this practice is to pull up Monday's HTML Server RESTful Endpoints short practice while working through Thursday's API documentation. Notice the changes between the two ways of documenting endpoints. This will allow us to practice testing these endpoints through Postman and get closer to mastering data flow. Work through the Test API Endpoints short practice and document what you notice about each request and response. When do we get a 302? What status code do we use when making a POST request?

# TCP/IP and Networking

The absolute best thing to do for this days material is reviewing Caleb Bratten's lecture on networking. He uses drawings and diagrams that simplify a complex concept into a light and fun lecture! You can view the video in the next lesson.

# HTML Form Submission Requests

When you submit a form on the browser, the browser makes a request to the server with the contents of the HTML form inside of the request body.

In this article you will learn about what the request of an HTML form submission by the browser looks like and how the server should respond to the submission request.

## HTML Form Review

When you create a form in HTML, you can specify two HTML attributes that influence the components of the request made when the form is submitted.

- method - method of the request, can only be set to "POST"
- action - URL path of the request

For example, the HTML form to submit a POST /dog request would look like:

```
<form method="post" action="/dog">
  <input type="text" name="name" />
  <select name="color">
    <option value="black">Black</option>
    <option value="brown">Brown</option>
    <option value="yellow">Yellow</option>
    <option value="white">White</option>
  </select>
  <input type="number" name="age" />
  <textarea name="description"></textarea>
  <button type="submit">Create Dog</button>
</form>


```

In this example, when the form is submitted the request body will contain key-value pairs for the form inputs, name, color, age, and description.

The browser will make the request to the server once the user presses the submit button.

The components of the request will be:

- method - defined by the method HTML form attribute
- URL path - defined by the action HTML form attribute
- Content-Type header - application/x-www-form-urlencoded
- body - form input names and values

## Server Response

When a form submission request is made to a server. The server should parse the body of the request, do some CRUD action with the data, then redirect the user to another page.

Recall: a redirection response has a status code of 302 and a Location header with a value as the path to redirect the user to.

The components of the response typically looks like:

- status code - 302
- Location header - path to redirect the user to
- body - none

Here's the flow of how a typical form submission goes:

1. Form is submitted
2. Browser makes request to the server
3. Server parses the request body and does some CRUD action with the data
4. Server sends a redirection response
5. Browser receives response
6. Browser redirects user to the path specified in the Location header of the response

## What you've learned

You learned a typical browser request on an HTML form submission looks like. You also learned how the server typically responds to a form submission. Finally, you learned the steps of the typical form submission flow.

# RESTful Routes

ReST stands for REpresentational State Transfer. The acronym doesn't fit perfectly, but developers can come up with whatever cool acronyms work for us! This may sound like a complex concept, but don't let it scare you too much.

In this reading, you will learn:

- Compare and contrast a route and an endpoint
- The definition of ReST
- To distinguish between a collection of resources vs. a single resource
- How to apply ReST design principles to a web application

## Routes vs. Endpoints

First, what is a route? A route is the URL path for a request. An endpoint is a pattern for a request that has a specific route and HTTP verb combination to define how the server should process the request and what the response is expected to look like. Endpoints are used to distinguish different types of requests from each other. The HTTP verb or method and URL path of a request are both used to identify the endpoint of a request.

Here are some examples of endpoints vs. routes:

- Endpoint: GET /users, Route: /users
- Endpoint: POST /users, Route: /users
- Endpoint: POST /session, Route: /session

REST is a convention for defining endpoints that other developers can easily understand how the server may process requests with those endpoints and what they should expect from their responses.

### Route Parameters

A route parameter is a named segment of the URL path that acts as a placeholder for a changeable part of the path. Route parameters are used to generalize routes to a certain pattern.

Route parameters are indicated in the URL path by a colon, :, followed by the name of the variable part of the path.

For example, a generic URL path for the route /tweets/17 could look like /tweets/:tweetId. The route parameter in this path is :tweetId that acts as a placeholder for the tweet id of 17. The generic URL path of /tweets/:tweetId represents routes starting with /tweets/ and ending in an id (e.g. /tweets/aefe116d-352b-41c2-a5bb-fc74365f2697).

Route parameters are often used in documentation to group and generalize route paths with a variable segment.

## Rules of ReST

ReST (Representational State Transfer) is an architecture style for designing networked applications. To be clear, ReST is not an official standard. Instead, it's a set of rules/constraints.

ReST defines six architectural constraints, and in this reading will focus on three of them:

1. Decoupled client-server: The client and the server should be decoupled so that they can evolve separately without any dependence on one another.
2. Stateless: This means that there is no necessary session between the client and the server. Data received from the server can be used by the client independently. This allows you to have short discrete operations. Luckily, this is a natural fit for HTTP operations in which requests are intended to be independent and short-lived.
3. Uniform interface: RESTful endpoints are meant to be self-describing and uniform in their definition. Each operation is intended to be separated by a separate endpoint or URL. In practical real world terms, most RESTful endpoints implement the classic CRUD (Create, Read, Update, Delete) operations against a resource that could just happen to be in your data model. This uniformity allows developers to easily learn the usage pattern of each endpoint.

## What does a RESTful route look like?

Because RESTful routes are meant to be representational, you can start with the data model that the endpoint is meant to represent. For example, if you're building a Twitter clone application, you will most likely want to define endpoints that manage the operations of your users tweets resource, such as "create a tweet" and "like a tweet."

### Two kinds of URLs: Collection vs. Singular

In RESTful APIs, you generally have two kinds of URLs, ones that point at collections of resources and ones that point at single resources.

The resource in the URL is the data entity or group of data in the server that you want to perform a CRUD action on (read or manipulate the data).

A path that ends in a plural noun represents a collection of resources that your server provides for developers to interact with.

The following examples are just naming schemes that you would decide as the person creating the paths that your server will handle.

- /invoices would represent a collection of invoices that you're allowed to see
- /people would represent the people in the application that you're allowed to see
- /houses would represent a collection of houses

A path that combines a plural noun (the resource name) and a record identifier represents a single resource in your application.

A record is a single set of data under a resource. A record id is the specific identifier for a record in a resource. Often, the identifier is a unique identifier for the record.

- /invoices/PK-200201 would represent the single invoice that has the the invoice number PK-200201 (record id)
- /people/10103 would represent the single person with id 10103 (record id)
- /houses/bdfa5ef9-0c86-4810-bc13-10415250af09 would represent the house with the specific globally unique record identifier bdfa5ef9-0c86-4810-bc13-10415250af09

Using a Twitter application as an example, a path like /my/tweets would point to a collection of tweets made by you. A path like /my/tweets/17 would point to a tweet made by you with the id of 17.

An id is a unique identifier for a specific resource. In this example, the id of 17 is used to uniquely distinguish this specific tweet over all the other tweets.

In another example, consider the path that reads /weather/current. That doesn't point to any static single record in the weather resource. Instead, it would return the most recent record of weather. The id of current would be treated special and initiate a lookup of the most recent record rather than a specific record like /weather/10392.

## How to create RESTful Endpoints

The endpoints that return HTML can follow a RESTful concept. However, you are limited to just using the verbs GET and POST. Hyperlinks, or just links, and URL path changes on the browser perform GET requests.

Submission of an HTML form can perform both GET and POST requests. A GET request can contain form information in the URL and should only be used when the form has no side-effects, meaning the form action does not manipulate anything. A POST request will contain form information in the request body and should be used when manipulations ARE done, namely to the server or the database it's connected to.

Note that HTML-based views can only generate GET and POST requests.

The following tables show the paths and HTTP verbs used to interact with HTML-based versions of a RESTful application:


HTTP Verb

Meaning

/resource-name

GET

Index page: Get an HTML-based list of the resource

/resource-name/new

GET

Create form page: Show a form to create a new record for the resource

/resource-name

POST

Submit create form: Create a new record for the resource

/resource-name/:record-id

GET

Detail page: See the details of the specified record

/resource-name/:record-id/edit

GET

Edit form page: Show the edit form for the specified record

/resource-name/:record-id

POST

Submit edit form: Update the specified record

/resource-name/:record-id/delete

POST

Submit delete form: Delete the specified record

Using a Twitter application as an example, here's how the endpoints would look like for the Twitter app.


HTTP Verb

Meaning

/my/tweets

GET

Index page: Get an HTML-based list of your tweets

/my/tweets/new

GET

Create form page: Show a form to create a new tweet

/my/tweets

POST

Submit create form: Create a new tweet

/my/tweets/17

GET

Detail page: See the details of your tweet with the id of 17

/my/tweets/17/edit

GET

Edit form page: Show the edit form for your tweet with the id of 17

/my/tweets/17

POST

Submit edit form: Update the tweet with the submitted details

/my/tweets/17/delete

POST

Submit delete form: Delete your tweet with the id of 17

All of the GET requests get HTML view pages as responses for the browser to render. All of the POST requests usually end in a redirect to another HTML view page that makes sense.

For example:

- After creating a resource, redirect to its detail page
- After editing a resource, redirect to its detail page
- After deleting a resource, redirect to the list page

Sometimes, different HTML views are combined. For example, instead of the create form page as a separate page from the index page, the index page can include a list of resources AND a create form. In that case, you would have no need for a create form page.

### Nesting Resources

Sometimes a resource is dependent on another resource or requires the information of another resource to perform the request. The route path should include the information about the desired resource and the required resource.

You can add resources to routes to create nested resources. The URL path can consist of multiple collections and singular resources. The desired resource or the resource that you are trying to perform the CRUD operation on should be the last resource in the URL path. Information about the other required resource(s) should be before the desired resource in the URL path.

The following tables show the paths and HTTP verbs used to interact with nested resources for HTML-based versions of a RESTful application:


HTTP Verb

Meaning

/resource-name/:record-id/nested-resource

GET

Index page: Get an HTML-based list of the nested resource related to the specified record

/resource-name/:record-id/nested-resource/new

GET

Create form page: Show a form to create a new record for the nested resource related to the specified record

/resource-name/:record-id/nested-resource

POST

Submit create form: Create a new record for the nested resource related to the specified record

/nested-resource/:nested-record-id

GET

Detail page: See the details of the specified nested resource's record

/nested-resource/:nested-record-id/edit

GET

Edit form page: Show the edit form for the specified nested resource's record

/nested-resource/:nested-record-id

POST

Submit edit form: Update the specified nested resource's record

/nested-resource/:nested-record-id/delete

POST

Submit delete form: Delete the specified nested resource's record

Using a Twitter application as an example, to create a comment resource for a specific tweet resource, the route should have the information about the specific tweet resource and that a comment should be created for it. The endpoint can look like POST /tweets/:tweetId/comments. The endpoint for seeing all the comments for a tweet can look like GET /tweets/:tweetId/comments.

## RESTful vs other conventions

In programming, there is usually more than one valid approach, and making HTTP endpoints is no exception. And while RESTful routes are certainly one of the most popular styles for designing a web application, it is not the only way. As you browse other websites, you may see variations of RESTful routes or endpoints that look nothing like REST.

## What you've learned

In this article, you covered quite a bit. You learned about the difference between routes and endpoints. You also learned that REST is a convention for routes and is not an official standard. You also learned about the different types of resources from a URL path. You learned that endpoints which return HTML can follow RESTful conventions and what the different path and method combinations for an endpoint mean. Finally, you learned about what a nested resource is and how to nest resources in a route.
