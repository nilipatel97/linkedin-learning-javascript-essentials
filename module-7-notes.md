## [7] Arrays

### [7.1] Arrays Explained
* Always picture a rack with slots
* Can add, remove, remove, reorder object in an array. Can replace or change objects in an array.
* Arrays are so powerful -- they have so many functions and methods associated with them to help us do what we desire.
* Some methods: pop, push, shift (take off), unshift
* Other methods: reverse, sort, slice, join, etc

### [7.2] Arrays in Code
* An array is an instance of the array object.
* We declare a new array like this: `const fruitArray = ["apples", "bananas", "oranges"]`

Fact: Can mix several different data types within an array (even an object or another array):
```
const arrayVar = "beach";

const mixedArray = ["octopus", 5, undefined, arrayVar, 7, true]
```

Fact: Arrays have an inherant length property
```
const arrayVar = "beach";
const mixedArray = ["octopus", 5, undefined, arrayVar, 7, true];

console.log(mixedArray.length); // result: 6
```

Fact: Every item in an array has an index number
```
const arrayVar = "beach";
const mixedArray = ["octopus", 5, undefined, arrayVar, 7, true];

// to get a hold of the fourth item...
console.log(mixedArray[3]); // result: beach
```

Fact: Can directly replace a value in the array
```
const arrayVar = "beach";
const mixedArray = ["octopus", 5, undefined, arrayVar, 7, true];

// to directly replace an item...
mixedArray[0] = "chimpanzee";
console.log(mixedArray); // ["chimpanzee", 5, undefined, arrayVar, 7, true];
```

Fact: Can directly add an item to the end of an array using the length property
- one way to do this is with the `length` property, becuase the `length` property has the same number as the index of the next imagined item (risky; "push" preferred)
```
let item;

const collection = ["Piggy", item, 5, true];

collection[collection.length] = "new item";
```

Fun Fact: can also assign a value to slot further down that doesn't exist yet. the skipped slots in between will be 'undefined'.
```
let item;

const collection = ["Piggy", item, 5, true];

collection[8] = "ninethItem";

// so now...

console.log(collection[5]) // result undefined;
console.log(collection[8]) // result "ninethItem"
```

### [7.3] Arrays Methods
- Thorough documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
- All array methods are heavily documented with examples in MDN Web Docs

SAMPLE: common task, print the contents of an array
```
let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);
```

SAMPLE: common task, output contents in the array separated by something;
```
let backpackContents = ["piggy", "headlamp", "pen"];

//use the join method on the array object
console.log(backpackContents.join(", "));
console.log(backpackContents.join(" | "));
```

SAMPLE: common task, add one or more items to the end of an array. Preffered: push method
```
let backpackContents = ["piggy", "headlamp", "pen"];

// use the push method on add objects directly to the end of the array
// push method takes a comma-separated list

console.log(backpackContents.push("alpha, beta, gamma"));

// result: ["piggy", "headlamp", "pen", "alpha", "beta", "gamma"];
```

SAMPLE: common task, add one or more items to the front of an array. Preffered: unshift method
```
let backpackContents = ["piggy", "headlamp", "pen"];

// use the unshift method on add objects directly to the front of the array
// unshift method takes a comma-separated list

console.log(backpackContents.unshift("uno, dos, tres"));

// result: ["uno", "dos", "tres", "piggy", "headlamp", "pen"];
```

SAMPLE: advanced, can apply functions to each item in an array
TASK: output each item of the array as a list item in the console

```
let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

backpackContents.forEach((item) => { 
    item = `<li>${item}</li>`;
    console.log(item);
    })

```

TASK: return the first item you find that is more that 5 characters 

```
let backpackContent = ["piggy", "headlamp", "pen"];

cosnt longItems = backpackContents.find((item) => {
    if(item.length>5){
        return item;
    }
})

console.log("Long Items: ", longItems);
```


