//Your goal is to create appropriate definitions for start, end, push, add, sub, mul and div so that 
//the bubbly language is valid JavaScript syntax, and evaluates to the correct value.

const start = function(fn) {
    const arr = [1,2]
    return fn(arr)
};

const push = function(arr) {
    return function(n) {
        arr.push(n)
        return function(fn) {
            return fn(arr)
        };
    } 
};

const add = function(arr) {
    return function(fn) {
        const sum = arr.pop() + arr.pop()
        arr.push(sum)
        return fn(arr)
    }
};

const mul = function(arr) {
    return function(fn) {
        const ml = arr.pop() * arr.pop()
        arr.push(ml)
        return fn(arr)
    }
};

const div = function(arr) {
    return function(fn) {
        const dv = ~~(arr.pop() / arr.pop())
        arr.push(dv)
        return fn(arr)
    }
};

const sub = function(arr) {
    return function(fn) {
        const sb = arr.pop() - arr.pop()
        arr.push(sb)
        return fn(arr)
    }
};

const end = function(arr) {
    return arr.pop()
};

console.log((start)(push)(5)(push)(3)(add)(end)) //8
console.log((start)(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(mul)(end)) //48
console.log((start)(push)(4)(push)(9)(div)(end)) //2
console.log((start)(push)(5)(push)(8)(push)(1)(add)(add)(end)) //14
console.log((start)(push)(3)(push)(5)(sub)(end)) //2
console.log((start)(push)(8)(push)(9)(push)(3)(mul)(mul)(end)) //216
console.log((start)(push)(1)(push)(1)(add)(push)(2)(add)(end)) //4