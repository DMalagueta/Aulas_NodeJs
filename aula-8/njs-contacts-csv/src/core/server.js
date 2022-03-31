const { createServer } = require('http');
const { logAccess } = require('../services/access-log.service');
const logger = require('./logger');
const router = require('./router');

const handleRequest = async (request, response) => {
    try {
        logger.info(`[${request.method}]`, request.url);
        await logAccess(request);

        return await router.run(request, response);
    } catch (err) {
        response.writeHead(404, {
            'Content-Type': 'text/html'
        });
        return response.end(`<h1>${err.message}</h1>`);
    }
};

const server = createServer(handleRequest);

module.exports = server;