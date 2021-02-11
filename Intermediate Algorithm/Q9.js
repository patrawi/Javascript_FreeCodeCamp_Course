//Missing letters
function fearNotLetter(str) {
    let missing ;
    for(let i = 1; i <= str.length -1 ; i++ ) {
      if(str.charCodeAt(i) != str.charCodeAt(i-1) + 1) {
         missing = String.fromCharCode(str.charCodeAt(i-1) + 1) 
        
      }
    }
    return missing;
  }
  