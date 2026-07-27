
## **Monday** {#monday-8}

# Browser DevTools

# Chrome Dev Tools

Chrome Dev Tools is a suite of tools for testing and debugging web development.

Automatically included with Chrome browser, there is no additional download required.

To open Chrome Dev Tools, when in the Chrome browser press:

**Option \+ Command \+ i** (Mac) or **F12** (Linux/Windows).

## Dev Tools Dock

The dock is the window containing the dev tools.

You will see many tabs at top and some icons.

To navigate the tabs via hot key use:

⌘ \+ \[     or    ⌘ \+ \]

To float the dock in its own window press:

⌘ \+ ⇧ \+ D

To zoom the view in and out use:

| ⌘ \+ \+ | ⌘ \+ \- | ⌘ \+ 0 |
| :---- | :---- | :---- |

HTML Selector

Notice the icon of a cursor on the very left of the Dev Tools tab.

This is the selector; click it, then click on any element on the page to bring its HTML into view in the HTML inspector.

For testing purposes you can alter the HTML directly in the HTML inspect in the elements tab however changes are NOT saved\!

## Elements Tab

**HTML Inspector**

The Elements tab contains the HTML inspector, a tool that reveals the structure of HTML currently rendered in the browser.

You can change the value of any HTML tag attribute by double-clicking on it, or you can edit the entire element and its children by right-clicking it and selecting *Edit as HTML*.

Your changes will be reflected in the browser page immediately. You can also drag elements to reorder them or right-click and delete them.

**Styles Pane**

The CSS pane just right of the HTML inspector  lists all the CSS selectors and attributes that affect the currently selected HTML element, in descending order of precedence.

Scroll through the list and you'll likely see striked-out properties \- this means they have been overwritten by properties of higher preference.

You can change property values or add new properties to selectors with the page updating automatically.

This is a great way to quickly test out CSS changes. Just note that these changes are only temporary.

## Console Tab

The console is the place to go for executing code within the context of your page.

It's great for viewing the contents of JavaScript objects.

Just start typing the name of a JavaScript object, and it'll offer suggestions.

The console is also where the console.log() output is sent.

This makes it very useful for simple debugging of your code.

## Sources

The Dev Tools are not just for inspecting and debugging frontend code. You can also use them to *write* code, particularly CSS and JavaScript. A great way to edit your code is in Dev Tools. Follow these steps to start editing your app's source code with Chrome:

* Go to the **Sources** tab and make sure the left-hand column is expanded. In the left-hand column, make sure you're in the *Page* tab.
* You'll see a tree of the resources from your page, organized by path. Navigate to the file you want to edit (e.g. assets/users.css).
* Right-click on the file, and select *Save As...*. Navigate to the location of the CSS file in your file system and save over it (don't worry; it isn't really replacing anything yet.)
* Double-click on the file to open it in the Dev Tools editor and start making changes. If you're making changes to the CSS, notice how the code you write immediately affects the page. This is why this is such a convenient way to code CSS.
* Lastly, you may want to configure Chrome to use two-space indentation instead of four. You can do this through the settings, accessible via the cog wheel in the top-right of the Dev Tools window.

## Network

You may already be familiar with the Network tab, which is a great tool for inspecting requests, be they the ones for the initial page load or fetch requests. Network gives you a wealth of information about each request, including the HTTP method, response status code, and load time. You can click on any request to see more information about it, including the headers Chrome sent and those that the server sent back, as well as the request body (for POST and PATCH requests) and the response body.

## Application

Viewing your app's cookies is another useful feat you can accomplish with Dev Tools. Head over to the Application tab. Here, you can view all the types of in-browser storage available to your app, such as local storage, as well as their contents. For cookies, simply open the cookies section of the left-hand column and select your app's domain (e.g. localhost). Your cookies will be listed with info including name, value, and expiration date. You can easily delete cookies when right-clicking on them.

## Additional Resources

We've only touched the tip of the Dev Tools iceberg. There's much more to explore, like JavaScript profiling and debugging. Here are a few resources in case you're hungry for more.

* [Chrome Dev Tools: Using the Console](https://developers.google.com/web/tools/chrome-devtools/console/)
* [Links to an external site.](https://developers.google.com/web/tools/chrome-devtools/console/)
*
* [Chrome Dev Tools: Markup and Style](http://code.tutsplus.com/tutorials/chrome-dev-tools-markup-and-style--net-27149)
* [Links to an external site.](http://code.tutsplus.com/tutorials/chrome-dev-tools-markup-and-style--net-27149)
*
* [Chrome Dev Tools: Networking and the Console](http://code.tutsplus.com/tutorials/chrome-dev-tools-networking-and-the-console--net-28167)
* [Links to an external site.](http://code.tutsplus.com/tutorials/chrome-dev-tools-networking-and-the-console--net-28167)
*
* [Chrome Dev Tools: JavaScript and Performance](http://code.tutsplus.com/tutorials/chrome-dev-tools-javascript-and-performance--net-29671)
* [Links to an external site.](http://code.tutsplus.com/tutorials/chrome-dev-tools-javascript-and-performance--net-29671)
*
* [Official Documentation](https://developers.google.com/chrome-developer-tools/)
* [Links to an external site.](https://developers.google.com/chrome-developer-tools/)
*

## What you learned

In this reading you learned about the various tools at your disposal in Chrome's Dev Tools. You learned how to manipulate HTML and CSS with the Elements tab, how to test JavaScript and debug logs with the Console, how to view and edit anything in the application file structure with the Sources tab, how to see the HTTP requests your application is making using the Network tab, and how to view what Web Storage and cookies are in use with the Application tab.
