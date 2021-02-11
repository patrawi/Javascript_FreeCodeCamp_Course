//DNA Pairing
function pairElement(str) {
    let newArr = str.split('');
    return newArr.map((item) => {
      if(item === 'A') {
        return [item, 'T'];
      } else if (item === 'T') {
        return [item, 'A']
      } else if (item === 'C') {
        return [item, 'G'];
      } else if (item === 'G') {
        return [item, 'C'];
      }
    })
  
  
  }

// For being more proper, you can make a Object of DNA
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
  }
  
  //test here