//A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

function isNice(arr){
    if (!arr.length) return false
    for (let i=0; i<arr.length; i++) {
        if (!(arr.includes(arr[i] -1) || arr.includes(arr[i] + 1))) return false
    }
    return true
}

console.log(isNice([])) // false
console.log(isNice([2,10,9,3])) // true
console.log(isNice([3,4,5,7])) // false