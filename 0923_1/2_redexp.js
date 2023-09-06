// What in console?

const createMember = ({email, address = {}}) => {
    const validEmail = /.+\@.+\...+/.test(email)

    if (!validEmail) throw new Error('Valid email pls')

    return {
        email,
        adress: address ? address : null
    }
}

const member = createMember({email: 'my@email.com'})

console.log(member)

// { email: "my@email.com", address: {} }