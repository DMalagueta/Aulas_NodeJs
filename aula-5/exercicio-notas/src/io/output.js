const { exec } = require('child_process');
const { userInput } = require('./input');

const options = [
    '(L)ist',
    '(R)ead',
    '(C)reate',
    '(D)elete',
    '(E)xit'
]

const output =(...messages) => console.log(...messages)

const line = (big = false, size = 20) => {
    const char = big ? '-':'-';
    let out = '';

    for (let i = 0; i < size; i++) out += char;
    output(out);
};

const title = (title) => {
    output(title);
    line();
};

const menu = async () => {
    line(true);
    title('choose an option:');
    options.forEach(o => output(o));
    line();

    const option = await userInput('option: ');

    line(true);

    return option;

};

const clear = () => exec('clear');

module.exports = {output, line, title, menu, clear}

