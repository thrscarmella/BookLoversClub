import BookDecorator from "./BookDecorator.js";

class MembershipBonusDecorator extends BookDecorator {
    constructor(book, discountPercent) {
        super(book);
        this.discountPercent = discountPercent;
    }

    getDescription() {
        return super.getDescription() + ` + Membership Bonus ⭐ (${this.discountPercent}% off)`;
    }

    getCost() {
        return super.getCost() - (super.getCost() * (this.discountPercent / 100));
    }
}

export default MembershipBonusDecorator;