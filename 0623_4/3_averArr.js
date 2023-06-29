//find avarage of array

const arr = [1, 3, 5, 7 , 8, 12]

function findAverage(array) {
    if (array.length == 0) return 0
    return array.reduce((sum, el) => sum+el)/array.length
  }

console.log(findAverage(arr)) //6