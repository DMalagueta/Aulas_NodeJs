const { remove } = require("../services/contacts");

module.exports = async (req, res) => {
    const { id } = req.params;
    await remove(id);

    return res.redirect('/contacts');
};