const listAction = require('./actions/list.action');
const saveAction = require('./actions/save.action');
const logger = require('./core/logger');
const { add } = require('./core/router');
const server = require('./core/server');
const { 2: port } = process.argv;

add('/', listAction);
add('/save', saveAction, 'post');

server.listen(port);
logger.info(`Server listening on port ${port}: http://localhost:${port}`);