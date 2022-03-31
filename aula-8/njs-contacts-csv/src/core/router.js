const { parse } = require('url');

const routes = new Map();

const add = (path, callback, method = 'get') => routes.set(path, { method, callback });


const run = async (request, response) => {
    const parsedUrl = parse(request.url, true);
    const route = parsedUrl.pathname;
    
    if (!routes.has(route)) {
        response.writeHead(404, 'Not Found');
        throw new Error('404 Not Found');
    }
    
    const { method, callback } = routes.get(route);

    if (request.method !== 'POST' && method === 'post') {
        response.writeHead(405, 'Method not allowed');
        throw new Error('405 Method not allowed');
    }

    if (request.method === 'POST') {
        const chunks = [];

        request.on('data', chunk => chunks.push(chunk));
        request.on('close', async () => {
            const data = Buffer.concat(chunks);
            const url = new URLSearchParams(data.toString());

            return await callback(request, response, url);
        });
    } else {
        return await callback(request, response, parsedUrl.query);
    }

};

module.exports = { run, add };