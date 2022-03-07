const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers)

const doubles = numbers.map(function (n){
    return n*2;
})

console.log(doubles);

const triples = numbers.map(n => n * 3);

console.log(triples);

const pairs = numbers.filter(n => n % 2 === 0);

2 == '2' //true
2 === '2' //false
2 === 2 //true

console.log(pairs);

const sum = numbers.reduce((ac, n) => {
    console.log('ac', ac, 'n', n);
    return ac + n;

}, 10);
console.log(sum);

const customers = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'Lou'}
]

const customerId = 2;
const customer = customers.find(c => c.id === customerId);
console.log(customer);

const sumTwoNumbers = (n1, n2) => n1+ n2;
console.log(sumTwoNumbers(2,5));

const sayHello = () => {
    console.log('Hello, world!')
};

sayHello();