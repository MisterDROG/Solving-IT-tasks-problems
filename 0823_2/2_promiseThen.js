//write promise chain


const p1 = new Promise((resolve,reject) => {
    if (true) resolve('Ok 1')
    else reject('No Ok 1')
})

const p2 = new Promise((resolve,reject) => {
    if (true) resolve('Ok 2')
    else reject('No Ok 2')
})

const resArr = []

p1.then(res => {
    console.log(res)
    resArr.push(res)
    return p2
}).then(res2 => {
    console.log(res2)
    resArr.push(res2)
}).then(() => {
    console.log(resArr)
})