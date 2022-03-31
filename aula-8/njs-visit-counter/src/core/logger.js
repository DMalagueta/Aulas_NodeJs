const moment = require('moment');

const timeFormat = 'YYYY-MM-DD HH:mm:ss';

const logger = {
    info: (...messages) => console.log(moment().format(timeFormat), '[info]', ...messages),
    warn: (...messages) => console.log(moment().format(timeFormat), '[warn]', ...messages),
    error: (...messages) => console.log(moment().format(timeFormat), '[error]', ...messages)
};

module.exports = logger;