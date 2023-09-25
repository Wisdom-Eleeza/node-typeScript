// let person = {
//     firstName: 'GodWillNotLetMeDown',
//     lastName: 'LetYourMercySpeakForMeOhGod',

//     getFunction: function () {
//         return `The name of the person is ${person.firstName} ${person.lastName}`;
//     },
// };
// console.log(person.getFunction())

/*
Abstraction: abstraction means displaying only essential information and hiding the details.
Data abstraction refers to providing only essential information about the data to the outside world,
hiding the background details or implementation.

Encapsulation: The process of wrapping properties and functions within a single unit.
Sometimes encapsulation refers to the hiding of data or data abstraction which means representing essential features
hiding the background detail.
*/

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.name = maker;
        this.engine = engine;
    }
    getDetails() {
        return `The name of the bike is ${this.name}`;
    }
}

const bike1 = new Vehicle('Toyota', 'Hundai', 'Corola')
const bike2 = new Vehicle('Ninja', 'Kawasaki', '995549C')

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());
