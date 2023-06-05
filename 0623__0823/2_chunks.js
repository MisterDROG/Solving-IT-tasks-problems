//function to return arr with chuncks from array and chunk size (codewars)

const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [1,2,3]

function eachCons(arr, n) {
    let res = []
    for (let i = 0; i< arr.length - (n-1); i++) {
        const chunk = []
        for (let j = 0; j< n; j++) {
            chunk.push(arr[i+j])
        }
        res.push(chunk)
    }
    return res
} 

console.log(eachCons(arr1, 3))
console.log(eachCons(arr2, 2))

