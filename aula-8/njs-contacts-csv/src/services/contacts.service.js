const { randomUUID } = require('crypto');
const { readFile, appendFile } = require('fs/promises');
const { join } = require('path');

const csv = join(__dirname, '..', '..', 'data', 'contacts.csv');

const list = async () => (await readFile(csv))
    .toString()
    .trim()
    .split(/\r?\n/)
    .splice(2)
    .map(line => {
        const [id, name, email] = line.split(',');
        return { id, name, email }
    });

const save = async (name, email) => {
    const contacts = await list();

    if (contacts.find(c => c.email === email) != null) {
        throw new Error('Contact already exists!');
    }

    const id = randomUUID();
    appendFile(csv, `${id},${name},${email}\n`);
}

module.exports = { list, save };