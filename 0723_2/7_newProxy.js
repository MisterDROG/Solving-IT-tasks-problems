//Create a proxy that generates an error when trying to read a property that doesn't exist.

let user = {
    name: "John"
  };
  
function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if (prop in target) return target[prop]
            else return 'Error: no such key'
        }
    });
}
  
user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Error: no such key