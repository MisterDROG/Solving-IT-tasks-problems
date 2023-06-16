//Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны n, которую передали как аргумент.

function fibonacci(n) {
    const seq = [1,1]

    if (n<2) return seq.slice(0, n)

    while (seq.length<n) {
        seq.push(seq[seq.length-1] + seq[seq.length-2])
    }
    return seq
  }
  
  console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
  console.log(fibonacci(1)) // [ 1 ]
  console.log(fibonacci(2)) // [ 1, 1 ]
  console.log(fibonacci(0)) // []