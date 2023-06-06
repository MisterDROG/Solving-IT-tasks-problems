//Write a function that returns a string in which firstname is swapped with last name.

function shortLS(name) {
    return name.split(' ').reverse().join(' ')
}

console.log(shortLS("Idwal Augustin")) // Augustin Idwal

//without arrays
function nameShuffler2(name) {
    let resSec = ''
    let resName = ''
    let reverse = false
    for (let i=0; i < name.length; i++ ) {
        if (name[i] === ' ') {
            reverse = true
        } else if (reverse) {
            resSec = resSec + name[i]
        } else {
            resName = resName + name[i]
        }
    }
    return `${resSec} ${resName}`
}

console.log(nameShuffler2("Idwal Augustin")) // Augustin Idwal