/*

If statement are condtional statement in javascript which is used to run a ablock of code when a condition is is satisfied

An if statement can have a else statement, the else statement is used to run a block of code when the every condition that tested was failed. The else block also called as a default statement

One If condition can have only on if block and only one one else block. If we want to test mulitiple condition we need to use "else if" block as many as time we want and this all "else if" block must be placed between if and else block

One if statement can have another if staement inside

Ternary operator can be used as a short hand for if statement only when there is two possible outcomes

*/


// Basic if

if (condition) {
    // Code to be executed if the condition is true
}

let age = 25;

if (age >= 18) {
    console.log("You are an adult.");
}



// With else

if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}

let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside.");
} else {
    console.log("It's not too hot.");
}



// With else if

if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if none of the conditions are true
}

let score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("D grade");
}


// Nesting

if (condition1) {
    if (condition2) {
        // Code to be executed if both conditions are true
    }
}

let x = 10;
let y = 5;

if (x > 0) {
    if (y > 0) {
        console.log("Both x and y are positive.");
    } else {
        console.log("x is positive, but y is not.");
    }
} else {
    console.log("x is not positive.");
}


// Ternary


// condition ? expressionIfTrue : expressionIfFalse;

let isRaining = true;
let weatherMessage = isRaining ? "Bring an umbrella." : "Enjoy the sunshine.";

console.log(weatherMessage);

