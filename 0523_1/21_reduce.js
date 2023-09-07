const arr = [
  {weight: 350, price: 68, amount: 10},
  {weight: 350, price: 56, amount: 8},
  {weight: 740, price: 150, amount: 1},
  {weight: 230, price: 89, amount: 5},
]

function get(arr) {
    let a = arr.reduce((last, item) => {
      if (item.price > 80 && item.amount < 7) {
        console.log('current ', item.weight,  item.amount)
        console.log('last ', last)
        last = last + item.amount * item.weight
      }
      return last
    }, 0)

    return a
}

console.log(get(arr))

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => {return accumulator + currentValue},
//   initialValue
// );

// console.log(sumWithInitial);
// // Expected output: 10