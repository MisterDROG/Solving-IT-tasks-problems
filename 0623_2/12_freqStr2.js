//4kyu https://www.codewars.com/kata/51e056fe544cf36c410000fb/solutions/javascript 

function topThreeWords(text) {
    const newText = text.toLowerCase().replace(/[-.?!,:\/]/g,'').split(' ')
        const obj = {}
      newText.forEach((el) => {
          if(obj[el]) obj[el]+=1
          else obj[el]=1
      })
      const sorted = Object.keys(obj).sort((a,b)  => obj[b] - obj[a])
      const filtered = sorted.filter(el => el != '')
      const res = []
      for (let i=0; i<3; i++) {
        if (filtered[i]) res.push(filtered[i])
      }
      return res
  }

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")) //['e','d','a']