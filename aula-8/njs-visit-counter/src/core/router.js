const { parse } = require('url');

const routes = new Map();

const add = (path, callback) => routes.set(path, callback);


const run = async (request, response) => {
    const parsedUrl = parse(request.url, true);
    const route = parsedUrl.pathname;
    
    if (!routes.has(route)) {
        throw new Error('404 Not Found');
    }

    console.log('[info]', route);

    const action = routes.get(route);
    return await action(request, response, parsedUrl.query);
};

module.exports = { run, add };