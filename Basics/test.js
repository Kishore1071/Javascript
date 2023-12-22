// ARRAY

let numbers1 = [1,2,25,3,4,6,6,6]
let numbers2 = [2,6,8,65,45,3, 3]

let duplicate = []

for (let x of numbers1) {

    for (let y of numbers2) {

        if (x === y) {
            
           if(duplicate.indexOf(x) === -1) {
                duplicate.push(x)
           }
        }
    }
}

console.log(duplicate)

// // OBJECT

// let laptop = {
//     "brand": "Asus",
//     model: "S15"
// }

// for (let a in laptop) {
//     console.log(a, laptop[a])
// }

// // CONDITIONAL

// for (let i = 0; i <= 3; i++ ) {
//     if (i === 3) {
//         continue
//     }
//     else {
//         console.log(num)
//     }
// }