# Book Lovers Club (Mini Bookstore Website)

A Mini E‑Commerce Bookstore Website that demonstrates key software design patterns in JavaScript. This is a frontend‑only system (no backend, no database). Users can browse different genres of books, add them to a shopping cart, save books in a wishlist, and view real‑time updates to items and total cost.

## Design Patterns Used
- **Factory Pattern (Creational)**
  - Generates different book types (e.g., Fiction, Comic, Educational).
  - Files: `factory_design_pattern/BookFactoryInterface.js`, `factory_design_pattern/BookFactory.js`
- **Decorator Pattern (Structural)**
  - Adds optional features such as a 10% Membership Discount, request tags, and wishlist without modifying base product classes.
  - Files: `structural_design_pattern/Books.js`, `structural_design_pattern/BookDecorator.js`, `structural_design_pattern/MembershipBonusDecorator.js`, `structural_design_pattern/BookRequestDecorator.js`, `structural_design_pattern/WishlistDecorator.js`
- **Observer Pattern (Behavioral)**
  - Ensures the Cart UI stays synchronized by automatically updating items and total price whenever changes occur.
  - Files: `behavioral_design_pattern/CartSubject.js`, `behavioral_design_pattern/Cart.js`, `behavioral_design_pattern/CartObserver.js`, `behavioral_design_pattern/CartItemObserver.js`, `behavioral_design_pattern/CartTotalObserver.js`

## Members
- Loguinsa, Maria Feona
- Peras, Therese Carmella B.
- Sael, Jenny F.

## Instructions: How to Run
1. Download or clone the project files into a single folder.
2. Ensure folders (`factory_design_pattern/`, `structural_design_pattern/`, `behavioral_design_pattern/`) and `index.html` are in the same directory.
3. Open `index.html` in a modern browser. Because ES Modules are used, the easiest way is “Open with Live Server” (VS Code) or any simple local HTTP server.
   - VS Code Live Server: Right‑click `index.html` → “Open with Live Server”.
4. The site will load. Browse books, add to cart, add to wishlist, and see real‑time updates to items and total cost.

## System Usage
- **Browse Available Books** grouped by genre (Fiction, Comic, Educational).
- For each book row, you can:
  - **Toggle 10% Membership Discount** if desired.
  - **Enter a Request Note** if desired.
  - Click **Add to Cart** to place the book into the cart (decorators applied to description and/or price).
  - Click **Add to Wishlist** to save the book in the wishlist panel.
- In **Your Cart**, each item has a **Remove** button.
- The **Cart Total** updates automatically as items are added or removed.
