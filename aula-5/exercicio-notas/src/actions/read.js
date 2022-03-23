const { title, output, line } = require("../io/output");
const { userInput, alert } = require("../io/input");
const { reader } = require("../core/file-manager");

module.exports = async (cb = null) => {
    title('Read File');

    const name = await userInput('name: ');
    const content = await reader(name);

    line();
    output(`\n${content}\n`);
    line();

    if(cb) cb();
}