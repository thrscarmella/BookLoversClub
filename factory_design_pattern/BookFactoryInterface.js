class BookFactoryInterface {
    createBook(type, title, author, price) {
        throw new Error("Method 'createBook()' must be implemented.");
    }
}

export default BookFactoryInterface;