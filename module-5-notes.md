## [5] DOM

### [5.1] DOM: The Document Object Model

### [5.2] Access elements with querySelector methods

#### querySelector Method (new! should use this all the time)

* Anytime you want to do something in the DOM, you start with finding the element or the elemets you want to work with.
* For this, we have to methods: querySelector and querySelectorAll
* These methods use the standard CSS queries to climb throught the DOM tree and find the specified elements

```
Can grab by selector:
* document.querySelector("h1");

Can grab by id:
* document.querySelector("#container-1");

Can grab by class:
* document.querySelector(.section)

```

* The query selector method will return a whole DOM OBJECT (yes, it is a pure javascript object)!
* FUN FACT: can use any CSS query
* The querySelector method returns the FIRST object that matches the query.

#### querySelectorAll Method (new! should use this all the time!)
* This method returns a node list (an array) of all of the DOM objects that match the selector.
* Example: document.querySelectorAll("main li");
* This will return a node list or array.
* We can go through this array with a forEach method, to go through each item in the array and do something specific

```
document.querySelectorAll("main li").forEach((item) => item.style.backgroundColor = "pink");
document.querySelectorAll("main li" last-child").forEach((item) => item.style.backgroundColor = "pink");

```

### [5.3] Access elements with querySelector methods

#### getElementsByClassName Method (original! great, but falling out of favor)

* returns an array-like object of all the nodes matching the query --> an HTML collection (literally the same thing as a node list)
* even if theres only one matching object, you'll get it in an array and will have to iterate through the array to access the item.

#### getElementsById Method (original! great, but falling out of favor)

### [5.4] Practice: Find an Element
* Finding objects on the dom tree needs to be second nature

### [5.5] Modifying element classes

* A common task is javascript is to modify the classes of an element in some way. Example: add/remove a class to an element
* Examples: hiding or showing a panel

* We have two specialized properties for class manipulation: 
1) element.className (DO NOT USe: older and problematic!)
2) element.classList (newer and nicer)

#### element.className (do NOT use)
* this is a property that you can reset
```
document.querySelector("h1").className;

// this returns: "backpack_name"

// again, this is a property that you can reassign to any other value

document.querySelector("h1").className = "another_class;

```
* PROBLEM:
- this ofcourse replaces the existing classes.
- so if you wanted to just add a class, you would have to type the existing classes AND the class you want to add!

* A MORE SERIOUS PROBLEM:
- In react and other Javascript FRAMEWORKS, the term className is used in place of class in markup TO AVOID collisions with the javascript "class" keyword
- The Javascript "class" keyword is used to set up classes.
- Therefore, using the className property to modify the classList is detrimental

#### element.className (use this all the time!)
- This property gives us a "DOM Token Collection" (array) of all the classes on an element
- Can work with each of these properties individually; not required to replace the entire string
- This property is POWERFUL because it comes with its own set of methods to manipulate the individual classes!!

METHODS:
1. ADD --> to add classes to an element
--> `document.querySelector("li").classList.add("new-class another-class")` 
2. REMOVE  --> to remove a class on an element
--> `document.querySelector("li").classList.remove("another-class")`
3. TOGGLE --> to add a class if it is not there and to remove it if its there (true/false)
--> `document.querySelector("li").classList.toggle("new-class")` 
4. REPLACE --> to specify a class and replace with a different class
--> `document.querySelector("li").classList.replace("another-class", "novel-class")`

### [5.6] Attribute - manipulating attributes with four methods
* Javascript can be used to modify the attributes of any element
* Element.attribute returns something different -- it returns a NamedNodeMap (not an array)
* Reason: an attribute is a more complex piece of data ... has a key and value

Let's work with <img src="www.google.com/image" alt="an image from google">

GETTING THE NAMED NODE MAP:
* `document.querySelector("img").attributes;`

FOUR ATTRIBUTE METHODS: 
* To see if an element has a particular attribute:
- `document.querySelector("img").hasAttribute("title");`
- returns true/false
* To see what the attribute contains, you can getAttribute:
- `document.querySelector("img").getAttribute("src");`
- browser will return the value (right side of equal sign)
* To set the value of an existing attribute or create a new attribute
- `document.querySelector("img").setAttribute("alt", "update text");`
* To remove an attribute:
- `document.querySelector("img").removeAttribute("alt");`

* These are all four of the functions you would need to manipulate any attribute of an element
* IMPORTANT: classes are also attributes. So we can use these attribute methods to manipulate classes as well.

### [5.7] Inline Styles
Let's work with `<div class="site-title" style="color: black">BackpackPacker</div>`
- Let's get the style: `document.querySelector(".site-title").style`
* This returns the *CSSStyleDeclaration" object, which is the list of all the possible style properties. The ones that are applied are listed on top.
* Technically can use the cSSText property and put in all the of style declarations. (NOT PREFERRED).
* Do it this way `document.querySelector("site-title").style.backgroundColor="pink"`
* Set each property individually
* CAMEL CASE

### [5.8] Practice: Modify classes and attributes and styles
* Being able to quickly access, modify, add, and remove classes, attributes, and in-line styles from any element in the DOM is THE most useful thing
* You can: 
1) Indicate a state change of an element (by adding/removing a class)
2) Pass data from one element to another (add a data attribute --> )
3) Change the appearance of a specific element for some reason (add an inline style)

* Practice (TODO):
1. Find an element and add two different classes. Then remove only one of those classes.
2. Add a new attribute to an element (standard: src and alt) (data attribute // to pass literally any data you want // naming convention: "data-[name]")
3. Request the value of the attribute you added. Then change the value of that attribute
4. Add some inline CSS to an element by specifying the style property, and setting its value
5. Query the style property of an element, to get a list of all properties available to you

### [5.9] Add DOM Elements (essential, hence there is a huge toolkit for it)
* Before, we added a new element to the DOM by grabbing an element on the DOM and replacing the content within it. This is effective BUT destructive.
* Two methods to know: `document.createElement()` and `document.appendChild()` (as well as all of the other variations!)

```
// CREATE ELEMENT: 

const newArticle = document.createElement("article") // this creates <article />
newArticle.classList.add("backpack"); // to add a class
newArticle.setAttribute("id", "everyday") // to add an id
newArticle.innerHTML = content; // the template literal content.

// APPEND ELEMENT:
const main = document.querySelector(".maincontent");

main.append(newArticle); // this appends the new element (or several comma-separated element) to the end of the parent node.
```
* There are many other append methods worth exploring
1. To add an element as the first child of the parent --> use parentNode.prepend
2. To replace a child element --> Node.replaceChild()
3. To insert an element before the parent element --> Node.insertBefore()
4. To insert an element at a specific position --> targetElement.insertAdjacentElement(position, element)


