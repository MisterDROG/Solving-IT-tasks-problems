// What in console?

let randomValue =  { name : 'Tom'}

randomValue = 23

if (!typeof randomValue === 'string') {
    console.log('Not a string')
} else {
    console.log('Its a string')
}

// !typeof randomValue === "string"
// false === "string"
// Its a string