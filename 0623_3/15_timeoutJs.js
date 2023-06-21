
function ok(n) {
    setTimeout(()=> {
        console.log(n)
    },0)
}

for (var i = 0; i<10; i++) {
    ok(i)
}

for (var i = 0; i<10; i++) {
    setTimeout(()=> {
        console.log(i)
    },0)
}

for (var i = 0; i<10; i++) {
    setTimeout(function() {console.log(t)},0)
}

