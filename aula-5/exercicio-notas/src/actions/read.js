const { title, output } = require("../io/output");
const { userInput, alert } = require("../io/input");
const { reader } = require("../core/file-manager");

module.exports = async () => {
    title('Read File');

    const name = userInput('name: ');

    async () => {
        await reader(name);
    }
}