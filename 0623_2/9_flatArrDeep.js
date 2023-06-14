//For this exercise you will create a global flatten method. The method takes in any number of 
//arguments and flattens them into a single array. If any of the arguments passed in are an array 
//then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. 
//Any nested arrays, no matter how deep, should be flattened into the single array result.

// function flatten(arr) {
//     let res = []
//     arr.forEach((el) => {
//         if (Array.isArray(el)) res = [...res, ...flatten(el)]
//         else {
//             res.push(el)
//         }
//     })
//     return res;
//   }

// function flatten(arr) {
// let res = []
// arr.forEach((el) => {
//     if (Array.isArray(el)) res = [...res, ...flatten(el)]
//     else {
//         res.push(el)
//     }
// })
// return res;
// }

function flatten(arr) {
    let res = []
    let stack = []
    stack.push(arr)
    while (stack.length) {
        let item = stack.pop()
        item.forEach(el => {
            if (Array.isArray(el)) stack.push(el.reverse())
            else res.unshift(el)
        })
    }
    return res
    }

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
console.log(flatten([[4], [[1, 3]], [[[7]]]])) // -> [1, 2, 3, 4]

// function flatten() {
//     let res = []
//     const arr = Array.from(arguments)
//     arr.forEach((el) => {
//         console.log(el)
//         if (Array.isArray(el)) res = [...res, ...flatten(...el)]
//         else {
//             res.push(el)
//         }
//     })
//     return res;
//   }

// console.log(flatten(1, [2, 3], 4, 5, [6, [7, [8]]])) // -> [1,2,3,4,5,6,7,8]