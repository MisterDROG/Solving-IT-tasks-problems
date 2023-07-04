//Create a spy(func) decorator that should return a wrapper that stores all calls to the function in its calls property.

function spy(fn) {
    function spyBack(){
        spyBack.calls = [...spyBack.calls, [...arguments].toString()]
        console.log(spyBack.calls)
        fn.apply(this, arguments)
    }

    spyBack.calls = []

    return spyBack
}

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
  }
  
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(7, 10); // 17

console.log('work.calls', work.calls)

for (let args of work.calls) {
console.log( 'call: ' + args ); // "call: 1,2", "call: 4,5"
}