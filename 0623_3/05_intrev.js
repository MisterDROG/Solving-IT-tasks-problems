//Write a getIntervals function that takes an array and returns a string of intervals separated by commas.
//If there are 3 or more numbers in a row with an increment, then the extreme numbers must be glued together with a "-".
//If not an array passed, return an empty string

const getIntervals = (arr) => {
    arr.sort((a, b) => a-b)
    console.log(arr)
    let res = `${arr[0]}`
    let count = 1
    let j = 1
    let wrote = false
    for (let i=arr[1]; i <= arr[arr.length-1]; i++) {
        console.log('i=',i,'j=', j,'arr[j]=', arr[j],'count=', count, 'wrote=', wrote)
        if (i === arr[j]) {
            if (wrote === true) {
                res += `, ${arr[j]}`
                console.log(`, ${arr[j]}`)
            }
            count +=1
            j = j + 1
            wrote = false
        } else {
            if (count < 3 && wrote === false) {
                res += `, ${arr[j-1]}`
                console.log(`, ${arr[j-1]}`)
                wrote = true
            }
            else if (wrote === false) {
                res += `-${arr[j-1]}`
                console.log(`-${arr[j-1]}`)
                wrote = true
            }
            count = 0
        }
        if (i === arr[arr.length-1]) {
            if (count < 3 && wrote === false) {
                res += `, ${arr[j-1]}`
                console.log(`, ${arr[j-1]}`)
                wrote = true
            }
            else if (count != 0 && wrote === false) {
                res += `-${arr[j-1]}`
                console.log(`-${arr[j-1]}`)
                wrote = true
            }
        }
    }
    return res
}


console.log(getIntervals([1,3,2,14,6,11,5,13,12])) // '1-3, 5, 6, 11-14'
console.log(getIntervals([-77, -78, -79, -10, -40, 0, -1, -2])) // '-79--77, -40, -10, -2-0'

