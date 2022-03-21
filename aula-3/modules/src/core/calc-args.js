const { 2: num1, 3: op, 4: num2 } = process.argv;

let total;

switch (op) {
    case '+': total = Number(num1) + Number(num2); break;
    case '-': total = Number(num1) - Number(num2); break;
    case '*': total = Number(num1) * Number(num2); break;
    case '/': total = Number(num1) / Number(num2); break;
    case 'e': total = Number(num1) ** Number(num2); break;
}

console.log(`${num1} ${op} ${num2} = ${total}`);