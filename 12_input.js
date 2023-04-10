// 'use strict'

const readline = require('readline');

let inputString1;
let inputString2;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function sumInput(a,b) {
    let sum = Number(a) + Number(b)
    return sum
}

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('', (line) => {
      inputString1 = line
      console.log('first', line, inputString1)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('', (line) => {
        inputString2 = line
        console.log('second',line, inputString2)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  console.log('inputString1: ', inputString1,'inputString2: ',inputString2)
  await question2()
  console.log('inputString1: ', inputString1,'inputString2: ',inputString2)
  console.log(sumInput(inputString1,inputString2))
  rl.close()
}

main()
