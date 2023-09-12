// What in console?

const person = { name: 'Mark'}

function sayHello(age) {
    console.log(`${this.name} is ${age}`)
}

sayHello.call(person, 21)
sayHello.bind(person, 21)

// Mark is 21