# REACT, REACT-DOM, REACT-ROUTER, REDUX

[Loading vs Rendering / Reloading vs Rerendering	2](#loading-vs-rendering-/-reloading-vs-rerendering)

[React And Related Technologies	3](#react-and-related-technologies)

[React Elements aka Element Components	4](#react-elements-aka-element-components)

[React Classes aka Class Components	5](#react-classes-aka-class-components)

[React Functions aka Function Components	5](#react-functions-aka-function-components)

[Importing Components	7](#importing-components)

[Rendering React Components	7](#rendering-react-components)

[Vite	8](#vite)

[Prop	9](#prop)

[State	10](#state)

[Hooks	10](#hooks)

[React CSS and SaSS	12](#react-css-and-sass)

[React Router	12](#react-router)

[Redux	15](#redux)

[Remix	29](#remix)

[Webpack	29](#webpack)

[Webassembly	29](#webassembly)

# Loading vs Rendering / Reloading vs Rerendering {#loading-vs-rendering-/-reloading-vs-rerendering}

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# React And Related Technologies {#react-and-related-technologies}

1. ## React JS aka React

   1. ### JavaScript Library designed for building better UI

2. ## React DOM

   1. ### Complimentary library that glues React to browser DOM

      1. #### [Visit Here For A Brief Explanation](https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745)

3. ## Vite 

   1. ### Handles the bundling of rendering….

      1. #### uses esbuild or Rollup 

   2. ### Uses native ESM to serve source code files (that are likely to change frequently) and thereby sending each module to the browser as needed.  

4. ## React Router

   1. ### Library that enables client side routing in React apps

5. ## Redux

   1. ### JavaScript Library for managing and centralizing app state

6. ## Next.js

   1. ### React framework providing building blocks for web apps

      1. #### It handles the tooling and configuration needed for React 

      2. #### Provides additional structures, features, and optimizations

      3. #### Server-side rendering backend for React

7. ## Remix

   1. ### A full stack web framework that is UI focused and similar to Redux it sits on top React to manage and centralize state 

8. ## React Native

   1. ### JS Library based on React that targets mobile platforms

## 

# 

# React Elements aka Element Components {#react-elements-aka-element-components}

1. ## Render to HTML

   1. ### React uses a virtual DOM 

   2. ### React uses React elements to represent HTML

   3. ### React elements are “rendered” to HTML in the real DOM

   4. ### React elements are almost identical to HTML elements

      1. #### React elements MUST always be closed ABC 🙂

2. ## JSX

   1. ### JavaScript XML

      1. #### Allows us to write HTML in React (technically XML)

   2. ### React supports “if” conditionals but NOT inside JSX

      1. #### Use ternary instead

   3. ### Attribute class \= className

      1. #### This is because “class” is a reserved word in JS

3. ## Built-In Element Components 

   1. ### react

      1. #### \<Fragment\>

      2. #### \<StrictMode\>

      3. #### \<Suspense\>

      4. #### \<Profiler\>

   2. ### react-dom

      1. #### pretty much any HTML element

         1) ##### visit [here](https://react.dev/reference/react-dom/components) for further details

   3. ### react-router

      1. #### \<Outlet\> 

      2. #### \<Layout\>

      3. #### \<Link\>

      4. #### \<NavLink\>

      5. #### \<Navigate\> 

      6. #### \<Navigation\>

# React Classes aka Class Components  {#react-classes-aka-class-components}

1. ## Class components

   1. ### We are not learning these

# React Functions aka Function Components {#react-functions-aka-function-components}

1. ## Function components

   1. ### Can be function declarations or function expressions

   2. ### Can only? receive props as arguments

   3. ### Can have vanilla JS logic in the body

   4. ### Can return Elements, Components, and/or JS logic

      1. #### cannot return undefined

         1) ##### return null if you don’t want to return anything

      2. #### return must be wrapped in ()

         1) ##### This is because JS adds semicolons ; automatically …

      3. #### if returning siblings you must wrap in fragments \<\>\</\>

         1) ##### Because there can be only 1 return (top level return)

      4. #### if returning JS logic it must be wrapped in {} 

         1) ##### Because it must be evaluated

      5. #### for branching use short circuits

         1) ##### ternary:

            1) ###### {condition ? trueConsequence : falseConsequence}

         2) ##### logical AND 

            1) ###### {condition && \<p\>will see only if condition truthy\</p\>

               1) won’t work with conditional falsey 0 zero

      6. #### returning (nesting) components in components is powerful

         1) ##### Very helpful for modularity

      7. #### there are some other tricky things about this…

         1) ##### What are these other tricky things?

         2) ##### I don’t know…

            1) ###### Or do we?

# Importing Components {#importing-components}

# Rendering React Components {#rendering-react-components}

1. ## createRoot()

2. ## render()

3. ## rendering concepts

   1. ### virtual DOM

      1. #### ideal representation of UI kept in memory

      2. #### synced with the real DOM by ReactDOM

      3. #### note that shadow DOM is unrelated to this

   2. ### mount aka initial render?

      1. #### when component is show for first time

      2. #### what triggers this?

         1) ##### render() creates tree of react elements

         2) ##### when updates occur the render() must run again to show them

   3. ### re-rendering

      1. #### subsequent renders of an already visible component

      2. #### what triggers this?

         1) ##### user interactions

            1) ###### when the state and/or props change

            2) ###### change in value of the Context Store

            3) ###### re-render when change in “key” prop

         2) ##### async request responses

            1) ###### API calls

            2) ###### socket connections

            3) ###### updates from subscription model

   4. ### reconciliation

      1. #### the process of syncing vDOM with rDOM

      2. #### examines two trees with comparison in O(n)

      3. #### to do this the algorithm assumes:

         1) ##### when two elements have different types they result in different tree structures

         2) ##### developers can assist the algorithm by indicating which child elements are likely to remain consistent across multiple renders

            1) ###### this is accomplished by assigning a unique key prop to each child

   5. ### the diffing algorithm

      1. #### compares two root elements

         1) ##### if types are different it tears down from there all the way down and rebuilds (components are unmounted and old nodes destroyed)

         2) ##### if types are same it then compares the attributes of both and keeps the same underlying DOM node but updates accordingly

      2. #### basically it recurses this process across the children

         1) ##### there can be performance issues so visit and review this site:

            1) ###### https://legacy.reactjs.org/docs/reconciliation.html

   6. ### refresh aka reload?

   7. ### hard refresh

   8. ### preserving state 

# Vite {#vite}

# Prop  {#prop}

1. ## Props are objects 

   1. ### Is a component variable

      1. #### It lives in a component

   2. ### Passed from parent component to child component

   3. ### Always? the 1st property?arg? in parent component function

   4. ### Are read only

      1. #### A component should NOT modify its own props (sending?)

         1) ##### THIS KEEPS COMPONENTS AS PURE FUNCTIONS

   5. ### Destructuring is helpful for these:

      1. #### Examples

      2. #### Examples

   6. ### Prop drilling aka threading

      1. #### passing props from a parent component 

      2. #### through one or more intermediary components 

      3. #### to a deeply nested child component 

      4. #### that needs access to those props

      5. #### Visit [here](https://prathapreddy-mudium.medium.com/understanding-props-drilling-in-react-passing-data-through-component-hierarchies-0dc930e8cf61) for more details

      6. #### Visit [here](https://arjunbharti.medium.com/prop-drilling-in-react-js-2d6cf17744b) for even more details

# State {#state}

1. ## States can be any data type

   1. ### Is a component variable

      1. #### It lives in a component

   2. ### Causes re-renders when it changes

   3. ### Maintains its value between renders (if not changed)

      

2. ## Centralized state management 

   1. ### The Redux store?

# Hooks {#hooks}

1. ## What are Hooks

   1. ### Special functions

   2. ### Let you hook into React features within functional components

      1. #### Hook listens for changes 

      2. #### Triggers a response when there is a change

         1) ##### The response is often a render based on data change

            

2. ## React Hook Rules

   1. ### Only call hooks from React function components

   2. ### Don’t call hooks inside loops, conditionals, or nested functions

   3. ### Hooks must always be called in the same order

   4. ### useEffect hook MUST return a callback function

   5. ### Don’t use async before useEffect callback function

      ### 

3. ## Pre Built Hooks

   1. ### react

      1. #### useState()

         1) ##### Persist data through component re-renders

      2. #### useEffect()

         1) ##### For handling async behavior or side effects

      3. #### useContext()

         1) ##### Share data, sometimes whole state, without Prop threading

      4. #### useRef()

      5. #### useReducer()

      6. #### useMemo()

      7. #### there are more but these are most common

   2. ### react-dom

      1. #### useFormStatus()

   3. ### react-router

      1. #### useParams

      2. #### useSearchParams 

      3. #### useNavigate

      4. #### useNavigation

# React CSS and SaSS {#react-css-and-sass}

1. ## [Ways To Style React Components w CSS](https://www.geeksforgeeks.org/8-ways-to-style-react-components/)

   1. ### CSS in JS

   2. ### CSS Stylesheet

      1. #### import ‘./SomeComponentName.css’

   3. ### Inline Styling

      1. #### before function create an object that stores key:value pairs

      2. #### pass it to the element with style={nameOfObject}

      3. #### or pass directly without object style={{color: ‘pink’}}

   4. ### CSS Modules

      1. #### import styles ‘./DashedBox.css’

      2. #### then access to className as we access to object (visit link)

   5. ### Styled Components

      1. #### A library for React and React Native

      2. #### npm install styled-components –save

      3. #### capture element in a variable…too convoluted

   6. ### Sass

   7. ### SCSS

   8. ### Less

   9. ### Stylable

# 

# React Router {#react-router}

1. ## Enables client side routing

   1. ### App can update URL from a link click without a req to server

   2. ### App renders new UI from state? 

   3. ### Data requests using fetch to update components from server

   4. ### Provides faster user experience bc not entirely new DOC

2. ## Routers [(choose one)](https://reactrouter.com/en/main/routers/picking-a-router)

   1. ### createBrowserRouter() 

      1. #### takes argument array of objects 

      2. #### the objects define all the routes for the application 

      3. #### often function expression 

         1) ##### return is assigned to variable router

            * ###### const router \= createBrowserRouter(

              ###### \[ 

              ######   {

              ######     path: “/”, 

              ######     element: \<Home /\> 

              ######    } 

              ###### \])

      4. #### The router variable is passed to RouterProvider

         1) ##### \<RouterProvider router={router} /\>

      5. #### Routes can be nested… children: \[ { etc } \]

      6. #### Layout and Outlet

   2. ### createMemoryRouter()

   3. ### createHashRouter()

   4. ### createStaticRouter()

3. ## Router Components

   1. ### Don’t understand this

4. ## Route

   1. ### Don’t understand this

5. ## Components

   1. ### Link

   2. ### NavLink

   3. ### Navigate

   4. ### Outlet 

   5. ### Route

   6. ### Routes

   7. ### Scroll Restoration

6. ## Hooks

   1. ### useParams

   2. ### useSearchParams 

   3. ### useNavigate

   4. ### useNavigation

   5. ### and many, many more…

7. ## Fetch Utilities

8. ## Utilities

9. ## Features

   1. ### Nested Routes

   2. ### Dynamic Segments

   3. ### Ranked Route Matching

   4. ### Active Links 

   5. ### Relative Links 

   6. ### Data Loading 

   7. ### Redirects 

   8. ### Pending Navigation UI

   9. ### Skeleton UI with \<Suspense\> 

   10. ### Data Mutations

   11. ### Data Revalidation

   12. ### Busy Indicators

   13. ### Optimistic UI 

   14. ### Data Fetchers 

   15. ### Race Condition Handling 

   16. ### Error Handling 

   17. ### Scroll Restoration 

   18. ### Web Standard APIs 

   19. ### Search Params 

   20. ### Location State

# 

# Redux {#redux}

Each reducer is an object 

Sometimes we call these slice of state because… 

They are nested in the store object

Altogether this defines the “state”

The method combineReducer() invoked in the variable rootReducer adds reducer objects to the store object \- the reducer name is the key and the reducer function is the value.

The store object is nested in the window object.

getState() is a method of the store object that prints the current state.

The current state is the state at this point in time.

Each reducer has an initial state which is defined by the variable initialState.

Each reducer object has a corresponding reducer function responsible for updating it.

It uses a switch to determine characteristics of the update.

But since the combineReducer method is what updates the store all of the reducer functions are run whenever there is any action on any reducer slice object. 

Therefore even if there is no change in a reducer slice object its reducer func is still called by combined reducer when there is an action in any other reducer slice object.

Dispatch…

Actions are…

Thunks allow us to have side effects with our reducers…in our way of usage the side effect is making a request to the backend db.

It is possible that the frontend state is ahead of the db \- this could be called optimistic state \- it could be great for UI but it could also be a liability. An example of this may be a shopping cart filled but before checkout. 

useSelector() keys in to a deeply nested object in a reducer and it can….

useState()

![][image1]

;lk’lk

\# React Router \- Loaders and Actions

The docs have examples for each of these APIs. These are in addition to what we've learned in class \`useBrowserRouter\`, \`RouterProvider\` and \`useNavigate\`, for example.

Here are some of the ones you'd likely use if you want to incorporate this into your App:

\- \[loader\]([https://reactrouter.com/en/main/route/loader](https://reactrouter.com/en/main/route/loader)) 

	makes a fetch for data to be used in the component

\- \[action\](https://reactrouter.com/en/main/route/action)

\- \[Form\](https://reactrouter.com/en/main/components/form)

\- \[useLoaderData\]([https://reactrouter.com/en/main/hooks/use-loader-data](https://reactrouter.com/en/main/hooks/use-loader-data))

	use this in the component to get the return from the loader  
	ie let data \= useLoaderData()

\- \[useActionData\](https://reactrouter.com/en/main/hooks/use-action-data)

\- \[useFetcher\](https://reactrouter.com/en/main/hooks/use-fetcher)

\#\# Loaders

\- Loaders are functions that return a promise  
\- Loaders are used to fetch data  
\- Loaders are used to load data before rendering a component

\`\`\`js  
// in App.jsx  
const router \= createBrowserRouter(\[  
  {  
    path: "/albums/:id",  
    loader: async ({ params }) \=\> {  
      return fetch(\`/api/albums/${params.id}\`);  
    },  
    element: \<SingleAlbum /\>,  
  },  
\]);

// in a component file  
import { useLoaderData } from "react-router-dom";

export function Albums() {  
  const singleAlbum \= useLoaderData();  
  return (  
    \<\>  
      \<p\>{singleAlbum.title}\</p\>  
    \</\>  
  );  
}  
\`\`\`

\#\# useLoaderData

\- useLoaderData is a hook that returns the data for the current route  
\- useLoaderData is used to fetch data for the current route  
\- useLoaderData is used to load data for the current route before rendering a component

\`\`\`js  
import { useLoaderData } from "react-router-dom";

const Loader \= () \=\> {  
  const data \= useLoaderData();  
  return \<h1\>{data.title}\</h1\>;  
};  
\`\`\`

\#\# Actions

\- Actions are functions that return a promise  
\- Actions are used to perform an action (POST, PUT, DELETE, PATCH)  
\- Forms and fetcher.Forms will be submitted to the action  
  \- In the examples below, you can interchange Form with fetcher.Form in several situations.  
  \- Use a fetcher.Form when you want to submit without a navigation.  
  \- Use a Form when you want to submit and navigate.  
  \- They both work, but fetcher.Form is more flexible, and can be used for "appy" functionality.  
  \- Check the docs for more info.  
\- After the action is completed, the loaders automatically re-run to revalidate all data 🔥

\`\`\`js

// forms will be submitted to the action defined in the router  
\<Form method="post" action="/songs/123" /\>;  
\<fetcher.Form method="put" action="/songs/123" /\>

// router  
{  
    path: "/songs/:id",  
    action: async ({ params, request }) \=\> {  
        const res \= await fetch(  
            \`/api/songs/${params.id}\`,  
      {  
          method: "PUT",  
        body: await request.formData(),  
      }  
    );  
    if (\!res.ok) throw res;  
    return { ok: true };  
  }  
}  
\`\`\`

\#\# useFetcher

\- useFetcher is a hook that returns a fetcher object  
\- Fetcher object has a state property that can be used to check the current state of the fetcher  
\- Fetcher object has a Form component that can be used to create a form

\`\`\`js  
import { useFetcher } from "react-router-dom";

const Fetcher \= () \=\> {  
  const fetcher \= useFetcher();  
  return (  
    \<div\>  
      \<h1\>Fetcher\</h1\>  
      \<p\>State: {fetcher.state}\</p\>  
      \<fetcher.Form method="post" action="/"\>  
        \<input type="text" name="message" /\>  
        \<button type="submit"\>Submit\</button\>  
      \</fetcher.Form\>  
    \</div\>  
  );  
};  
\`\`\`

\#\# useActionData to handle errors

\- This hook provides the returned value from the previous navigation's action result, or undefined if there was no submission.  
\- The most common use-case for this hook is form validation errors. If the form isn't right, you can return the errors and let the user try again:

\`\`\`js  
import { useActionData, Form, redirect } from "react-router-dom";

export default function SignUp() {  
  const errors \= useActionData();

  return (  
    \<Form method="post"\>  
      \<p\>  
        \<input type="text" name="email" /\>  
        {errors?.email && \<span\>{errors.email}\</span\>}  
      \</p\>

      \<p\>  
        \<input type="text" name="password" /\>  
        {errors?.password && \<span\>{errors.password}\</span\>}  
      \</p\>

      \<p\>  
        \<button type="submit"\>Sign up\</button\>  
      \</p\>  
    \</Form\>  
  );  
}

export async function action({ request }) {  
  const formData \= await request.formData();  
  const email \= formData.get("email");  
  const password \= formData.get("password");  
  const errors \= {};

  // validate the fields  
  if (typeof email \!== "string" || \!email.includes("@")) {  
    errors.email \= "That doesn't look like an email address";  
  }

  if (typeof password \!== "string" || password.length \< 6\) {  
    errors.password \= "Password must be \> 6 characters";  
  }

  // return data if we have errors  
  if (Object.keys(errors).length) {  
    return errors;  
  }

  // otherwise create the user and redirect  
  await createUser(email, password);  
  return redirect("/dashboard");  
}  
\`\`\`

\#\# Handeling Multiple Types of Intents in a Single Action

\- We can use the form "intent" to handle multiple types of intents in a single action  
\- The form "intent" is a hidden input field that is used to specify the intent of the form  
\- The form "intent" is used to specify the intent of the form  
\- The form "intent" is used to specify the intent of the form

\`\`\`js  
import { useFetcher } from "react-router-dom";

const Fetcher \= () \=\> {  
  const fetcher \= useFetcher();  
  return (  
    \<div\>  
      \<h1\>Fetcher\</h1\>  
      \<p\>State: {fetcher.state}\</p\>  
      \<fetcher.Form method="post" action="/"\>  
        \<input type="text" name="message" /\>  
        \<button type="submit"\>Submit\</button\>  
        \<input type="hidden" name="intent" value="delete" /\>  
      \</fetcher.Form\>  
    \</div\>  
  );  
};  
\`\`\`

Then in our action, we can check the intent and perform the appropriate action:

\`\`\`js  
export async function createTweetAction({ request }) {  
  let formData \= await request.formData();  
  let data \= Object.fromEntries(formData);

  let intent \= formData.get("intent");

  // if the intent is delete, delete the tweet  
  if (intent \=== "delete") {  
    const response \= await fetch(\`/api/tweets/${data.id}\`, {  
      method: "DELETE",  
    });

    if (response.ok) {  
      return { message: "Successfully deleted" };  
    }  
  }

  if (intent \=== "create") {  
    const response \= await fetch(\`/api/tweets\`, {  
      method: "POST",  
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify(data),  
    });

    if (response.ok) {  
      const tweet \= await response.json();

      return tweet;  
    }  
    // if there was an error creating the tweet, I could handle it here  
    // return { message: "Error creating tweet" };  
  }  
}  
\`\`\`

**\# React Router \- Loaders and Actions**

The docs have examples for each of these APIs. These are in addition to what we've learned in class \`useBrowserRouter\`, \`RouterProvider\` and \`useNavigate\`, for example.

Here are some of the ones you'd likely use if you want to incorporate this into your App:

\- \[loader\](https://reactrouter.com/en/main/route/loader)

\- \[action\](https://reactrouter.com/en/main/route/action)

\- \[Form\](https://reactrouter.com/en/main/components/form)

\- \[useLoaderData\](https://reactrouter.com/en/main/hooks/use-loader-data)

\- \[useActionData\](https://reactrouter.com/en/main/hooks/use-action-data)

\- \[useFetcher\](https://reactrouter.com/en/main/hooks/use-fetcher)

**\#\# Loaders**

\- Loaders are functions that return a promise  
\- Loaders are used to fetch data  
\- Loaders are used to load data before rendering a component

\`\`\`js  
// in App.jsx  
const router \= createBrowserRouter(\[  
 {  
   path: "/albums/:id",  
   loader: async ({ params }) \=\> {  
     return fetch(\`/api/albums/${params.id}\`);  
   },  
   element: \<SingleAlbum /\>,  
 },  
\]);

// in a component file  
import { useLoaderData } from "react-router-dom";

export function Albums() {  
 const singleAlbum \= useLoaderData();  
 return (  
   \<\>  
     \<p\>{singleAlbum.title}\</p\>  
   \</\>  
 );  
}  
\`\`\`

**\#\# useLoaderData**

\- useLoaderData is a hook that returns the data for the current route  
\- useLoaderData is used to fetch data for the current route  
\- useLoaderData is used to load data for the current route before rendering a component

\`\`\`js  
import { useLoaderData } from "react-router-dom";

const Loader \= () \=\> {  
 const data \= useLoaderData();  
 return \<h1\>{data.title}\</h1\>;  
};  
\`\`\`

**\#\# Actions**

\- Actions are functions that return a promise  
\- Actions are used to perform an action (POST, PUT, DELETE, PATCH)  
\- Forms and fetcher.Forms will be submitted to the action  
 \- In the examples below, you can interchange Form with fetcher.Form in several situations.  
 \- Use a fetcher.Form when you want to submit without a navigation.  
 \- Use a Form when you want to submit and navigate.  
 \- They both work, but fetcher.Form is more flexible, and can be used for "appy" functionality.  
 \- Check the docs for more info.  
\- After the action is completed, the loaders automatically re-run to revalidate all data 🔥

\`\`\`js

// forms will be submitted to the action defined in the router  
\<Form method\="post" action\="/songs/123" /\>;  
\<fetcher.Form method\="put" action\="/songs/123" /\>

// router  
{  
   path: "/songs/:id",  
   action: async ({ params, request }) \=\> {  
       const res \= await fetch(  
           \`/api/songs/${params.id}\`,  
     {  
         method: "PUT",  
       body: await request.formData(),  
     }  
   );  
   if (\!res.ok) throw res;  
   return { ok: true };  
 }  
}  
\`\`\`

**\#\# useFetcher**

\- useFetcher is a hook that returns a fetcher object  
\- Fetcher object has a state property that can be used to check the current state of the fetcher  
\- Fetcher object has a Form component that can be used to create a form

\`\`\`js  
import { useFetcher } from "react-router-dom";

const Fetcher \= () \=\> {  
 const fetcher \= useFetcher();  
 return (  
   \<div\>  
     \<h1\>Fetcher\</h1\>  
     \<p\>State: {fetcher.state}\</p\>  
     \<fetcher.Form method\="post" action\="/"\>  
       \<input type\="text" name\="message" /\>  
       \<button type\="submit"\>Submit\</button\>  
     \</fetcher.Form\>  
   \</div\>  
 );  
};  
\`\`\`

**\#\# useActionData to handle errors**

\- This hook provides the returned value from the previous navigation's action result, or undefined if there was no submission.  
\- The most common use-case for this hook is form validation errors. If the form isn't right, you can return the errors and let the user try again:

\`\`\`js  
import { useActionData, Form, redirect } from "react-router-dom";

export default function SignUp() {  
 const errors \= useActionData();

 return (  
   \<Form method\="post"\>  
     \<p\>  
       \<input type\="text" name\="email" /\>  
       {errors?.email && \<span\>{errors.email}\</span\>}  
     \</p\>

     \<p\>  
       \<input type\="text" name\="password" /\>  
       {errors?.password && \<span\>{errors.password}\</span\>}  
     \</p\>

     \<p\>  
       \<button type\="submit"\>Sign up\</button\>  
     \</p\>  
   \</Form\>  
 );  
}

export async function action({ request }) {  
 const formData \= await request.formData();  
 const email \= formData.get("email");  
 const password \= formData.get("password");  
 const errors \= {};

 // validate the fields  
 if (typeof email \!== "string" || \!email.includes("@")) {  
   errors.email \= "That doesn't look like an email address";  
 }

 if (typeof password \!== "string" || password.length \< 6) {  
   errors.password \= "Password must be \> 6 characters";  
 }

 // return data if we have errors  
 if (Object.keys(errors).length) {  
   return errors;  
 }

 // otherwise create the user and redirect  
 await createUser(email, password);  
 return redirect("/dashboard");  
}  
\`\`\`

**\#\# Handeling Multiple Types of Intents in a Single Action**

\- We can use the form "intent" to handle multiple types of intents in a single action  
\- The form "intent" is a hidden input field that is used to specify the intent of the form  
\- The form "intent" is used to specify the intent of the form  
\- The form "intent" is used to specify the intent of the form

\`\`\`js  
import { useFetcher } from "react-router-dom";

const Fetcher \= () \=\> {  
 const fetcher \= useFetcher();  
 return (  
   \<div\>  
     \<h1\>Fetcher\</h1\>  
     \<p\>State: {fetcher.state}\</p\>  
     \<fetcher.Form method\="post" action\="/"\>  
       \<input type\="text" name\="message" /\>  
       \<button type\="submit"\>Submit\</button\>  
       \<input type\="hidden" name\="intent" value\="delete" /\>  
     \</fetcher.Form\>  
   \</div\>  
 );  
};  
\`\`\`

Then in our action, we can check the intent and perform the appropriate action:

\`\`\`js  
export async function createTweetAction({ request }) {  
 let formData \= await request.formData();  
 let data \= Object.fromEntries(formData);

 let intent \= formData.get("intent");

 // if the intent is delete, delete the tweet  
 if (intent \=== "delete") {  
   const response \= await fetch(\`/api/tweets/${data.id}\`, {  
     method: "DELETE",  
   });

   if (response.ok) {  
     return { message: "Successfully deleted" };  
   }  
 }

 if (intent \=== "create") {  
   const response \= await fetch(\`/api/tweets\`, {  
     method: "POST",  
     headers: { "Content-Type": "application/json" },  
     body: JSON.stringify(data),  
   });

   if (response.ok) {  
     const tweet \= await response.json();

     return tweet;  
   }  
   // if there was an error creating the tweet, I could handle it here  
   // return { message: "Error creating tweet" };  
 }  
}  
\`\`\`

# Remix {#remix}

# 

# 

# 

# Webpack  {#webpack}

#  Webassembly   {#webassembly}

# 

[image1]: <data:image/png;base64,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>