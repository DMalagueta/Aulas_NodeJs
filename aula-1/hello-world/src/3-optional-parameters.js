// ES5 Version 

// function calcTax(income, state) {
//     state = state || 'Florida';
//     console.log('Calculating tax for resident of', state, 'with income', income);
// }

// ES6 Version 

function calcTax(income, state = 'Florida') {
    console.log('Calculating tax for resident of', state, 'with income', income);
}

calcTax(50000);
calcTax(50000, 'New York');