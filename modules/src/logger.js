const moment = require('moment');

const logger = {
    info: (...messages) => console.log(moment().format('YYYY-MM-DD HH:mm:ss'),   `[INFO]`,  ...messages),
    warn: (...messages) => console.log(moment().format('YYYY-MM-DD HH:mm:ss'),   `[WARN]`,  ...messages),
    error: (...messages) => console.log( moment().format('YYYY-MM-DD HH:mm:ss'), `[ERROR]`, ...messages),
};

module.exports = logger;