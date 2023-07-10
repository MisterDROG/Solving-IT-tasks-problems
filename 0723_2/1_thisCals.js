//Create a calculator object with three methods:

let calculator = {
    read(a,b) {
        this.a = a
        this.b = b
    },
    mul: function() {
        return this.a*this.b
    },
    sum() {
        return this.a+this.b
    }
  };
  
  calculator.read(4,7);
  console.log( calculator.sum() );
  console.log( calculator.mul() );