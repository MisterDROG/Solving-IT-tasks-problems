const obj1 = {
    name: 'Al',
    age: '13',
    tructs: {
        struct: 1,
        distruct: 2,
    }
}

const obj2 = obj1

console.log('obj2 ', obj2)
console.log(obj1 == obj2) //true
console.log(obj1 === obj2) //true

const obj3 = {...obj1}
console.log('obj3 ',obj3)
console.log(obj3 == obj1) //false
console.log(obj3.tructs == obj1.tructs) //true

const obj4 = Object.assign({}, obj1)
console.log('obj4 ',obj4)
console.log(obj4 == obj1) //false
console.log(obj4.tructs == obj1.tructs) //true

// const obj5 = structuredClone(obj1) //here not working
// console.log('obj5 ', obj5)
// console.log(obj5 == obj1) //false
//console.log(obj5.tructs == obj1.tructs) //false

const obj6 = {}
for (let key in obj1) {
    obj6[key] = obj1[key]
}
console.log('obj6 ', obj6)
console.log(obj6 == obj1) //false
console.log(obj6.tructs == obj1.tructs) //true

const obj7 = {}

function deepCopy(copyTo, copyFrom) {
    for (let key in copyFrom) {
        if ((typeof copyFrom[key]) === 'object') {
            copyTo[key] = {}
            deepCopy(copyTo[key], copyFrom[key]) 
        }
        else copyTo[key] = copyFrom[key]
    }
}

deepCopy(obj7, obj1)
console.log('obj7 ', obj7)
console.log(obj7 == obj1) //false
console.log(obj7.tructs == obj1.tructs) //false


let obj8 = {}
obj8 = JSON.parse(JSON.stringify(obj1))
console.log('obj8 ', obj8)
console.log(obj8 == obj1) //false
console.log(obj8.tructs == obj1.tructs) //false

