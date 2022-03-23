const { title,output } = require("../io/output");
const { remove } = require ("../core/file-manager");
const { alert, userInput } = require ('../io/input')

module.exports = async (cb = null) => {
    title('Remove note')

    const name = await userInput('name: ');

    
        await alert('Are you sure', async() => {
            try{
                await remove(name);
                output(`removed sucefully note ${name}`);
                cb()
            }
            catch{
                output(`Note ${name} not found`);
                cb()
            }
        });

    if (cb) cb();
}