//https://learn.javascript.ru/closure

let count = 0;

function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
let counter1 = makeCounter();


console.log( counter1() ); // 0
console.log( counter1() ); // 1

let counter2 = makeCounter();

console.log( counter2() ); // 0 (независимо)


function absCount() {
    return count++;
}

function absCount2() {
    return count++;
}

console.log( absCount() );
console.log('count2',count)
console.log( absCount() );
console.log('count2',count)
console.log( absCount2() );
console.log('count2',count)
console.log( absCount2() );

function makeCounter2() {
    let count = 0;
    return {
        say() {return count++},
        talk() {return count++}
    }
  }
  

let objcounter1 = makeCounter2();

console.log( objcounter1.say() ); // 0
console.log( objcounter1.talk() ); // 1

let objcounter2 = makeCounter2();

console.log( objcounter2.say() ); // 0 (независимо)