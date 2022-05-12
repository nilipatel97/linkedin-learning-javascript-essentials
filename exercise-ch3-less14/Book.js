export default class Book {
    constructor(title, author, yearPublished, pages, hardCover, floor){
        this.title = title;
        this.author = author;
        this.year = yearPublished;
        this.pages = pages;
        this.hardCover = hardCover;
        this.floor = floor;
    }

    changeFloor(newFloor){
        this.floor = newFloor;
    }

    ageOfBook(){
        const currentYear = 2022;
        const ageOfBook = currentYear - this.year;

        return(ageOfBook);
    }

}