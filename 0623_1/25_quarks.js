//You're modelling the interaction between a large number of quarks and have decided to create a 
//Quark class so you can generate your own quark objects.

class Quark{
    constructor(color, flavor) {
      this.color = color
      this.flavor = flavor
      this.baryon_number = 1/3
    }

    interact(q2) {
        [this.color, q2.color] = [q2.color, this.color]
    }
  }

const q1 = new Quark('red', 'up')
const q2 = new Quark('green', 'bottom')
console.log(q1.color, q2.color)
q1.interact(q2)
console.log(q1.color, q2.color)
