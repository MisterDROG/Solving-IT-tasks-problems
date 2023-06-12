// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them. (codewars)

function wordsSubst(a,b) {
    const res = []
    for (let i=a; i <=b; i++) {
        res.push(i)
    }
    return res
}

console.log(wordsSubst(3,7))
console.log(wordsSubst(5,15))