const arr = [[1, 2, [3, 4]], [9], [10, 12]]

function sumArr(arr) {
    let sum = 0
    arr.forEach((el) => {
        if (Array.isArray(el)) sum += sumArr(el) 
        else sum += el
    })
    return sum
}

console.log(sumArr(arr))