const { createServer } = require('http');
const router = require('./router');

module.exports = createServer(async (request, response) => {
        try {
            const content = await router(request, response);
            return response.end(content);
        } catch (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
            
            return response.end(`<h1>${err.message}</h1>`);
        }

});