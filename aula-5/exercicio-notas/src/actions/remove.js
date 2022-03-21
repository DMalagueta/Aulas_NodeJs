const { title,output } = require("../io/output");
const { remove } = require ("../core/file-manager");
const { alert, userInput } = require ('../io/input')

module.exports = async (cb = null) => {
    title('Remove note')

    const name = await userInput('name: ');

    await alert('Are you sure', async() => {
        await remove(name);
        output(`removed sucefullelly ${name}`);
    })
}