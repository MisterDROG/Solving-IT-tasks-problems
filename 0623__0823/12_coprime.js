//Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.
//The inputs will always be two positive integers between 2 and 99.

function isCoprime(x, y) {
    const del =  y % x
    if (del === 0) return x === 1 ? true : false
    else return isCoprime(del, x)
  }

console.log(isCoprime(2, 12)) // false
console.log(isCoprime(20, 27)) // true
console.log(isCoprime(12, 39)) // false