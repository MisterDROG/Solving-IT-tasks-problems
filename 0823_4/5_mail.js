// total june-aug: 156 vs + 122/2 codeW + 5 react = 222
//what in console?

const user = {
    email: "test@email.com",
    updateEmail: email => {
        this.email = email
    }
}

user.updateEmail("newemail@mail.com")
console.log(user.email)


// test@email.com

const user2 = {
    email: "test@email.com",
    updateEmail: function(email) {
        this.email = email
    }
}

user2.updateEmail("newemail@mail.com")
console.log(user2.email)

// newemail@mail.com