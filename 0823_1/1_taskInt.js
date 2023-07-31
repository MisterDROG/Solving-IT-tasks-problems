//write setTimeout 1000 promise

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ok 1')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ok 2')
    }, 1000)
})


// async function test() {
//     return await p1.then(res => res)
// }

// console.log(await test())

console.log('First message')

// Promise.all([p1,p2]).then(res => console.log(res))

async function test2() {
     const [s1,s2] = await Promise.all([p1,p2])
     return s1 + " " + s2
}

console.log(await test2())

