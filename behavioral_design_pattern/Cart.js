import CartSubject from "./CartSubject.js";

class Cart extends CartSubject {
    constructor() {
        super();
        this.items = [];
    }

    addItem(book) {
        this.items.push(book);
        this.notify(this.getCartState());
    }

    removeItem(bookTitle) {
        this.items = this.items.filter(item => item.title !== bookTitle);
        this.notify(this.getCartState());
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getCartState() {
        return {
            items: this.items,
            total: this.getTotalPrice()
        };
    }
}

export default Cart;