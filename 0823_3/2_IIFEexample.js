//what in console?

(function() {
    console.log("IIFE 1")
})();

(function test(){
    console.log("IIFE 2")
})();

(() => {
    console.log("IIFE 3")
})();

(function () {
    console.log("IIFE 4")
})();



// IIFE 1 IIFE 2 IIFE 3 IIFE 4