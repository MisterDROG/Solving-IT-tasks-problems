//Change the up, down, and showStep methods so that they can be called in a chain, like this:

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this
    }
  };
  
//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep(); // 1
//   ladder.down();
//   ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0