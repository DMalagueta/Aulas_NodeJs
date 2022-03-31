const { render } = require("../core/view")
const { readAndUpdateCounter } = require("../services/counter.service")
const { getLog } = require("../services/access-log.service")

// let counter = 0;

module.exports = async () => {    
    // return await render('counter', { 
    //     counter: ++counter,
    // });

    // const counter = await readAndUpdateCounter();
    // return await render('counter', { counter });
    
    const counter = (await getLog()).length;
    return await render('counter', { counter });
}