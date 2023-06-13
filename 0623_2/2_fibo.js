//return n elements of fibonachi

function fibonacci(n) {
    if (n <= 0) return []
    let res = []
    for (let i=0; i<n; i++) {
        if (i === 0) res.push(0)
        else if (i === 1) res.push(1)
        else res.push(res[i-2] + res[i-1])
    }
    return res
  }

console.log(fibonacci(4))