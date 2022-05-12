import Backpack from "./Backpack.js";
import PencilCase from "./PencilCase.js";
import House from "./House.js";
/******************************************* */
console.log("********************************")
const workBackpack = new Backpack(
  "Nili's Work Backpack",
  20,
  "grey",
  8,
  17,
  17,
  true
);

console.log("This is Nili's work backpack:", workBackpack);

/******************************************* */
console.log("********************************")
const workPencilCase = new PencilCase(
  "Nili's Work PencilCase",
  "Nili Patel",
  8,
  4,
  2,
  "grey",
  "cotton",
  false
);

console.log("This is Nili's work pencil case:", workPencilCase);

console.log(
  "This is the volume of ",
  workPencilCase.name,
  ": ",
  workPencilCase.calculateVolume()
);

/******************************************* */
console.log("********************************")
const inmanHouse = new House("The Patel Household", "963 Inman Avenue.", 2001, 6000000, 2400, 4, 3, 15000);

console.log("The inmanHouse object:", inmanHouse);
console.log("House Name: ", inmanHouse.houseName);
console.log("Cost of House: ", inmanHouse.cost);
inmanHouse.setCost(8000000);
console.log("New Cost of House", inmanHouse.cost);
console.log("Selling Point: ", inmanHouse.enthustiasticPitch());
