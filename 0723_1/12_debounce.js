//The result of the debounce(f, ms) decorator must be a wrapper that passes the call to f at most once every ms milliseconds.

function debounce(fn, ms) {
    function debResFn() {
        if (new Date() - debResFn.dateTimer > ms) {
            debResFn.dateTimer = new Date()
            console.log(arguments)
            fn.apply(this, arguments)
        }
    }

    debResFn.dateTimer = (new Date())-2*ms

    return debResFn
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)