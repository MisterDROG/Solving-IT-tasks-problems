var flatten = function (array){
    let sum = []
    array.forEach((el) => {
        if (Array.isArray(el)) {
            let res = []
            el.forEach((item) => res.push(item))
            return sum.push(...res)
        }
        else sum.push(el)
    })
    return sum
}

console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])) 