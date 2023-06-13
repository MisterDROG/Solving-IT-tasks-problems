//closure

function one(fn) {
    return fn ? fn(1) : 1
}
function two(fn) {
    return fn ? fn(2) : 2
}
function three(fn) {
    return fn ? fn(3) : 3
}
function four(fn) {
    return fn ? fn(4) : 4
}
function five(fn) {
    return fn ? fn(5) : 5
}
function six(fn) {
    return fn ? fn(6) : 6
}
function seven(fn) {
    return fn ? fn(7) : 7
}
function eight(fn) {
    return fn ? fn(8) : 8
}
function nine(fn) {
    return fn ? fn(9) : 9
}

function plus(num) {
    return function(n) {
        return num + n
    }
}
function minus(num) {
    return function(n) {
        return n - num
    }
}
function divide(num) {
    return function(n) {
        return n / num
    }
}
function mult(num) {
    return function(n) {
        return num * n
    }
}

console.log(one(plus(two()))) //3
console.log(four(minus(three()))) //1
console.log(six(mult(seven()))) //42
console.log(four(divide(two()))) //2
