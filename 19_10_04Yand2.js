const rules1 = {
    "l": "1",
    "v": "3",
    "_": "\n", // Перевод строки
    "=": " = ", // Символ присваивания
  }

const tokensMap1  = {
    "val": "lg",
}

const text2 = 'ab=tl*cd=ls*ef=dd'

const rules2 = {
    "t": 1,
    "l": 's', // Берет правило перевода по ключу "s", если оно есть
    "s": 3,
    "d": 4,
    "k": 9,
    "*": '\n',
  }

const tokensMap2  = {
    "val1": "ab",
    "val2": "cd",
    "val3": "ef",
    "-d": "k"
}

const text1 = 'lg=lv_11_lg=vl'



function decode(text, tokensMap, rules) {

    const tokensMaprRev = {};
    Object.keys(tokensMap).forEach(function(value) {
        var key = tokensMap[value];
        tokensMaprRev[key] = value;
    });


    let result = text
    let result2 = ''
    Object.keys(tokensMap).forEach(key => {
        result = result.split(tokensMap[key])
        let combined = []
        result.forEach(part => {
            let partRes = ''
            const partSep = [...part]
            partSep.forEach(sim => {
                if (rules[`${sim}`]) {
                    partRes = partRes + rules[sim]
                } else {
                    partRes = partRes + sim
                }
            });            
            combined.push(partRes)
        })
        result2 = combined.join('let ' + key)
    })
    return result2
  };

  function decode2(text, tokensMap, rules) {

    let result = [text]
    console.log(result)
    Object.keys(tokensMap).forEach(key => {
        result.forEach(textSp => {
            result = [...result, ...textSp.split(tokensMap[key])]
            console.log(key, tokensMap[key], 'result.split', textSp, result)
            const index = result.indexOf(textSp);
            result.splice(index, 1)
            console.log(key, tokensMap[key], 'result.split 1', textSp, result)
            result.forEach((textD, i) => {
                if (textD.length == 0) {
                    result[i] = tokensMap[key]
                }
            })
            console.log(key, tokensMap[key], 'result.split 2', textSp, result)
        })
    })

    return result
  };


function decode3(text, tokensMap, rules) {

    console.log('before',rules)
    Object.keys(rules).forEach(key => {
        if(Object.keys(rules).includes(rules[key])) {
            rules[key] = rules[rules[key]]
        }
    })
    console.log('after',rules)

    console.log('before2',rules)
    Object.keys(rules).forEach(key => {
        if(Object.keys(tokensMap).includes('-' + key)) {
            const newRule = '-' + key
            rules[key] = rules[tokensMap[newRule]]
        }
    })
    console.log('after2',rules)

    let result = [text]
    console.log(result)
    Object.keys(tokensMap).forEach(key => {
        console.log('1', result)
        result.forEach((subText, index) => {
            console.log('2', subText, result)
            result.splice(index, 1, ...subText.split(tokensMap[key]).join('@' + key + '@').split('@'))
            console.log('3', result)
            result.forEach((str, index) => {
                if (str.length == 0) {
                    result.splice(index, 1)
                }
            })
            console.log('4', result)
        })
    })

    result.forEach((str, index) => {
        let tokenKeys = []
        Object.keys(tokensMap).forEach((key) =>{
            if(!key.includes('-')) {
                tokenKeys.push(key)
            }
        })
        if (!tokenKeys.includes(str)) {
            let partRes = ''
                let strNew = [...str]
                console.log('strNew', strNew)
                strNew.forEach(sim => {
                    console.log('sim', sim)
                    if (rules[`${sim}`] && rules[`${sim}`] != 'd') {
                        partRes = partRes + rules[sim]
                    } else {
                        partRes = partRes + sim
                    }
                    console.log('partRes', partRes)
                })
            result[index] = partRes
        } else {
            result[index] = 'let ' + result[index]
        }

    })
    console.log('!!!!')
    return result.join('')
};

function decode4(text, tokensMap, rules) {

    Object.keys(rules).forEach(key => {
        if(Object.keys(rules).includes(rules[key])) {
            rules[key] = rules[rules[key]]
        }
    })

    Object.keys(rules).forEach(key => {
        if(Object.keys(tokensMap).includes('-' + key)) {
            const newRule = '-' + key
            rules[key] = tokensMap[newRule]
        }
    })

    let result = [text]
    Object.keys(tokensMap).forEach(key => {
        result.forEach((subText, index) => {
            result.splice(index, 1, ...subText.split(tokensMap[key]).join('@' + key + '@').split('@'))
            result.forEach((str, index) => {
                if (str.length == 0) {
                    result.splice(index, 1)
                }
            })
        })
    })

    result.forEach((str, index) => {
        let tokenKeys = []
        Object.keys(tokensMap).forEach((key) =>{
            if(!key.includes('-')) {
                tokenKeys.push(key)
            }
        })
        if (!tokenKeys.includes(str)) {
            let partRes = ''
                let strNew = [...str]
                strNew.forEach(sim => {
                    if (rules[`${sim}`]) {
                        partRes = partRes + rules[sim]
                    } else {
                        partRes = partRes + sim
                    }
                })
            result[index] = partRes
        } else {
            result[index] = 'let ' + result[index]
        }

    })
    return result.join('')
};

console.log(decode3(text1, tokensMap1, rules1))
console.log(decode3(text2, tokensMap2, rules2))

const rules3 = {
    "l": "1",
    "v": "3",
    "_": "\n", // Перевод строки
    "=": " = ", // Символ присваивания
  }

const tokensMap3  = {
    "val": "lg",
}

const text4 = 'ab=tl*cd=ls*ef=dd'

const rules5 = {
    "t": 1,
    "l": 's', // Берет правило перевода по ключу "s", если оно есть
    "s": 3,
    "d": 4,
    "k": 9,
    "*": '\n',
  }

const tokensMap6  = {
    "val1": "ab",
    "val2": "cd",
    "val3": "ef",
    "-d": "k"
}

const text7 = 'lg=lv_11_lg=vl'

function decode4(text, tokensMap, rules) {

    Object.keys(rules).forEach(key => {
        if(Object.keys(rules).includes(rules[key])) {
            rules[key] = rules[rules[key]]
        }
    })

    Object.keys(rules).forEach(key => {
        if(Object.keys(tokensMap).includes('-' + key)) {
            const newRule = '-' + key
            rules[key] = tokensMap[newRule]
        }
    })

    let result = [text]
    Object.keys(tokensMap).forEach(key => {
        result.forEach((subText, index) => {
            result.splice(index, 1, ...subText.split(tokensMap[key]).join('@' + key + '@').split('@'))
            result.forEach((str, index) => {
                if (str.length == 0) {
                    result.splice(index, 1)
                }
            })
        })
    })

    result.forEach((str, index) => {
        let tokenKeys = []
        Object.keys(tokensMap).forEach((key) =>{
            if(!key.includes('-')) {
                tokenKeys.push(key)
            }
        })
        if (!tokenKeys.includes(str)) {
            let partRes = ''
                let strNew = [...str]
                strNew.forEach(sim => {
                    if (rules[`${sim}`]) {
                        partRes = partRes + rules[sim]
                    } else {
                        partRes = partRes + sim
                    }
                })
            result[index] = partRes
        } else {
            result[index] = 'let ' + result[index]
        }

    })
    return result.join('')
};