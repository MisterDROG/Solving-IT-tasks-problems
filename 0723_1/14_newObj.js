//Give an example of a constructor function for the obj object, with which such a call will work correctly.
//And an example of a constructor function with which such code will behave incorrectly.

function User(name) {
    this.name = name;
  }
  
User.prototype = {}; // (*) switch on/of for working

let user = new User('John');
let user2 = new user.constructor('Pete');
  
console.log( user2.name ); // undefined