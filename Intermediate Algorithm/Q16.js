//Steamroller
function readArr(arr,newArr) {
    for(let i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i])) {
        newArr.push(arr[i]);
      } else {
        readArr(arr[i],newArr);
      }
    }
    return newArr
  }
  
  
  function steamrollArray(arr) {
    let newArr = [];
    for(let i = 0 ; i < arr.length; i++) {
      if(!Array.isArray(arr[i])) {
        newArr.push(arr[i]);
      } else {
        readArr(arr[i],newArr);
      }
    }
    console.log(newArr)
    return newArr;
  }
  