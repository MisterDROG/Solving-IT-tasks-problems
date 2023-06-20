// Функция-обёртка (HOF) memoize


function memoize(fn) {
    const cache = {}
    return function() {
        console.log(cache)
        const index = JSON.stringify(arguments)
        if (index in cache) return cache[index]
        else {
            const res = fn(...arguments)
            cache[index] = res
            return res
        }
    }
}


let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
})

memoizedFn(2, 3) // 5
console.log('2 ->', memoizedFn(2, 3)) // 5
console.log('2 ->', callCount) // 1

