function stringSuffix(s) {
    let similars = 0
    let subString = ''
    
    for(let i = 0; i < s.length; i++){ 
      subString = s.substring(i)
      for(let j = 0; j < s.length; j++){
        if(s[j] == subString[j]){
          similars++
        } else {
            j = s.length
        }
      }
    }
  return similars
  }

  subString('aaa')