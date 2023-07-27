//write map and filter using reduce

const arr = [1,3,5,2,6,7]

function cb(t) {
    return t*2
}

function cb2(t) {
    return t > 4
}

function mapN(arr, cb) {
    return arr.reduce((prev,curr) => {
        return [...prev, cb(curr)]
    }, [])
}

function filterN(arr, cb) {
    return arr.reduce((prev, curr) => {
        if (cb(curr)) return [...prev, curr]
        else return [...prev]
    }, [])
}

console.log(arr.map((n) => n*2))
console.log(mapN(arr, cb))
console.log(filterN(arr, cb2))