//In some programming languages, it is possible to get the elements of an array using negative indexes, counted from the end.

let array = [1, 2, 3];

array = new Proxy(array, {
  /* ваш код */
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2