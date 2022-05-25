// Run-length encoding 6 kyu

var runLengthEncoding = function(str){
    let strArr = str.split('');
    let response = [];
    strArr.forEach( (e, i, a) => {
      if(e === a[i - 1]) {
        response[response.length - 1][0] += 1;    
      } else {
        response.push([1, e])
      }
    })
    return response // << fix this
  }