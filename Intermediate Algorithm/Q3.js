//Seek and Destroy
function destroyer(arr) {
    let des = [].slice.call(arguments);
    des = des.slice(1);
    let newArr = [];
    return (arr.filter((item) => !arr.includes(item) || !des.includes(item)))
    
  }
  