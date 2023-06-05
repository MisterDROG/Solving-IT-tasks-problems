
function task1(text) { 
    // United States of America 
    let arr = text.toLowerCase(); 
    let result = ""; 
    for (let i = 0; i < arr.length; i++) { 
        if (text[i] !== arr[i]) {
            result = result.concat("", text[i])
        }
    } 
    return result; 
  } 
   
  console.log(task1("United States of America"));