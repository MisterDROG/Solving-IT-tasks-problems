function permuteAPalindrome (input) { 
    let res = true
    const obj = {}
    
    input.split('').forEach((el) => {
      if (obj[el]) obj[el] += 1
      else obj[el] = 1
    })

    let deleted = false
    for (let key in obj) {
        if ((obj[key]%2) && (deleted==false)) {
            delete obj[key]
            deleted = true
            continue
        }
        if ((obj[key]%2)) {
            res = false
            break
        }
    }
    return res;
  }

console.log(permuteAPalindrome('abtba')) //true
console.log(permuteAPalindrome('abba')) //true
console.log(permuteAPalindrome('abtyba')) //false
console.log(permuteAPalindrome('abtba')) //true
console.log(permuteAPalindrome('abba')) //true
console.log(permuteAPalindrome('a')) //true
console.log(permuteAPalindrome('')) //true