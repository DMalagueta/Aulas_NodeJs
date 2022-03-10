function getStock() {
    return{
        symbol: 'AAPL',
        price: 14.6,
        createdAt: Date.now(),
        limit: 30
    }
}

// es5 version 

/* const stock = getStock();
const symbol = stock.symbol;
const price = stock.price; */

// es6 version 
const { symbol, price:value, createdAt, limit = 100 } = getStock();

console.log(symbol, value, createdAt, limit);

const [name1,name2] = ['john', 'mary'];
console.log(name1, name2)

const customers = ['john', 'jane', 'mary', 'lou'];
const {3:x} = customers;
console.log(x);

const [first, second, ...others] = customers;

console.log(`the first customer ${first} the secont customer is ${second}`)
console.log(`other customers are ${others}`);

