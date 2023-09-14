// What in console?

let x = 3;

function fn() {
    x = 10;
    return;
    function x() {}
}

fn();

console.log(x);

// 3 (hoisting of x() function)