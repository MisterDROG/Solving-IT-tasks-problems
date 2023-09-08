// What in console?

function checkAlive(health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }

console.log(checkAlive(5)) 
console.log(checkAlive(0)) 

// true false