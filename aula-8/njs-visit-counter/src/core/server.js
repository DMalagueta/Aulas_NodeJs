const { createServer } = require('http');
const { logAccess } = require('../services/access-log.service');
const logger = require('./logger');
const router = require('./router');

module.exports = createServer(async (request, response) => {
    // 192.168.6.65

    try {
        logger.info(`[${request.method}]`, request.url);
        await logAccess(request);

        const content = await router.run(request, response);
        return response.end(content);
    } catch (err) {
        response.writeHead(404, {
            'Content-Type': 'text/html'
        });
        return response.end(`<h1>${err.message}</h1>`);
    }
});