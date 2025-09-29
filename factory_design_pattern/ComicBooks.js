class ComicBook extends Books {
    constructor(title, author, price) {
        super();
        this.title = title;
        this.author = author;
        this.price = price;
    }

    printBooks() {
        console.log(`Comic Book: ${this.title} by ${this.author}, Price: $${this.price}`);
    }
}