//Given a string, remove any characters that are unique from the string. //Example: //input: "abccdefee" //output: "cceee"

function onlyDuplicates(str) {
    let res = ''
    for (let i=0; i<str.length; i++) {
        if(!(res.includes(str[i]))) res +=str[i]
    }
    return res
  }

function removeDuplicates1(str) {
    let res = ''
    for (let i=0; i<str.length; i++) {
        if(str.replace(str[i], '').includes(str[i])) res +=str[i]
    }
    return res
}

function removeDuplicates(str) {
    return [...new Set(str)].join('')
}


  
  console.log(removeDuplicates('abababcdcdcd')) // -> 'abcd'