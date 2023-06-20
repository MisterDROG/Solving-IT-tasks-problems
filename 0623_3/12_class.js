class Greet {
    constructor(name) {
        this.name = name
    }

    getName() {
        console.log(this.name)
    }
}

class Hello extends Greet {
    constructor(name, greet) {
        super(name)
        this.greet = greet
    }

    print() {
        super.getName()
        console.log(this.greet + this.name)
    }
}

const hello = new Hello('Max', 'Hello dear ')
hello.print()