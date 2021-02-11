//Everything Be True
function truthCheck(collection, pre) {
    let arr = [];
    for(let obj of collection) {
      if(obj.hasOwnProperty(pre)) {
          for(let item in obj ) {
        if(item === pre) {
          if(obj[item]) {
            arr.push(true)
          } else {
            arr.push(false);
          }
        }
      }
      } else {
        arr.push(false)
      }
    
    }
    console.log(arr)
    if(arr.includes(false)) {
      return false;
    } else {
      return true;
    }
}


//Using every function
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
  }
  