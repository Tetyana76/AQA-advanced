class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
  
    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._name = value;
        } else {
            console.error('Invalid name value');
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._author = value;
        } else {
            console.error('Invalid author value');
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            console.error('Invalid year value');
        }
    }

    printInfo() {
        console.log(`Name: "${this.name}" Author: ${this.author} Year: ${this.year}`)
    }
    
    static findOldestBook(books) {
        return books.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
    }
}

module.exports = Book;