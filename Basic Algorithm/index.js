// Q.1 Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
//Q.2 Reverse a String 
function reverseString(str) {
    let arr = str.split("");
    let newStr = "";
    for(let i = arr.length-1; i >= 0; i--) {
      newStr += arr[i];
    }
    return newStr;
  }
//Q.3 Factorialize a Number 
function factorialize(num) {
    let multi = num;
    if(num === 0) {
      return 1;
    } else if (num < 0) {
      return NaN;
    }
    else {
      multi *= factorialize(num-1);  
      console.log(multi);
    }
  
    return multi;
  }

//Q.4 Find the Longest Word in a String 
function findLongestWordLength(str) {
    let arr = str.split(" ");
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length > max) {
        max = arr[i].length;
      }
    }
    return max;
  }
//Q.5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let max = 0;
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    max = arr[i][0];
    arr[i].find((item) => {
      
      if(item > max ) {
        max = item;
      } 
        
      
    })
    newArr.push(max);
  }
  
  return newArr;
}
//Q.6 Confirm the Ending
function confirmEnding(str, target) {
  let len = target.length;
  let newStr = str.substring(str.length-len,str.length)
  console.log(newStr);
  if(newStr === target) {
    return true;
  } else {
    return false;
  }
}
//Q.7 Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let newStr = '';
  for(let i = 0; i < num; i++ ) {
    newStr += str;
  }
  console.log(newStr);
  return newStr;
}
//Q.8 Truncate a String
function truncateString(str, num) {
  const newArr = str.split("");
  let newStr = "";
  if(str.length > num) {
    for(let i = 0; i < num; i++ ) {
      newStr += newArr[i];
    }
    newStr += '...';
    console.log(newStr);
    return newStr;

  } else {
    return str;
  }
}
//Q.9 Finders Keepers
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++ ) {
    if(func(arr[i])) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }
  console.log(num);
  if(num) {
    return num;
  } else {
    return undefined
  }
}
//Q.10 Boo who
function booWho(bool) {
  if(bool === true || bool === false) {
    return true
  } else {
    return false;
  }

}
//Q.11 Title Case a Sentence
function titleCase(str) {
  str = str.toLowerCase();
  let newArr = str.split("");
  newArr[0] = newArr[0].toUpperCase();
  for(let i = 0; i < newArr.length; i++ ) {
    if(newArr[i] === " ") {
      newArr[i+1] = newArr[i+1].toUpperCase();
      
    }
  }
  str = newArr.join("");
  return str;
  
  
}
//Q.12 Slice and Splic
function frankenSplice(arr1, arr2, n) {
  let newArr1 = arr2.slice(0,n);
  let newArr2 = arr2.slice(n);
  for(let i = 0; i < arr1.length; i++) {
    newArr1.push(arr1[i]);

  }
  newArr1 = newArr1.concat(newArr2);
  return newArr1;
 
}
//Q.13 Falsy Bouncer
function bouncer(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++ ) {
    if(arr[i]) {
      newArr.push(arr[i]);
    } 

  }
  console.log(newArr)
  return newArr;
}
//Q.14 Where do I Belong
function getIndexToIns(arr, num) {
  arr.sort((a,b) => a-b);
  console.log(arr)
  if(arr.length === 0 ) {
    return 0;
  } else if (arr[arr.length-1] < num) {
    return arr.length;
    } else if (arr[arr.length-1] >= num) {
      return arr.findIndex((item) => {
          return item >= num;      
      })
    }
    
}
//Q.15 Mutations
function mutation(arr) {
  const newArr1 = arr[0].toLowerCase().split("");
  const newArr2 = arr[1].toLowerCase().split("");
  console.log(newArr1.length)
  console.log(newArr2.length);
  let count = 0;
  for(let i = 0; i < newArr2.length; i++ ) {
    if(newArr1.includes(newArr2[i])) {
      count++;
      console.log(count);
    }
  }
    if(count === newArr2.length) {
        return true
     
  } 
  return false;
}
//Q.16 Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let amount = arr.length/size;
  for(let i = 0; i < amount; i++) {
    console.log(arr.slice(i*size,size+size*i));
    newArr.push(arr.slice(i*size,size+size*i));

  }
  return newArr;
}
