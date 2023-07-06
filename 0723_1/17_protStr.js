//Add a dictionary.toString() method to it, which should return a comma-separated list of keys.
//Your toString should not be printed when iterating over an object with a for..in loop.

let dictionary = Object.create(null, {
    toString: {
      value() {
        return Object.keys(this).join();
      }
    }
  });


dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"