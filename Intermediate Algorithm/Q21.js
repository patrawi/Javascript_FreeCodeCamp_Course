var GM = 398600.4418;
var earthRadius = 6367.4447;
function orbitalPeriod(arr) {
    let newArr = [];
    for (let item of arr) {
      let star = new Period(item.name, item.avgAlt)
      newArr.push(star);
    }
  
    return newArr;
  }
  
  function Period(name, avgAlt) {
    let axis = Math.pow(avgAlt + earthRadius, 3);
    let c = Math.sqrt(axis/GM);
    let answer = Math.round(2*Math.PI *c);
    this.name = name;
    this.orbitalPeriod = answer
      
    
  }

//Using map to return a array of objects
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(({name, avgAlt})=> {
      let axis = Math.pow(avgAlt + earthRadius, 3);
      let orbitalPeriod = Math.round((2*Math.PI)* Math.sqrt(axis/GM))
      return {name, orbitalPeriod}
    })
  
    
  }
  