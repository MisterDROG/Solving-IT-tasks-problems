//Write a function that adds 2 numbers. The function should work as shown in the example below:

function add(a, b) {
    if (!a) return add
    if (!b) {
        return function calc(n) {
            if (!n) return calc
            return a + n
        }
    }
    return a + b
  }
  
console.log(add(20, 22)) // -> 42
console.log(add(20)(22)) // -> 42
console.log(add(20)()(22)) // -> 42
console.log(add(20)()()()(22)) // -> 42
console.log(add(20)()()()()()()()()()()()(22)) // -> 42
console.log(add()(20)(22)) // -> 42
console.log(add()()()()(20)(22)) // -> 42
console.log(add()(20)()(22)) // -> 42
console.log(add()()()()()(20)()()()(22)) // -> 42