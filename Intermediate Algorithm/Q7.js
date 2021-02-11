function myReplace(str, before, after) {
    const newArr = str.split(' ');
    const upperCase = /[A-Z]/;
    let newAfter = after.split('');
    let leftArr = newArr.slice(0,newArr.indexOf(before))
    let rightArr = newArr.slice(newArr.indexOf(before) + 1)
    if(upperCase.test(before)) {
      newAfter[0] = newAfter[0].toUpperCase();
      after = newAfter.join('');
      leftArr = leftArr.concat([after, ...rightArr])
      str = leftArr.join(' ');
      return str
    } 
    else if(upperCase.test(after)) {
      newAfter[0] = newAfter[0].toLowerCase();
      after = newAfter.join('');
      leftArr = leftArr.concat([after, ...rightArr])
      str = leftArr.join(' ');
      console.log(str);
      return str
    }
       leftArr = leftArr.concat([after, ...rightArr])
       str = leftArr.join(' ');
       return str;
  
  }
// you can use indexOf for String and slice for string no need to change it into array
function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }
  