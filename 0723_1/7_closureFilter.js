// We have a built-in arr.filter(f) method for arrays. It filters all elements with the f function.
//If it returns true, then the element will be added to the returned array.

// Make a set of "ready-to-use" filters:
// inBetween(a, b) – between a and b (inclusive).
// inArray([...]) is in the given array.

// They should be used like this:
// arr.filter(inBetween(3,6)) - selects only values between 3 and 6 (inclusive).
// arr.filter(inArray([1,2,3])) - selects only elements that match one of the array elements



function inBetween(a,b) {
    return function(x) {
        if (x>=a && x<=b) return true
    }
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x)
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2