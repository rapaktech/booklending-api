const fs = require('fs');

let books;

const data = fs.readFileSync('./booksAvailable.json', 'utf8');

// parse JSON string to JSON object
const booksAvailable = JSON.parse(data);

books = booksAvailable;

module.exports = books;