//get string and return string with word "test" instead each word in initial string (codewars)

function waterNeed(string) {
    const length = string.split(' ').length
    return string === ''? '':new Array(length).fill('test').join(' ')
}

console.log(waterNeed('I will go to shop today')) //6
console.log(waterNeed('How I test this problem if not like this')) //9
console.log(waterNeed('')) //