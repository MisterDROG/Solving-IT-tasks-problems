//Write a function that will check if two given characters are the same case.
//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0

function checkCase(a,b) {
    const aLetter = a.toLowerCase() !== a.toUpperCase()
    const aUpper = a.toUpperCase() == a
    const bLetter = b.toLowerCase() !== b.toUpperCase()
    const bUpper = b.toUpperCase() == b
    if (aLetter && bLetter) return aUpper === bUpper ? 1 : 0
    else return -1

}

console.log(checkCase('C','B')) //1
console.log(checkCase('b','a')) //1
console.log(checkCase('C','t')) //0
console.log(checkCase('0','B')) //-1