// Polymorphism means many forms. If a set of code can behave differently for different types of input then it is known as polymorphism. Technically Polymorphism is the ability of objects to respond to the same method or property differently based on their own properties or behavior.

// A simple example are console.log, typeof

// Example with class

class Bird {
    sound() {
        console.log("Bird sings.");
    }
}

class Animals {
    sound() {
        console.log("Cat meows.");
    }
}

const pets = [new Bird(), new Cat()];

for (const pet of pets) {
    pet.sound();
}


// Examples with function
function calculateArea(shape) {

    if (shape.type === 'circle') {

        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.type === 'rectangle') {

        return shape.length * shape.width;
    }
    else {

        console.log('Unsupported shape type');
    }
}


const circle = { type: 'circle', radius: 5 };
const rectangle = { type: 'rectangle', length: 4, width: 6 };

console.log('Circle Area:', calculateArea(circle));
console.log('Rectangle Area:', calculateArea(rectangle));
