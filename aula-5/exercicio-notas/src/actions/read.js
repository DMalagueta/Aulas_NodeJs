const { title, output } = require("../io/output");
const { userInput, alert } = require("../io/input");
const { reader } = require("../core/file-manager");

module.exports = async (cb = null) => {
    title('Read File');

    const name = await userInput('name: ');

    try{
        const fileRead = await reader(name);
        output(`File: ${name}.txt`);
        output(`Content: ${fileRead}`);
        cb()
    }
    catch{
        console.log(`Note not found`);
        cb();
    }
}