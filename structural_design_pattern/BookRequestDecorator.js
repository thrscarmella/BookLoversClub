import BookDecorator from "./BookDecorator.js";

class BookRequestDecorator extends BookDecorator {
    constructor(book, requestNote) {
        super(book);
        this.requestNote = requestNote;
    }

    getDescription() {
        return super.getDescription() + ` + Book Request: "${this.requestNote}"`;
    }
}

export default BookRequestDecorator;