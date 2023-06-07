//chaining from prototype

Number.prototype.plus = function(n) {return this+n}
Number.prototype.minus = function(n) {return this-n}
String.prototype.translateToFr = () =>  'translated'

console.log((3).plus(4).minus(1))
console.log('hello'.translateToFr())