import Book from "./Book.js"; // make sure this has the .js extension

const twilight = new Book("Twilight", "Stephanie Meyer", 2005, 498, true, 1)
console.log("BOOK 1: ",twilight);
console.log("age of Book: ",twilight.ageOfBook());
console.log("***********")

const animalFarm = new Book("Animal Farm", "Geroge Orwell", 1945, 112, false, 2)
console.log("BOOK 2: ",animalFarm);
console.log("original floor: ", animalFarm.floor);
animalFarm.changeFloor(5);
console.log("new floor: ", animalFarm.floor);
console.log("***********")

const mockingbird = new Book("To Kill a Mockingbird", "Harper Leee", 1960, 281, false, 3)
console.log("BOOK 3:",mockingbird);
console.log("***********");

const mobyDick = new Book("MobyDick", "Herman Melville", 1851, 635, false, 4)
console.log("BOOK 4: ", mobyDick);
console.log("Title: ", mobyDick.title);
console.log("***********");

const uncleTomsCabin = new Book("Uncle Tom's Cabin", "Harriet Beecher Stowe", 1852, 266, true, 5)
console.log("BOOK 5: ", uncleTomsCabin);
console.log("author: ",uncleTomsCabin.author);
console.log("age of book: ", uncleTomsCabin.ageOfBook())
console.log("***********");