//Write a sum function that works like this: sum(a)(b) = a+b.

function sum(k) {
    return function(n) {
        return k + n
    }
}

console.log(sum(1)(2)) // 3
console.log(sum(5)(-1)) // 4