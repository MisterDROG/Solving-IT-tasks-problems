//Write a function fib(n) that returns the nth Fibonacci number.

function fib(n) {
    if (n==1 || n ==2) return 1
    else return fib(n-1) + fib(n-2)
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(7)); // 5527939700884757