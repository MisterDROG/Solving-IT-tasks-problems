//write bind function

Function.prototype.myBind = function(context, ...args) {
    return (...rest) => {
      return this.call(context, ...args.concat(rest))
    }
  }
  
function info(mail, text) {
    console.log('args', arguments)
    return `${this.name} ${this.age} ${mail} ${text} done`
}

const obj = {name: 'Vladilen', age: 28}

function bind2(fn, context, ...rest) {
    return function(...args) {
        const unId = Date.now().toString()
        context[unId] = fn
        const res = context[unId](...rest, ...args)
        delete context[unId]
        return res
    }

}

console.log(bind2(info, obj, 'got.ru', 'hello')())
console.log(bind2(info, obj, 'got.ru',)('hello'))
console.log(obj)

const bom = [1, 2, 3]
const dom = [4, 5, 6]
console.log(...bom, ...dom)