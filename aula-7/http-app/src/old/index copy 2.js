const http = require('http');
const url = require('url');
const { 2 : port } = process.argv;
const path = require('path');
const fs = require('fs/promises');
const router = require('../router');

const requests =[];

const handleRequest = async (request, response) => {
    console.log('[info]', request.url)
    try {
        const res = await router(parsedUrl.pathname);
        response.write(res);
    } catch (err) {
        response.writeHead(404, err.message);
        response.write(`404 Not Found ${err.message}`);
    }

    response.end();
}

http.createServer(handleRequest).listen(port || 3000);
console.log('[info]','Server started at',`http//localhost:${port}`);

//https://bit.ly/mg-nodejs-2022
