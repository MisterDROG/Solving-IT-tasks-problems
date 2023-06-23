function sumN(n) {
    return function calc(k) {
        if (!k) return n
        else {
            n +=k
            return calc 
        }
    }
}

console.log(sumN(1)(2)(3)())