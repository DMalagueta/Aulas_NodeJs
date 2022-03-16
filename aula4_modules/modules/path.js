const path = require('path');

console.log(path.resolve('./'));

const filePath = path.resolve('./data/file.txt'); // coverte caminho relativo em absolute
console.log(filePath);

console.log(path.basename(filePath, '.txt')) // returns files name
console.log(path.extname(filePath)) //return file extension 

console.log(path.join('foo','bar')) // juntar caminhos

const numbers = [1,2,3,4,5]

console.log(numbers.join('_'));
console.log(path.join(__dirname, '..','..', 'foo', 'bar'))