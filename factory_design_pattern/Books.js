class Books {
    constructor() {
        if (new.target === Books) {
            throw new TypeError("Cannot construct Books instances directly");
        }
    }

    printBooks() {
        throw new Error("Method 'printBooks()' must be implemented.");
    }
}