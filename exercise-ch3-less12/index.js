import Backpack from "./Backpack.js";
import PencilCase from "./PencilCase.js";

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
