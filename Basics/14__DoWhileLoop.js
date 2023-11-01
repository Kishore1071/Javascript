// Do While loop - exit check loop
// Do While loop is also used to repeat a set of code based on a condition but the loop's code block is executed at least once before checking the loop condition.

do {
    // Code to be executed
} while (condition);


let count = 0;

do {
    console.log(`Count: ${count}`);
    count++;
} while (count < 5);


let userIsHappy;

do {
    let response = prompt("Are you happy? (yes/no)");
    userIsHappy = response === "yes";
} while (!userIsHappy);
