//Given a two-dimensional array of integers
//return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
  const res = []
  array.forEach((el) => {
    res.push(...el)
  })
  return res.sort((a,b) => a -b);
}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])) // [1, 2, 3, 4, 5, 6, 100]