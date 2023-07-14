//What option allows you to set hasName to true if you can't pass true as an argument?

function getName(name) {
    return !!name
}

console.log(getName('Mark'))