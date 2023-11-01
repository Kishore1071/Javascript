// A Set is a built-in object in JavaScript that represents a collection of values. It stores unique values, which means that no two elements in a Set can be the same. Sets are iterable, meaning you can loop through their elements, and they provide methods for adding, removing, and checking the existence of elements.

const mySet = new Set();


// Adding Data

mySet.add("apple");
mySet.add("banana");
mySet.add("cherry");


// Checking the presence of data

console.log(mySet.has("apple")); // true
console.log(mySet.has("grape")); // false

// Removing the existing data

mySet.delete("banana");


// To check the total values in a set

console.log(mySet.size); // 2 (banana is removed)


// Looping through set

// Type 1

for (const item of mySet) {
    console.log(item);
}

// Type 2

mySet.forEach(item => {
    console.log(item);
});
