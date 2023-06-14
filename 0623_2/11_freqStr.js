//Write a function that takes an array of strings and returns the most frequently occurring string in that array.
//If there are several such lines, then you need to return the first one, going from left to right.

function highestFrequency(array) {
    const obj = {}
    array.forEach((el) => {
        if(obj[el]) obj[el]+=1
        else obj[el]=1
    })
    const sorted = Object.keys(obj).sort((a,b)  => obj[b] - obj[a])
    return Object.keys(obj).sort((a,b)  => obj[b] - obj[a])[0]
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi