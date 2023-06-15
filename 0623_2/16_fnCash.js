//Write a function that takes a number and if the function has 
//already been called with it before, then return false, otherwise true

const canGetCountMem = () => {
    const obj = {}
    return function(n) {
        if (n in obj) console.log(false)
        else {
            obj[n] = 1
            console.log(true)
        }
    }
}

const canGetCount1 = canGetCountMem()

const canGetCount = (n) => {
    if(!Object.obj) Object.obj = {}
    if (n in Object.obj) console.log(false)
    else {
        Object.obj[n] = 1
        console.log(true)
    }
}

canGetCount(2) // true
canGetCount(2) // false
canGetCount(2) // false
canGetCount(3) // true
canGetCount(4) // true
canGetCount(4) // false
