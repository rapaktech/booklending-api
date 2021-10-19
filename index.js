const { writeToAllBooks } = require('./writeAllBooks');

const { writeToAvailableBooks } = require('./writeBooksAvailable');

const { writeToLentBooks } = require('./writeBooksLent');

let bookStore = (function () {
    let allBooks = require('./loadAllBooks');

    let booksAvailable = require('./loadBooksAvailable');

    let booksLent = require('./loadLentBooks');

    addNewBook = function (book) {
        allBooks.push(book);
        booksAvailable.push(book);
        writeToAllBooks(allBooks);
        writeToAvailableBooks(booksAvailable);
    }

    deleteOldBook = function (book) {
        let {name, author} = book;
        allBooks = allBooks.filter(book => book.name !== name && book.author !== author);
        booksAvailable = booksAvailable.filter(book => book.name !== name && book.author !== author);
        booksLent = booksLent.filter(book => book.name !== name && book.author !== author);
        writeToAllBooks(allBooks);
        writeToAvailableBooks(booksAvailable);
        writeToLentBooks(booksLent);
    }

    lendBook = function (book) {
        let {name, author} = book;
        booksAvailable.forEach(function (book) {
            if (book.name == name && book.author == author) {
                booksLent.push(book);
                console.log(`You've successfully lent '${name}' by '${author}`);
            }
        });
        booksAvailable = booksAvailable.filter(book => book.name !== name && book.author !== author);
        writeToAvailableBooks(booksAvailable);
        writeToLentBooks(booksLent);
    }

    returnBook = function (book) {
        let {name, author} = book;
        booksLent.forEach(function (book) {
            if (book.name == name && book.author == author) {
                booksAvailable.push(book);
                console.log(`You've successfully returned '${name}' by '${author}`);
            }
        });
        booksLent = booksLent.filter(book => book.name !== name && book.author !== author);
        writeToAvailableBooks(booksAvailable);
        writeToLentBooks(booksLent);
    }

    viewAvailable = function () {
        console.log(booksAvailable);
    }

    viewLent = function () {
        console.log(booksLent);
    }

    viewAllBooks = function () {
        console.log(allBooks);
    }

    return {
        addBook: function (bookName) {
            addNewBook(bookName);
        },

        deleteBook: function (bookName) {
            deleteOldBook(bookName);
        },

        lend: function (bookName) {
            lendBook(bookName);
        },

        return: function (bookName) {
            returnBook(bookName);
        },

        viewAvailableBooks: function () {
            viewAvailable();
        },

        viewLentBooks: function () {
            viewLent();
        },
        viewEntireLibrary: function () {
            viewAllBooks();
        }
    }
})();


bookStore.addBook({name: 'Dune', author: 'Frank Herbert'});
console.log(bookStore.viewEntireLibrary());

bookStore.deleteBook({name: 'Kafka on the Shore', author: "Ulysses Grant"});
console.log(bookStore.viewEntireLibrary());

bookStore.lend({name: 'The Lost Symbol', author: 'Dan Brown'});
console.log(bookStore.viewAvailableBooks());
console.log(bookStore.viewLentBooks());

bookStore.return({name: 'The Lost Symbol', author: 'Dan Brown'});
console.log(bookStore.viewAvailableBooks());
console.log(bookStore.viewLentBooks());