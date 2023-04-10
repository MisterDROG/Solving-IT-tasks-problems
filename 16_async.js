const myPromise = () => Promise.resolve().then(() => console.log('1')) 
 
const first = () => { 
  setTimeout(() => console.log('2'), 0); 
  myPromise() 
} 
 
async function second() { 
  await new Promise((resolve) => { 
    console.log('3') 
    resolve() 
  }) 
  console.log('4') 
} 
 
console.log('5') 
first() 
second()