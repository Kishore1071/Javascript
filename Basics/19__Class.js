// JavaScript classes are a fundamental feature introduced in ECMAScript 6 (ES6) to enable object-oriented programming in JavaScript. They provide a more structured and familiar way to define and work with objects and prototypes

class PersonData  {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return `My name is ${this.name} `
    }

    setAge(new_age) {
        this.age = new_age
        return this.age
    }   
}

let person1 = new PersonData("Kishore", 25)
let person2 = new PersonData("awew", 322)
console.log(person2.getName())
console.log(person2.age)
console.log(person2.setAge(50))
console.log(person2.age)

// console.log(person2)





