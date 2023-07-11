//But what if we explicitly write "class Rabbit extends Object" - then the result will be different from the usual "class Rabbit"?

class Rabbit extends Object {
    constructor(name) {
        super()
      this.name = name;
    }
  }
  
let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') );