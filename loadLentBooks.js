const fs = require('fs');

let books;

const data = fs.readFileSync('./booksLent.json', 'utf8');

// parse JSON string to JSON object
const booksLent = JSON.parse(data);

books = booksLent;

module.exports = books;