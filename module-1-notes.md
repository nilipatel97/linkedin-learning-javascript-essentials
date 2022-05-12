- Vanilla Javascript
- ES 2015
- Babel
- React
- Vue.js
- JSX
- ECMAScript
- CoffeeScript
- Webpack
- Typescript
- Angular
- Nodejs
- ES6
- Gulp
- Note: all of these are tool or framework built on or used with javascript

### [1.2] Here's the Rundown:
1. Javascript: the core language; sometimes referred to as Vanilla Javascript or Vanilla JS. The scripting language itself. The scripting language for the web.
2. ECMAScript: The browser specification of the JavaScript language. Not the language itself; the official specification for how the language should be interpreted by the browser. The ensure that when you write javascript, it works the same no matter what browser is used.
3. ES6, ES20115, ES2017, ES2020: when people say they use ES6, they mean that they are using some cutting edge javascript. Those that use ECMAScript must use Babel.js to make it work in the current browser implementation. The browser doesn't really understand ECMAScript.
4. TypeScript: A dialect/flavor of Javascript that has features like strong typing. Javascript is an opinionated language. Some people hate javascript. Others need some features not provided by javascript. Typescript is an abstracted version of Javascript with some desirable features. (.ts)
5. Javascript Frameworks: the modern web runs on Javascript frameworks. Frameworks are tools written in Javascript to render content on the formal applications. Popular: React, Vue, Angular -- these add an abstraction layer on top of Javascript to do things in a more streamlined and efficient way. For example, React uses JSX instead of numerous createElement calls. These new coding conventions (JSX, etc), rely on tools like babel, webpack, and node.js
6. Build tools for Javascript Frameworks: helper applications used to turn human-friendly code into super-browser-friendly code.
7. Node.js: In recent years, Javascript has migrated from the browser to the server. Node.js is the server run-time used to run javascript everywhere. It is used to run the node package manager, webpack, babel, and more on the computer. You'll be interacting with node all the time through the node package manager or npm
8. Takeaway: Pure Javascript is the core language for everthing listed above. Understanding pure javascript is key to understanding all of the above.

### [1.3] Tools:
1. Browser: All modern browsers, and one primary (chrome)
2. Code editor: VS Code (industry standard)
3. Some live server environment -- can achieve with VS Code Extension (Live Server)
4. Some browser console

### [1.4] Formatting and Linting
1. Prettier --- basically, prettier indentation
2. ESLint --- basically, a spell-check for javascript. It helps with automatically detecting code errors and can do basic cleanup automatically. Ensures you are following the standards. (The red underline)
3. Node.js (required) -- for both of these tools to work, we need to use node.js to install necessary background functions (mac comes with node)
- The terminal is a command line for the computer where you can do things like install new extensions
- when you do npm install, that install every dependancy listed in the package.json. These are all the dependencies required for the project to work. The command will generate a node_modules folder which houses all the data required from all of these dependencies (like prettier and ESLint)

### [1.5] Browser Console (aka web developer's best friend)
- When we write code, we work in a code editor. BUT, javascript doesn't run in the code editor, it runs in the browser. So there are often situations where, the code editor will not reveal any errors (since there are no errors in the code syntax). But if the expected behavior does not render, its likely an issue with the javascript logic. You can also, directly interact with the browser through the browser console.
- can grab the variables in our code, open them up and see what properties they hold. No, like, literally, type an internal variable. It shows properties in alpha order.
- Essentially, you can manipulate the DOM throught the browser console. You can follow variables and debug.
- As of now, all you need to know is how to open it and how to clear it.

### [1.6] Javascript Language Basics
1. Write your Javascript from top to bottom because thats how the browser reads it.
- Good rule of thumb: define all variables and functions at the top, before you ever use them. That way, you can be sure, that the brower has registered the variables, or functions
2. Comments are notes you leave for other humans
- also used to quickly deactivate and activate lines of code for debugging purposes.
3. Spacing is purely for the humans.
- you can take all of the spaces out and have the entire code in one line and the computer will understand it.
- best practive: use indentation to indicate heirarchy
- can configure tab width (amount of spaces)
4. Semicolons
- some devs do, some devs dont
- javascript does not care
- prettier will enforce this
5. Quotation Marks
- double quotes or single quotes
- doesnt matter
- prettier will enforce something
- just be consistent in what you are doing

### [1.6] Learning Javascript Backwards
* Since most developers start in some framework these days, their first interaction with Javascript is advance objects and methods.
* So then, this is the order of the course:
1. Objects and Methods
2. Data Types and the DOM
3. Methods, functions, and events
* Therefore, you'll see things in their real context first, and you'll learn the basics later
* There's a good reason for this: it helps you make sense of how everything fits together.
* He has placed ample links to MDN Web Docs, so that we are able to develop a document based practice
