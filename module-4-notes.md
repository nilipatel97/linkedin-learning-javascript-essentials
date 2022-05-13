## [4] Sidebar: String Output

### [4.1] Mix Text and Variables with Template Literals

* Objective: to learn how to output content from JavaScript to an HTML document. So far, we've spent all our time in the console, and none in the browser.
* HTML is the bridge between what happens in the JavaScript world, and what happens in the human world.
* JavaScript is used to 1) generate HTML, 2) modify existing HTML, 3) remove HTML from a live document in the browser
* Therefore, we can think of Javascript as an interactive layer on top of the HTML (content) & CSS (presentation).
* We use javascript to manipulate the HTML and the CSS to get the browser to do what we want

* Common use: Use javascript to inject new content into the document. This is done by accessing an element within the document, and manipulate it with Javascript
* Fun fact: the entire document is an object in the browser. Can grab the document in its entirety by typing document in the console.

```
content = `<main> here's literally everything you would put in an html file <main>`

document.body.innerHTML = content
```

We are effectively bridging the JS world and the human world through injecting HTML into the document.

The alternative to template strings is string concatenation. It is outdated and should be avoided as much as possible.

Always use template literals in place of string concatenation.