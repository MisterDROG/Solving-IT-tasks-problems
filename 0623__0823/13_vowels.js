//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//So given a string "super", we should return a list of [2, 4].

function vowelIndices(word){
    const wordLowwer = word.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y' ]
    const result = []
    for (let i = 0; i < word.length; i++) {
        vowels.includes(wordLowwer[i]) && result.push(i+1)
      }
    
    return result
  }

  console.log(vowelIndices('mmm')) // []
  console.log(vowelIndices('orange')) // [1,3,6]
  console.log(vowelIndices('supercalifragilisticexpialidocious')) // [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]