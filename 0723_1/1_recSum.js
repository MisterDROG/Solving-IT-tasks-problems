//Write a function sumTo(n) that calculates the sum of the numbers 1 + 2 + ... + n.

function sumTo(n) {
    let res = 0
    if (n==1) return 1
    else return n + sumTo(n-1)
}

console.log( sumTo(100) ); // 5050