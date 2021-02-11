//Wherefore art thou
function whatIsInAName(collection, source) {
    var arr = [];
    let keys = Object.keys(source);
    let values = Object.values(source);
    console.log(keys)
    // Only change code below this line
    for (let item of collection) {
      let count = 0;
      let properties = Object.keys(item);
      let value = Object.values(item);
        for(let i = 0; i < properties.length;i++ ) {
          for(let j = 0; j < keys.length;j++) {
            if(properties[i] === keys[j]) {
              if(value[i] === values[j]) {
                count++;
              }
              
            }
          }
          if(count === keys.length) {
            if(arr.includes(item)) {
              continue;
            }
            arr.push(item); 
          }
        }
      }
    
  console.log(arr);
   return arr;
  }

//Using every filter
function whatIsInAName(collection, source) {
    let keys = Object.keys(source);
    console.log(keys)
    // Only change code below this line
    return collection.filter((item) => {
      return keys.every((key) => item.hasOwnProperty(key) && item[key]=== source[key]) 
    })
    
  }