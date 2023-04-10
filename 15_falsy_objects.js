const l1 = ['',[], 0, null, undefined, {}, Infinity, NaN, false]

l1.forEach((item, id ,array)=> {
    console.log(item, 'преобразуется в:' ,Boolean(item))
})

const { text } = require("stream/consumers")

let a = 'let'

let b = 2
let c = '2'

if (c == b) {
    console.log('да')
} else {
    console.log('нет')
}

if (c === b) {
    console.log('да')
} else {
    console.log('нет')
}

function test(a,b,c) {
    console.log(arguments)
}

test(5,6,6)

let test1 = (a, b, c) => {
    console.log(arguments)
}

console.log(test1(2,3,4))

console.log(2/0)
console.log(2*'2')
console.log(2*'rtry')
console.log(Math.sqrt(-4))