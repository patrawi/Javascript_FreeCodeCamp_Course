function convertHTML(str) {
    let spchar = {
      '&' : '&amp;',
      '<' : '&lt;',
      '>' : '&gt;',
      '"' : '&quot;',
      '\'' : '&apos;', 
    }
    for (let item in spchar) {
     for(let i = 0; i < str.length; i++) {
        if(str[i] === item) {
        str = str.slice(0,str.indexOf(item)) + spchar[item] + 
        str.slice(str.indexOf(item)+1)
      }
     }
    }
    console.log(str)
    return str;
  }


  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  