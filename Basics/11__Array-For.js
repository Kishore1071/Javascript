/*

To loop through the values of array we can use the conditional for loop or the for loop that is specifically designed to do that

we can also use break and continue

*/


// Looping with condition

for (let i = 0; i < array.length; i++) {
    // Code to be executed for each element of the array
    // You can access the current element with array[i]
}

let fruits = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Element #" + i + ": " + fruits[i]);
}


// For-loop for array

for (let fruit of fruits) {
    console.log(fruit)
}


// ForEach method

fruits.forEach(function (fruit, index) {
    console.log("Element #" + index + ": " + fruit);
});