//Write a printNumbers(from, to) function that prints a number every second from from to to.

// function printNumbers(a,b) {
//     const int = setInterval(() => {
//         console.log(a)
//         if (a==b) clearInterval(int)
//         a++
//     },1000)
// }

// printNumbers(5,10)

function printNumbers2(a,b) {
        setTimeout(function go() {
            console.log(a)
            if (a<b) {setTimeout(go, 1000)}
            a++
        }, 1000)
}

printNumbers2(5,10)