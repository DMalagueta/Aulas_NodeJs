const accessListAction = require('./actions/access-list.action');
const homeAction = require('./actions/home.action');
const logger = require('./core/logger');
const { add } = require('./core/router');
const server = require('./core/server');
const { 2: port } = process.argv;

add('/', homeAction);
add('/log', accessListAction);

server.listen(port);
logger.info(`Server listening on port ${port}: http://localhost:${port}`);