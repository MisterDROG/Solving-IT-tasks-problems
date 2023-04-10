const fs = require('fs')
let inputString = 'start';

function sumInput(string) {
    numMass = string.split(' ')
    let sum = numMass.reduce(function(a, b) {
      return Number(a) + Number(b)
    }, 0)
    return String(sum)
  }

console.log(inputString)

let fileRead = fs.readFileSync('input.txt','utf8')

console.log(fileRead)

inputString = sumInput(fileRead);

console.log(inputString)

fs.writeFileSync('output.txt', inputString)

