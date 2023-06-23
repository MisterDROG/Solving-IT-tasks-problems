// fn should work 11 sec

function taskP(t) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise resolved ${t}`)
        }, t)
    })
}

function antiOptimizeAsync(task) {
    return new Promise((resolve, reject) => {
      const p = new Promise((resP,rejP) => resP(task(5000)))
      const t = p.then(res => {
        console.log('tF', res)
        return res
        })
      console.log('t', t)
      console.log('start Timeout')
      setTimeout(() =>{
        console.log('t2', t)
        resolve(t)
      }, 2000)
    })
  }

antiOptimizeAsync(taskP).then(res => console.log(res))

