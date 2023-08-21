//what in console?

function compareMembers(person1, preson2 = person) {
    if (person1 !== preson2) {
        console.log('Not the same')
    } else {
        console.log('They are same')
    }
}

const person = { name: 'Lydia' }

compareMembers(person)

// They are same