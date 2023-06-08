//Your job is to produce the code for the fusc function. In this kata, your function will be tested with small values of n,
//so you should not need to be concerned about stack overflow or timeouts.

function fusc(n) {
    if(n===0) return 0
    if(n===1) return 1
    if((n % 2) === 0) return fusc(n/2)
    if((n % 2) !== 0) return fusc((n-1)/2) + fusc((n-1)/2 + 1)
  }

console.log(fusc(0)) // 0
console.log(fusc(1)) // 1
console.log(fusc(19)) // 7
console.log(fusc(42)) // 8
console.log(fusc(85)) // 21