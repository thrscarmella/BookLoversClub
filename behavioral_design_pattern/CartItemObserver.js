import CartObserver from "./CartObserver.js";

class CartItemsObserver extends CartObserver {
    update(data) {
        const list = document.getElementById("cart-items");
        if (!list) return;
        list.innerHTML = "";
        data.items.forEach(item => {
            const li = document.createElement("li");

            const left = document.createElement("span");
            left.textContent = item.title;

            const right = document.createElement("div");
            right.style.display = "flex";
            right.style.gap = "8px";
            right.style.alignItems = "center";

            const price = document.createElement("span");
            price.textContent = `₱${item.price}`;

            const btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.setAttribute("data-remove", "");
            btn.dataset.title = item.title; // safe even if title contains quotes

            right.appendChild(price);
            right.appendChild(btn);
            li.appendChild(left);
            li.appendChild(right);
            list.appendChild(li);
        });
    }
}

export default CartItemsObserver;