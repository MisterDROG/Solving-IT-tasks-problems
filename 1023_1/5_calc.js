//Create a new Calculator object with three methods:

function Calculator() {
    this.read = function(a,b) {
        this.a = a
        this.b = b
    }

    this.mul = () => {
        return this.a*this.b
    }

    this.sum = function() {
        return this.a+this.b
    }
}

let calculator = new Calculator();
calculator.read(4,7);

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
