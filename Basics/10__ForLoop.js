// For loop for a condition

for(let i = 0; i <= 3; i++) {
    console.log(i)
}


// For loop for array

let numbers = [1, 2, 3, 4]

let sum = 0

for(let x of numbers) {

    sum = sum + x

    if (x === 2) {

        console.log(x)
        break
    }
}



for(let x of numbers) {

    if (x === 2) {
        continue
    }
    else {
        console.log(x)
    }
}


// For loop for object


let person_data = {
    "name": "Kishore",
    "age": 25
}


for(let x in person_data) {
    console.log(person_data[x])
}

// Use break and continue statements with loop