import CartObserver from "./CartObserver.js";

class CartTotalObserver extends CartObserver {
    update(data) {
        const totalEl = document.getElementById("cart-total");
        if (!totalEl) return;
        totalEl.textContent = `💰 Total: ₱${data.total}`;
    }
}

export default CartTotalObserver;