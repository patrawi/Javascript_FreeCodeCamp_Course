//Q.1 Sum All Number in a Range
function sumAll(arr) {
    let sum = 0;
    arr.sort((a,b)=> {
      return a-b;
    });
    for(let i = arr[0]; i <= arr[arr.length-1]; i++) {
      console.log(sum)
      sum += i;
    }
    console.log(sum)
    return sum;
  }

//Or using Math.max and Math.min
function sumAll(arr) {
    let sum =0;
  
    for(let i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++) {
      console.log(sum)
      sum += i;
    }
    console.log(sum)
    return sum;
  }
  