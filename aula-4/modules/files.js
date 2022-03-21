const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'file.txt');

// fs.open(filePath)
//     // .then(file => console.log(file));
//     .then(file => file.readFile())
//     .then(data => console.log(data.toString()))
//     .catch(err => console.log(err.message));

fs.readFile(filePath)
    .then(data => data.toString())
    .then(content => console.log(content));

fs.appendFile(filePath, '\nAnother line in my file')
    .then(() => console.log('Complete'))