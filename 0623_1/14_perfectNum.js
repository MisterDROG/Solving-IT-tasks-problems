//Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
//Extra perfect number is the number that first and last bits are set bits.

function extraPerfect(n){
  const res = [1]
  for (let i=3; i <= n; i++) {
    i % 2 && res.push(i)
  }
  return res
}

console.log(extraPerfect(3)) // [1,3]
console.log(extraPerfect(7)) // [1,3,5,7]
console.log(extraPerfect(39)) // [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]