// Array is used to store multiple values in a single variable
// Arrays are sequence datatypes and can be accessed with index values, index values starts from 0

const number = ["g", "q", 2]

number[0] // gets the first value of the array

number.push("w") // add as a last values of the array

// PROPERTIES & METHODS:-

number.length  //total values in array

number.pop()  // removes last value of array, we can store the removed value to new variable

number.shift()  // to remove the first value of array

number.unshift(6)  // to add a value as the first value of the array

number[0] = "Car"  // we can change the value of an index

number.indexOf("q")  // to find the index of a value

 Array.isArray(number)// Type of array

const fruits = ['Apple', 'Orange']

let new_array = number.concat(fruits)  // add two array to make new array

const two_dimensional_array = [[1,2], [3,4,5], [6,7]]

let new_two_dimensional_array = two_dimensional_array.flat()  // Converts two dimensional array into single dimensional array

let players = ['Rohit', "Virat", "Rahul", "Sehwag"]

players.splice(2, 0, "Dhoni", "Sachin") // to add items based on index

players.splice(2, 2) // to remove items based on index

const fruits_list = ["Banana", "Orange", "Lemon", "Apple", "Mango"]

const new_fruits_list = fruits_list.slice(3)  // makes new list from starting index
const newfruitslist = fruits_list.slice(0, 2)  // makes new list from starting index and ending index

fruits_list.sort()  // arrange to asending order, only for string
fruits_list.reverse()

const numberList = [55, 111, 10, 222, 77, 15, 1]
Math.max.apply(null, numberList)
Math.min.apply(null, numberList)

