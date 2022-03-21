const create = require("../actions/create");
const list = require("../actions/list");
const remove = require("../actions/remove");
const read = require("../actions/read");

module.exports = (option, cb = null) => {
    switch (option.toUpperCase()) {
        case 'L': list(); break;
        case 'R': read(cb); break;
        case 'C': create(cb); break;
        case 'D': remove(cb); break;
        case 'E': break;
        default: cb()
    }
}