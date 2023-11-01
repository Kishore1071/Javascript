// String

let name = "kishore" // Double Quotes
let user_name = 'kishore' // Single Quotes

// Escape Character \ : To include predefined symbols

let text = "This is a \"heading\" text"


// PROPERTIES & METHODS:-

// Length

let sample_text = "This is the sample text"

sample_text.length

// Slicing

sample_text.slice(3, 8)


// Replacing

let new_sample = sample_text.replace("text", "paragraph")

// Case Conversion

sample_text.toLocaleUpperCase();
sample_text.toLocaleLowerCase();

// Search

sample_text.search("the")  // returns staring index in the exact word exists


// Template Literals ``


let age = 25;

let text_literals = `Age of the person is ${age}`

console.log(text_literals)

