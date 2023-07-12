//In some programming languages, it is possible to get the elements of an array using negative indexes, counted from the end.

let array = [1, 2, 3];

array = new Proxy(array, {
  get(array, prop) {
    if (prop < 0) return array[array.length + Number(prop)]
    else return array[prop]
  }
});

console.log( array[0] ); // 1
console.log( array[-1] ); // 3
console.log( array[-2] ); // 2