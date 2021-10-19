const fs = require('fs');

exports.writeToAllBooks = function (data) {
    try {
        let length = data.length;

        let stringifiedData = JSON.stringify(data, null, length);

        fs.writeFileSync('./allBooks.json', stringifiedData, 'utf-8');
    } catch (error) {
        console.log(`Error writing file: ${err}`);
    }
}