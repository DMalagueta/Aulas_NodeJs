const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, '..','data', 'file.txt');

/* fs.open(filePath)
    // .then (file => console.log(file))
    .then(file => file.readFile())
    .then(data => console.log(data.toString()))
     // buffer (conteudo em memoria a espera de ser processado) info que esta numa memora intermedia que pode ser perdida se nao for processada 
    .catch(err => console.log(err)); */

fs.readFile(filePath)
    .then(data => data.toString())
    .then(content => console.log(content))

fs.appendFile(filePath, '\nAnother Line in my file')
    .then(() => console.log('complete'))