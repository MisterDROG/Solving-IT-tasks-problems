//write curring function

function add(a,b,c) {
    return a + b + c
}

function curr(fn, length = fn.length) {
    return (...args) => {

        if (args.length < length) return curr((...otherArgs) => fn(...args, ...otherArgs), length - args.length)

        return fn(...args)
    }
}

const addCurr = curr(add)

console.log(add(1,2,3))
console.log(addCurr(1)(2)(3))
console.log(addCurr(1,2)(3))
console.log(addCurr(1, 2, 3))