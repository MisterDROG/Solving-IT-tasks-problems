//Add a defer(ms) method to all functions in the prototype, which calls the functions after ms milliseconds.

Function.prototype.defer = function(ms) {
    setTimeout(this, 1000)
}

function f() {
    console.log("Hello!");
  }
  
f.defer(1000); // show "Hello!" in 1 sec