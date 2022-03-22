const { createInterface } = require('readline');

const userInput = async (message) => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(message, answer =>{
            resolve(answer);
            rl.close();
        })
    })
}

const alert = async (message, cb) => {
    const input = await userInput(`${message} (y/n)`);

    if(input.toLowerCase() === 'y'){
        cb();
    }
}



module.exports = { userInput , alert};