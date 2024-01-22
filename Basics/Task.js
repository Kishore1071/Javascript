// PRIME NUMBER

let i
let prime_numbers = []

for (i = 2; i <= 100; i++) {

    let n = 2

    let prime = true

    while (n < i) {

        value = i % n

        if (value === 0) {

            prime = false

            break
        }

        n = n + 1
    }

    if (prime === true) {
        prime_numbers.push(i)
    }   
}

console.log(prime_numbers)


// FIBONACCi

let number1 = 0
let number2 = 1
let count = 0

while (count < 20) {
    if (count === 0) {
        console.log(number1)
        console.log(number2)
    }
    else {
        let value = number1 + number2
        console.log(value);
        number1 = number2
        number2 = value
    }

    count = count + 1
}

// EMI

let loan_amount = 100000
let interest_rate = 9
let tenure = 36

r = (interest_rate/100) / 12

emi = (loan_amount * r * ((1 + r) ** tenure)) / (((1 + r) ** tenure) - 1)

console.log(emi, "emi");