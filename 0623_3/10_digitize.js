//make string from n

function digitize(n) {
    return n.toString().split('').reverse().map(Number)
}

console.log(digitize(1234)) // [4,3,2,1]