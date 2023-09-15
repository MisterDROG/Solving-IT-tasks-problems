// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Descends one at a time until reaching the minimum
// repeat until the string is the appropriate length

function ascendDescend (length, minimum, maximum) {
    let result = ""
    for (let i = minimum; i <= maximum; i++) {
    result += i
    }
    for (let i = maximum - 1; i > minimum; i--) {
    result += i
    }
    result = result.repeat(length)
    return result.substring(0, length)
  }

console.log(ascendDescend(3,2,10)) // 234