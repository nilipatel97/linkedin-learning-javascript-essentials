## [1] Javascript: A Brief Introduction

### [2.1] Javascript in an HTML document

Where does the Javascript live? Where do you actually write the Javascript?

- Two options: in-line or external file.
- The HTML file in folder 02_01, you'll find a self contained HTML document. The styles and javascript are in-line,

The [script] tag is how we add Javascript to a document

- Anything in the script tag will be interpreted by the browser as javascript.
- The script tag can be placed anywhere in the document! Technically, it would go in the head section since it is a meta part of the document (aka not part of the actual document).
- However, it is usually placed towards the bottom inside the body tag, for good reason.
- The browser reads line-by-line and anytime it sees javascript, it stops. It executes the javascript, and then continues reading.
- If the javascript is trying to do something to something on the page, it has be executed, after the object has been rendered.
- That being said, this is still an anti-pattern
- This is fine ... theres no need to debate this any longer, because there are better technologies out anyways.

### [2.2] Javascript as an external file

- Writing Javascript within the HTML Document has a very small use case. Optimal only when you only have a little bit of javascript and that javascript only applies to the current document.
- In most cases, when we write Javascipt, we will have a lot of Javascript, and we will want to apply that logic to a lot of different files.
- It is best to take the javascript, put it in its own file, and just reference that javascript file when needed.
- This is how you would reference the external javascript within the HTML document: `<script src="script.js"></script>`
- Sometimes you might get an error that says script cannot find body. In this case, you should move the script to after the body.(not a solution, a hack)

### [2.3] Modern Javascript Loading (Async and Defer)

- From here on our we will place our `<script src="script.js"></script>` in the head, and use the "asynch" and "defer" keywords for modern loading.
- There are three processes happening: HMTL parsing, JS download, JS execution

- Async: `<script src="script.js" aync></script>` 
* The browser parses HTML. When it encounters javascript, it continues parsing html while it downloads Javascript. Then it stops parsing HTML while the loaded JS executes. Then it continues parsing the HTML.
* Creates a smaller render block
* Decent approach if you can put up with some render blocking.

- Defer: `<script src="script.js" defer></script>` 
* 1) Browser parses HTML 2) when it encounters JS, browser continues parsing HTML and downloads JS at the same time, 3) Browser will execute JS, only after all the HTML is parsed

- Conclusion:
* Async and defer should be the standard. ALWAYS use them for safety.
* Only use the plain script tag (without asynch/defer) or place script toward bottom ... if you have a specific reason. The instructor has never encounted such a situation.
* While `<script src="javascript.js"></script>` is technically correct, it is recommended to always async or defer your script unless you have a specific reason for the script to cause render blocking.

### [2.4] Javascript Modules
* Modules are cutting edge javascript. Making modulesand import/export is standard practice in React and other frameworks
* Javascript files can get really large and cumbersome to work with
* Javascript modules allow us to 1) break pieces out of a massive javascript file and 2) place them in a separate file and 3) import them back into the original file
* Can usually just lift the code you want to break out, place it in a separate file, and tack on export defualt "backpack"
* By making a backpack.js file, we're saying, this exportable entity called "backpack" can be used by any othe file if it is imported into that file
* Even though backpack was broken out of the main file, since it was imported back in, it works as if it was sitting in the same index.js file.
* To get the modules to work, you have to do one more thing
* Inside index.html, you have to tell the browser that 1) there are two js files now and that 2) both of them are "type=module"
* This tells the browser that these two files may rely on each other an its important that they are both loaded for things to work properly.
* Interestingly, by putting "type=module", the browser automatically defers the loading.

* There is one caveat. Remember that you could access variables and objects directly in the chrome console? In this example you can't since the object sits in another file.
* This demonstrates that not all things should be pulled out into modules. Some things should remain in the main file.
* To that point, putting an object in a module is not a good idea. But putting a class in a separate module makes a lot of sense
