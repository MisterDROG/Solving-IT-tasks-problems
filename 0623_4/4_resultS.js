//Find the sum of all multiples of n below m

function sumMul(n,m){
    if ( n <= 0 || m <=0) return "INVALID"
    let res = 0
    for (let i=0; (i*n)<m; i++) {
      res+=n*i
    }
    return res
  }