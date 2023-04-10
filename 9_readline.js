const readline = require('readline');

let inputString = 0;

console.log(inputString)


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });




rl.on('line', (line) => {
  inputString = line;
  console.log(sumInput(inputString))
  rl.close()
})

console.log(inputString)

function sumInput(string) {
  numMass = string.split(' ')
  let sum = numMass.reduce(function(a, b) {
    return Number(a) + Number(b)
  }, 0)
  return sum
}

// rl.question('Введите числа через пробел: ', function (data) {
//     console.log('Вы ввели: ', data)
//     inputString = data
//     rl.close(); 
// })

