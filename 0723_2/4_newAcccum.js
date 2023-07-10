//Create a constructor function Accumulator(startingValue).

function Accumulator(n) {
    this.value=n
    this.read = function(k) {
        this.value +=k
    }
}

let accumulator = new Accumulator(1);

accumulator.read(4); 
accumulator.read(7);

console.log(accumulator.value); // 12