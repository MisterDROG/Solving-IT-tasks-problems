//start, if omitted, defaults to 0; step defaults to 1.
//Returns a list of integers from start to stop, incremented by step, exclusive.
//Note that ranges that stop before they start are considered to be zero-length instead of negative.

function range(start, stop, step) {
    let startN = 0, stopN = 0, stepN = 0
    switch (arguments.length) {
        case 1 : startN = 0 ; stopN = arguments[0]; stepN = 1; break
        case 2 : startN = arguments[0]; stopN = arguments[1]; stepN = 1; break
        case 3 : startN = arguments[0]; stopN = arguments[1]; stepN = arguments[2]; break
    }
    const res = []
    for (let i = startN; i < stopN; stepN === 0 ? i += 1 : i += stepN) {
        stepN === 0 ? res.push(startN) : res.push(i)
    }
    return res
}

console.log(range(0)) // []
console.log(range(1)) // [0]
console.log(range(5)) // [0, 1, 2, 3, 4]
console.log(range(10)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(range(1, 1)) // []
console.log(range(1, 5)) // [1, 2, 3, 4]
console.log(range(5, 10)) // [5, 6, 7, 8, 9]
console.log(range(1, 11)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(1, 1, 1)) // []
console.log(range(1, 2, 1)) // [1]
console.log(range(2, 6, 2)) // [2, 4]
console.log(range(1, 5, 0)) // [1, 1, 1, 1]
