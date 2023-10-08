let n = 7
while (n === 7){

    let value = String(Math.round(Math.random() * 1000000))

    let length = value.length

    if (length === 6) {
        console.log(Number(value))
        n = n + 1
    }
}


