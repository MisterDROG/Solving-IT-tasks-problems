//write sort function

const arr = [1,3,5,2,6,7]

function sortFunc(a,b) {
    if (a-b>0) return 1
    if (a-b<0) return -1
    if (a=b) return 0
}

console.log(arr.sort((a,b)=> a-b))
console.log(arr.sort((a,b)=> b-a))
console.log(arr.sort((a,b) => sortFunc(a,b)))