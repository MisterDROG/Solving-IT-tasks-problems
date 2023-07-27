//return each time next number

function idMaker() {
    let t = 0
    return function k() {
        t = t+1
        return t
    }
}

const id = idMaker()

console.log(id()) //0
console.log(id()) //1
console.log(id()) //2
console.log(id()) //3