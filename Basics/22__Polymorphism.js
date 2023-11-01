// Polymorphism means many forms. If a set of code can behave differently for different types of input then it is known as polymorphism. Technically Polymorphism is the ability of objects to respond to the same method or property differently based on their own properties or behavior.

// A simple example are console.log, typeof


// Example with class

class Bird {
    speak() {
        console.log("Bird sings.");
    }
}

class Cat {
    speak() {
        console.log("Cat meows.");
    }
}

const pets = [new Bird(), new Cat()];

for (const pet of pets) {
    pet.speak();
}


// Examples with function

function Addittion(...args) {

    let number_list = []

    let string_list = []

    let string_data = false

    for (let x of args) {

        if (typeof(x) == "string") {

            string_data = true
        
            string_list.push(x)
        }

        else {

            number_list.push(x)
        }
    }

    let sum = 0

    for (let y of number_list){

        sum = sum + y
    }

    if (string_data === false){

        if (sum === 0){

            return "This function requires minimum one number or character as arguments"
        }

        else {
            
            return sum
        }

    }
    
    else if (string_data === true){

        sentance = ""

        for (let word of string_list){

            sentance = sentance + word + " "
        }

        if (sum === 0) {

            return sentance
        }
        
        else{

            return `${sum}, ${sentance}`
        }

    }
}

result = Addittion()

console.log(result);
