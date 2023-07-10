//correct to chain

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this //correct
    },
    down() {
      this.step--;
      return this // correct
    },
    showStep: function() {
      console.log( this.step );
      return this // correct
    }
  };

ladder.up().up().down().showStep().down().showStep(); // 1 0