// --- STRUCTURAL (Decorator) ---
import BookRequestDecorator from "./structural_design_pattern/BookRequestDecorator.js";
import MembershipBonusDecorator from "./structural_design_pattern/MembershipBonusDecorator.js";

// --- CREATIONAL (Factory) ---
import BookFactory from "./factory_design_pattern/BookFactory.js";

// --- BEHAVIORAL (Observer) ---
import Cart from "./behavioral_design_pattern/Cart.js";
import CartItemsObserver from "./behavioral_design_pattern/CartItemObserver.js";
import CartTotalObserver from "./behavioral_design_pattern/CartTotalObserver.js";

// Setup initial products (type must match factory switch)
const products = [
  { type: "Fiction", title: "The Hobbit", author: "J.R.R. Tolkien", price: 500 },
  { type: "Fiction", title: "The Hunger Games", author: "Suzanne Collins", price: 679 },
  { type: "Fiction", title: "Catching Fire", author: "Suzanne Collins", price: 720 },
  { type: "Fiction", title: "Mockingjay", author: "Suzanne Collins", price: 713 },
  { type: "Fiction", title: "Sunrise on The Reaping", author: "Suzanne Collins", price: 1295 },
  { type: "Fiction", title: "If We Were Villains", author: "M.L. Rio", price: 649 },
  { type: "Fiction", title: "The Housemaid", author: "Freida McFadden", price: 642 },
  { type: "Fiction", title: "Yellowface", author: "R.F Kuang", price: 879 },
  { type: "Fiction", title: "Normal People", author: "Sally Rooney", price: 628 },
  { type: "Fiction", title: "Picking Daisies on Sundays", author: "Liana Cincotti", price: 921 },
  { type: "Fiction", title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: 644 },
  { type: "Fiction", title: "Daisy Jones and The Six", author: "Taylor Jenkins Reid", price: 413 },
  { type: "Fiction", title: "The Poppy War", author: "R.F. Kuang", price: 649 },
  { type: "Comic", title: "Spider-Man", author: "Stan Lee", price: 350 },
  { type: "Comic", title: "Batman/Superman: World's Finest Vol. 1: The Devil Nezha", author: "Mark Waid", price: 879 },
  { type: "Comic", title: "Batman/Superman: World's Finest Vol. 2: Strange Visitor", author: "Mark Waid", price: 1099 },
  { type: "Comic", title: "Nightwing: Fear State", author: "Tom Taylor", price: 879 },
  { type: "Comic", title: "Nightwing Vol. 2: Get Grayson", author: "Tom Taylor", price: 879 },
  { type: "Comic", title: "Superman vs. Meshi Vol. 1", author: "Satoshi Miyagawa", price: 529 },
  { type: "Comic", title: "Superman: Birthright The Deluxe Edition", author: "Mark Waid", price: 1700 },
  { type: "Comic", title: "Avengers: The Children's Crusade", author: "Allan Heinberg", price: 1161 },
  { type: "Comic", title: "Scarlet Witch, Vol. 2: World of Witchcraft", author: "James Robinson", price: 899 },
  { type: "Comic", title: "Civil War: A Novel of the Marvel Universe", author: "Stuart Moore", price: 679 },
  { type: "Comic", title: "Black Panther: The Young Prince", author: "Ronald L. Smith", price: 543 },
  { type: "Comic", title: "Doctor Strange: The Oath", author: "Brian K. Vaughan", price: 979 },
  { type: "Comic", title: "Spider-Man : Spider-Verse : Spider-Gwen", author: "Jason Latour", price: 517 },
  { type: "Comic", title: "The Winter Soldier: Cold Front", author: "Mackenzi Lee", price: 579 },
  { type: "Comic", title: "Falcon & Winter Soldier Vol. 1", author: "Derek Landy", price: 733 },
  { type: "Comic", title: "Captain America: Winter Soldier - The Complete Collection", author: "Ed Brubaker", price: 1616 },
  { type: "Educational", title: "Data Structures", author: "Goodrich", price: 800 },
  { type: "Educational", title: "Database Systems: Design, Implementation, and Management", author: "Carlos Coronel", price: 621 }
];

const factory = new BookFactory();
const cart = new Cart();
const wishlist = [];

// Observers -> update DOM
const itemsObserver = new CartItemsObserver();
const totalObserver = new CartTotalObserver();
cart.attach(itemsObserver);
cart.attach(totalObserver);

// Render product list with decorator options (per-genre)
const bookListsContainer = document.getElementById("book-lists");
const bookListFiction = document.getElementById("book-list-fiction");
const bookListComic = document.getElementById("book-list-comic");
const bookListEducational = document.getElementById("book-list-educational");
const cartItemsEl = document.getElementById("cart-items");
const wishlistEl = document.getElementById("wishlist-items");

function renderProducts() {
  products.forEach((p, idx) => {
    const li = document.createElement("li");
    li.setAttribute("data-idx", String(idx));
    li.innerHTML = `
      <div>
        <strong>${p.title}</strong> by ${p.author} — ₱${p.price}
      </div>
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-left:auto;">
        <label><input type="checkbox" data-opt="member" data-idx="${idx}"> 10% Membership Discount</label>
        <input type="text" placeholder="Request note" data-opt="request" data-idx="${idx}" style="padding:4px;">
        <button data-action="add" data-idx="${idx}">Add to Cart</button>
        <button data-action="wishlist" data-idx="${idx}">Add to Wishlist</button>
      </div>
    `;
    if (p.type === "Fiction") {
      bookListFiction && bookListFiction.appendChild(li);
    } else if (p.type === "Comic") {
      bookListComic && bookListComic.appendChild(li);
    } else if (p.type === "Educational") {
      bookListEducational && bookListEducational.appendChild(li);
    }
  });
}

function buildDecoratedBook(baseBook, opts) {
  let decorated = baseBook;
  if (opts.requestNote) decorated = new BookRequestDecorator(decorated, opts.requestNote);
  if (opts.member) decorated = new MembershipBonusDecorator(decorated, 10);
  return decorated;
}

function renderWishlist() {
  if (!wishlistEl) return;
  wishlistEl.innerHTML = "";
  wishlist.forEach((w, i) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    left.textContent = `${w.title} by ${w.author}`;
    const right = document.createElement("div");
    right.style.display = "flex";
    right.style.gap = "8px";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.dataset.widx = String(i);
    removeBtn.setAttribute("data-wremove", "");
    right.appendChild(removeBtn);
    li.appendChild(left);
    li.appendChild(right);
    wishlistEl.appendChild(li);
  });
}

// Delegate clicks from the container across all genre lists
bookListsContainer.addEventListener("click", (e) => {
  const target = e.target;
  const addBtn = target.closest("button[data-action='add']");
  const wishBtn = target.closest("button[data-action='wishlist']");
  const ref = addBtn || wishBtn;
  if (!ref) return;
  const idx = parseInt(ref.dataset.idx, 10);
  const p = products[idx];

  if (wishBtn) {
    // Add to wishlist
    wishlist.push({ title: p.title, author: p.author, price: p.price });
    renderWishlist();
    return;
  }

  // read options for cart
  // scope queries to the same product row (closest li)
  const row = ref.closest("li[data-idx]");
  const member = row ? row.querySelector(`input[type='checkbox'][data-opt='member'][data-idx='${idx}']`)?.checked : false;
  const requestNote = row ? (row.querySelector(`input[type='text'][data-opt='request'][data-idx='${idx}']`)?.value.trim() || "") : "";

  // Create base product via factory
  const baseBook = factory.createBook(p.type, p.title, p.author, p.price);
  const decorated = buildDecoratedBook(baseBook, { member, requestNote });

  // Push to cart as a simple item {title, price}
  const title = decorated.getDescription();
  const price = decorated.getCost();
  cart.addItem({ title, price });
});

// Global remove via event delegation (uses book title)
cartItemsEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-remove]");
  const title = btn.getAttribute("data-title");
  cart.removeItem(title);
});

renderProducts();
renderWishlist();

// Remove from wishlist via delegation
if (wishlistEl) {
  wishlistEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-wremove]");
    if (!btn) return;
    const idx = parseInt(btn.dataset.widx || "-1", 10);
    if (idx >= 0 && idx < wishlist.length) {
      wishlist.splice(idx, 1);
      renderWishlist();
    }
  });
}