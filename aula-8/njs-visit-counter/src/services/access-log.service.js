const { readFile, writeFile } = require("fs/promises");
const { join } = require("path");

const logFile = join(__dirname, '..', '..', 'data', 'access-log.json');

const parseIp = (request) => request.headers['x-forwarded-for']?.split(',').shift() || request.socket?.remoteAddress;

const logAccess = async (request) => {
    const ip = parseIp(request);
    
    if (ip.includes('192.168.3.243')) {
        throw new Error('Blocked');
    }

    const access = {
        url: request.url,
        time: Date.now(),
        from: ip
    };

    const log = await getLog();
    log.push(access);

    await writeFile(logFile, JSON.stringify(log));
};

const getLog = async () => JSON.parse(await readFile(logFile));

module.exports = { logAccess, getLog };