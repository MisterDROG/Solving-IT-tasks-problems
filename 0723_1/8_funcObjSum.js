//Write a sum function that works like this:

function sum(n) {
    let currSum = n
    function sums(k) {
        currSum +=k
        return sums
    }

    sums.toString = function() {
        return currSum
    }

    return sums
}

console.log(sum(1)(2) == 3) // 3; // 1 + 2
console.log(sum(1)(2)(3) == 6) // 6; // 1 + 2 + 3
console.log(sum(5)(-1)(2) ==6) // 6
console.log(sum(6)(-1)(-2)(-3) == 0) // 0
console.log(sum(0)(1)(2)(3)(4)(5) == 15) // 15