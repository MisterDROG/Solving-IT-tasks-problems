// Создание счетчика get/set через замыкание

const counter = () => {
    let counter = 0
    return {
        get: () => counter,
        set: (n) => counter += n
    }
  };
  
const c = counter();

c.set(35);
c.set(10);

console.log('1 ->', c.get()); // 45