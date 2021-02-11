//Sorted Union
function uniteUnique(arr) {
    let args = [...arguments];
    let useArr = []; 
     let newArr = args.reduce((newArr, item) =>{
       return newArr.concat(item);
     },[])
    newArr.map((item,index) => {
      if(!useArr.includes(item)) {
        return useArr.push(item)
      }
    })
   
    console.log(useArr)
    return useArr;
  }