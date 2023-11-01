// Encapsulation is the concept of bundling data (properties) and the methods that operate on that data into a single unit (Mainly a class).


// Object as encapsulation

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getInfo: function() {
        return `${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }
};


// class as encapsulation

class PersonData{
    
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return `My name is ${this.name}`
    }

    setAge(new_age) {
        this.age = new_age
        return this.age
    }   
}