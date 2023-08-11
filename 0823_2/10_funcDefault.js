//what in console?

const add = x => x + x

function myFunc(num = 2, value = add(num)) {
    console.log(num, value)
}

myFunc()
myFunc(3)

// 2 4 and 3 6