/*

To loop through the values of object we can use the for-loop that is specifically designed to do that

we can also use break and continue

*/

for (let key in object) {
    // Code to be executed for each property of the object
    // You can access the property value using object[key]
}

let person = {
    "name": "John",
    "age": 30,
    "profession": "Engineer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}


