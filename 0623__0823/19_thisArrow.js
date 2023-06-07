//bind to set timeout

const some = {
    list: [1, 2, 3],
    fn() {
        console.log(this.list)
    }
}

some.fn()
setTimeout(function() {
    some.fn()
}, 1000)

setTimeout(some.fn.bind(some), 1000)