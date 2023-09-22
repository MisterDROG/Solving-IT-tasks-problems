//What in console?

let person  = {name : 'Foggy'}

const members = [person]

person = null

console.log(members)

// [ { name: 'Foggy' } ]