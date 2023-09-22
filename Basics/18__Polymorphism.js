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

            return "This function requires minimum one number or character as parameter"
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
