//Fix the highlighted line so that everything works (no other lines need to be changed).

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
let user = {
name: 'Вася',

loginOk() {
    alert(`${this.name} logged in`);
},

loginFail() {
    alert(`${this.name} failed to log in`);
},

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(user.loginOk, user.loginFail);