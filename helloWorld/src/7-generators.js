function* doSomething(){
    console.log("start proscess");
    yield; // parar contexto de execução
    console.log("resume process");
    yield;
    console.log("complete!!");
}

/* const generator = doSomething(); */
/* console.log(generator.next())
console.log(generator.next())
console.log(generator.next()) */

// while(!generator.next().done){}

function* sequenceNumber (startNumber = 1, maxNumber =100){
    let number = startNumber;

    while(true){
        number++
        if(number>maxNumber){
            return number;
        }

        yield number++;
    }
}

const sequence = sequenceNumber(99);

console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

function* getStockPrice(symbol) {
    while(true){
        //Request data from server
        yield (Math.random() *100).toFixed(2);
        console.log(`resuming for symborl ${symbol}`);
    }
}

/* const priceGenerator = getStockPrice('BTC');
const limitPrice = 15;
let price = priceGenerator.next().value;

while(price > limitPrice){
    price = priceGenerator.next().value;
    console.log(`the generator returned ${price}`)
}

console.log(`buying stocks at ${price}`) */

const crypto = require('crypto');

console.log(crypto.randomUUID()); 