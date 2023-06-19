// The function takes an array and returns a string. Conditions:
// - the result is collected in ascending order order
// - only not expired records are used for the result
// - the result is collected from the values of value written in the reverse order of letters
// - the result does not contain the same letters, if the letter has already been added to the string, it is no longer added

const input = [
  { value: 'ss  i', order: 2, expired: true },
  { value: 'evol', order: 3, expired: true },
  { value: 'ff kciuq', order: 1, expired: false },
  { value: 'te j j ', order: 5, expired: false },
  { value: 'xooff', order: 4, expired: false },
];

const decodeStringFromArr = (arr) => {
    let obj = {}
    return arr
    .filter(el => !el.expired)
    .sort((a, b) => a.order - b.order)
    .map(el => ({...el, value: el.value.split('').reverse().join('')}))
    .reduce((sum, el) => {
        let res = ''
        for (let i=0; i<el.value.length; i++) {
            if (!obj[el.value[i]]) {
                res += el.value[i]
                obj[el.value[i]] = 1
            }
        }
        return sum+res
    },'')
}

console.log(decodeStringFromArr(input)) //'quick fox jet'