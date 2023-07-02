//https://www.codewars.com/kata/5a353a478f27f244a1000076

function sayJoke(apiUrl, jokeId){
    return new Promise((resolve,reject) => {
      fetch(apiUrl)
        .then(res => {
          if (apiUrl !== 'http://great.jokes/christmas') reject(new Error(`No jokes at url: ${apiUrl}`))
          return res.json()
          })
        .then(res => {
          const answ = res.jokes.find((el) => el.id === jokeId)
          if (answ == undefined) reject(new Error(`No jokes found id: ${jokeId}`))
          resolve({
            saySetup: () => answ.setup,
            sayPunchLine: () => answ.punchLine
          })
          })
    })
  }