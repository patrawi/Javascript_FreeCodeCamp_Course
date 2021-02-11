//Diff Two Array
function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i = 0; i  < arr1.length;i++) {
      if(!(arr2.includes(arr1[i]))) {
        newArr.push(arr1[i]);
      }  
      }
    for(let i = 0; i < arr2.length;i++ ) {
      if(!(arr1.includes(arr2[i]))) {
        newArr.push(arr2[i]);
      }
    }
    console.log(newArr);
    return newArr;
  }
  
//Using filter and concat
function diffArray(arr1, arr2) {
    return arr1
           .concat(arr2)
           .filter((item) => !arr1.includes(item) || !arr2.includes(item));
  }
  
  