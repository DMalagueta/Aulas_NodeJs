const line = [0, 0, 2, 0, 2];
const newLine = [2,4, ...line,12];

console.log(newLine);

const sorted = [
    ...line.filter(n => n ===0),
    ...line.filter(n => n !==0),
];

console.log(sorted);

 const person = {
    name: 'Mary',
    lastName: 'Smith'
}
/*
const clone = person;
clone.lastName = 'doe';

console.log(person, clone); */

/* const clone = Object.assign({},person, { age: 40});

clone.lastName = 'Doe'; */

const clone ={ ...person, lastName: 'Doe', age: 40 };

console.log(person, clone);