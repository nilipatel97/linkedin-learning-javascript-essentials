## [3] Objects

### [3.1] Objects: A practical introduction

* Javascript is a prototype-based, object-oriented programming language. 
* In other words, with javascript, we are working with objects and these objects are based on prototypes.
* Again, in simpler terms, Javascript works the same way humans work with objects in real life. Javascript object = Real life object.
* Therefore, the quickest way to understand javascript is to understand objects and how they work.

* Each object is a unique instance of an object prototype.
* He has many backpacks. The reason he can say they are backpacks is that they share common properties which prove they belong to the backpack category (has two straps, and opening at the top)

* Objects hae features built into them allowing us to change their property values: zippers, lids, strap adjusters
* In javascript, these property-adjusting features are called methods. (Ex: 1) Method for opening and closing backpack 2) method for lengthening the straps)

* Objects can contain other objects. The headlamp. The headlamp is a property of the backpack for as long as it is in there. Headlamp has own set of properties/methods

### [3.2] Javascript Objects: a code version

* Javascript objects are collections of data and functionality stored as properties and methods, that describe the object and what it can do.

* Javascript Object: The curley braces define data as an object.
`const backpack = {}. `

* Properties: a key-value pair. An object can have as many properties as wanted. Can also have other objects
```
const backpack = { 
    color: "gray",
    strapLenght: { 
        left: 26, 
        right: 28
        },
}.
```

* Methods: an object can also have methods used to change the properties of an object. In an object, methods are also name-value pairs. The value is a function.

```
const backpack = { 
    color: "gray",
    strapLenght: { 
        left: 26, 
        right: 28
        },
    lidOpen: false;
    toggleLid: function(lidStatus){
        this.lidOpen = lidStatus;
    }
}.
```

* The `this` keyword: refers to the current object

### [3.3] Object Containers

* Objects are typically constants. Once you store some content into the constant, you can't take them out and redefine the object. 
* If you try to assign some value to the constant after is has been defined, the error will say: "Assignment to constant variable"
* Once we create an object, we might want to change its properties but we never want to change it to something entirely different.
* Making the objects a constant ensures that you can't accidentally destroy the objects while working with them

### [3.4] Object Properties

* Literally the properties of the object
* They describe different aspects of the object.
* Defined using a colon-separated name-value pair.
* The property names: can only contain letters, digits, dollarsigns, underscores. Rule of thumb: camelCase.

### [3.5] Accessing Objects
* Can access object with console.log
* Example: `console.log("The backpack object: ",backpack)`
* Calling an object in javascript is the same as picking up an object in the real world. You get the entire object along with its properties and functions.
* Accessing an entire object is useful in very little cases. Usually, we access properties.

### [3.6] Accessing Objects Properties
* There are two ways of accessing object properties: 
- dot notation (preferred)
- bracket notation (more clunky, but gives more control -- only used when you need to use variable, or when you need to use a non-standard variable name)

This is dot notation:
```
console.log("The backpack object: ", backpack);
console.log("The pocketNum value: ", backpack.pocketNum);
console.log("Strap Length (Left): ", backpack.strapLength.left);
```

This is bracket notation: 
- need to wrap the property name in quotation marks and square brackets.
```
console.log("The pocketNum value: ", backpack.["pocketNum"]);
```

Bracket notation allows us to do more advanced things, like creating and using variables. If you place a variable directly inside dot notation, the script will break.
```
var query = pocketNum

console.log(backpack["query"]);

```

Another use case for bracket notation: a property name that breaks convention. 
You'd never write properties with poor names but sometimes generated data will have poorly named properties.
You cannot access hyphenated properties with dot notation, but can with bracket notation.

```
console.log("The pocketNum value: ", backpack.["property-hyphenated"]);
```

### [3.7] Practice: Building a new object

```
const pencilcase = {
    shape: "rectangle",
    color: "blue",
    material: "plastic",
    dimensions: {
        width: "21 inches",
        length: "7 inches",
        height: "3 inches"
    },
    caseOpen: false,

}

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
```

### [3.8] Object Methods
- a method is a function sitting inside objects

```
console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15); // call the method, and pass in some values

console.log("Left after:", backpack.strapLength.left);

```

How methods work:
1) we define them inside the object
2) we call them using dot notation
3) we pass parameters to them
4) changes happen accordingly

### [3.9] Practice: Build a new method
- In the practice file, there is an object with a bunch of different properties (strings, numbers, booleans)
- Task: create new methods in the object to change each property. So, about 5 methods.
- Important things to remember:
1. We pass values to a function by placing them inside parenthesis
2. From within an object method, we refer to the current object as "this"
3. Assign any value to any property. Once you can access a property from within a method, you can change it to any value you would like.

```
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    lidOpen: false,
    strapLength: {
      left: 26,
      right: 26,
    },
    setName: function(newName){
        this.name = newName;
    },
    setVolume: function(newVolume){
        this.volume = newVolume;
    },
    setColor: function(newColor){
        this.color = newColor;
    },
    setPocketNum: function(newPocketNum){
        this.pocketNum = newPocketNum;
    },
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
      },

  };
```

Here, I have create several methods within the object. One to manipulate each property.

### [3.10] Classes: Object Blueprints
* Using a class to create an object template allows us to define the property and method structure for all the objects created with that class, without having to redeclare them over and over.
* Also, if a property or method needs to be changed, you can change it in the class, and all the objects created from that class will update automatically

* There are two methods to create a this === a "class" and an "object constructor function". Both have the same end result.
* CLASS: now, the preferred tool for creating object.
- allows us to do more things -- extend classes, add new features to them that are not in the object constructor function.
* FUNCTIONS: object constructor functions used to be the only way to create an object; you will see this a lot in old code. Should know how to read it and work with it, but shouldn't use it to create anything.

* Conclusion: use a class unless you are required to use an object constructor function (like an old code base).

