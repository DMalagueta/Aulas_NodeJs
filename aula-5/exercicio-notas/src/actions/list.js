const { title } = require("../io/output");
const { list } = require ("../core/file-manager");

module.exports = async () => { 
    title('All notes')
    list();
}