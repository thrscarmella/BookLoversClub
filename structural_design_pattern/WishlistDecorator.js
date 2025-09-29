import BookDecorator from "./BookDecorator.js";

class WishlistDecorator extends BookDecorator {
    getDescription() {
        return super.getDescription() + " + Added to Wishlist 📝";
    }
}

export default WishlistDecorator;