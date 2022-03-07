//ES5 VERSION

/* function calcTax(income,state){
    state = state || 'florida';
    console.log('Calculating tax for resident of', state, "with income", income);
}

calcTax(50000);
calcTax(50000, 'New York'); */


//ES6 VERSION
function calcTax(income, state = 'Florida'){
    console.log('Calculating tax for resident of', state, "with income", income);
}

calcTax(50000)
calcTax(50000, 'New York');
