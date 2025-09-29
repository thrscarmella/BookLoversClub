import Books from "./Books.js";

class FictionBook extends Books {
    constructor(title, author, price) {
        super();
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getDescription() {
        return `Fiction Book: ${this.title} by ${this.author}`;
    }

    getCost() {
        return this.price;
    }
}

export default FictionBook;