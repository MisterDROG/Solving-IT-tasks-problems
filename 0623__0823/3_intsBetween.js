// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function intBetw(a,b) {
    const res = []
    for (let i=a; i <=b; i++) {
        res.push(i)
    }
    return res
}

console.log(intBetw(3,7))
console.log(intBetw(5,15))