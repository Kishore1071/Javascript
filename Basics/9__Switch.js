/*

The switch statement is a conditional statement in JavaScript that allows you to perform different actions based on different conditions. It's particularly useful when you have a single expression (or value) that can have multiple possible values, and you want to execute different code for each value.

Switch statement can be used as an alternate option for if statement

The switch keyword is followed by a set of parentheses containing an expression (usually a variable)

The expression is compared to each case value. When a match is found, the code block associated with that case is executed

The break statement is used to end a switch statement when a match is found

The default case is optional and is executed when none of the case values match the expression, just like else in if statement

*/


// Synatax

switch (expression) {
    case value1:
        // Code to be executed if expression === value1
        break;
    case value2:
        // Code to be executed if expression === value2
        break;
    // ... more cases ...
    default:
        // Code to be executed if expression doesn't match any case
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

