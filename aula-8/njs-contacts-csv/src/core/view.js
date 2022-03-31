const { readFile } = require("fs/promises");
const { join } = require("path");

const templatePath = (name) => join(__dirname, '..', '..', 'templates', name).concat('.html');

const render = async (name, response, data = {}, status = 200) => {
    const filePath = templatePath(name);
    let content = (await readFile(filePath)).toString();

    Object.keys(data).forEach(key => {
        const templateKey = `{{ ${key} }}`;
        const regex = new RegExp(templateKey, 'g');
        content = content.replace(regex, data[key]);
    });

    response.writeHead(status, {
        'Content-Type': 'text/html'
    });
    
    return response.end(content);
};

const redirect = (url, response, status = 302) => {
    response.writeHead(status, { Location: url });
    return response.end();
}

const json = (data, response, status = 200) => {
    response.writeHead(status, {
        'Content-Type': 'application/json'
    });
    
    return response.end(JSON.stringify(data));
}

module.exports = {
    render,
    redirect,
    json
};