// Functions are used reduce code repeataion and make the codes in to single callable functions

`Basic Function`

function ConsoleData() {
    console.log("Something")
}

ConsoleData();


`Function with Return`

function ReturnData() {

    let a = 10
    let b = 15
    let c = a + b
    return c;
}

let d = ReturnData();


`Function with Parameters and Arguments`

function Addition(number1, number2) { // parameters
    return number1 + number2;
}

Addition(10, 5) // arguments


// Function can have local variable

function Double(number) {
    let double = 2;

    console.log(double)
    return number * double
}

Double(10)