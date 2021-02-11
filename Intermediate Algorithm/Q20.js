var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let name = firstAndLast;
    let arr = name.split(' ');
    this.getFullName = function() {
      return arr.join(' ');
    };
    this.setFullName = function(firstAndLast) {
      arr = firstAndLast.split(' ');
    }
    this.getFirstName = function() {
    
      return  arr[0];
    }
    this.setFirstName = function(first) {
      arr[0] = first;
      
    
    }
    this.getLastName = function() {
      return arr[1];
    }
    this.setLastName = function(last) {
      arr[1] = last;
      name = arr.join(' ');
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');