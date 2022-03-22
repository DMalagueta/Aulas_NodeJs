const { title, output, clear} = require("../io/output");
const { list } = require ("../core/file-manager");

module.exports = async (cb = null) => { 
    title('All notes')
    const noteList = await list();
    for (let i = 0; i < noteList.length; i++){
        output(`${noteList[i]}`);    
    }
    if (cb) cb();
}