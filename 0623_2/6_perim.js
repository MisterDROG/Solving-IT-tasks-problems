//Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. 
//Each piece of land will be marked with 'X' while the water fields are represented as 'O'.
//Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

function landPerimeter(arr) {
    let p = 0
    for (let row=0; row < arr.length; row++) {
      for (let col=0; col < arr[row].length; col++) {
        if (arr[row][col] === 'X') {
          if(row === arr.length - 1 || arr[row+1][col] !== 'X') p += 1
          if(row === 0 || arr[row-1][col] !== 'X') p += 1
          if(col === arr[row].length - 1 || arr[row][col+1] !== 'X') p += 1
          if(col === 0 || arr[row][col-1] !== 'X') p += 1
        }
      }
    }
    return `Total land perimeter: ${p}`
  }

console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"])) //60