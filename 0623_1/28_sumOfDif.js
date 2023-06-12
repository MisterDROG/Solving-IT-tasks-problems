//Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    const sortedArr = arr.sort((a,b) => b-a)
    let sum = 0
    for (let i =0; i < (sortedArr.length -1); i++) {
      sum = sum + (sortedArr[i] - sortedArr[i+1])
    }
    return sum
  }

console.log(sumOfDifferences([1, 2, 10])) //9
console.log(sumOfDifferences([-3, -2, -1])) //2