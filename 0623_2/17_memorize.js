//Создайте декоратор makeCaching(f), который берет функцию f и возвращает обёртку, которая кеширует её результаты.
//В этой задаче функция f имеет только один аргумент, и он является числом.
//При первом вызове обёртки с определённым значением аргумента – она вызывает f и запоминает её результат.
//При втором и последующих вызовах с тем же значением аргумента – возвращается сохранённое значение результата.

function f(x) {
    return Math.random() * x; // random для удобства тестирования
  }
  
  function makeCaching(f) {
    let obj = {}
    return function(n) {
        if (!(n in obj)) obj[n] = f(n)
        return obj[n]
    }
  }
  
  f = makeCaching(f);
  
  var a, b;
  
  a = f(1);
  b = f(1);
  console.log( a == b ); // true (значение закешировано)
  
  b = f(2);
  console.log( a == b ); // false, другой аргумент => другое значение