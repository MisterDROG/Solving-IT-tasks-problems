function decode(numbers) {
    const letters = {
        '-1' : '_',
        '0' : '0',
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4',
        '5' : '5',
        '6' : '6',
        '7' : '7',
        '8' : '8',
        '9' : '9',
        '10' : 'A',
        '11' : 'B',
        '12' : 'C',
        '13' : 'D',
        '14' : 'E',
        '15' : 'F',
        '16' : 'G',
        '17' : 'H',
        '18' : 'I',
        '19' : 'J',
        '20' : 'K',
        '21' : 'L',
        '22' : 'M',
        '23' : 'N',
        '24' : 'O',
        '25' : 'P',
        '26' : 'Q',
        '27' : 'R',
        '28' : 'S',
        '29' : 'T',
        '30' : 'U',
        '31' : 'V',
        '32' : 'W',
        '33' : 'X',
        '34' : 'Y',
        '35' : 'Z',
        '36' : 'a',
        '37' : 'b',
        '38' : 'c',
        '39' : 'd',
        '40' : 'e',
        '41' : 'f',
        '42' : 'g',
        '43' : 'h',
        '44' : 'i',
        '45' : 'j',
        '46' : 'k',
        '47' : 'l',
        '48' : 'm',
        '49' : 'n',
        '50' : 'o',
        '51' : 'p',
        '52' : 'q',
        '53' : 'r',
        '54' : 's',
        '55' : 't',
        '56' : 'u',
        '57' : 'v',
        '58' : 'w',
        '59' : 'x',
        '60' : 'y',
        '61' : 'z',
        '62' : ' ',
    }
  let result = ''
  numbers.forEach(num => {
    if (-1 <= num <= 62) {
        result = result + letters[`${num}`]
    } else {
        result = result + '_'
    }
    
  });
  console.log(result)
  return result
};

function decode2(numbers) {

  let result = []
  numbers.forEach(num => {
    if (0 <= num && num <= 9) {
        // console.log(num, num.toString())
        result = result + num.toString()
    } else if (10 <= num && num <= 35) {
        // console.log(num, String.fromCharCode(num + 55))
        result = result + String.fromCharCode(num + 55)
    } else if (36 <= num && num <= 61) {
        // console.log('26-',num, String.fromCharCode(num + 61))
        result = result + String.fromCharCode(num + 61)
    } else if (num == 62) {
        // console.log('62',num, String.fromCharCode(32))
        result = result + String.fromCharCode(32)
    } else {
        // console.log(num, String.fromCharCode(95))
        result = result + String.fromCharCode(95)
    }
  });
  console.log(result)
  return result
};

function decodeN(numbers) {
    let result = []
    numbers.forEach(num => {
      if (0 <= num && num <= 9) {
          result = result + num.toString()
      } else if (10 <= num && num <= 35) {
          result = result + String.fromCharCode(num + 55)
      } else if (36 <= num && num <= 61) {
          result = result + String.fromCharCode(num + 61)
      } else if (num == 62) {
          result = result + String.fromCharCode(32)
      } else {
          result = result + String.fromCharCode(95)
      }
    });
    return result
  };

function decode3(unicode) {

    return String.fromCharCode(unicode)
  };

function decode4(unicode) {

    return unicode.toString().codePointAt(0)
};

function decode5(unicode) {

    return decodeURIComponent(unicode)
};


decode2([14,12,22,10,28,38,53,44,51,55,62,2,0,1,5])
decode2([17,40,47,47,50,62,18,49,55,40,53,49,62,22,40,40,55,56,51,62,2,0,2,3])
decode2([17,40,47,47,50,62,32,50,53,47,39,-1])
console.log(decode4(41))
console.log(decode5('\u0432'))