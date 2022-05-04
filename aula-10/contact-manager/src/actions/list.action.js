const { all } = require("../services/contacts");

module.exports = async (req, res) => {
    const { filter } = req.query;

    const contacts = await all(filter);
    return res.render('list', { contacts });
};