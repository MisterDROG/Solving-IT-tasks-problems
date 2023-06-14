//rotate matrix

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  function rotate(matrix) {
    const res = []
    for (let i =0; i<matrix[0].length; i++){
        const line = []
        for (let j =0; j<matrix.length; j++){
            line.unshift(matrix[j][i])
        }
        res.push(line)
    }
    return res
  }
  
  console.log(rotate(matrix))

  function rotate2(matrix, direction) {
    const res = []
    for (let i =0; i<matrix[0].length; i++){
        const line = []
        for (let j =0; j<matrix.length; j++){
            (direction =='clockwise') ? line.unshift(matrix[j][i]) : line.push(matrix[j][i])
        }
        (direction =='clockwise') ? res.push(line) : res.unshift(line)
    }
    return res
}

console.log(rotate2(matrix, 'clockwise'))