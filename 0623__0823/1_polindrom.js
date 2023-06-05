//write function for polindrom check

function polCheck(word) {
    const wordLow = word.toLowerCase()
    return wordLow.split('').reverse().join('') === wordLow ? true : false
}

console.log(polCheck('Hello'))
console.log(polCheck('Abba'))