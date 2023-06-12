//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
//with the same multiplicities (the multiplicity of a member is the number of times it appears).
//"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
    if((array1 === null) || (array2 === null)) return false
    let isComp = true
    array1.forEach(element => {
        if (!(array2.includes(element**2))) isComp = false
        array2.splice(array2.indexOf(element**2), 1)
    });
    return isComp
  }

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])) // true
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 20*20])) // false
console.log(comp([], [])) // true