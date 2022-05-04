const fs = require('fs/promises');
const { join } = require('path');
const { randomUUID } = require('crypto');

const sourcePath = join(__dirname, '..', '..', 'data');

const readContactFromFile = async (id) => {
    try {
        const data = await fs.readFile(join(sourcePath, id));
    
        if (data) {
            return JSON.parse(data.toString());
        }
    } catch {
        return undefined;
    }
}

const all = async (filter = undefined) => {
    const files = await fs.readdir(sourcePath);
    const contacts = await Promise.all(files.map(readContactFromFile));

    if (filter) {
        return contacts.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    }

    return contacts;
}

const byId = async (id) => readContactFromFile(id);

const create = async (name, email, phone) => {
    const contact = {
        id: randomUUID(),
        name,
        email,
        phone,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    await fs.writeFile(join(sourcePath, contact.id), JSON.stringify(contact, null, 2));

    return contact;
}

const update = async (id, name, email, phone) => {
    const oldContact = await byId(id);

    if (!oldContact) {
        throw new Error('Contact not found!');
    }

    const contact = {
        ...oldContact,
        name,
        email,
        phone,
        updatedAt: Date.now()
    };

    await fs.writeFile(join(sourcePath, contact.id), JSON.stringify(contact, null, 2));

    return contact;
};

const remove = async (id) => fs.unlink(join(sourcePath, id));

module.exports = { all, byId, create, update, remove };