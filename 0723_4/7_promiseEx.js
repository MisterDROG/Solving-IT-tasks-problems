//example of promise

const pr = new Promise((resolve, reject) => {
    if (false) resolve('Ok')
    else reject('No Ok')
})

pr
.then(res => console.log(res))
.catch(err => {
    console.log(err)
    // return 1000
})
.then(res => console.log(res))