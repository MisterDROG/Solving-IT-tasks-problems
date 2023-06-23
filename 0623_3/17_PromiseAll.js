// write promiseAll

function wait(t) {
    return new Promise ((resolve, reject) => {
        console.log(`Promise wait ${t}`)
        setTimeout(() => {
            resolve(`Promise resolved ${t}`)
        }, t)
    })
}

function waitR(t) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject(`Promise rejected ${t}`)
        }, t)
    })
}

function promiseAllN(a ,b) {
    return new Promise((resolve, reject) => {
        const res = []

            a.then(resA => {
                res.push(resA)
                if (res.length == 2) resolve(res)
            })
            .catch(err => reject(err))
            b.then(resB => {
                res.push(resB)
                if (res.length == 2) resolve(res)
            })
            .catch(err => reject(err))


    })
}

promiseAllN(wait(1000), waitR(1500)).then(res => console.log(res)).catch(err => console.log(err))

async function promiseWaitEach(promises) {
    for await (let p of promises) {
        const d = await p;
        console.log(d)
    }
}

promiseWaitEach([wait(1000), wait(2000), wait(4000), wait(3000)])