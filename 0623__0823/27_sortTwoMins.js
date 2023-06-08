//Create a function that returns the sum of the two lowest positive numbers given an
//array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) { 
    let minA = Infinity, prevminA = Infinity
    numbers.forEach((element) => {
        if (element > minA && element < prevminA) prevminA = element
        if (element <= minA) [prevminA, minA] = [minA, element]
    })
    return minA + prevminA
    }

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) // 16

console.log(sumTwoSmallestNumbers([ 481, 82, 88, 85, 437 ])) // 167
console.log(sumTwoSmallestNumbers([ 243, 546, 745, 123, 978 ])) // 366
console.log(sumTwoSmallestNumbers([ 1948, 456, 1265, 7896, 9986 ])) // 1721