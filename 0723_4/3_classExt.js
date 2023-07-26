//What in console?

class Bird {
    constructor() {
        console.log('Bird')
    }
}

class Flamingo extends Bird {
    constructor() {
        console.log('Flamingo')
        super()
    }
}

const pet = new Flamingo() \

//Flamingo Bird