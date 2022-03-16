const readline = require('readline');

const rl = readline.createInterface({

    input:process.stdin, 
    output: process.stdout
})

/* rl.on('line', input => {
    if(input === 'exit'){
        rl.close();
        return;
    }
    console.log('>', input);
}) */

rl.question('Hoje chove?', answer => {
    console.log('>>', answer);
    rl.close();
})