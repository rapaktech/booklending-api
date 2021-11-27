const bookStore = require('./index');

test('Added book is in list of books', () => {
    bookStore.addBook({ name: 'Kafka on the Shore', author: "Ulysses Grant" });
    expect(bookStore.viewEntireLibrary()).toContainEqual({ name: 'Kafka on the Shore', author: "Ulysses Grant" });
});


test('Removed book is NOT in list of books', () => {
    bookStore.deleteBook({ name: 'Kafka on the Shore', author: "Ulysses Grant" });
    expect(bookStore.viewEntireLibrary()).not.toContainEqual({ name: 'Kafka on the Shore', author: "Ulysses Grant" });
});


test('Lent book is in list of lent books', () => {
    bookStore.lend({ name: 'Dune', author: "Frank Herbert" });
    expect(bookStore.viewLentBooks()).toContainEqual({ name: 'Dune', author: "Frank Herbert" });
});

test('Lent book is NOT in list of available books', () => {
    expect(bookStore.viewAvailableBooks()).not.toContainEqual({ name: 'Dune', author: "Frank Herbert" });
});

test('Returned book is in list of available books', () => {
    bookStore.return({ name: 'Dune', author: "Frank Herbert" });
    expect(bookStore.viewAvailableBooks()).toContainEqual({ name: 'Dune', author: "Frank Herbert" });
});

test('Returned book is NOT in list of lent books', () => {
    expect(bookStore.viewLentBooks()).not.toContainEqual({ name: 'Dune', author: "Frank Herbert" });
});