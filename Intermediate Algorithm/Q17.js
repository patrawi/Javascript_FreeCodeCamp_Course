//Binary Agents
function binaryAgent(str) {
    let arr = str.split(' ')
    
    arr = arr.map((item) => {
     return  String.fromCharCode(parseInt(item,2))
    })
    
    return arr.join('');
  }