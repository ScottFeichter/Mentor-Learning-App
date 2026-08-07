# NODE HTTP & EXPRESS

[NODE HTTP	3](#node-http)

[What is Node http?	3](#what-is-node-http?)

[Getting Started	3](#getting-started)

[Component Objects	4](#component-objects)

[Request Object	4](#request-object)

[Response Object	4](#response-object)

[Parse the Request Body in Node HTTP	5](#parse-the-request-body-in-node-http)

[Formulate and Send a Response in Node HTTP	6](#formulate-and-send-a-response-in-node-http)

[Set the status code	6](#set-the-status-code)

[Set the header	6](#set-the-header)

[Write the response body	6](#write-the-response-body)

[Hanging Server	7](#hanging-server)

[Create Route Handlers in Node http	7](#create-route-handlers-in-node-http)

[Defining a route handler	7](#defining-a-route-handler)

[Multiple Route Handlers	8](#multiple-route-handlers)

[What are Static Assets?	8](#what-are-static-assets?)

[Static Asset	8](#static-asset)

[Serving Static Assets	8](#serving-static-assets)

[Serve Static Assets in Node http	8](#serve-static-assets-in-node-http)

[Finding and Reading Files	8](#finding-and-reading-files)

[What is HTML Templating?	9](#what-is-html-templating?)

[The Problem	9](#the-problem)

[The Solution	9](#the-solution)

[Templating Engines	9](#templating-engines)

[Basic HTML Templating in Node http	10](#basic-html-templating-in-node-http)

[Creating a Basic HTML Template	10](#creating-a-basic-html-template)

[Using an HTML Template	10](#using-an-html-template)

[EXPRESS	10](#express)

[What is Express?	10](#what-is-express?)

[Initialize an Express server	10](#initialize-an-express-server)

[A. CREATE PROJECT DIRECTORY	10](#create-project-directory)

[B. TRACK WITH GIT	11](#track-with-git)

[C. CREATE .gitignore	11](#create-.gitignore)

[D. CREATE AND LINK REMOTE GIT ON GITHUB	11](#create-and-link-remote-git-on-github)

[E. ESTABLISH DEPENDENCIES	11](#establish-dependencies)

[F. CREATE SERVER	11](#f.-create-server)

[Express Route Handlers	12](#express-route-handlers)

[A. METHODS FOR DEFINING ROUTE PATHS	12](#methods-for-defining-route-paths)

[B. ROUTE PATH ARGUMENT	12](#route-path-argument)

[C. CALLBACK FUNCTION ARGUMENT	13](#callback-function-argument)

[D. RES OBJECT RESPONSE METHODS	13](#res-object-response-methods)

[E. USE THE BROWSER TO TEST POST ROUTES WITH FETCH	13](#use-the-browser-to-test-post-routes-with-fetch)

[F. THE REQUEST OBJECT \- FIRST PARAMETER OF THE CALLBACK	13](#the-request-object---first-parameter-of-the-callback)

[G. MIDDLE WARE	13](#middle-ware)

[F. ROUTERS	16](#routers)

[G. ENVIRONMENT VARIABLES	16](#environment-variables)

[H. EXPRESS-ASYNC-ERRORS	17](#express-async-errors)

[I. EXPRESS W SQLITE3	17](#express-w-sqlite3)

[J. STATIC FILES IN EXPRESS	18](#static-files-in-express)

[EXPLORING DATABASE ARCHITECTURE PATTERNS	20](#exploring-database-architecture-patterns)

[Naming Conventions	20](#naming-conventions)

[Pattern 1: One Database to One Application	20](#pattern-1:-one-database-to-one-application)

[Pattern 2: Multiple Databases to One Application	21](#pattern-2:-multiple-databases-to-one-application)

[Pattern 3: One Database to Many Applications	21](#pattern-3:-one-database-to-many-applications)

[Pattern 4: One Database with Multiple Schemas to Many Applications	22](#pattern-4:-one-database-with-multiple-schemas-to-many-applications)

[Deploying to Render.com with Pattern 4	22](#deploying-to-render.com-with-pattern-4)

[SETTING UP A SCHEMA IN EXPRESS AND SEQUELIZE	23](#setting-up-a-schema-in-express-and-sequelize)

[Setting up a Schema in Express and Sequelize	23](#setting-up-a-schema-in-express-and-sequelize-1)

[Step 1: Create a setup script that creates a schema	23](#step-1:-create-a-setup-script-that-creates-a-schema)

[Step 2: Define the schema in the config file	24](#step-2:-define-the-schema-in-the-config-file)

[Step 3: Define the schema in each migration file	25](#step-3:-define-the-schema-in-each-migration-file)

[a) Create Table Migrations	25](#create-table-migrations)

[b) Alter Table Migrations	26](#alter-table-migrations)

[Step 4: Define the schema in each seeder file	27](#step-4:-define-the-schema-in-each-seeder-file)

# 

# 

# 

# 

# **NODE HTTP** {#node-http}

# 

## What is Node http? {#what-is-node-http?}

http is a built in package in Node.js

### Getting Started {#getting-started}

1. Import the http package  
2. Call the createServer method and pass a function as a single argument  
   1. Function will have 2 parameters   
      1. req \= Request Object  
      2. res \= Response Object

| *// server.js*const http \= require('http');const server \= http.createServer((req, res) \=\> {  *// ...*}); |
| :---- |

   

3. Connect server to local  
   1. Define port number and assign it 0 \- 65,535  
   2. Some ports are reserved  
   3. Conventionally used for dev  
      1. 3000  
      2. 5000  
      3. 8000  
4. Use the listen method on the server and pass two args:  
   1. port   
   2. callback function  
      1. will run when the connection is successful  
      2. logs a message to the console saying connected and listening

| *// server.js*const http \= require('http');const server \= http.createServer((req, res) \=\> {  *// ...*});const port \= 5000;server.listen(port, () \=\> console.log('Server is listening on port', port)); |
| :---- |

5. Start server by running file in Node.js in terminal ie node server.js  
6. Should see the console log message

## Component Objects {#component-objects}

### Request Object {#request-object}

- When a server gets a request ‘http’ will create a Request object  
  - to examine the Request object console.log(req);  
    - method   
      - string of http method  
      - helpful to identify route of request and formulate response  
    - url   
      - string of the url path  
      - helpful to identify route of request and formulate response  
    - headers   
      - object of headerName: value  
      - helpful to identify route of request and formulate response  
    - on   
      - will be used to parse the body of the request

### 

### Response Object {#response-object}

- To formulate a response ‘http’ will create a Response object  
  - to examine the Response object console.log(res);  
    - statusCode  
      - number status code of response  
    - setHeader   
      - method that sets a header name to a value  
    - write  
      - method that allows you to add to the body of the request  
    - end  
      - method that allows you to add to the body of the request and send response

## 

## Parse the Request Body in Node HTTP {#parse-the-request-body-in-node-http}

## 

- request body is separated into data packets for sending   
- will need to be put back together as a single string  
  - listen for the data event on the req object  
  - add contents of data packet to the packets already received via concatenation  
    - let reqBody \= ‘’;  
    - req.on(“data”, (data) \=\> { reqBody \+= data;}); 


- the end event on the req when all body received by server  
- log the entire req body inside the req.on method listening to the end event  
  - req.on(“end”, () \=\> { console.log(reqBody); });

- you can now read the req body 	  
  - depending on content type you will need to parse body differently  
  - **parsing application/x-www-form-urlencoded**  
    - body is a string of key=value pairs separated by & from HTML form inputs  
    - to convert to an object:  
1. separate the pairs by &  
2. separate key from value by \=  
3. replace \+ with “ “  
4. decode values from Percent Encoding  
   1. decodeURIComponent(encodedString)  
5. turn the pairs into an object

   

## 

## **Formulate and Send a Response in Node HTTP** {#formulate-and-send-a-response-in-node-http}

## 

### Set the status code {#set-the-status-code}

- statusCode is a property of res  
- set it inside createServer  
- res.statusCode \= 200;

### Set the header {#set-the-header}

- setHeader is a method of res  
- set it inside createServer  
- the header name is the first argument  
- the header value is the second argument  
- res.setHeader(“Content-Type”, “text/css”);

### Write the response body {#write-the-response-body}

- TWO WAYS TO DO THIS  
1. write method on res  
   1. this *adds* to the body of the response  
   2. can all this method multiple times on same res

| const server \= http.createServer((req, res) \=\> {  res.write('Hello');  res.write(' ');  res.write('World');  res.write('\!');}); |
| :---- |

2. end method on res  
   1. like write this also *adds* to the body of the response  
   2. but additionally it ends the response and sends it  
   3. can only call it once

| const server \= http.createServer((req, res) \=\> {  res.write('Hello');  res.write(' ');  res.write('World');  res.end('\!');}); |
| :---- |

   4. you don’t have to pass it any argument  
   5. for example to send a response with no body

| const server \= http.createServer((req, res) \=\> {  res.status \= 200;  res.end();}); |
| :---- |

### Hanging Server  {#hanging-server}

- when there is no response for a request made to the server  
- server becomes unresponsive and cannot take requests unless client quits connection  
- make sure to always send a response for all requests to your http server even if error

## 

## 

## **Create Route Handlers in Node http** {#create-route-handlers-in-node-http}

### Defining a route handler {#defining-a-route-handler}

- code for the response that will be executed for a route/endpoint  
- in http use a conditional to branch different route handlers  
  - check the method of req  
  - check the url of req  
  - if match formulate response

| const server \= http.createServer((req, res) \=\> {  if (req.method \=== 'GET' && req.url \=== '/') {    res.statusCode \= 200;    res.setHeader('Content-Type', 'text/plain');    return res.end('Splash Page');  }}); |
| :---- |

### Multiple Route Handlers {#multiple-route-handlers}

- use more conditionals

## 

## 

## 

## **What are Static Assets?** {#what-are-static-assets?}

## 

### Static Asset  {#static-asset}

- resource that doesn’t change no matter how many times you ask the server for it

### Serving Static Assets {#serving-static-assets}

- the url of the request usually includes the static asset’s file extension at end  
- /images/dog.jpg

### 

## 

## **Serve Static Assets in Node http** {#serve-static-assets-in-node-http}

## 

### Finding and Reading Files {#finding-and-reading-files}

- fs is a built in node library to find and read files in memory  
  - readFileSync is a method in fs  
    - first argument is a file path  
      - the file path is relative or absolute  
      - if file not found method throws an error  
    - second argument can be utf-8 to be read as string  
    - returns the file at the path  
      

| const fs \= require('fs');const fileContents \= fs.readFileSync('./file-name.txt', 'utf-8'); |
| :---- |

## 

## **What is HTML Templating?** {#what-is-html-templating?}

## 

### The Problem {#the-problem}

- how to insert data into a static html resource?

### The Solution {#the-solution}

- use a template and insert the data into it

### Templating Engines {#templating-engines}

- a package or library that process HTML template files and inserts data  
- attempt to make templating easier for devs  
- each language has its own set of template engines to choose from  
  - Node  
    - Pug  
    - Handlebars  
  - Python  
    - Genshi  
    - Jinja

## 

## **Basic HTML Templating in Node http** {#basic-html-templating-in-node-http}

## 

### Creating a Basic HTML Template {#creating-a-basic-html-template}

- determine how to insert  
  - string interpolation  
    - in JS we use ${}  
    - in HTML we use \#{}

### Using an HTML Template {#using-an-html-template}

- use fs to read the file contents to a string  
- use String.replace on variables inside the string with user info

# **EXPRESS** {#express}

## What is Express? {#what-is-express?}

A framework built on Node http 

### 

### Initialize an Express server {#initialize-an-express-server}

### 

1. #### CREATE PROJECT DIRECTORY {#create-project-directory}

   1. mkdir \<project directory name of your choice\>  
   2. cd \<project directory name of your choice\>  
   3. touch README.md  
   4. open README.md  
      1. Enter message: this is a read me  
      2. Save file

         

2. #### TRACK WITH GIT {#track-with-git}

   1. git init  
   2. git add .  
   3. git commit \-m “initial”

      

3. #### CREATE .gitignore {#create-.gitignore}

   1. touch .gitignore  
   2. open .gitignore  
      1. Enter: node\_modules/  
      2. Save file  
   3. git add .  
   4. git commit \-m “.gitignore”

      

4. #### CREATE AND LINK REMOTE GIT ON GITHUB {#create-and-link-remote-git-on-github}

   1. gh repo create \<repo name\> \--public  
   2. git remote add origin https://github.com/\<yourgithubprofile\>/\<repo name\>  
   3. git branch \-M main  
   4. git push \-u origin main

5. #### ESTABLISH DEPENDENCIES {#establish-dependencies}

1. mkdir server  
2. cd server  
3. npm init \-y  
4. npm install express  
5. npm install \-D nodemon  
6. *open the package.json file*  
   1. add the following in the “scripts”: {}  object  
      1. “start”: “node app.js”  
      2. “dev”: “nodemon app.js”

         

   ####        F. CREATE SERVER {#f.-create-server}

1. in app.js  
   1. *import express*  
      1. const express \= require(“express”)  
   2. *create the server app*  
      1. const app \= express()  
   3. *create test route*  
      1. app.get(‘/status’, (req, res) \=\> {

  					  res.send(‘Hello from the app\!”  
					});

4. *create the port*  
   1. const port \= 5001;  
   5. *set the app to listen*  
      1. app.listen(port, console.log(\`Server is listening on port ${port}...\`));  
2. test the app  
   1. in terminal  
      1. npm start  
         1. should get the listen console log  
   2. in browser  
      1. localhost:5001/status  
         1. should get Hello from the server app\! message  
   3. in postman	  
      1. GET localhost:5001/status  
         1. should get Hello from the server app\! message  
3. add, commit, and push git  
   1. cd to parent if needed  
   2. git add .  
   3. git commit \-m “created server app”  
   4. git push

      

      G. npm start vs node app.js

      H. npm run dev

      

   ### Express Route Handlers {#express-route-handlers}

   ### 

1. #### METHODS FOR DEFINING ROUTE PATHS {#methods-for-defining-route-paths}

   1. app.get(*path, callback(req, res){ something to do }* )  
   2. app.post(*path, callback(req, res){ something to do }* )  
   3. app.put(*path, callback(req, res){ something to do }* )  
   4. app.delete(*path, callback(req, res){ something to do }* )  
   5. app.patch(*path, callback(req, res){ something to do }* )

      

2. #### ROUTE PATH ARGUMENT {#route-path-argument}

   1. can be a single route path  
      1. app.get(“/”,  
   2. or an array  
      1. app.get(\[“/”, “/posts”, “/comments”\],  
   3. or an array store in a variable  
      1. const paths \= \[“/”, “/posts”, “/comments”\];  
      2. app.get(paths,  
   4. or a regex  
      1. don’t know how to do this

         

3. #### CALLBACK FUNCTION ARGUMENT {#callback-function-argument}

   1. defines two parameters giving us access to req and res objects  
      1. app.get(*path,* (res, req) \=\> { *something to do }*);  
      2. the call back can be defined elsewhere and called instead  
      3. app.get(*path,* myCallback);

         

4. #### RES OBJECT RESPONSE METHODS {#res-object-response-methods}

   1. res.send(“plain text”)  
   2. res.json(something to be JSON.stringified) 

      

5. #### USE THE BROWSER TO TEST POST ROUTES WITH FETCH {#use-the-browser-to-test-post-routes-with-fetch}

   

   fetch('/users', {

       method: "POST",

       body: JSON.stringify({username: "Demo"}),

       headers: {"Content-Type": "application/json"}

   }).then(res \=\> res.json()).then(resBody \=\> console.log(resBody));

   

6. #### THE REQUEST OBJECT \- FIRST PARAMETER OF THE CALLBACK {#the-request-object---first-parameter-of-the-callback}

   1. Important req methods:  
      1. req.body \- the parsed body of the request  
         1. can be parsed from json as long as the header content-type is application/json and the body is json  
         2. express does this automatically if configures with express.json()  
            1. *add to top of the app:*  app.use(express.json());  
                 
      2. req.query \- object containing query string parameters  
         1. to get the query string used in a search bar  
         2. will present it as object of key: value pairs

            

      3. req.params \- object containing named route parameters  
         1. commonly used for an incremented userId

            

      4. There can be other data on the req   
         1. req.user.id for example

          


7. #### MIDDLE WARE {#middle-ware}

   1. has access to req and res to do something   
   2. must take in at least 3 params and optional 4  
      1. error  
         1. optional arg  
         2. must be the first arg if it exists  
         3. for when next() is passed an error   
            1. next(error)  
               1. will skip everything after   
               2. until it finds a route handler with error arg  
      2. req  
         1. mandatory  
      3. res  
         1. mandatory  
      4. next  
         1. mandatory  
         2. tells express to move to next piece of mw or exp route

            

   3. using middle ware on route handlers  
      1. can be set to be available to all handlers  
         1. app.use(someMiddleWare);  
         2. this will automatically insert it in the handler params but you will not visually see it  
      2. can be set to available to handlers of a certain prefix  
         1. app.use(‘/users, …define the mw etc…)  
            1. this will automatically make it available to any route handler with /users prefix   
               1. must be BELOW the app.use  
               2. must have /users prefix is /users/id or whatever  
      3. or can be set to be in a specific route  
         1. *define the middleware*  
            1. const printPath \= (req, res, next) \=\> {

               console.log(\`path; ${req.path}\`);

               next();

               });

         2. *use the middleware in the route handler*  
            1. app.get(‘/’, printPath, (req, res) \=\>{  
                 
               });

               

   4. middle ware can be of 3 varieties  
      1. works as intended, mutually exclusive  
         1. const checkUserInput1 \= (req, res, next) \=\> {

            if(req.body.stuff) {

            	next();

            } else {

            	res.send(“Please include a stuff property.”);

            }

            

            });

      2. flip the conditional logic, mutually exclusive  
         1. const checkUserInput1 \= (req, res, next) \=\> {

            if(\!req.body.stuff) {

            	next();

            } else {

            	res.send(“Please include a stuff property.”);

            }

            

            });

      3. need to finish this and ii  
         1. const checkUserInput1 \= (req, res, next) \=\> {

            if(\!req.body.stuff) {

            	next();

            } else {

            	res.send(“Please include a stuff property.”);

            }

            

            });

   5. Passing an error to next()  
      1. express will skip all other mw until in finds one that takes error arg  
         1. app.use((req, res, next) \=\> {

            console.log(‘error test’);

            const error \= “There was an error”;

            next(error);

            });

         2. this will skip anything below until it hits one with error arg  
         3. app.use((error, req, res, next) \=\> {

            console.log(error)

            next();

            });

   6. Error \- this needs work  
      1. need to create error with a message  
         1. const err \= new Error(“There was an error”);  
      2. need to set the status code in the error-handling mw  
         1. const status \= err.statusCode || 500  
         2. res.status(status)  
      3. why handle errors in mw instead of in the route handlers?  
         1. SRP/DRY  
         2. Readability  
      4. Default Error  
         1. Express has a default error   
         2. It is sent if no response is sent after all mw  
         3. just says Cannot GET /the route  
   7. Catch All \- this needs work  
      1. last route handler   
      2. will process anything that gets to it  
      3. like a goal keeper?

         

6. #### ROUTERS {#routers}

   1. route handlers can be in different folders  
   2. configure the app.js file  
      1. import the router   
         1. const peopleRouter \= require(‘./routes/people’);  
      2. make requests go to router by prefix  
         1. app.use(“/people”, peopleRouter);  
   3. configure router file  
      1. import express  
         1. const express \= require(‘express’);  
      2. create router  
         1. const peopleRouter \= express.Router();  
            1. this is instead of const app \= express()  
            2. can do most things than app can do  
      3. create the route handlers  
         1. you don’t have to /people  
         2. router.get(‘/’, (req, res) \=\> {

            res.send(“Hello from our router”);

            });

            

      4. export the router  
         1. module.exports \= router;

            

7. #### ENVIRONMENT VARIABLES {#environment-variables}

   1. a few ways to do this  
      1. add to via terminal  
         1. In the terminal:  
            1. MESSAGE=”hello there” npm start  
         2. In app.js  
            1. console.log(process.env.MESSAGE);  
      2. add to package.json in scripts:  
         1. “start” : “MESSAGE=wassup node app.js”  
         2. this defeats the purpose  
      3. create a .env file  
         1. at the root of the application .env  
         2. place env variables in there  
            1. MESSAGE=”hello from .env”  
         3. be sure to add .env to .gitignore  
         4. npm install dotenv   
         5. npm install dotenv-cli  
         6. at top of the app   
            1. require(‘dotenv’).config()

               

8. #### EXPRESS-ASYNC-ERRORS {#express-async-errors}

   1. not middle ware  
   2. makes middle ware able to be async  
      1. npm install express-async-errors \--save  
      2. require('express-async-errors');  
      3. app.get('/users', async (req, res) \=\> {

          const users \= await User.findAll();

         res.send(users);

         });

         

9. #### EXPRESS W SQLITE3 {#express-w-sqlite3}

   1. Install Dependencies  
      1. npm express  
      2. npm dotenv  
      3. npm sqlite3  
   2. create .env  
      1. create file and add  
      2. DB\_FILE=  
   3. Create app.js  
      1. require .env  
         1. require(“dotenv”).config();  
      2. require sqlite3  
         1. const sqlite3 \= require(‘sqlite3’);  
      3. Set up db instance we can use in the routes  
         1. const db \= new sqlite3.Database(process.env.DB\_FILE, sqlite3.OPEN\_READWRITE)  
      4. create appropriate route handler  
         1. app.get(“/’, (req, res) \=\> {

         			const sql \= “SELECT \* FROM posts;”;

         			db.all(sql, \[\], (err, rows) \=\> {

         				if(err) {

         					return res.json(err);

         				}

         				res.json(rows);

         		

            });

         

              });

10. #### STATIC FILES IN EXPRESS {#static-files-in-express}

    1. What are static assets?  
       1. Unchanging files   
       2. Delivered to the client exactly as they are stored on server  
          1. images  
          2. stylesheets  
          3. js  
          4. fonts  
          5. medias

             

    2. Using express.static()  
       1. built in MW function

          

       express.static(root, \[options\]);

       2. root arg is physical location on machine

          

       app.use(express.static(“assets/images”));

       3. Can use a prefix to…

          

       app.use(urlPrefix, express.static(“assets/images”));

       4. Prefix example

       // using the static assets in the public folder

       app.use('/static', express.static('public'));

       5. Imagine project structure:  
          ![][image1]  
            
            
       6. These requests return files above same order:

         
          GET /static/css/your-style.css

* sends the **/public/css/your-style.css** file to the client  
* urlPrefix is /static  
* relative file path in the **public** folder is /css/your-style.css  
* **Note**: the relative file path **does not** include /public at the beginning

  GET /static/images/doggo.jpg

* sends the **/public/images/doggo.jpg** file to the client  
* urlPrefix is /static  
* relative file path in the **public** folder is /images/doggo.jpg

  GET /static/images/logo.png

* sends the **/public/images/logo.png** file to the client  
* urlPrefix is /static  
* relative file path in the **public** folder is /images/logo.png

  GET /static/scripts/hello.js

* sends the **/public/scripts/hello.js** file to the client  
* urlPrefix is /static  
* relative file path in the **public** folder is /scripts/hello.js

  GET /static/helloworld.html

* sends the **/public/helloworld.html** file to the client  
* urlPrefix is /static  
* relative file path in the **public** folder is /helloworld.html

  GET /static/prospectus.pdf

* sends the **/public/prospectus.pdf** file to the client  
* urlPrefix is /static  
* relative file path in the **public** folder is /prospectus.pdf

  GET /static/not-found.js

* sends a 404 response because there is no file at that the relative file  
* urlPrefix is /static path of /not-found.js within the **public** folder


  3. Create an assets directory   
     1. Add directories   
        1. Images  
        2. CSS  
           1. index.css  
        3. HTML  
        4. JS

## EXPLORING DATABASE ARCHITECTURE PATTERNS {#exploring-database-architecture-patterns}

### Naming Conventions {#naming-conventions}

1. Naming Conventions  
   1. SQL   
      1. lower\_case\_snake\_casing  
   2. Sequelize  
      1. UpperCamelCasing

### Pattern 1: One Database to One Application {#pattern-1:-one-database-to-one-application}

1. makes sense for small stand along projects  
   

![][image2]

### Pattern 2: Multiple Databases to One Application {#pattern-2:-multiple-databases-to-one-application}

1. makes sense when client side is requesting data from multiple servers  
   1. each server may have it’s own database  
   2. different types of data need to be accessed by single client side app  
   3. each set of data is secured individually   
      1. helps to control access  
   4. separation of responsibilities  
      1. helpful during maintenance or outage

      

![][image3]

### Pattern 3: One Database to Many Applications {#pattern-3:-one-database-to-many-applications}

1. common in large companies that host several applications  
   1. may be some overlap in the tables   
   2. some tables may be accessed by all applications  
      1. ie all share a common users table  
   3. may be less expensive and take up less physical space  
   4. flexible scaling  
   5. disadvantage is it can be difficult to maintain  
      1. must be vigilant about table naming conventions   
      2. ensure names are not duplicated to avoid migration conflicts

![][image4]

### Pattern 4: One Database with Multiple Schemas to Many Applications {#pattern-4:-one-database-with-multiple-schemas-to-many-applications}

1. similar to pattern 3 but adds a layer of organization  
2. single db   
   1. tables for each app are grouped within a specific schema  
      1. allows multiple apps to have same table names  
      2. differentiated from each other by schema   
   2. schemas are assigned names   
      1. contains all tables in application  
      2. two users tables:  
         1) Schema1.users  
         2) Schema2.users

   3. Many SAAS providers use this architecture

   

![][image5]

### Deploying to Render.com with Pattern 4 {#deploying-to-render.com-with-pattern-4}

1. ***Our portfolio projects will be using Pattern 4***  
   1. can host all on Render.com using free tier  
   2. can easily manage database for all projects at once  
2. Authenticate Me Project  
   1. implement two new patterns that will be necessary for deploying your project  
      1. Set up app to use a PostgreSQL db instance hosted on Render.com  
         1) for prod db  
         2) each db will have a name  
         3) PostgreSQL db default schema  
            1) public  
         4) will store all in public   
            1) unless explicitly create new schemas with tables  
      2. Implement some Sequelize configuration changes for PostgreSQL  
         1) configs  
         2) models  
         3) migrations  
         4) seeders

## SETTING UP A SCHEMA IN EXPRESS AND SEQUELIZE {#setting-up-a-schema-in-express-and-sequelize}

### Setting up a Schema in Express and Sequelize {#setting-up-a-schema-in-express-and-sequelize-1}

1. My projects will be deployed through Render.com  
   1. One Database with Multiple Schemas to Many Applications (Pattern 4\)  
      1. This will allow us to host apps for free

2. Changing from Pattern 1 to Pattern 4  
   1. Sequelize makes it easy to set a global schema with small changes to:  
      1. config files  
      2. migration files  
      3. seeder files  
   2. Sequelize will automatically apply the schema name when executing SQL commands and interacting with database in prod environment   
        
3. ***Note:** These instructions assume that your backend code is enclosed within a backend directory. If you are adjusting a project with a different directory structure, you will need to adjust the instructions and paths accordingly.*

### Step 1: Create a setup script that creates a schema {#step-1:-create-a-setup-script-that-creates-a-schema}

1. Add new environmental variable to .env file  
   1. SCHEMA

   SCHEMA=\<schema\_name\>  

   \# must be in snake case, for example, api\_project

2. Create script called **psql-setup-script.js** in the backend directory  
   1. Add this code:

// backend/psql-setup-script.js

const { sequelize } \= require('./db/models');

sequelize.showAllSchemas({ logging: false }).then(async (data) \=\> {  
  if (\!data.includes(process.env.SCHEMA)) {  
    await sequelize.createSchema(process.env.SCHEMA);  
  }  
});

2. Checks to see if schema name as env variable is already present  
   1. If not Sequelize will execute the SQL to create schema:

      'CREATE SCHEMA IF NOT EXISTS \<your-schema-name\>;'

3. Add a build command to the package.json file   
   1. in the backend directory

   // backend/package.json

   

     "scripts": {

       // ...

       "build": "node psql-setup-script.js" // add build script here

     },

   2. This build command will run the setup script that you just created  
   3. It will be run during the deployment process using the command:  
        
      npm run build

### Step 2: Define the schema in the config file {#step-2:-define-the-schema-in-the-config-file}

1. **config/database.js** or **config/config.json**   
   1. notice the keys   
      1. development  
      2. test  
      3. production  
   2. add the following:

   // config/database.js

   

     production: {

       // ...

       define: {         // define schema here

         schema: process.env.SCHEMA

       }

     }

   3. This defines the schema globally but only when app run in prod  
      1. in prod the schema name will be auto prefixed to every request  
2. **Note:** *You may not have a config/database.js file, depending on your project configuration.*   
   1. If not, apply this change to the config/config.json file, using json syntax.

### Step 3: Define the schema in each migration file {#step-3:-define-the-schema-in-each-migration-file}

1. In every migration file when running in prod  
   1. need to specify the tables should be created or revised within specific schema  
      1. Syntax varies if you are creating or altering a table

         1) #### **Create Table Migrations** {#create-table-migrations}

            1) Add to each migration file that creates table:

   // EVERY create table migration file

   'use strict';

   

   // NEW: add this code to each create table migration file

   let options \= {};

   if (process.env.NODE\_ENV \=== 'production') {

     options.schema \= process.env.SCHEMA;  // define your schema in options object

   }

   // END of new code

   

   

   // add options object to up and down functions:

   module.exports \= {

     up: (queryInterface, Sequelize) \=\> {

       return queryInterface.createTable('table-name', {

           // ...

       }, options);    // add options object here

     },

     down: async (queryInterface, Sequelize) \=\> {

       return queryInterface.dropTable('table-name', options); // and here

     }

   };

   *Make sure you make this adjustment in every migration file that creates a new table.* 

   *Pay close attention to where the options object is passed into both the up and down functions.*

 


         2) #### **Alter Table Migrations** {#alter-table-migrations}

            1) all migrations that adding or removing column  
            2) syntax different bc Sequalize needs to know which schema  
               1) add table name to options object  
               2) pass options object into the alter table func

   // NEW: add this code to each alter table migration file above up function

   let options \= {};

   options.tableName \= '\<TableName\>'; // define your table name in options object

   

   if (process.env.NODE\_ENV \=== 'production') {

     options.schema \= process.env.SCHEMA;  // define your schema in options object

   }

               3) in the alter table func   
               4) replace table name with options obj as first arg  
                  1) in both up and down

   

   // EXAMPLE up and down function of an alter table migration

   

   module.exports \= {

     async up (queryInterface, Sequelize) {

       await queryInterface.addColumn(options, 'firstName', {  // options object

         type: Sequelize.STRING(30),

         allowNull: false,

       })

       await queryInterface.addColumn(options, 'lastName', {  // options object

         type: Sequelize.STRING(30),

         allowNull: false,

       })

     },

   

     async down (queryInterface, Sequelize) {

       await queryInterface.removeColumn(options, 'firstName') // options object

       await queryInterface.removeColumn(options, 'lastName')  // options object

     }

   };

   *Make sure you implement this syntax for all migrations that alter a table, and use the previous syntax for all migrations that create a table.*

### Step 4: Define the schema in each seeder file {#step-4:-define-the-schema-in-each-seeder-file}

1. Make similar adjustment as above to each seeder file   
   1. Add table name to options object  
   2. Pass options obj to each func  
      1. defines both the schema name and the table name

   // EVERY seeder file

   'use strict';

   

   // NEW: add this code to each migration file

   let options \= {};

   if (process.env.NODE\_ENV \=== 'production') {

     options.schema \= process.env.SCHEMA;  // define your schema in options object

   }

   // END of new code

   

   

   // add options object to up and down functions:

   module.exports \= {

     up: (queryInterface, Sequelize) \=\> {

       options.tableName \= '\<TableName\>';     // define table name in options object

       return queryInterface.bulkInsert(options, \[ // pass in options object here

           // ...

       \]);

     },

   

     down: (queryInterface, Sequelize) \=\> {

       options.tableName \= '\<TableName\>'; // define table name in options object

       return queryInterface.bulkDelete(options); // pass in options object here

     }

   };

   };

   *Again, pay close attention to where the options object is passed into the up and down functions in each seeder file.*

   *Note: If a seeder is using the Model.bulkCreate function for dynamic seeding, you do not need to define the schema in the seeder file or make any other adjustments. This is because the model that the Model.bulkCreate function is called on already has the schema defined.*

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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OLAtBWbFgQwfPhyzkycnvl7iGUGdNm0ajP79+yPl1KlT4h+1dkVRFEUpIHkK6tKlS6lYn3766eLFi2218wKCypOxHTt2hC7eddddnnlvEz2jBHXzZvcTbHSoqqras2fPokWLWrVq5aVk0jOCumvXLs+MRMePH9+lSxcpMGrtSgZ+/PFHNMH8+fOxVS9fvuwuVkqSyyncBUosyPa3cZ0ykqt/luDvLI81NkhOzr65pQZ97Lx58zZt2uQua3nkKai+edeX3FLUuXNnnn31jbzxIVFqHhMfffRRenrWrUyw27dPfgzcS11DRTl0Y7rNu+++K4XA+aeffmK6lzp1jF2BSyGoPDNMh9C1K1FkeEJJKVluvfVWp9XAmTNnXL8UUc+nkfPnz3vm+XJ3gRLByZMn3a1vcP1Sj0i4qeYZDK84HRS/iX3kyBHfGro4tmA7NwhLsBk7dqzrlIIO586dcxc0I9ytmROXLl3CscmqVavcBWEcP378s88+y2Z3gc/BgwfdVAPkdvXq1RikRrXK0aNHQ+uT/doVnlrAAdMXX3zRq1cv2B06dHCdlBKDgjpixIi33npLjiAroz+jpoJaWLDFXjNwy19zzTWcdf2aQlDR9U2bNo0jEFaP6bYt2M4NwhJqa2t37949ZsyY0AIFLo3qupsHkcErLZPDhw975jMjnL2c/sjvJ598gp7i2muvxb+ODvfee2/Xrl0//vhjdL7PPfccbD499d1333U10K1z587IiINfyYhFb775JnJBCTD79ttv33jjjddff33//v2LdOKreUNBFYHcunWrZ07kcJA6depUbP82bdrMmTPHeeB7+vTpQQcRVMzecccdaCx5XT48kQLPfv36ca/wI5ovuLe0BCgbN998M2cROzYjNgI2NcWSgrphwwakIJ0PIPjpgvrVV19hY+Kv16VLl1TBie3ZyoCtjQGxpAMoN/96n3/+OQwOE1988UXY2AHGjRsHA1l4owkYPHiwn6oqVoEy27Zty/fTibNvXhVw//33o01Rz06dOp06dcpeqZQQOot9rH379u3atZObQLl0+/bt9up8K1juir65RQar3rRp0yOPPAJjxYoVL7zwAnawp59++scff6QPNixyoWLjx4+XoxD8C1AO+pngJooHFVTFRa5Ae6bDXbBgAdOZMnToUPxDaOO/Kp4Y12JE66XEuHv37kznOXz0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>