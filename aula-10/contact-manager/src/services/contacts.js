const Contact = require("../models/Contact");

const all = async (filter = '') => {
    return Contact.find({
        name: {
            $regex: `.*${filter}.*`,
            $options: 'i'
        }
    }).lean();
}

const byId = async (id) => Contact.findById(id).lean();

const create = async (name, email, phone) => {
    return Contact.create({
        name,
        email,
        phone
    });
}

const update = async (id, name, email, phone) => {
    return Contact.findByIdAndUpdate(id, {
        $set: { name, email, phone }
    });
};

const remove = async (id) => Contact.findByIdAndDelete(id);

module.exports = { all, byId, create, update, remove };