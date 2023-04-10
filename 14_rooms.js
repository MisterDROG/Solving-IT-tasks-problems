const readline = require('readline');

const AskQuestion = (rl) => {
    return new Promise(resolve => {
        rl.question('', (answer) => {
            let res = answer.split(' ')
            resolve(res);
        });
    });
}

const ask = function() {
    return new Promise(async resolve => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let results = [];
        for(let i=0;i < 2;i++) {
            const result = await AskQuestion(rl);
            results.push(result);
        }
        rl.close();
        resolve(results);
    })
}

const main = async () => {
    await ask()
         .then(answers => {
            let sides = []

            console.log(answers)

            sides.push(Math.abs(answers[0][0] - answers[1][0]))
            sides.push(Math.abs(answers[0][0] - answers[1][2]))
            
            sides.push(Math.abs(answers[0][2] - answers[1][0]))
            sides.push(Math.abs(answers[0][2] - answers[1][2]))

            sides.push(Math.abs(answers[0][1] - answers[1][1]))
            sides.push(Math.abs(answers[0][1] - answers[1][3]))
            
            sides.push(Math.abs(answers[0][3] - answers[1][1]))
            sides.push(Math.abs(answers[0][3] - answers[1][3]))

            console.log(sides)

            let sidesSorted = sides.sort()



            let resultFinal = (sidesSorted[sidesSorted.length - 1])*(sidesSorted[sidesSorted.length - 1])

            console.log(resultFinal)

         });
  }


main()