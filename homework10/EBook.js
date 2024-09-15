const Book = require("./book");

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }
  
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI'];
        if (validFormats.includes(value)) {
            this._fileFormat = value;
        } else {
            console.error('Invalid file format');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`File format: ${this.fileFormat}`);
    }

    static createFromBook(book, format) {
        if (!(book instanceof Book)) {
            console.error('Invalid argument: Expected an instance of Book');
            return null;
        }
        return new EBook(book.name, book.author, book.year, format);
    }
}

if (require.main === module) {
    const ebook1 = new EBook('The Hobbit', 'J.R.R. Tolkien', 1937, 'PDF');
    ebook1.printInfo();
};

module.exports = EBook;