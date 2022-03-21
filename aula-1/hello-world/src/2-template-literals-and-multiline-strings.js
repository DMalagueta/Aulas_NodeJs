const name = 'John Doe';
const message = 'Hello';

// ES5 Version
// const str = message + ' ' + name;
// console.log(str);

// ES6 Version
const str = `${message} ${name}`;
console.log(str);
console.log(`2 + 2 = ${2 + 2}`);

// ES5 Version
// const tpl = '<div>\n' +
//     '\t<h1>' + name + '</h1>\n' +
//     '\t<p>Very long message</p>\n' +
//     '</div>';

// ES6 Version

const tpl = `
    <div>
        <h1>${name}</h1>
        <p>Very long message</p>
    </div>
`;

console.log(tpl)