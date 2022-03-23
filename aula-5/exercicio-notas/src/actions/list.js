const { title, output, clear} = require("../io/output");
const { list } = require ("../core/file-manager");

module.exports = async (cb = null) => { 
    title('Notes List')
    const notes = await list();
    
    if(notes.length === 0) {
        output('')
    } else {
        notes.forEach((note, index) => output(`${index}\t${note}`));
    }

    if (cb) cb();
}