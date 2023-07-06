//Add the defer(ms) method to all functions in the prototype, which returns a wrapper that defers the function call for ms milliseconds.

Function.prototype.defer = function(ms) {
    let that = this
    return function() {
        setTimeout(() => that.apply(this, arguments), ms)
    }
}

function f(a, b) {
    console.log( a + b );
  }
  
f.defer(1000)(1, 2); // show "3" in 1 sec