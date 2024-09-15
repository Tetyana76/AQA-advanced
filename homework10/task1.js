const Book = require('./book');
const EBook = require('./ebook');

// Створюємо кілька екземплярів класів Book та EBook
const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('Norwegian Wood', 'Haruki Murakami', 2012);
const book3 = new Book('Fahrenheit 451', 'Ray Bradbury', 1953);
const ebook1 = new EBook('The Hobbit', 'J.R.R. Tolkien', 1937, 'MOBI');
const ebook2 = new EBook('Pride and Prejudice', 'Jane Austen', 1813, 'PDF');

// Викликаємо printInfo для кожного екземпляру
book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();
ebook2.printInfo();

// Використовуємо геттери та сеттери, перейменовуємо книгу
console.log(book1.name);
book1.name = 'Animal Farm';
console.log(book1.name); 

// Статичний метод для пошуку найдавнішої книги
const books = [book1, book2, book3, ebook1, ebook2];
const oldestBook = Book.findOldestBook(books);
console.log('Oldest Book:', oldestBook.name, 'Year:', oldestBook.year);

// Статичний метод для створення EBook з Book
const newEBook = EBook.createFromBook(book2, 'EPUB');
newEBook.printInfo();