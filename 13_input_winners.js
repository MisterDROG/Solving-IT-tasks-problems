const readline = require('readline');

let years;
let done = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

process.stdin.on('end', () => {
    console.log(done);
    process.exit(0); 
}); 

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('', (line) => {
      years = line
      resolve()
    })
  })
}

const AskQuestion = (rl) => {
    return new Promise((resolve, reject) => {
        rl.question('', (answer) => {
            let res = answer.split(' ')
            let sortedRes = res.sort()
            resolve(sortedRes);
        });
    });
}

const ask = function(length) {
    return new Promise(async resolve => {

        let results = [];
        for(let i=0;i < length;i++) {
            const result = await AskQuestion(rl);
            results.push(result);
        }
        rl.close();
        resolve(results);
    })
}

const main = async () => {
    await question1()
    await ask(years)
         .then(answers => {
          console.log(answers)
            let sorted = answers.reduce(function(acc, el) {
                acc[el] = (acc[el] || 0) + 1;
                return acc;
              }, {});
            console.log(sorted)
            let values = Object.values(sorted);
            console.log(values)
            let final = 0
            values.forEach((el, index, array) => {
                if (array[index] > final) {
                    final = array[index]
                }
            })
            done = final
            console.log(done)
         });
    rl.close()
  }


main()
