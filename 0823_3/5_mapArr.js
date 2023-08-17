//what in console?

const arr = [4, 5, 7, 8, 7, 5, 9]

const newMap = arr.map(el => {
    if (el%2 === 0) return el
    else return el*2
})

console.log(arr)
console.log(newMap)

// [
//     4, 5, 7, 8,
//     7, 5, 9
// ]
// [
//         4, 10, 14, 8,
//     14, 10, 18
// ] 
//