// function* doSomething() {
//     console.log('Start process...');
//     yield;
//     console.log('Resume process...');
//     yield;
//     console.log('Complete!!!');
// }

// const generator = doSomething();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// while (!generator.next().done) {}

function* sequenceNumber(startNumber = 1, maxNumber = 100) {
    let number = startNumber;

    while (true) {
        number++
        if (number > maxNumber) {
            return number;
        }

        yield number;
    }
}

const sequence = sequenceNumber(99);

console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());

// function* getStockPrice(symbol) {
//     while (true) {
//         // Request data from server
//         yield (Math.random() * 100).toFixed(2);

//         console.log(`Resuming for symbol ${symbol}`);
//     }
// }

// const priceGenerator = getStockPrice('BTC');
// const limitPrice = 15;
// let price = priceGenerator.next().value;

// while (price > limitPrice) {
//     price = priceGenerator.next().value;
//     console.log(`The generator returned ${price}`);
// }

// console.log(`Buying stocks at ${price}`);
