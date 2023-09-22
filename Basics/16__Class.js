// Encapsulation

class PersonData{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }

    setAge(new_age) {
        this.age = new_age
    }
}

person1 = new PersonData("Kishore", 25)
person1 = new PersonData("Sachin", 50)
