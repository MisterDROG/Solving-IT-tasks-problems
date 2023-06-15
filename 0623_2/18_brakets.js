//Write a function that will check the string for balanced brackets: {}, (), []. Return true if they are balanced, false otherwise.

function isBalanced(string) {
    const start = '({['
    const end = ']})'
    const map = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    const queue = []
    for (let i = 0; i < string.length; i++) {
        if (start.includes(string[i])) {
            queue.push(string[i])
        } else if(end.includes(string[i])) {
            if (queue.pop() !== map[string[i]]) return false
        }
    }
    return !queue.length
}
  
console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false