function dropElements(arr, func) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++ ) {
      if(func(arr[i])) {
        newArr = arr.slice(i); break;
      }
        
        
    
    }
    console.log(newArr);
    return newArr;
  
  }

//arr.shift() make the length decrease ending in the error
function dropElements(arr, func) { 
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;

}