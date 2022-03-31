const { redirect } = require('../core/view');
const { save } = require('../services/contacts.service');

module.exports = async (_, response, data) => {    
    const name = data.get('name');
    const email = data.get('email');

    await save(name, email);

    return redirect('/', response);
}