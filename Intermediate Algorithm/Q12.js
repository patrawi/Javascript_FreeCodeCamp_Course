function sumFibs(num) {
    let a2 = 1;
    let a1 = 1;
    let sum = 0;
    let arr = [a1,a2];
  
    while(a2 <= num) {
      let temp = a2;
      a2 += a1;
     if(a2 > num) {
       break;
     }
      a1 = temp;
      arr.push(a2)
    }
    for (let elem of arr) {
      if(elem %2 ===1 ) {
        sum+=elem
      }
    }
    console.log(sum)
    return sum
  }
  

//If set a1 = 0, you can refractor the code more precisely
function sumFibs(num) {
    let a2 = 1;
    let a1 = 0;
    let sum = 0;
  
    while(a2 <= num) {
      let temp = a2;
      if(temp%2=== 1) {
        sum += temp;
      }
      a2 += a1;
      a1 = temp;
    }
    console.log(sum)
    return sum
  }
  