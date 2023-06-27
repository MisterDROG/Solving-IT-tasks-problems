//You must complete the generator function that must increment a counter by 1 each time also if the argument is supplied (will always be a number)
//you must then change the counter to that number. The counter must start at 1 when the generator is initialized

function* generator() {
    let n = 1
    while (true) {
      let valu = yield n
      if (valu) n = valu
      else n++
    }
  }