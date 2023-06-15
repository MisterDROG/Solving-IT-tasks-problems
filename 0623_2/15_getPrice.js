//make price list

const priceList = {
    "1-10": 1,
    "11-20": 3,
    "21-30": 5,
    "31-40": 9,
    "41-Infinity": 10
  };
  
  const getPrice = (count) => {
    let res = 0 
    const mas = Object.keys(priceList).map(el => [...el.split('-'), priceList[el]])
    mas.forEach(el => {
        if (count >= el[0] && count <= el[1]) res = el[2]
    })
    return res
  }

console.log(getPrice(22)) //5
console.log(getPrice(42)) //10
console.log(getPrice(10)) //1