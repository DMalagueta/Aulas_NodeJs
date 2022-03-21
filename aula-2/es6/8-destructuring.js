function getStock() {
    return {
        symbol: 'AAPL',
        price: 14.6,
        createdAt: Date.now(),
        limit: 30
    };
}

// ES5 Version
// const stock = getStock();
// const symbol = stock.symbol;
// const price = stock.price;

// ES6 Version
const { symbol, price: value, createdAt, limit = 100 } = getStock();

console.log(symbol, value, createdAt, limit);

const [name1, name2] = ['John', 'Mary'];
console.log(name1, name2);

const customers = ['John', 'Jane', 'Mary', 'Lou'];
const { 3: nameOfIndex3 } = customers;
console.log(nameOfIndex3);

const [first, second, ...others] = customers;

console.log(`The first customer ${first}, the 2nd customer ${second}`);
console.log(`Other customers are ${others}`);