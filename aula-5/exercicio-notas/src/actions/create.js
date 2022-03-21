const { title, output } = require("../io/output");
const { userInput, alert } = require("../io/input");
const { writer } = require("../core/file-manager");

module.exports = async (cb =null) => {
    title('Create Note')

    const name = await userInput('name: ');
    const content = await userInput('content: ');

    await alert(`save note with name ${name}`, async () => {
        await writer(name, content);
        output(`created file name ${name}`)
    });

    if (cb) cb();
}