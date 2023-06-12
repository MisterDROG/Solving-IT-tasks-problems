//get string and return string with word "test" instead each word in initial string (codewars)

function checkCase(string) {
    const length = string.split(' ').length
    return string === ''? '':new Array(length).fill('test').join(' ')
}

console.log(checkCase('I will go to shop today')) //6
console.log(checkCase('How I test this problem if not like this')) //9
console.log(checkCase('')) //