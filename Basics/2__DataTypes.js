// String
// Contents between single or double quotes are consisdered as string. A number, letter or even special characters with in quotes are always strings. Except string no datatype takes quotations

let first_name = "Kishore";
let last_name = 'M';



// Number : The whole numbers and decimal numbers are belongs to Number datatype

let age = 25;  // integer
let weight = 60.5;  // decimal

console.log(typeof(first_name))



// Boolean : Boolean takes only two values, true and false. 

let is_admin = true;
let is_employee = false;



// Bigint : Used to store number greater than 15 digits, BigInt does not support decimal]

let x = 874188919885164891494n;



// Null and Undefined  :  The null represents the emptiness of a variables and undefined means the variable name is not declared

let username = undefined;
let password = null;



// Array
// Arrays are used to store mulitiple values to a single variable and this values can be combination of same datatypes or different datatypes and even the value of an array can be a array. 

const shopping_list = ["Milk", "Ice Cream", 56, 67, true, 78.876]



// Object
// Objects are also used to store mulitiple values to a single variable and this values can be combination of same datatypes or different datatypes. But the difference from array is that each value has it own key name


const person_data = {
    "name" : "Kishore",
    "age": 25,
    "is_admin": true
}


