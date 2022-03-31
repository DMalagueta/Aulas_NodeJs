const { render } = require('../core/view');
const { list } = require('../services/contacts.service');

module.exports = async (_, response) => {

    const contactsList = (await list()).map(contact => `
        <tr>
            <td>${contact.id}</td>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>
                <a href="#">Delete</a>
                <a href="#">Update</a>
            </td>
        </tr>
    `).join('');

    return render('contacts', response, { list: contactsList });
}