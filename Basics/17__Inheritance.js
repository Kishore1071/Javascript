// Inheritance

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
    }
}


class ProfessionalDetails extends PersonData {

    constructor(name, designation, joined_year) {
        super(name)

        this.designation = designation
        this.joined_year = joined_year
    }

    getDesignation() {
        return this.designation
    }

    getProfile() {

        return `${this.name} is working as a ${this.designation} since ${this.joined_year}`
    }
}

let professional1 = new ProfessionalDetails("Kishore", "Software Developer", 2020)
let professional2 = new ProfessionalDetails("Jay", "Frontend Developer", 2022)

console.log(professional1.getName())
console.log(professional1.getDesignation())
console.log(professional1.getProfile())

console.log()

console.log(professional2.getName())
console.log(professional2.getDesignation())
console.log(professional2.getProfile())