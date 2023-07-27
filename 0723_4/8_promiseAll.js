//write promise all


const p1 = new Promise((resolve,reject) => {
    if (true) resolve('Ok 1')
    else reject('No Ok 1')
})

const p2 = new Promise((resolve,reject) => {
    if (true) resolve('Ok 2')
    else reject('No Ok 2')
})

function promiseAllN(arr) {
    return new Promise((resolve, reject) => {
        const resArr = []
        for (let i=0; i<arr.length; i++) {
            arr[i].then(res => {
                resArr[i] = res
                console.log(resArr)
                if (!resArr.find(el => el==undefined)) resolve(resArr)
            }).catch(err => reject(err))
        }
    })

}

promiseAllN([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
Promise.all([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))

const arr2 = []
arr2[1] = 3
console.log(arr2, arr2[0])