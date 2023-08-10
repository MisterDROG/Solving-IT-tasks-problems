///what in console

function fetch() {

    return new Promise(resolve => {
        resolve('some data')
    })
}

fetch().then((res) => {return `${res} and one`})
.then((res) => {return `${res} and two`})
.then((res) => {throw new Error(`${res} and error`)})
.then((res) => console.log(res))
.catch((err) => console.error(`${err} and catch`))