// ES5 Version

// function calcTax() {
//     console.log('Calculating tax for customers with income', arguments[0]);

//     const customers = [].slice.call(arguments, 1);
//     customers.forEach(customer => console.log('Processing', customer));
// }

// ES6 Version

function calcTax(income, ...customers) {
    console.log('Calculating tax for customers with income', income);
    customers.forEach(customer => console.log('Processing', customer));
}

calcTax(50000, 'John', 'Jane', 'Mary', 'Lou');