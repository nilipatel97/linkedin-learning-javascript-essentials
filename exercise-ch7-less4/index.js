document.body.style.backgroundColor = "pink";

// Task 1: Create an array with 5 items

const states = ["California", "Ohio", "New York", "Texas", "New Jersey"];
console.log("===== TASK 1 =====");
console.log("original array", states);

// Task 2: Remove the last item from the array

const fruits = ["apple", "banana", "orange", "pear", "grape"]
console.log("===== TASK 2 =====")
console.log("original array: ", fruits);
fruits.pop();
console.log("updated array: ", fruits);

// Task 3: Move the last item of the array to the first slot.

const colors = ["blue", "green", "yellow", "red"];
console.log("===== TASK 3 =====");
console.log("original array: ", colors);
const lastItem = colors.pop();
// console.log(lastItem); // confirmed that the pop method stored the value in the variable
colors.unshift(lastItem);
console.log("updated array: ",colors);

// Task 4: Sort items of the array in alphabetical order.
const subjects = ["calculus", "biology", "chemistry", "physics", "algebra"];
console.log("===== TASK 4 =====");
console.log("original array: ", subjects);
subjects.sort();
console.log("updated array: ", subjects);

// Task 5: Find specific item in an array.
const numbers = ["sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
console.log("===== TASK 5 =====");
console.log("original array: ", numbers);
const selected = numbers.find((item) => (item === "seventeen"));
console.log("desired object: ", selected);

// Task 6: Find specific item in an array and remove it.
const greek = ["alpha", "beta", "gamma", "delta", "epsilon"];
console.log("===== TASK 6 =====");
console.log("original array: ",greek);
const selectedIndex = greek.indexOf("delta");
greek.splice(selectedIndex, 1);
console.log("updated array: ",greek);

// CHALLENGE: Find items in the array that match your query and remove them.
const collection = ["ohio", "pear", "red", "fifteen", "algebra", "nineteen"];
console.log("===== TASK CHALLENGE =====");

console.log("original array: ", collection);

const matchingQuery = [];
collection.forEach((item) => {
if (item.toString().includes("teen")){
    matchingQuery.push(item);
    collection.splice((collection.indexOf(item)), 1);
}
})

console.log("array of matches: ", matchingQuery);
console.log("updated array (after splice): ", collection);