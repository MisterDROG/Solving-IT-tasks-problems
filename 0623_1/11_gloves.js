//Winter is coming, you must prepare your ski holidays.
//The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
//Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

function gloves(arr) {
    const numObj = {}
    let res = 0
    arr.forEach((elem) => {
        (numObj[elem]) ? numObj[elem] +=1 : numObj[elem] =1 
    })
    Object.keys(numObj).forEach(color => {
        res += Math.floor(numObj[color] / 2)
    })
    return res
}

console.log(gloves(["red", "green", "red", "blue", "blue"])) // 2
console.log(gloves(["red", "red", "red", "red", "red", "red"])) // 3