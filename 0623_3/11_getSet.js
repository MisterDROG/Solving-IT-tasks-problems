var user = {
    firstName: "Вася",
    surname: "Петров",
    get fullName() {
      return this.firstName + ' ' + this.surname;
    },
  
    set fullName(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
  };
  
console.log( user.fullName ); // Вася Петров (из геттера)

user.fullName = "Петя Иванов";
console.log( user.firstName ); // Петя  (поставил сеттер)
console.log( user.surname ); // Иванов (поставил сеттер

console.log( user.fullName );