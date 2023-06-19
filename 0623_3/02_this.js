function hello() {
    console.log(this)
}

const obj = {
    name: 'Tom',
    age: 13,
    sayHello: hello,
    logInfo: function() {
        const name = 'Rid'
        console.log(this.name)
    }
}

const obj2 = {
    name: 'Vlad',
    age: 13,
}

obj.sayHello()
obj.logInfo()

obj.logInfo.bind(obj2)()
