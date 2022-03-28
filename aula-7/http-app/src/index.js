const server = require('./server');
const { 2 : port } = process.argv;

server.listen(port);
console.log('[INFO]', `SERVER LISTENING ON PORT ${port} : http://localhost:${port}`);