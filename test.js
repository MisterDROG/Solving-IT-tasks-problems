function firstSmallestWord(str) {
  let strSplit = str.split(' ')
  let answer = strSplit[0]
  strSplit.forEach((elem)=>{
    if (answer.length > elem.length) {
      answer = elem
    }
  })

  console.log(answer)
}

firstSmallestWord('Hello Bekky how are you')

function firstSmallestWord2(str) {
  let strSplit = str.split(' ')
  strSplit.sort((a,b) => {
    return a.length - b.length
  })

  console.log(strSplit[0])
}

firstSmallestWord2('Hello how are you Bekky')