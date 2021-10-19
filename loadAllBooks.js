const fs = require('fs');

let books;

const data = fs.readFileSync('./allBooks.json', 'utf8');

// parse JSON string to JSON object
const allBooks = JSON.parse(data);

books = allBooks;

module.exports = books;