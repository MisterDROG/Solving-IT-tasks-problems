// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
    let sum = 0
    sum +=root.value
    return sum += ((root.left !==null ? sumTheTreeValues(root.left) : 0) + (root.right !==null ? sumTheTreeValues(root.right) : 0) )
  }


console.log(sumTheTreeValues({value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}})) //13
console.log(sumTheTreeValues({value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}})) //12