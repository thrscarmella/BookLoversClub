import Books from "./Books.js";

class BookDecorator extends Books {
    constructor(book) {
        super();
        this.book = book;
    }

    getDescription() {
        return this.book.getDescription();
    }

    getCost() {
        return this.book.getCost();
    }
}

export default BookDecorator;