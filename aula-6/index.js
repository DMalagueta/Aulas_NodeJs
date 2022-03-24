const http = require('http');
const { 2 : port } = process.argv;

const server = http.createServer((request, response) => {

    console.log(request.url);

    response.write('hello, world');
    response.write('another line in body')

    response.end('ok');
});


server.listen(port || 3000);