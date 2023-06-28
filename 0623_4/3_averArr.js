//find avarage of array

function findAverage(array) {
    if (array.length == 0) return 0
    return array.reduce((sum, el) => sum+el)/array.length
  }