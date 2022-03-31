const { readFile } = require("fs/promises");
const { join } = require("path");

const templatePath = (name) => join(__dirname, '..', '..', 'templates', name).concat('.html');

const render = async (name, data = {}) => {
    const filePath = templatePath(name);
    let content = (await readFile(filePath)).toString();

    Object.keys(data).forEach(key => {
        const templateKey = `{{ ${key} }}`;
        const regex = new RegExp(templateKey, 'g');
        content = content.replace(regex, data[key]);
    });
    
    return content;
};

module.exports = {
    render
};