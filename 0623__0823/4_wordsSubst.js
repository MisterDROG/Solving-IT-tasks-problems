//get string and return string with word "test" instead each word in initial string (codewars)

function volCub(string) {
    const length = string.split(' ').length
    return string === ''? '':new Array(length).fill('test').join(' ')
}

console.log(volCub('I will go to shop today')) //6
console.log(volCub('How I test this problem if not like this')) //9
console.log(volCub('')) //