// ES5 Version

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.printName = function() {
//     console.log(this.name, this.lastName);
// }

// Person.prototype.lastName = 'Doe';

// ES6 Version

class Person {

    #name;
    #lastName;
    #age;

    constructor(name, lastName = 'Doe') {
        this.#name = name;
        this.#lastName = lastName;
    }

    printName() {
        console.log(this.#name, this.#lastName);
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
    
    getLastName() {
        return this.#lastName;
    }

    setLastName(lastName) {
        this.#lastName = lastName;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        if (age < 0 || age > 120) {
            throw new Error(`Invalid age (${age})`);
        }

        this.#age = age;
    }
}

class Student extends Person {
    #school;

    constructor(name, lastName, school) {
        super(name, lastName);
        this.#school = school;
    }

    getSchool() {
        return this.#school;
    }

    setSchool(school) {
        this.#school = school;
    }

    study() {
        console.log(`${this.getName()} ${this.getLastName()} study at ${this.#school}`)
    }
}


const p1 = new Student('John', 'Silva', 'ETIC');
// console.log(p1.name);
p1.setName('Matateu');
p1.printName();
p1.study();

try {
    p1.setAge(-20);
} catch (e) {
    console.log(e.message);
}

console.log(p1.getAge());

const p2 = new Person('Mary');
// console.log(p2.name);
p2.printName();