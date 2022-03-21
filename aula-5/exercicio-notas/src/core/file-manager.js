const { join } = require('path');
const { readFile, writeFile, unlink, readdir } = require('fs/promises');

const filePath = (name = null) => {
    const defaultPath = join(__dirname, '..', '..', 'data');
    return name ? join(defaultPath, `${name}.txt`) : defaultPath;
}

module.exports = { 
    reader : async (filename) => (await readFile(filePath(filename))).toString(),
    writer : async (filename, content) => await writeFile(filePath(filename), content),
    remove : async (filename) => await unlink(filePath(filename)),
    list   : async () => readdir(filePath()),
}