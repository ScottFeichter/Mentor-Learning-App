# REST and the Req Res Cycle

[RESTful Routes Convention	2](#restful-routes-convention)

[What is RESTful?	2](#what-is-restful?)

[Routes:	2](#routes:)

[Endpoints:	2](#endpoints:)

[Route Parameters:	2](#route-parameters:)

[Two kinds of URLs: Plural vs. Singular	2](#two-kinds-of-urls:-plural-vs.-singular)

[Resource:	2](#resource:)

[Collection:	2](#collection:)

[Nested Resource:	3](#nested-resource:)

[Record:	3](#record:)

[GitHub REst API	3](#github-rest-api)

[Rules of ReST:	3](#rules-of-rest:)

[RESTful vs other conventions	3](#restful-vs-other-conventions)

[Introduction to Servers	4](#introduction-to-servers)

[Traditional Server vs Web API Server	4](#traditional-server-vs-web-api-server)

[What is an API?	4](#what-is-an-api?)

[Application API vs. Web API	4](#application-api-vs.-web-api)

[Summary	4](#summary)

[Hypertext Transfer Protocol	5](#hypertext-transfer-protocol)

[Request Response Cycle	6](#request-response-cycle)

[HTTP Request Components	7](#http-request-components)

[Request-line	7](#request-line)

[Headers	8](#headers)

[Body	10](#body)

[HTTP Response Components	10](#http-response-components)

[Status-line	11](#status-line)

[Headers	11](#headers-1)

[Body	13](#body-1)

[HTTP Form Submission Request/Response	14](#http-form-submission-request/response)

[Submission Request:	14](#submission-request:)

[Server Response:	14](#server-response:)

# 

# 

# 

# 

# **RESTful Routes Convention** {#restful-routes-convention}

# 

## **What is RESTful?** {#what-is-restful?}

- REpresentational State Transfer  
- REST is a convention for defining endpoints


## **Routes:** {#routes:}

- ### **route:** a URL path for a request

- example


## **Endpoints:** {#endpoints:}

- ### **endpoint: a URL route with an HTTP verb (method)**

- example

## **Route Parameters:** {#route-parameters:}

## 

- **parameter:** a named segment of the URL path   
  - acts as a placeholder for a changeable part of the path  
  - they are used to generalize routes to a certain pattern  
  - they are indicated with :variableName  
  - /tweets/17            would get            
  - /tweets/:tweetId   to parameterize it

## **Two kinds of URLs: Plural vs. Singular** {#two-kinds-of-urls:-plural-vs.-singular}

## 

- ones that point at *collections of resources*  
- ones that point at *a single resource*

## **Resource:** {#resource:}

- The **resource** in the URL is the data entity or group of data in the server that you want to   
  perform a CRUD on  
- example

## **Collection:** {#collection:}

- A path that ends in a plural noun represents a **collection** of resources that your server provides for developers to interact with  
- example

## **Nested Resource:** {#nested-resource:}

- You can add resources to routes to create **nested resources**  
- example

## **Record:** {#record:}

- A **record** is a single set of data under a resource (row of a table?)  
- A **record id** is the specific identifier of a record in a resource (primary key?)

## **GitHub REst API** {#github-rest-api}

- The GitHub Rest API is thought highly of  
- [https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28)

## **Rules of REST:** {#rules-of-rest:}

## 

- Six architectural constraints  
  - Decoupled client-server  
  - Stateless  
  - Uniform interface  
  - Something  
  - Something  
  - Something  
    

## **RESTful vs other conventions** {#restful-vs-other-conventions}

## 

There are other variants or altogether separate ways to make HTTP endpoints

RESTful routes are one of the most popular styles for designing a web application

# **Introduction to Servers** {#introduction-to-servers}

# 

**A server is a hardware or software that pushes and pulls data across a network.**

Its purpose is to send data to a client by request.

## **Traditional Server vs Web API Server** {#traditional-server-vs-web-api-server}

Traditional Server

- One request for a resource, one response  
  - Request is either successful or failing and response sends outcome

Web API Server

- Similar to a library the functionality is whatever the API author has decided is useful  
- Some operations such as CRUD, are nearly 1 to 1 overlaps with HTTP verbs  
- Others do much more powerful things

## **What is an API?** {#what-is-an-api?}

Application Programming Interface (APIs) are interfaces that abstract away the inner workings of complex packages of code so that a developer can worry only about the input and output.

For example, when you call Math.sin(), you don't need to worry about the inner workings of the function, just the input and output.

## **Application API vs. Web API** {#application-api-vs.-web-api}

Math.sin() would be an application API

A web API works on the same principle but over the internet

- Most commonly used to store, share, and update data  
- Programmer uses documentation to learn how to access

## **Summary** {#summary}

You've learned that a web API is just what it sounds like \- an API that is accessed over the internet instead of by importing a library. 

Web APIs provide access to data and functionality without requiring the developer using it to know or understand the details of how the data or functionality are provided. 

They differ from web servers by expanding on the types of functionality that can be provided.

Web API servers only need to return and manipulate data therefore they do not need to return HTML and there is no need for \`GET\` endpoints for viewing HTML form pages on a web API server.

Web API servers are not limited to \`GET\` and \`POST\` \- a traditional web server is because natively the form method in html only can do \`GET\` and \`POST\`. 

# **Hypertext Transfer Protocol** {#hypertext-transfer-protocol}

# 

* 1980s   
* Tim Berners-Lee  
* World Wide Web concept

**HyperText** is content with reference to other content

**HyperLinks** are the references between hypertext resources

**Transfer Protocol** are the guidelines for the transmission of data

**HTTP** is a TP that defines the expectations for both ends of the transfer and defines some ways it might fail

- it is a request/response protocol  
- defines the process of exchanging hypertext between systems  
  - clients aka user agent (the browser)  
  - servers aka the origin (some application)

**Reliable connections \-** messages passed between client and server sacrifice some speed for trust to be sure each message arrives and in order

**Stateless transfer \-** doesn’t store any information

**Intermediaries \-** other servers or devices that pass your request along

- *proxies*: 	modify so it appears to come from a different source  
- *gateways*: 	pretend to be the resource server you requested  
- *tunnels*: 	simply pass your request along

![][image1]

The full HTTP spec: [https://datatracker.ietf.org/doc/html/rfc2616\#section-1.4](https://datatracker.ietf.org/doc/html/rfc2616#section-1.4)

# **Request Response Cycle** {#request-response-cycle}

# 

# **![][image2]**

# 

Browser role

- parse html, css, js  
- render info to user by constructing DOM tree

# 

# **HTTP Request Components** {#http-request-components}

## 

| POST / HTTP/1.0 Host: appacademy.ioContent-Length: 31Content-Type: application/x-www-form-urlencodedHost: appacademy.ioConnection: keep-aliveUpgrade-Insecure-Requests: 1User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10\_14\_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,\*/\*;q=0.8,application/signed-exchange;v=b3Accept-Encoding: gzip, deflateAccept-Language: en-US,en;q=0.9username=azure\&password=hunter2 |
| :---- |

## **Request-line** {#request-line}

POST / HTTP/1.0

\-  made up of 3 parts

1. method   
   1. http verbs  
      1. GET   
- retrieving resources from server  
- ie browser links make GET requests  
- will never have a body


  2. POST  
- creating new resources  
- ie submitting form makes POST request  
- body can have any data needed 


  3. PUT  
- update a resource on the server  
- will contain the whole resource to update  
- ie updating name will also contain user ID etc.  
- can have a body containing the data needed


  4. PATCH  
- update a resource on the server  
- does NOT require the whole resource  
- ie just the name no other account details  
- can have a body containing the data needed


  5. DELETE  
- destroys resources on the server  
- ie saved database records  
- can have a body BUT RECOMMENDED NOT


  6. CONNECT  
     7. TRACE  
     8. OPTIONS

2. Uniform Resource Indicator (URI)  
   1. Typical resources are users, posts, likes or root (/)  
   2. URL \+ URN  
3. HTTP version  
   1. Usually HTTP/1.1 or HTTP/2

## **Headers** {#headers}

## 

- key: value pairs  
- define metadata needed to process the request  
- key is NOT CASE SENSITIVE  
  - Host  
    - the root path for the URI  
    - usually the domain we are requesting from

Host: appacademy.io

- Content  
  - define details about the body of request  
    - Length  
      

Content-Length: 31

- Type: let’s server know format of request body data  
  - **values will be MIME types aka media types**  
    - [https://www.iana.org/assignments/media-types/media-types.xhtml\#application](https://www.iana.org/assignments/media-types/media-types.xhtml#application)

      

Content-Type: application/x-www-form-urlencoded

Content-Type Header

Any header beginning with Content- are headers that define **details about the body of the request**. Content headers will only show up on requests that support content in the body, so **GET requests should never have any content headers\!**

The most important header that you will learn today is Content-Type which **lets the server know the format of the request body data and how to process it.**

The values for the Content-Type header follow a standard and are called [**MIME types**](https://www.iana.org/assignments/media-types/media-types.xhtml#application)

[**Links to an external site.**](https://www.iana.org/assignments/media-types/media-types.xhtml#application)

 or **media types**. They define how the receiver of the data should format and process the data.

Here are some common MIME types for the Content-Type header of a request:

| MIME type | meaning |
| ----- | ----- |
| application/x-www-form-urlencoded | info submitted directly from an HTML web form |
| application/json | JSON \- data format similar to JavaScript objects |
| multipart/form-data | info submitted from an HTML web form with multiple media types |

See here for [MDN docs on MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

[Links to an external site.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

.

- Host (see above)

Host: appacademy.io

- Connection

Connection: keep-alive

- Upgrade-Insecure-Requests

Upgrade-Insecure-Requests: 1

- User-Agent  
  - displays information about which browser the request came from  
    - generally in name/version format  
    - this example has more for reasons  
      - [user-agent history](https://security.stackexchange.com/questions/126407/why-does-chrome-send-four-browsers-in-the-user-agent-header)  
      - [www.useragentstring.com](http://www.useragentstring.com)

User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10\_14\_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36

- Accept  
  - indicate what the client can receive

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,\*/\*;q=0.8,application/signed-exchange;v=b3  
Accept-Encoding: gzip, deflate  
Accept-Language: en-US,en;q=0.9

- Referer  
  - no example here  
    - defines the URL sender is coming from  
    - it does spell referer incorrectly 

## **Body** {#body}

## 

- any data that cannot go in the header  
- ie form data or a file  
- can be formatted in a few different ways:  
  - URL encoding

username=azure\&password=hunter2

# **HTTP Response Components** {#http-response-components}

## 

- HTTP response contains either:  
  - content requested or   
  - explanation why that couldn’t be delivered

| HTTP/1.1 200 OKContent-Type: text/html; charset=utf-8Transfer-Encoding: chunkedConnection: closeX-Frame-Options: SAMEORIGINX-Xss-Protection: 1; mode=blockX-Content-Type-Options: nosniffCache-Control: max-age=0, private, must-revalidateSet-Cookie: \_rails-class-site\_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnlyX-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20dX-Runtime: 0.006894Strict-Transport-Security: max-age=31536000Vary: OriginVia: 1.1 vegurExpect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"Server: cloudflareCF-RAY: 51d641d1ca7d2d45-TXL\<\!DOCTYPE html\>\<html\>......\</html\> |
| :---- |

## **Status-line** {#status-line}

HTTP/1.1 200 OK

- gives a high level overview of the server’s intention  
- HTTP version the server is responding with  
- Status Code: numeric representation of response  
- Reason Phrase: short phrase telling why


  - ### **100 \- 199 Informational**

  - ### **200 \- 299 Successful**

    - 200 Ok  
    - 201 Created

  - ### **300 \- 399 Redirection**

    - 301 Moved Permanently  
    - 302 Found

  - ### **400 \- 499 Client Error**

    - 400 Bad Request  
    - 401 Unauthorized  
    - 403 Forbidden  
    - 404 Not Found

  - ### **500 \- 599 Server Error**

    - 500 Internal Server Error  
    - 503 Service Unavailable (temporary)  
    - 504 Gateway Timeout

## **Headers** {#headers-1}

- key: value pairs  
- define metadata needed to process the response  
- key is NOT CASE SENSITIVE  
  - Content-type

Content-Type: text/html; charset=utf-8

- Transfer-Encoding

Transfer-Encoding: chunked

- Connection

Connection: close

- X-misc

X-Frame-Options: SAMEORIGIN  
X-Xss-Protection: 1; mode=block  
X-Content-Type-Options: nosniff  
Cache-Control: max-age=0, private, must-revalidate

- Set-Cookie:  
  - Sends data back to the client to set on the cookie  
    - Cookie is a set of key:value pairs associated with the server’s domain  
    - Needed since HTTP is stateless 

Set-Cookie: \_rails-class-site\_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnly

- X-misc:

X-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20d  
X-Runtime: 0.006894

- Strict-Transport-Security

Strict-Transport-Security: max-age=31536000

- Vary

Vary: Origin

- Via

Via: 1.1 vegur  
Expect-CT: max-age=604800, report-uri="[https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct](https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct)"

- Server

Server: cloudflare

- CF-RAY:

CF-RAY: 51d641d1ca7d2d45-TXL

- Location:  
  - Used by the client for redirection purposes  
    - Contains the URL the client should redirect to

  - Expires:  
    - When the response should be considered stale, or no longer valid  
    - Let’s client cache responses  
      - Save them locally to prevent having to repeatedly re-download

  - Content-Disposition  
    - Lets client know how to display the response  
    - Determines if it should be visible to client or as a download  
      

For a complete list see:

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

## **Body** {#body-1}

## 

- assuming a successful request the body contains resource requested  
  - ie for website an HTML of the page  
- format is dictated by the Content-Type header

\<\!DOCTYPE html\>  
\<html\>  
...  
...  
\</html\>

# **HTTP Form Submission Request/Response** {#http-form-submission-request/response}

# 

## **Submission Request:** {#submission-request:}

\<form method=””  action=””\>

- method: CAN ONLY BE POST  
- action: URL path of the request  
- Content-Type: will automatically be application/x-www-form-urlencoded  
- the body will content the form input data

## **Server Response:** {#server-response:}

- Server should parse the body of the request  
- Do some CRUD action with the data  
- Redirect user to another page  
- Components of the response typically are:  
  - status code 302  
  - Location header \- path to redirect the user to  
  - body \- none

Here's the flow of how a typical form submission goes:

1. Form is submitted  
2. Browser makes request to the server  
3. Server parses the request body and does some CRUD action with the data  
4. Server sends a redirection response  
5. Browser receives response  
6. Browser redirects user to the path specified in the Location header of the response

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAADXCAYAAACalWzcAAA8+UlEQVR4Xu2diZt0V1X1+Yu+welTAUURUGQQFAERUGRwYFBBEEQCERMEZBJChIAMATQgEEUIhBBAwDAkCBiBEMIQwmgmEpKQl6S+rHp7da9evW/d6u47Vq3f85znnrvPtM/e+5x7uqa+0yKEEEIIIcyKO7kghBBCCCFMmxzgQgghhBBmRg5wIYQQQggzIwe4EEIIIYSZkQNcCCGEEMLMyAEuhBBCCGFm5AC3Jjf+4CYXLfmvz39x8e//8QkXd8p3v/c/i2uuvW73/uabb1m85/wLF9/57vekVn9wvL654qtfd9Hk+PDHPr649AuXLfNfu/IbVrqa22673UWdg1j5/g03uHgfn//il1y0kuP4/7/vGOvDH73Ixfto0he2DiGEUDPYAe7FZ7x68b/ufA8XLx7yqD900ZH4vz/3yy7qlNe9+ZzFLT/8oYsXf/WCly4e8NuPdnFnnPr8lyz+5+pr9sm++a1vL235gQ9/dJ+8S9D/D246eWjleH3z6Cf+Wesh7tcf8djFh1oOBH1y/9961OK0v/27xbe/873F4/74aV68kv/45MWt8zsuT3/O6Yu/e9U/uHgfz3/pK1205P0f/HcXLTmO/09/8SsW933I77p4l9tvv71RX9i6C5rmFUIIc2ZjDnA/c4/7uWgQ+j7APeiRj3PRxh7g1uEnf/E+kzjAzZmmA9xrzv5HFy05jv/bDnCr6OoA1zSvEEKYM4Mf4L7wpS/vS7/2sN/brfOL93vw4l3vvWDxwY/8x+Knf+nkgezcd79v8ZO/8KuL17/lrcv8C172ymW9a6+7flnvk5f852578NuPfeLie1dfvfjWd767vDrPOu2Fy7c9f+sxj1++mgP+8q9fsHjaKactPvNf/718O/TBv/sH1mqxeNErXrWbhw4vf/XrFl//xlWLn7v3r98xh5MHOMihv+uGV5Y+9vFPLf7ir56/nIuDV9ie8pfPXdoDr+rgkAI+d+kXFvd4wEOXbS/+z8/t1ucDFXb40pe/srQtxgOP+P0nLX7jEY9bvnX1nL958e4rky898zXLVzsA+v+xn/+V3f5gM+UrX7ty94CIt2k5HuyP8ZDHeHhL8KG/90eLj33i4uWcz3rDW+64nnyr90l/fsrS/m/4x39eXuk396+Cfr/xzW8t8//nrvdcPPxxT1ra4PF/9sylja6+5tplnb//h7OXNgFqc/QJmzNmfucP/2SZ/+Gtty7vX3LGWUs7/Ny9f2P5liBs9MSnPWv3FU78EYBYwKtrf/KM5yxlsBn+yHjbuf+2uOqb375Dr3st/vqFL1u+rchDDeSw+Ve/fuUyTs+/8MNLueuAtwR1fv/wpnMWX7js8t018NGLPrn0yw033Lj4+Kc+vZQpGO+BD3/M0t44FP3uH/3p4vIrvrr41/POX7zg785c1nnoox+/jDOA8c94zRuWsYM45Vu+8P+Zr33j4rLLr1jm0fY/P3fpMvZgV9qW0P//8p73LWMUur/hLW/b9T9izv1P9AAHW/z96960fEUMPiDUF7a+94MesbT1a8/+p6WtHdSBrT/56c/si2/wmje+ZTePPmELnxf99o9v/5fduiGEMEcGP8D9wn1/c1/iBoyH6NnnvH23/ukvevnyioef/vWPTV3r/dmznrubB3f55Qfsu2/iXee9f7dfPLQVyPEQVXiAu/77Nyx+/G57hx++Agf9/YHjuuFgUL2SgQcoHvBgedjYOcCB+z304KsXfKC+7wMnDwq33Xbb7qsqkH/x8i/v1sXhEeBzT5+99PPL/IN+5/cXj33Sybf/vvc/Vy/+913uuVufoJ+mV+Du+isPXI6Hg4rP55x3/Ovyqgde4H6jfxU9wCHPwwB056uNkPMVOLc5+oTNGTMXyCuUeOiDW289sfh/d7/vrhyfZ+Ph9xfv++BdP2BsvN2JQ5fOka/A6QHOwdvewHXQA9wf33HAJTzwvemcd5QHW7Ls70MfWeZfdcdBSMfnHx16gMPa4nzwhwvRVxBxgEU8gGc+92Q7x/2PQxvsQP/jEErof9L0Ctwpp//tbp76wj7vveCDu/LqFTj4qopvUB3ggM8L6wBrJoQQ5szgBziHb6Hi80HY6PGgRcLDFPgBDnmt97DHPGG3DLz69W9ePsx0M1fwFzweOH/78lft9lsd4PigJTyQfPqzl+7Thwc46A859XLd0B9eWcCrF87vPeEp++7/4E+fsZtfdYDTt1D5EPQDAN4+4ofE8eoTwCslb71DF4AH7s//6t6rIQT9Nx3gYF+Mh88u4ZCgc8arXACHQtTjq6DuN/pXUbsjz0M0vkDyjnedtyvnAc5tjj5hc8aMHsJ5SAH3efDv7OZRB68sgZ+916/tm8tHLvrEMp7UZ6sOcBd96pJlX3g1FbgOPMDhUPVLv/bQ3XHu8+BHLvvDFxB+5TcevnjGqX+zHNtRn//b+y7YNz7aAT3A4Q8NHLJwGNXDkL6Fij8e7vXAhy3zftAh7n+sHfS9yv/ED3CY+3nv/+DiCU/9y10Z9YWtr7v++7vy6gCHVw4Vje91D3AhhLAJTOYAh1e23vrOd1npwQMcHhhVPQdfOHjla96wT4ZXbPhtOj2IHeYA5w8ztMUBDvo3fZEChzyib10SPORuvPEHy/yJEyf2HcIOe4CDXL8V+/t/+vTdPMrwFhbBAxj64ODhoG7bAQ4HqcqnCt4Chh/W8ZvaXQ8/TQe4Jpsf9QCHgwxeoVM8/nBQ8gMc7rX/tgMceOopf70rr3jz29554FUi9fk6Bzi8bXrJZ/beeifHPcDhbU68HUr/r/pihh7gcOj75re/s8zjsEaoL2yNt6MB/tDinBS8/doU37rOnn7q83KACyFsNJM5wAE8cPCAwmd18Fc+8Aco5KiHhzrq8eEL8MDjoQ0PFX37CuDhib/+AT5XxX4Pc4ADj3r8U5Zvw+DBhldt+Bk46Ab9XTc+WF72968tX4HDQ+2PnvIXy88qPfmZp+47lBz2AIcvPeBACf1hc32791d/85FLfcnP3PP+y1ff/KAA0D/ersOrN/4A5wEOD1l8lhCfKbzp5puXNsHbW+jvyqu+uayLz5XBD/Sb+1dRu+vhRw9w6A+HDj7o1ebIw+ZHPcDBHn/+7NOXMvSJOSEPm0EvfGYMb7/6Z+BgC9gd9sAfCOsc4PAKJb7ZjD8qcFgDn7j45Of3YD++Dasc9gCHwzPe7v7jpz97qTNpOsDhUPW1K686cKCn/+E3zAd5vJVJ///mHfGg/leqAxzetta4pr7o+w+f/IyljfBtWn2rm8A2iO93n/+BA/GNj2Tg84H4WMBP3f0+uwc4nRd0xmdfq4NtCCHMicEOcIfBXwWpwIemm+rhw+5Nv7mFV5X8g9ZHAf3wSwGO64ZX1aovVDj8vFIX6MHhqPBVwTZga/xOndoctoEfKpr8ti633HLLAVvB5l2hb+ORpt8BJJiv67QOOPg4bWOtix7agL/9WIFXNVfRFBPu/ybWWXvrzL9pLOhflem82uYYQghzYJIHuBDC8bn7/R+yeO8HPrT8EgjeLueroiGEEOZPDnAhhBBCCDMjB7gQQgghhJmRA1wIIYQQwszIAS6EEEIIYWbkABdCCCGEMDNygAshhBBCmBk5wIUQQgghzIwc4EIIIYQQZkYOcCGEEEIIMyMHuBBCCCGEmZEDXAghhBDCzMgBLoQQQghhZuQAF0IIIYQwM3KACyGEEEKYGTnAhRBCCCHMjBzgQgghhBBmRg5wIYQQQggzIwe4EEIIIYSZkQNcCCGEMGN+7C+ubkxD4+OPqcumkwNcCCGEMGP8oDTmocnHH1OXTScHuBBCCGHG+EFpzEOTjz+mLptODnAhhBDCjPGDkh+aXNZXahsrdEsOcCGESXDuxbcc2PCHTnc/7ZqlHiHMCY9jTW3lXaa2sUK35AAXQpgEvtmPmUKYEx6/Hssu6yu1jRW6JQe4gpee94PFg1523YHgGzr91LOuXurxrWtvcxVD2Dg8/odId33+FYsnf/aVi0d/4G375CHMCY9rj2WX9ZXaxgrdkgOc8PZPjv8WzqoUwibj8T5EwuGNSeUhzAmPa49ll/WV2sYK3ZID3A54lQuveHnATSnllbiwyXi8D5HwylsOcGHueFx7LLusr9Q2VuiWHOB2wNumHmxTS9AxhE3F432IlLdQwybgce2x7LK+UttYoVtygNvBX3275sbbvcooQA/qBB1D2FR8sx8zhTAnPH49ll12mKSvUPt4/up121ihW3KA26EKNPycAH5WwMuGSPpTBioPYVPxNTBmCmFOePx6LLvsMOkhbz9/mZA/56KTzyWW4fDGMqS2sUK35AC3QxVoLhs6VbqFsKl4nPt66CtVY4UwJzx+PZZd1kd6+BnXt44VuiUHuB2qQHPZ0KnSLYRNxePc10NfqRorhDnh8TtmLPv4Y+qy6eQAt0MVaC4bOlW6hbCpeJz7eugrVWOFMCc8fj2WXdZXahsrdEsOcDtUgeayoVOlWwibise5r4e+UjVWCHPC49dj2WV9pbaxQrfkALdDFWguGzpVuoWwqXic+3roK1VjhTAnPH49ll3WV2obK3RLDnA7VIHmsqFTpVuYDy9/302L13/4ZheXoB7qf+LLt3rR1uBx7uuhr1SNFaYB1gPWxqXfOOFFB0CdbV1DHr8eyy7rK7WNFbolB7gdqkBz2dCp0i3Mg/M/98ND+Sw+3m+DdR7YXYGxmtZeGA9dQ/96yd7PKjWBOtvqP49fj2WX9ZXaxgrdkgPcDlWguWzoVOkW5sFHvnjrrs8u/86PvHgfKI+Px19vmsL46Bq65/Ou9eJ9YA2hzrb6z+PXY9llfaW2sUK35AC3QxVoLhs6VbqFeXDiR3t+e/NHV7+N+qY7yln3MWed/C2lbUTjPK/ABawhrId1fLLta8jj12PZZX2ltrFCt+QAt0MVaC4bOlW6hflwl+ec/C8eP33KNYtPf7U+kFxyhxzlqIf6n/16XW8b8Dj39dBXqsYK0wDrgT5pWkNg29eQx6/HsssOk1b9K63q3ttrCt2SA9wOVaC5bOhU6Rbmw5PfdMOu38684CYvXnLm+2/arYP624zHua+HvlI1VpgO9EnTGgKss61ryOPXY9llh0mr/pUWgEzvvb2m0C05wO1QBZrLhk6VbmE+fPV7P1rc+/l7n8v50OcPfjuOZaiH+tuMx7mvh75SNVaYDm1rCDKWb+sa8vj1WHZZHyn/Smt4coDboQo0lw2dKt3CvHjO22/c9d3z3/UDL94te/Y/3+hFW4fHua+HvlI1VpgObWsIsm33m8fvmLHs44+py6aTA9wOVaC5bOhU6TZFrrjiCheFHd7zmb2fQvj1l1y3r+w719+2W4Z6Y3HNNde4aBQ8zn099JWqscZiKr6YEm1rCLKx/QbG3Ac9fj2WXdZHyitww5MD3A5VoLls6FTpNjUuuOCCfSkcpMl/z3zr3isLYzEl/6mdtvFbqFPyxdR40bvrV9l0DaHOWIztO49fj2WX9ZXaxgrdkgPcDlWguWzoVOk2JfBqgW9ceQXhIOq/y7998jM6uN5jAr9bNSX/efyPmcZgSr6YGh+9TH5XsWENoc4YTGEf9Pj1WHZZX6ltrNAtOcDtUAWay4ZOlW5To9q8kMIeZ124903TJ77h+0sZrpShfCym5D+P/zHTGDT5YujDwFShb6a2hkCT74bC49dj2WV9pbaxQrfkALdDFWguGzpVuk0R37Ty0NnP5648sbjLqXu/CXfJV+S33+6Qf27k362qHj5j+M/jf8w0FpUvhjwITJmmNYQ09hoC7rMh15HHr8eyy/pKbWOFbskBbocq0Fw2dKp0myp58KxGfyvpkWfu/bo8f1dpbJr8N9QDCHj8j5nGZAq+mCJNa2hsfylNvusbj1+3jcv6Sm1jhW7JAW6HKtBcNnSqdJsy1ea17Q8d8jX8JtwL9j6vwwT5VKj8N8TDh7htxkxjM7YvpkjTGsLvxE2Jynd974NuE49ll/WV2sYK3ZID3A5VoLls6FTpNnWqzWvbHzzkPPk5hKn6s8l/fT+AgNtmzDQFxvTFVKnWEGRTo8l3feE28Vh22WGSjqF5JP03Wyz39lVfoRtygNuhCjSXDZ0q3eZAtXn18dC5+dbbZ5XwWbhXX3jT8n864vqWj63+J/djUfmvz4cP8fgfM02Fvn3hMTr1VK2hy741nVexlcp3feyDwOPXY9llh0l465pvX/u/0sLhjf9mC6ltrNAtOcDtUAWay4ZOlW5zwTeuLjevt338lsWdd/5R/NwT5jJF3Hdd+q8Jt82YaUr0cRDYpDWEeUwV91sXvqtwm2hqK+8ytY0VuiUHuB2qQDv34lsWdz9tnE0OY1e6zYnqwYN0XNxWc09TpS//NeF2GTNNja594fOde5oyXfuuwu0xpm18/DF12XRygNvhp561P9CuufF2rzIK0IM6Qce+wb+D6TL5poV03L9AfVOYe+oSt/9x0yWXXNK5/5pwu4yZusLteZzUpS98vnNPXeO2P25yvx3HdxVuD7eNy/pI+Vdaw5MD3A4vPW/vX7VMNUHHvvFNpq90nM3L7TL31CVu577ScfzXhNtlzNQVbrc+0lF84fOde+oat3Ff6Si+q3B7uG1c1ldqGyt0Sw5wO3zr2tsOvAo3tQQd+8Y3mL4S/io9Km6XuacucTv3lY7jvybcLmOmrnC79ZGO4guf79xT17iN+0pH8V2F28Nt47K+UttYoVtygDPe/sm9H4ucSsLBEnoNgb/0f9zkGxbScf/qdPsMmR77oX9afvPq5194+YGy/77q5LfhHvaK/T8yirqr2nWJ2/+4qcu37dpwu4yZusLteZzUpS98vkMmrgVcvaxpDWm7vtcQcNsfN7nfjuO7CreH28ZlfaW2sUK35ABXgLcqH/Sy6w4E39AJBzfoMcQrb33Q14d33U5DJv7u0WMuPOdAGfns10/sk6PuOu2mRl/+a8LtMmaaGl37wuc7ZOJa0N8PYyK+hrTdnNYQ6Np3FW4Pt43L+kptY4VuyQEu9ELTptXFX52+KQyZ1nn4uI7apq3dVOjTf024XcZMU8P9cFxf+HyHTOuuBS9bt92UGGoduT3cNi7rK7WNFbolB7gCD7qx05kX3OQqTppq0+pyw3L7DJkedf47Fn/y6Vcv7vy8rx0ou+hLty5/bPT+L9r/6i3qrmo3NSr/IfWN22XMNBX68oXPd8jEtYCrlzWtIW03hzUEKt91uQ8qbg+3jcv6Sm1jhW7JAc7AYUkDDr/2feuAP/R9++2LxbmfOvg5vLkc4qpNq4sHjuK2mXuaEk3+6+vBo7hdxkxToE9f+HznnqZGk+/6wu3htnHZYRL+0wL/2wKu+goo8vlPDOORA5zgwYZ/2/K8fxn+50Xu+8JrF4896/sH5FOn2rS6eNg4bpe5p6lQ+a/Ph47jdhkzjU3fvvD5zj1Nicp3feyDitvDbeOyw6Qc4KZLDnA7+CtvSPhvCC4bKn3luz9a/PQp+/8LxGPOOvlDiVOk2rS6fOAobqu5pynQ5L++HzyK22XMNCZD+MLnO/c0FZp81zduD7eNy/pKbWOFbskBbnHw8PbQl1+3uO221YE4RLr0GycWz33njQfkU8M3q64fNs49Tr/2gE3mmjCXsakeOn36rwm3zZhpLCpf9HEA2KQ1hDQF3GdDriO3x5i28fHH1GXTyQFucTDg/uvKE4vTR3jr1NNvn3H94kfFQXJKDPXAUd7zmR8u7v2Caxc/++xrZp8wlzEZw39NeJyPmcagyRd9HAI2aQ1hHmPT5Luh8Pj1WHZZHyn/Smt4tv4A5wF26jtuXPzEMw8G3pjp9f9+8wHZp6641acyONUPVPbxsAn9MSX/eYyPmcZgSr4I6zOFfdDj12PZZX2ltrFCt2z1AQ6HIA0uvHWKb4F60I2drrrmtsVT3nTDPtkUPg9X/dUZ5sWU/OdxP2Yagyn5IqzPFPZBj1+PZZf1ldrGCt2y1Qc4Dy585uy0cw9+5mzs9PjXfX9x9Q23H5BP4adF+Ncn/s3P0H91huMzJf95fI+ZxmBKvgiHY2zfefx6LLusr9Q2VuiWrT3AeWB9/qofLX58Ym+denrZew9+Li+ETcFje8wUwpzw+PVYdllfqW2s0C1beYDzt06R8IUBl00tgbueOp+fFgnhMHi8j5lCmBMevx7LLusrtY0VumXrDnD+kyFM1990++J2rzwxXvyeg6/AZWGETcFjeswUwpzw+PVYdllfqW2s0C1bd4DzgNqUFMLc8ZgeM4UwJzx+PZZddpi06j8xgHMu2vvB+7axQrds1QHOg6nL9PoP37w45Z9vbExnXVi/8tdlmsJPi4RwVDyex0whzAmPX49llx0m5QA3XbbmANf01mlX6Wlv2f8zH56e8PqD/9u0jxTCXPFYHjOFMCc8fj2WXdZXahsrdMtWHOD6Prwh/dYrVn8J4oEvue6ArI8UwlzxWB4zhTAnPH49ll3WR8p/YhierTjAeRB1ne7zwvX+r+ADXtz/IS7fSg1zxWN5zBTCnPD49Vh2WR8pB7jhyQGug/QHr13v7VH8IK/L+kj5LFyYIx7HY6YQ5oTHr8eyy/pKbWOFbskBroOE/5/qX1qo0nPfeePizs/Z/ztufaQQ5ojH8ZgphDnh8eux7LK+UttYoVu24gCHtxU9kLpM9/qba5dvo7Yl1PO2Xae8+hbmisfymCmEOeHx67Hssr5S21ihW7biABdCmD6+2Y+ZQpgTHr8eyy7rK7WNFbolB7gQwiTwzX7MFMKc8Pj1WHZZX6ltrNAtOcCFECaBb/ZjphDmhMevx7LL+kptY4VuyQEuhDAJ7n5a/1/wWSdBjxDmhMewprbytoT/tMD/tuD/iQF5/pcGpLaxQrfkABdCmATnXrz3L3nGSji8QY8Q5oTHsaa28rakY+DA5gc4/9da3r7qK3RDDnAhhBDCjPGDkh+aXNZXahsrdEsOcCGEEMKM8YOSH5pc1kfKf2IYnhzgQgghhBBmRg5wIYQQQggzIwe4EEIIIYSZkQNcCCGEEMLMyAEuhBBCCGFm5AAXQgghhDAzcoALIYQQQpgZOcCFEEIIIcyMHOBCCCGEEGZGDnAhhBBCCDMjB7gQQgghhJmRA1wLd7vb3RZ3utOdlomccsopy6SwnuaZcA+Q13a4v/DCCw/Upzx0R+UPL4Nc/aO+qfwGIG/q29uFGo99tSPyhLYG7ivc0ydudy/zcZgP+9HY9/3IbeZ2ZTtfH5oA+vV+1He459i6x7LM64eT0K5Ivie5D/z5Q3t6W8p41eR9sF7ol1h5BRrMutFwY1J0c/GNhnhgI68boz5oQressv0qOf3sPmW9w8RIWA3s1/TAALCnrzHWrw5pTWWOx0ZYHfssdxnlGvfIu0/ZH3xCn1b+YZmWuy+zxg6i+xDv6YPKZu5f1qlsz7YqJx4TVZ3QLQdXYNjFg515XFctAl8QBDLfgDTAtSx0S7W56GakcvgASeV+T1+6n+lDj53QDuzmD3u1Lx8qgLbXe11Xq8ocrRsOxjplCuO/kvue6T7V9eH96LjqR/bJGMF91leN2tep5L6PsQ7l9J/XqXzvdXys0C3ZtVZQBSmoNg9dBBr41ebEwPb+qw0xdAM3Fyb1n8q5WfFBoejmRP95HAD2FQ7HujYHXCtci77OVpVxXeqDKf7aA7aiPZhX+7g9mee9rgn6jPZmGftke5axnO3oPx3f9Qk1tKH6SH3B+Kd9va6WsS/i/WicVP2EfsgqWIEHIfO60RDdZHzDIZQ1BblujKFbaG/4zW1MP3BTArwn1QZW+ZBl7CesD+zodmvyga4V94Pn/d5hnXCSVbHPMj64PdZxr3sj8u5ToIcGwH7cbzqOtw01sCHtCNQH7h9Ae9K32lb9pDb3epSx//hnGGLlFegmooHPAOXm4puMbmxIbKdBrYtGZb4oQjf4BqRQzg1M5bohcRPUDYp11G9aN6wPbOh2o331QQJ0rfha0nxVpmuWvnT5tkO7qH2A5gHtS9iGVHsl4FrTvXFVP5W/Q43aFolxDjzWgdsTedpay9Uf7lPWYT/UQfsJ3ZNVsAIEHzcgDXCV6YJgHQ1mlgHtowpw3aRCt7gPFZXrZsfNT30IcK91qnK9D+uB2He76VrT9eFrRdeS5n2dsS/t02VIYW8f45qo9kLd9wDyXBtA23hb5NWfLKPPFMgYGz5mOAhtSP+RyhduT2/j5cD78T5Zx9dz6Jasggbe+MY3Lp761KeOls4++2xXKRyREydOHLDvkCmsxu01hbTNuC2mns444wyfwlbj9hk7hf7IAa6Byy67bPQUugEHOLftkCmsxu01hbTNuC3mkMIebpuxU+iPHOBCCCGEEGZGDnAhhNmgn68KYdNJvIdVbOwBzgOfH6btCn6wE/3yg7hDMORYc8A/JOt+Pw76wdyj9jtnf1UfJldQPvT8qE+bPw6jF2KI6TDtNgn/IPpR9rZVsQKO0zc5Spupw2eTJ8zV97cm2taijtG2dsCqviq0/6Nw2PHCSY5m7ZnARcDgUnwD0TwDnFcPLl0AKNO+OZ73TbnWaSpXGUEZEr8RpvX0nmNr202HmxzmXvlCoV20rMlmes8HPEEb94OW4Z6HfC3TcXnv404F6EV7Uk/VnTZRWWUXb8ur90cZksN6qg/xfnDvDyqvo3Klmg+hbt6Py7wN7l02ZVQ/5iudm+YNuZcBX5t+733p2LRhm19Vh7nhNgH8o8JtSVk1T8hcjrq6f1X7kua5DijneBXuk1V+pW6QUU7dvJ7eI8+2YY+NPsDpA4bBgABgwHmgEcpx9cDScsK2uLK+1qEeHFfvAWW8sk2ls+vjOvr9NsDNSDcSXFf5mbYEKGcfit6jvvat/qOMsC8fu2pHf00R2hQwZtVuGtOgmp+241xZx/sDlKs/VMa+1d7eTxULOq6jfRHtQ8dUf2ksIXkbjQG2qeY3NVQv5CvbqYz2Y7nLidue9xyDdmSZ2pf9sR6gDt5O68wJxo+idmYMUU67APUZ2yi0HUGebdyXbmfW8T5ApbP7jX0DHYcy5jke71U2Z7/2yX7LbyDudA0KwGDTBcDA8sAk68o1IIEHOxeD6qMLpWqndZFn0kWhc9kWmuzFe/czbQzcb4SbiNqU9iaVD1nf/UYddWxtNzVUf924fU6a5/zc3qCKfZWjrtqHSW1UrQO1NcfTPrk22G8FylgPVG10TNbxq7bhvc/V+5ka6jPNqy/U124H9xlBuSaVa959qWOoLV0Htpsrlf4eO7xy3ixv8hnRusB9hDaMWeD+Q7n7hXLXmbieTOxb+6l0Q9I5h4NsvFU8mD0QqmBqCxqXa3Ar7FvH0DoMWpYzj+SBXi0sXRSs7wtsW1C7YP66IVCmV9oYuN+I2pF53/gqv9AH7jfkfRPTdlND9Vd76pwor2IRqA2r2Fc56no/69ibdTT2tU+1u47raB9VG/cV5KhLubehXjom7pnUNlNC9dK8+sLnCTRW3FbAfeJ5wLbqS96zXOtq8r7mRqW/zpdlHmdo1+Qz4nFIO3NMtTvrK5VfANu7DLie1IF9axvXTRNwu4STbLxVPJibgk1lulAqNNhAU30Gqgas1mE/ulhQzkBnubbTuq4H8PltC2oX2ot28DLK2jYHtSPrql+A+xhwbPWb5hVtNzVUZ52zxmKTXYjasIp9ldNmivfr66CyO/Ogye6kGg99VuvIfUXddMyqTWUXn9eU0DlonrZh3tFYcVsB9z/rqJw2VFvSH0DHXaXDHOG8lSr2vQ5o8hnxOKR9IacfdHz1n+Y9xt1XrMOr66J+17JN9mufbLxVPIAANwQNFMqYwKqgYT3dwF1OqgUCWAflyKNM66qebOcLhuOxnZZtE5y/Qrv5xkUZ5U1+Vjuq76r4AexbfaDxwT50vErvqaBzdhtqudtF56c2VHnVH1Dbsq3KdM0QLaOcbYDq6T4DGieqr/u58pX35/rjXut4n1NEbaD5yr5IlNHeWk9RPwOPAS2n7Wgr9yVYpcMc0bkRt5HmNY6afEbUVh57LPPxKWMe7Zp8q/0TtNW1BbS96sm2kG2aX/skVpkA1YII/VFtcCGEEMKcyAFuAuRAEUIIIYTDkANcCCGEEMLMyAEuhBBCCGFm5AAXQgghhDAzcoALIYQQQpgZsznANX3Qv/oGZ1Pd41KN1YTqgDy/Ht2WvO6m43binH3u22KPVYxhgypuh/hK/6p5riojXemo8cl7jVPg9mmj6acYhsTnRVwvvz8MU5gndGia65B4jCB1FaNHZQp2acJ/HqXNVvqTJ9vEaqvMADpNN4omRzbJ1+Uwm5EGnC9cbmyVzOv7b/YMAfUYAp0f5wzcV1PZiPtiHZu3bWJ9AJtDN/4mE+6H0GOVPbysig2v0xUcS/tHXtMq1qkzBK4/wLzcjofdf3R+Q8RJG1PQAdAuTLDzYW3bNe7rKUG/0VZtfmwr31RmMWtuCLj6X3XcTKtN3A9FWsf74b0GAhcZ26Dc63g/wAPusH8d+OFPwXhc+K4P8ixnuyqwXWc+nCmvbNkXTXZyP7Gez0/rKLhXG9AnLgda5r6q2qmdeI+Eeq4v63l9gv61b5bznu3ULjrOEKjugOOrjPqo33TeWuZttC7rcG46FmW4sq76R2Eb6shxvB7wsYnX9Xudv5cR71t1mgrUB1foSVvBrrruKAfM+1woQz9s42vB1xjbqZ08xtmW+rEO0LG8rt6rbAyoH/F1RD05L4VlVR23nc+V46of9J7rh35hXq+E47vOuPr4Oh77YF2ifRH1J6+a13Y+R7/fdA5GygShM1Y5xYOzWqgadIT1mhxf9demD+S6OHWxVXo5XEhIHtzal25gXuaypvnpGCzTfvoEYzfZCaiuriOgjSo4L9SnP3R+HBtATh3cPtpO++M961AXj0PtT+sD6q5z8PGre25cTXPvGp0z74HPA3COlKlPPZZX1XH7qY0Jy7xf4DrqGE12c7nOGXh86rirdADu+zHBPBnvSG4j9WsV85SDVTbyNupDtxfr0gfeb2VL7R+saksdWGcMmuZczUf11LzXqcpI1S9QP6M979VPbMM6xPus1hWv2h9Q/byugnqa0A/zWge4PuxvCutsCGYxy2pjAeo0d6Q7FHigMhEGi1IFny4E74PlVbB5vpIhX9UBOk/mdR5aBrQvXtt01n76xufqPlQ9KNP5kiaddSPScsq1DHlf9FW/Wof2V719PK1P2/s8edU6nJ+PT1hvCJrG0nlQZ9WddSq55nX+zHv9ah1W9gNN7So9KAcqBx4Pfq/tvAxU8dvkzyFRe0H3Ko55ReL6cNtpG6L3rEvbNMUCcV9oPV9H1BHl2q/XVZrieChUL9VD7a3z8HLmWQdJy4CWsR+Oi3tdD5pYD3XoQ80rKl+lj/YN3P9aprAe9aG/kQfaB2XaVuNj06kjfWKoIwGdwyvKGFC8el2to4GgdYAvMt18iMs8iHyj8CB2tBz5puDTsmo+TXOu5sE2LGffVb99wbEJ9Vb9eWXey3QjcSqfVfP0jUvxdmovbhQcW/NVzCL5uEDHddt7PLIcV47VN64D4fiU8ap6VTYFWkfz2r9S+dnHJVXfblfSJAc6b6B1dV4Yo5qn9kk9VLexcN01abmuC5Qhzzqcm8/b7wHtyKvbWu+Z93HUFxjD70FVl/qDIdeMo3oA1cPt7jpqO6/jtnRQrnZnO1yR0J/bzfcshXXVpirX+jo27/XaNAfXw8dSqrau8yazZ92wMVSBfliqxTs3/AE8NJtgwxDCdjLU/tnlONu233ZnuTAZulgQ/pfNnIDuY/61Taagw5yBH2G/Lv4gCSGsB1/FGmLv4hrvgq76mRPHf9KHybGNgaxg/lM4gG67H7oAfpyCL0PYFua45ro8CM6JHOBCCCGEEGZGDnCL7l4p6aqfTecof92xTZuN13m7zd9iXuevN9RZp+8KH++oQEfXgXrjinQU2x4Hjnscmv7i975hx3V81UYXfUwNj4t1OMyaqvyjVDHe1i84it6gTZ/D4Dpo3x6DcwdzqXx1VFbZp8txQs3GWVgXX1PeZdU3ZTwPqkCFjBsAHzCK36vMr8oqPSg7bB3KxgDjwlauM22q+eq+oipv8wH95XroVYGMuvh4VX3ANoTzbpsf23l73lefqeO9yvveODGWxnyF6t927/4AnA/k9CnHZF1cvR3lvK7q220JUFfl1Rgu0/Fc7rKuga7oX/2gttPDCe59bqBp/yOVj31efghytK62dR+4jor2wXl7XZ+fjqXt9d774FxUXtmgT5p09vnxqvPUcpXj6utBy/S6bp52URmhrihzvavk5Yrfh5MMG5U9g2BigCKPoGFiGQMOMt5Thnsm9sfAYz++UbE+xsSVYzEIOYYGoOpT1WEZx650r+ro2NQV16Z+h4Tj0n5qL4Ar815WwfmqP3CvdgBuX63Dtqzr/mPe/cO66hNlHbtX90g6d7bXsVQHwHvtq9KpS6gP8LhDoow6cf5sw7z2sQr0qf3xqjYDbmdctZxoHYX1tcx9wTEU1Ufr6hz7gOOpHdT2SLStlrnd9VrpTLn6ScfUOt4WUBevqzJCuePz4Vg6n+qeOnp71sPVddAxXDYUanONJ50f/anzU9wnqEd7aB22ZV2dv/qMMu2TOlV2pD6s47ZHfZ2n19d5c7ywn2Gjsmc02DQYGRAsA7zHlQGlbbgoCOs52h/LPTjZp7dh3sfVYAYayK6Hz0eD3/updBkCXXzUR+cNOEfmtYxteGW5zo3lWhfJ7Ysrx6IdfBz27X5SqAN9prjdidZrmjvascznWOlAWN916QONOerHvNsb+rg9vJx2IJXt1BZow3bsh/I2VE/mtUx1xVV94WC8VXXdX12i9uA8KttTF+rKMubZlnXZp+LjrLK932t/bLsK9uv1ODbRcXSOOneNU7UN7rWNov2xjY47BD4nnYfOj3VYpvh9E1qPebcfaLKXtvcyQruzD9Wb+BzHsPsc2fPQBgHnI5iYNBA1UHhl0ODKNlqHaBCqjFfW5xiuB/GF0VRH71WmOvh8vB3nBKpxhkD1ZZ56Uhe1NetQ5ldC21X39Ifbl/ZCvmmcys7ud61bwXLVz8dxOVBdmUiTDlpnCDTmKptVuqMe75nnveuv9mBdt7OO4e39XlHdvU+idvWk6JrXOTG5v7rEYx15XVNI0In6UVckzWsdwLaKjoO6OobXbVpTwOt7W61bgXJfmzoHtkcd5FkH9XGvOruehP1onaHRuTCvenF+rANcVy1bhdajP7gutM+m/prk7Is6A/anezBhGWOZqan/cJJ6B5sh6mjkEQgaFFrGKwKJAaMyDSyAe9SryriYNCh1c+AYiuuqdfyeQVzp6f0C6sE6vKdMF8hQ0CbUCVAXnafOr/Kfz83nT9kqW6mdkYDbovIF6xL63XVgmepKtF/t0/twvzXpoP0NCefuOgLOrbIhYR3a3e0P2IZl1Vyb7NyUB4xFJNUfVPKmMVi2Sh+v3yWYh/uBY9JurMMy2lTrVOWK2kv9pHV1nsyzjP1XbauxOAeH+rFcx2E7lrNv7UfLeV/poP1p+yGhXjoH6q9latNKV8aj9tFE1ZeOyXK/J37PPiCnvuofojGpMo3L0Mz+HSxMjgRwCCFsDzy8hNBGImXi5AAXQgjbw7Yc4PhKp78KGtZnOyIlhBBCCGGDyAEuhBBCCGFmbN0BrunlacirD3IqkDFNEf3gp89nygxlT/c97dQV1Yd7u+x/HY4bn9Df50C6mgv676ov4nPuY4w2jmv7roEu/vaUf2C8C/StsFU2aIor0lZ+GFbpsSkcd46HaYu6Q6+n0M5WeQRBqA9ZXiHXzYMLwzcU3ah4r1fgi0LLqvrE2/G+qW/vA2V6gPP+xoa2U3yOuDL5vcpJde8yxQ+1uNcHXGXfqs/qXu2vMn+AskyvKtfxtLwp7/f8xtdR8bG1b7Wf60BZU7neV3ap6nt/Hi+a1yvr+jpVvN0q2upS7vPS+t5WY+24oG+PXcrUZsjTh236eLnfV1QP+KoddXG0blUOvL9qLsBjVetU9YHL/X5IOLbbwf3pfzQyX8k0z/bMa51KxrEc169prCZ5k0zLQjMHV9yGgkBDQmAwEHGPhe5ByPsqYAn7A1xEeoACvOeY1VgoY7By0/F2Ohb78LFVNjU4P1DNEajutHv1QFDfAW+vYym0D+tRD9qP7XRs1ZOwHuVa7rrRd4q3pw4aG9435FUcAB/T9T0s3i+gzj4GddcynTPnpH2ijc4DeD8+V9WFfbAOx9DEeiwHPgav7I9zVFhP8zo/tqn8pfVRb5Uex0H7oD6UYUwdG/jYqqv7Xueg9xUoUz9VermNvT/q2zSe6sN6lHnf7ANyllGmegKvgzx10bIh0VjiPDnXpnjDvdZV+/i82F7vSRWrXk/LdAxeORapdAar6rJOaGbPahsOgkIDGzDANXgo1wCt0MXhC4lwQTH5wuA41El11P60H6+jfVA2RZr051V9QLurXdWOgHMmvMe1gmOyPe/ZB33CMZHXcsI+qk1G+wL0TUVTbLAMuK4eB6yjOrDNUdExCfO8uu6Kxjh9rfVx73bh/JhnXdZpig22Y3IbUocmXVneBHUC1EV1JexDfcJEPbRN1cdRQd9qW4X6+Nh69Ziirt7GbedUbYj6GtB3ivrC+yKcK/Vkm6ouZWofzqGq732jzqrY6BPqAmiLyk9uLyTW0XLgsnVsB1i/sgXHJKojdSEcn/VX1cV9NV44yFZYiQGiCwDw6sHj9Sq4iJgnGowMWqaqP9RHQjnHZb8s41hMDHqgc2C7qUFdVXfKfB7Msy7QuescaZume4XjolzH1gTUnlVfrEfdeO954O213GNDY9D7Vt0rO+i963BY2F77Yd+8uu4K54z2jGfktX5lFx0XiXVQX21T+UftU9Vr0pXQro6OS1RXwnp61TmDqk3V/2HhOMDn6HGkedZbFVOqn987bhevq30D1NU6fl/Zh3N1f6kNVAa0LmWqJ++1vuL3Q6D6MO9+goz24T1g7DFP2F5jAjK3McuA1q/qAfUT2rmOWg8yonV57zSNGfYYPjpHwIODweQbBuqtCjoF9bgAGIzI+4aBe/bpelCm/QDec/PgYqA+uqno4vHNxuc4FtTdF7vec46UM08wN50f58s6vK9sBHjvdgbal+pTwTHc7mpn74twXOab9FcZ7lVPyqhfNXaT7uvgbfW+shfvico0r/U1z3valHKdE2Rqc9Cml4+t/iJa38sA+2Ve7a4ytlPbQ+b1Ae7pUy87Cq5DJeM8aQMdF3nX1eda3TsuU5/oVeevOlPfVfZhG+0beR9b0bnreIrW0ThxHYeisrX7CYk2Yp71COWcE+B81N5uv2rubgftm2N6u0oXsqou/aD9hprmyA+joEGbwB2PMW2vm9k24A+QsRjD7mPGWQhh3kxj5wz7yKY+LmM8yMmYY4/FNs45hBCOSw5wIYQQQggzY2MPcHwLct1Xs9Z5G6eqs6p/vLJQtRkL/SzENnFcHxy3fTi5Fg6zHjeJqb3CeBwf8LNJx+njuBwnjtj2qO2njsaa+8nLqrikbaoyZZX9mtrys42hOzbWmvyA5KpAU9Y53FR1VvWPsqrNWKzSdZM57qZx3PabymHiiWvxMGty6ugHrZvgHjD2PqB70XF04Vo4jA+PM14Fxj7qmkS7o7adOm4XXWuaB/oFAmVd+1RtSdOaaBozHJ12T80QD1bkEVQIIAYXv4VDUOYyv6/qAL8nkDNodfOknHX4l4kGPuW4+oKo9PD7qo73sw3Q1m5z3sMmyPMh6/GhPlA/aXukyt6bhs6PtnF7NaEPBear+PZ+/B55jq332j+gz6s6bI97+tBjo8nfnDPbsL7WVag/0lhQP+pOnThnnyvxObIe+wQe937PNtov9WGfwO+9n4qqTtM957rJqP0A/UmfEdrH5Y7bDnn6kn2oD3Rs1mG90A8bGdUaaLrhMJg0qCoZ8GAEXoc0lWtgUx/W5T0XmZYB7csXmpahTdt8tN9tA3agLbgR+YOL5XpPmW5iuFZ1cHX/bhqcK/A5riojGudaH+gaVbwvtXm1vhV/6ABdc4B5rcMxKn+7j7VfLyPsa2yon9sD+HrQNqived77tfIDbaEyoGO4vZraVLCfqg3nSnTMTcVtxsOVz933wYrKdtoPy33MJl+Efmj24Ixh0HLTAggoBpUGrgcgYBvvQ9ENguW+IKqNkXk+0NCHt9N6SJWOirb3xQrQVzWHbUD9x4eybmwsV1vTN9pe2zDPOixv89Oc0fl7LFXxq6j9tK3HN8qQb7rHVf1GWWV3baO6e3+aQJO/KVPYpioj2ndTnSHg2OvM1dsQbUs/ejv1L3EZ+1A8Foi3Vbjm1L7sB+0g5z3SJoO5Ys5MgPbRufMedVbZxNsAjQcdh/eAdXnVstA94+0oPeIbj8sYnB50mmedKiArWTWm9oHkG4vW8faqoy8A19vno/lK121CH1y+cdFG6gOW44o2bK8PKCS9V1+iDfvdJNxmOkdfKz5/yD3+tB/m1VfVPftBfVzpJyRfP6qL+hOov7Uf5Ct/axv6uCpjfxWu35DQBoAxzrxeIWcZ5bSL2qZC2wG3kUJd/J51tU2TPas6Tf1wDpsK/UN8PTbJKt8QtSXjoMm+wH3g60epZOFoNK/IGeMbBNDNh8GoQY1yJA1SyFfV0XF0YbgM9dgfN3nv19tzHLZtKgM+n6qO978t6PxpA7c56tBesCVSk5+afK9lGmubgscY7VSV+fxpV0XbsIz2VpvrPWX0DfvAfdU/0TZ6z7GRqvWiPvV7wHG9fwVyllXlQ8D5UU/KVtmZ8iqu1bbazm1e5XlPvwHqwnqr2iruM/bjPqp84/dzhnYk6lfCWFX8XlFbIo++Kv+4D6gLr5WdXd9wdGLJY8JADyHMi6zbEI4OD3Z6+A7DkgPcMUHgrvpLJoQwTbJuQzgeWENZR+ORA1wIIYQQwszY6AOcvm9/GIZ8a8V17PMVvaPYIoRNg58HOu56yGd5wnGY+sdvpq5fyAGu5Chtjorr2OcBLosxhPrD+OvCD3UzH8JRYSz1+YfAUfrWLyAM+SwMh+fw3p0R/PaRfgOH35jh5oty5LUOrkgMXn7TRgObi8/7w1Xbqczb+7jahmNqXR1Dx9H67I/ttI7mQ+gSxjfXjsce16KuBV61Pa5sV9Vh7HPN6BphG10rRNcM++dVy3hl/7oOIaNObK9rl/IQ2vD4BIw/fSZ4PGsdb8fEMuZR7n37PdEY1z4Z2ypztK7W4T370Lq6jr2Oz13XIvH7bWMvCjYQBjKChEGgC4PBSjkDweWEMg0Y5hmMvvia6hDNAw16wnylE/NeR/tlHW0XQpcg/jTOgcamxnVV19eNrhPWZT8oQ9J+2KZaP37PvK8LXTPeD6+UqyyEw6J7ucdfFce+r3MdKLxnGdp6e/bNg4+OT7SN9qllPr6uBa+jawZoO+8XsFz70Sup2mwbezvWBkIH46p54A8HgkCArCpn3gOJMm0HWJ/BpYuP+PjeRqmCHTQtCMg1hdAX/oCoYk4PZizzgxdliN+m9eb9+Fh+vwqtp3o39eFrD6CervsQ2tB48UNZFXtN+7rGI/Pen+a9b12LRNsQ9q3jK65HVad6fmleZdpW60DOfprmtE1s9K5DR/OBUJVpHQQB61FeBZIuPpavczhbp44HYjU+ZX6vskr/EPpCY9pjj3GP2ETStaaHMa2DPhjLrKNrVut4X+xH4T2vVT2dA9C14+20rNpfQlhFtV583VTxxzoez4D1uZb0OeV9837VAU779vE83qtnGq/en8q9jtfVvJd5m21kz8OhxIMmhHA8Nm0tbdp8QugTPViG4xFLtoC/LJimCv+SmbKOIZBNOfBg3WXNhbA+WDM5wHVHLBlCCCGEMDNygAshhBBCmBk5wIUQJsk2fzg5BKXrtx3b1lbTxxwgbyprYp2PGhyl35ADXAhhQuhnZLCh8/OdWs57L6tgHT6wqj5DGIMqDhmnfl/Vq2Sar+roWgA+nspQ17+lioMY+1ZW3aMf6lHV83Eoa4N6rFN3U8kBLoQwGbiZA/8CkW/0kOvmrXmvo314uxCGBvHpcYg8kh5kWMfjlXL/+Z1q7TD2q7XANhxT5WyrZfzJHF+HOg7bsg77QEKZ4vNQmdqBcsXH3UZygAshTAY+PIA+nJrKtJxUG76304dSCEPDg40eeojHagUPUgBX3Gt/unYo93VRHaiAHry8XNv6GL5eCeSqL9F79qtr1vVk/371freJ5ggJIYSB4YOGDwXADVofQn6Ao5z3QOug3B86IYwF48+vgLGqB5gKrhGuF7bTtpAj8VAGfO1omZa7HKi+moCvV8LDmx7OgNbzPlTG+fFAieRz3FZygAshTAZsxtzwuTHzQeIHMmzguuGjXGW68QPtkzLtM4ShYFx6HOqByesQxr4esHzdaJyjDteP9qdtFN6zXOG4XmdVv7zq3Ajbsoxz0zlTB/SjfTLv9tkmsnuFEDYabvQhhLBJ5AAXQtg4qlccQghhk8gBLoQQQghhZuQAF0IIIYQwM3KACyGEEDacVV8maIJfFuAXIcK0yAEuhBBC2GD4mVDQdJDze6AHOFDVyeFuPHKACyGEEDYYPcD5l3pWlVHu5fzpD/25EG8b+icHuBBCCGGD4StpwH/bDfLqG9vVwU4Pa97O+w39E4uHEEIIGwwPXDiU+WGMMlwpYznvtS7wV+a0LAxHDnAhhBDCBqNvd/qhjHl9O5QyP7gRPQTyVTjg9UK/5AAXQgghhDAzcoALIYQQQpgZOcCFEEIIIcyMHOBCCCGEEGZGDnAhhBBCCDMjB7gQQgghhJmRA1wIIYQQwszIAS6EEEIIYWbkABdCCCGEMDNygAshhBBCmBk5wIUQQgghzIz/D6hur+W69JXEAAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,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wJWBRAMvAVcuxo4d67788kv33HPPeSHXXbzxxhtxlOihSMAJIbpC93kS0ToSDbwEXLkYOnSomzBhgjvuuON8Lxz8+te/dm+99Zbbcccd/XLv3r3dSSed5Pr37+9FHutnzpzpXnnlFf9//PjxbosttnBjxozx69nu7LPPdp999pk75ZRT3FdffeUF4rp168JTix6KBJwQoitIwJWBRAMvAVcuttlmGzdgwAC32WabeTGGKEOEXXfddW7w4MHuiy++8MsrVqxwr7/+elLA7brrrm6fffbx+/zqV79yI0eOdL/85S+9iPv+++/9edQDVx4k4IQQXUECrgwkGngJuHIxadIk/4tQowfugQce8L9XX321D/PmzfOijd4zeuVCAff444/7/7/5zW9cv379sn0QbVOmTHHHH3+8O/nkk/3xJeDKgwScEKIrSMCVgUQDLwFXLiZPnpz932OPPfzv6NGjfQ8aAe6//34v1DbddFMv4G6++Wb/y9Aq8UuWLPG9cMQNGTLETZw40YtAevXuu+8+fwyWP/744+xcYuPz0tvL3OXjX4mjOyABJ4ToChJwZSDRwEvAVYO5c+e67777Llvm/8KFC7MHHVavXp2tM5YvX579//zzz92cOXOy5U8++ST7L34eEHDHjHzSXbZexL32br6YloATQnQFCbgykGjgJeCqy5o1a9yTTz4ZR4uSYAIuDCkxJwEnhOgKEnBlINHAS8AJ0TNJCTgLoYiTgBNCdAUJuDKQaOAtxA5CQUGh5wd65CTghBBdQQKuDCQaeAk4BYXyhvmLP5OAE0J0CQm4MpBo4LMgKkWRUxflIG8I9ab7al/xUmRrCTghRD0k4MpAooGXU68mRU5dlIOUgKPHLabI1hJwQoh6SMA1wIIFC/zrGn42Eg28nHo1KXLqohyYgEuJtpAiW0vACSHqIQFXh0ceecS/HJX3cr355ps+7vzzz3fLli3r8M3JO++80+233341cS0h0cDLqVeTIqcuygECbv6SYvEGRbaWgBNC1EMCroBBgwa5vn37ZsvDhw93n376qf9dtWqVF3C8RBWBx3Z8bNwE3JZbbukWL16c7dslEg28nHo1KXLqoloU2VoCTghRDwm4Arbeems3atSoONoLOOuB49NGK1eudP37988EHN+95APkLSPRwMupV5Mipy6qRZGtJeCEEPWQgCugV69eXqwZ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>