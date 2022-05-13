## [6] Sidebar: Variables and Data Types

### [6.1] Variables: Containers for Everything
- With variables, we are creating named containers to put objects within
- That container can hold anything, really: 
1. Can be a single object, like ball
2. Can be an array of objects, like beads
3. Can be numerical value, like 5
4. Can be string of text, like "hello"

- So then variables are containers that hold some data
- First create a `variable`, then set its `contents` using the `=` symbol 

- When he says a container is created, he means that very literally. We effectively carve out space in the computer memory and place something in that space
- We can compare, combine, and even do math with them.

### [6.2] Var
FACT: `var` is mutable! can grab the variable, and assign it something new!
```
var container = 5

container // returns 5

container = "red"

container // returns red
```

FACT: `var` was the defualt for all variables for decades

FACT: `var` is also the defualt when you forget to define which type of variable.
```
container="hello!"
```

FACT: Can define multiple different variables altogether.
```
var x=4, y=5, z="blue"
```

FACt: can create variables that don't have any content yet
```
var empty; // value is "undefined"
```

### [6.3] Var Scope Issue (global, and can be reassigned)
FACT: var is a globally scoped variable.
* If you create a variable inside or outside of a function, it applies to the whole document.
* JavaScript reads top-down - can reassign value of var 
and the assignment applies everywhere in the document after the instance
doesnt matter if something is inside or outside function block
* This inefficiency has been a pain in JS developer's bums for decades.
* Therefore, we have ditched var for two new locally scoped variable -- let and const.

### [6.4] Let (Local & can be reassigned)
* Let statement defines a block-scoped local variable -- aka, only defined within currently enclosed block
* Local scope, so avoids the scope issue we have with var
* If you call a locally scoped variable outside its local scope, console error: reference error, variable not defined.
* Gives us complete control over when a variable exists and what we can use it for
* Only use `let` when you want a mutable variable

### [6.5] Const
* Const statement defines a block-scoped constant -- once assigned, cannot assign new value to it
* If you try to assign a new value to a const variable, you'll see a console error: Assignment to const variable

If you violate an assignment of a variable, the IDE will not reveal an error, but the browser console will.
In addition, the error that will cause javascript to stop reading, so the rest of the page will not render

* `const` is safer. You can be sure that there is no risk of the variable accidently being changed

* Clarification, you can definitely manipulate what is inside a const variable. You just can't assign something completely new.

### [6.6] Data Types
* What sorts of values can be placed inside a variable? Pretty much anything.
* In javascript, you don't need to declare the "type" of the variable you're filling. You can just fill a variable. Javascript will identify the type for us.
*

```
// String:
let stringDemo = "A string of text.";
console.log("String:", stringDemo);

// Numbers:
let integerDemo = 4;
console.log("Integer:", integerDemo);

let floatDemo = 5.6;
console.log("Floating point number:", floatDemo);

// Boolean:
let booleanDemo = true;
console.log("Boolean value:", booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log("Null value:", nullDemo);

// Undefined:
let undefinedDemo;
console.log("Undefined:", undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log("Undefined assigned:", undefinedAssignedDemo);

// Object (key-value):
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo);

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo);

```
* Javascript does not care what type of variable you store in a variable
* However, if you wanted to find out the type of a variable you can use typeOf(variable)

### [6.7] Assignment vs comparison
##### The `=` Symbol (used for assignment)
* In Javascript, the `=` symbol is used for assignment. 
* IMPORTANT TAKE AWAY: the value on the right is assigned to the value on the left.

##### The `==` Operator ( a lose comparison)
* In Javascript, the `==` operator is used to do a loose comparison.
* Purpose: to check if the values are the same ... but NOT Absolutely the same
* Checks only for value equality.
```
5 == "5" // this is *true* , because they LOOK the same, even though we are comparing a number and a string
```

##### The `===` Operator ( a lose comparison)
* In Javascript, the `===` operator is used to do a absolute comparison.
```
5 === "5" // false
5 === 5 // true
"five" === "Five" // false
```

Other comparison operators:
* > : greater than
* < : less than
* != : not equal (exclamation point is a bang!) 
* !==: no absolutely equal


### [6.8] Math Operators
##### Standard arithmetic operations
* Addition : a + b
* Subtraction : a - b
* Multiplication : a * b
* Division : a/b
* Also, basically, PEMDAS

##### Other
* Modulus: a%b, gives us the remainder
* Exponents: a**b, gives us a^b

##### Incrementing and Decrememnting:
* ++ or -- in front
```
let a = 15;
console.log(++a); // result is 16
console.log(--a); // result is 14

```

* ++ or -- after the variable
```
let b = 18;
console.log(a++); // 18
console.log(a); // 19

let c = 23;
console.log(b--); // 23
console.log(a); // 22
```

##### Strange behavior with "+" operator when using true numbers with string

```
// ISSUES with "+" Operator
15 + 4 = 19
15 + "4" = 154 // + symbol functions as a string combiner

// No issues with "-" Operator
15 - "4" = 11


```


the stuff on the right goes into the stuff on the left!!!!!!!!!! I think

think of tranparent containers