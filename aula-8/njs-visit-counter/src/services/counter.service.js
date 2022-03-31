const { readFile, writeFile } = require("fs/promises");
const { join } = require("path");
const logger = require("../core/logger");

const counterFile = join(__dirname, '..', '..', 'data', 'counter.txt');

const readCount = async () => Number(await readFile(counterFile));

const updateCount = async (value) => writeFile(counterFile, value.toString());

const readAndUpdateCounter = async () => {
    try {
        const count = await readCount();
        await updateCount(count + 1);
        return count;
    } catch (err) {
        logger.err(err.message);
    }
};

module.exports = { readAndUpdateCounter };