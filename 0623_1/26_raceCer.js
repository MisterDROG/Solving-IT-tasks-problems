//Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests)
//with the heights of 2nd, 1st, 3rd places platforms.

function racePodium(b) {
    if (b===7) return [2, 4, 1]
    return [Math.ceil(b/3), Math.ceil(b/3)+1, b - 2* Math.ceil(b/3) - 1]
  }

console.log(racePodium(11)) // [4, 5, 2]
console.log(racePodium(6)) // [2, 3, 1]
console.log(racePodium(100000)) // [33334, 33335, 33331]
console.log(racePodium(8)) // [3, 4, 1]