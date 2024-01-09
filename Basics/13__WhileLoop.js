// While loop - entry check loop
// While loop is used to repeat a set of code based on a condition, while loop repeats untill the condition satisfy


while (condition) {
    // Code to be executed as long as the condition is true
}



let count = 0;

while (count < 5) {
    console.log(count)
    count = count + 1; // Increment the count to eventually exit the loop
}


let userIsHappy = true;

while (userIsHappy) {
    let response = prompt("Are you happy? (yes/no)");

    if (response === "no") {
        userIsHappy = false;
    }
}


let num = 0;

while (true) {
    console.log(num);
    num++;

    if (num === 5) {
        break; // Exit the loop when num is 5
    }
}
