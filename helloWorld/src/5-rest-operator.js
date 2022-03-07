//ES5 

/* function calcTax(){
    console.log('Calcculating tax for customers with income', arguments[0]);

    const customers =[].slice.call(arguments,1);
    customers.forEach(customer => console.log('Processing', customer));
}
 */

//ES6

function calcTax(income, ...customers){
    console.log('Calcculating tax for customers with income', income);
    customers.forEach(customer => console.log('Processing', customer));
}

calcTax(50000, 'Jonh', 'jane', 'mary');