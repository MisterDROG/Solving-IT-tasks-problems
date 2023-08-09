// what in console?

let count = 0

function exporter() {
    let count = 0

    function incr() {
        count++
    }

    function dicr() {
        count--
    }

    function getCount() {
        return count
    }

    return {
        count,
        incr,
        dicr,
        getCount
    }
}

const result = exporter()

result.incr()
result.incr()

console.log(result.count)
console.log(result.getCount())

const createId = () => {
    let id = 0;

    return () => id++
}

const resId = createId()
const resId2 = createId()

console.log(resId())
console.log(resId())

console.log(resId2())
console.log(resId2())