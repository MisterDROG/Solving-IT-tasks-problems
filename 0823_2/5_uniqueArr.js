//find uniquie values from array

const arr = [1, "asdf", "test", 15, {}, "asdf", 15, {}]

console.log(Array.from(new Set(arr)))

//doesnt work with objects
function uniquieD(arr) {
    const resObj = {}
    for (let i=0; i<arr.length; i++) {
        if (!(arr[i] in resObj)) resObj[arr[i]] = 1
    }
    return Object.keys(resObj)
}

console.log(uniquieD(arr))
