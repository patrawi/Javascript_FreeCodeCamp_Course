//Pig Latin
function translatePigLatin(str) {
    let newArr = str.split('');
    const vowel = ['a','e','i','o','u'];
    const vowelRe = /[aeiou]/
    let newStr
    let count = 0;
    if(!vowelRe.test(str)) {
      console.log(newArr);
      newArr = newArr.concat(['a','y']);
      newStr = newArr.join('')
      return newStr;
    }
    if(vowel.includes(newArr[0])) {
     newArr = newArr.concat(['w','a','y'])
     newStr = newArr.join('');
    } else {
      for(let i = 0; i < newArr.length;i++ ) {
        
        if(!vowel.includes(newArr[i])) {
          count++;
        }
        if(vowel.includes(newArr[i])) {
          let temp = newArr.splice(0,count);
          newArr = 
          newArr.concat([...temp,'a','y']);
          newStr = newArr.join('');
          break;
        } 
      }
    }
    console.log(newStr);
    return newStr;
  }