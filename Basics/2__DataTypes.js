// 1) String  2) Number  3) Bigint  4) Boolean  5) Undefined  6) Null  7) Symbol  8) Object 9) Array  10) Date


// String

let first_name = "Kishore";
let last_name = 'M';

// Number

let age = 25;  // integer
let weight = 60.5;  // decimal

console.log(typeof(first_name))

// Boolean

let is_admin = true;
let is_employee = false;


// Bigint [BigInt is used to store number greater than 15 digits, BigInt does not support decimal]

let x = 874188919885164891494n;


// Undefined

let username = undefined;


// Null

let password = null;


// Symbol

let the_symbol = Symbol('Kishore');

console.log(the_symbol);


// Object

const person_data = {
    "name" : "Kishore",
    "age": 25
}


// Array

const shopping_list = ["Milk", "Ice Cream"]


// Date

const date = new Date();  // to get current date