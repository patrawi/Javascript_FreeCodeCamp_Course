//Spinal Tap Case
function spinalCase(str) {
    let newArr = str.split(/[\s\-\_]/)
    str = newArr.join('-')
    newArr = str.split('');
    for(let i = 1; i <= newArr.length-1; i++ ) {
      if((newArr[i].charCodeAt(0) >= 65 && newArr[i].charCodeAt(0) <= 90)&&(newArr[i-1] != '-')) {
        let temp  = newArr.slice(i);
        newArr = newArr.slice(0,i)
        newArr.push('-')
        newArr = newArr.concat(temp)
      }
    }
    str = newArr.join('');
    str = str.toLowerCase();
    return str; 
  }


//Using Regex Expression your life become easier
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }