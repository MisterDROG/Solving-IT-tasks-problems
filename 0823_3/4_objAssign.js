//what in console?

const user = {
    email: 'hello@mail.com',
    password: '123456'
}

const updataUser = ({email, password}) => {
    if (email) {
        Object.assign(user, {email})
    }

    if (password) {
        user.password = password
    }

    return user
}

const updatedUser = updataUser({email: 'new@mail.com'})

console.log(updatedUser === user)

// true