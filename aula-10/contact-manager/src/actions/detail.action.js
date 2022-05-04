const { byId } = require("../services/contacts");

module.exports = async (req, res) => {
    const { id } = req.params;
    const contact = await byId(id);

    if (!contact) {
        return res
            .status(404)
            .render('error', { code: 404, message: 'Contact not found' });
    }

    return res.render('detail', { contact });
};