// Inheritance is a mechanism that allows a class (child class) to inherit the properties and methods of another class (parent class)

class PersonData{
    constructor(name, age, weight) {
        this.name = name
        this.age = age
        this.weight = weight
    }

    getName() {
        return this.name
    }

    setAge(new_age) {
        this.age = new_age
        return this.age
    }
}


class ProfessionalDetails extends PersonData{

    constructor(name, age, weight, designation, joined_year) {
        super(name, age, weight)

        this.designation = designation
        this.joined_year = joined_year
    }

    getDesignation() {
        return `I'm working as a ${this.designation}`
    }

    getProfile() {

        return `${this.name} is working as a ${this.designation} since ${this.joined_year}`
    }
}

let person_details = new ProfessionalDetails("Kishore", 25, 60, "Software Developer", 2020)

console.log(person_details);