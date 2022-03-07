const name = 'John Doe';
const message ='hello';

//ES5 VERSION
/* const str = message + ' ' + name ;
console.log(str); */

//ES6 VERSION
const str = `${message} ${name}`
console.log(str);
console.log(`2 + 2 = ${ 2 + 2}`);


//ES5 VERSION
//const tpl = '<div>\n' + '\t<h1>' + name + '</h1>\n' +  '\t<p>Very long message</p>\n' + '</div>';

//ES6 VERSION
const tpl = `
        <div>
            <h1> ${name} </h1>
            <p>Very long message</p>
        </div>
`;

console.log(tpl);