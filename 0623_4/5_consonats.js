//Complete the function that takes a string of English-language text and returns the number of consonants in the string.
//Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    const newStr = str.toLowerCase()
    let res = 0
    const consB = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    for (let i=0; i<newStr.length; i++) {
      if (consB.includes(newStr[i])) res+=1
    }
    return res
  }