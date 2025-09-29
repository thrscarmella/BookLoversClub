import BookFactoryInterface from "./BookFactoryInterface.js";
import FictionBook from "../structural_design_pattern/FictionBook.js";
import ComicBook from "../structural_design_pattern/ComicBook.js";
import EducationalBook from "../structural_design_pattern/EducationalBook.js";

class BookFactory extends BookFactoryInterface {
    createBook(type, title, author, price) {
        switch (type) {
            case "Fiction":
                return new FictionBook(title, author, price);
            case "Comic":
                return new ComicBook(title, author, price);
            case "Educational":
                return new EducationalBook(title, author, price);
            default:
                throw new Error("Unknown book type");
        }
    }
}

export default BookFactory;