//Create a delay(f, ms) decorator that delays each call to f by ms milliseconds.

function delay(fn, ms) {
    return function() {
        setTimeout(fn,ms, arguments)
    }
}

function f(x) {
    console.log(x);
  }
  
// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс