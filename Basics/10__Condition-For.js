// For loop is used to repeat a set of code untill a condition fails.A for loop can contain another for loop

for (initialization; condition; increment/decrement) {
    // Code to be executed in each iteration
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration #" + i);
}

// Initialization: It sets the initial value before the loop starts.

// Condition: It checks if the loop should continue executing. If the condition is true, the loop continues; if it's false, the loop terminates.

// Increment/Decrement: It updates the loop control variable after each iteration.


// Infinite Loop
for (let i = 0; i < 5; i--) {
    console.log("This is an infinite loop!");
}


// Nesting of for loop

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


// Break and Continue statement is used stop a loop and skip a iteration of loop

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    if (i === 1) {
        continue; // Skip iteration when i is 1
    }
    console.log("Iteration #" + i);
}

