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