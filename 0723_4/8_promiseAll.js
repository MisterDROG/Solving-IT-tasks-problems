//write promise all

const p1 = new Promise((resolve,reject) => {
    if (true) resolve('Ok 1')
    else reject('No Ok 1')
})

const p2 = new Promise((resolve,reject) => {
    if (true) resolve('Ok 2')
    else reject('No Ok 2')
})

// function promiseAllN(arrP) {
//     return new Promise((resP, rejP)=> {
//         const resArr = []
//         for (let i =0; i < arrP.length; i++) {
//             arrP[i].then(res => {
//                 resArr[i] = res
//                 if ((resArr.find((el)=> el === undefined) == undefined) && resArr.length == arrP.length) resP(resArr)
//             }).catch(err => rejP(err))
//         }
//     })
// }

function promiseAllN(arrP) {
    return new Promise((resP, rejP)=> {
        const resArr = []
        let count = 0
        for (let i =0; i < arrP.length; i++) {
            arrP[i].then(res => {
                count++
                resArr[i] = res
                if (count == arrP.length) resP(resArr)
            }).catch(err => rejP(err))
        }
    })
}

const arr2 = []
arr2[2] = 5
console.log(arr2, arr2[0])
console.log(arr2.length)

promiseAllN([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
Promise.all([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
