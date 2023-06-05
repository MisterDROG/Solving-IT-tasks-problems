const arr = [
  {weight: 350, price: 68, amount: 10},
  {weight: 350, price: 56, amount: 8},
  {weight: 740, price: 150, amount: 1},
  {weight: 230, price: 89, amount: 5},
]

function get(arr) {
    let a = arr.reduce((last, item) => {
      console.log('last',last)
      if (item.price > 80 && item.amount < 7) {
        console.log(item.weight,  item.amount)
        return last + item.amount * item.weight
      }
    }, 0)

    return a
}

console.log(get(arr))