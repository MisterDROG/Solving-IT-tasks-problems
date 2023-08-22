//what in console?

const animals = {}

let dog = { nameN: 'Tom'}
let cat = { nameN: 'Rick'}

animals[dog] = {...dog, age: 5}
animals[cat] = {...cat, age: 3}

console.log(animals[dog])

// { nameN: 'Rick', age: 3 }