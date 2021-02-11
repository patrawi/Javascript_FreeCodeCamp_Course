function smallestCommons(arr) {
    let newArr = [];
    let lcm = Math.min(arr[0],arr[1]);
   
    for(let i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); 
    i++) {
      newArr.push(i);
    }
    for(let i = 1; i < newArr.length; i++ ) {
      let gcd = GCD(lcm,newArr[i] );
      console.log(gcd)
      lcm = (lcm * newArr[i]) / gcd;
      
    }
   return lcm;
   }
   
   function GCD(x,y) {
     y %= x
     if(y === 0) return x;
     else return GCD(y,x);
   }