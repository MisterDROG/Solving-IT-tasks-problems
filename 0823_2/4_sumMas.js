//find sum from array

const arr = [1, 2, 4, 2, 7, 3, 6]

console.log(arr.reduce((sum, el) => {
    return sum + el
}, 0))