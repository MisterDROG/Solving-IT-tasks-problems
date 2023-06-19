//Write a getIntervals function that takes an array and returns a string of intervals separated by commas.
//If there are 3 or more numbers in a row with an increment, then the extreme numbers must be glued together with a "-".
//If not an array passed, return an empty string

const getIntervals = (arr) => {
    arr.sort((a, b) => a-b)
    console.log(arr)
    let res = {}
    let last = 0
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]-1 === arr[i-1]) {
            res[last].push(arr[i])
        } else {
            res[i] = [arr[i]]
            last = i
        }
    }
    console.log(res)

    let res2 = Object.values(res).reduce((sum,el) => {
        let plus = ''
        if (el.length == 1) plus = `${el[0]},`
        if (el.length == 2) plus = `${el[0]}, ` + `${el[1]},`
        if (el.length > 2) plus = `${el[0]}-${el[el.length-1]},`
        return sum+plus+" "
    },'')
    return res2.slice(0, -2)
}


console.log(getIntervals([1,3,2,14,6,11,5,13,12])) // '1-3, 5, 6, 11-14'
console.log(getIntervals([-77, -78, -79, -10, -40, 0, -1, -2])) // '-79--77, -40, -10, -2-0'

