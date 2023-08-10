///what in console

const p = new Promise((res,rej) => {
    console.log('ok')
    setTimeout(() => {
        console.log('Ready')
        res('Done')
    }, 3000)
})

// p.then((res) => console.log(res))
// p.then((res) => console.log(res))

p.then((res) => {
    console.log(res)
    return p
}).then((res) => console.log(res))






