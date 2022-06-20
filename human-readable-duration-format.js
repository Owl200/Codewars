function formatDuration (seconds) {
    const year = 31536000;
    const day = 86400
    const hour = 3600
    const minute = 60
    let remainingSeconds = seconds
    let res = [0, 0, 0, 0, 0]
    
    if(seconds === 0) {
      return 'now'
    }
    
    //populates the res array
    while(remainingSeconds > 0){
      if(remainingSeconds >= year){
        remainingSeconds -= year
        res[0]++
      } else if(remainingSeconds >= day){
        remainingSeconds -= day
        res[1]++
      } else if(remainingSeconds >= hour){
        remainingSeconds -= hour
        res[2]++
      } else if(remainingSeconds >= minute){
        remainingSeconds -= minute
        res[3]++
      } else if(remainingSeconds < 60){
        res[4] += remainingSeconds
        remainingSeconds = 0
      }
    }
    
    //set the strings for each unit
    let yearRes = res[0] === 0 ? `` : res[0] > 1 ? `${res[0]} years` : `${res[0]} year`;
    let dayRes = res[1] === 0 ? `` : res[1] > 1 ? `${res[1]} days` : `${res[1]} day`;
    let hourRes = res[2] === 0 ? `` : res[2] > 1 ? `${res[2]} hours` : `${res[2]} hour`;
    let minuteRes = res[3] === 0 ? `` : res[3] > 1 ? `${res[3]} minutes` : `${res[3]} minute`;
    let secondRes = res[4] === 0 ? `` : res[4] > 1 ? `${res[4]} seconds` : `${res[4]} second`;
    let toReturn = []
    const commaOrAnd = []
    const stringToAppend = [yearRes, dayRes, hourRes, minuteRes, secondRes]
    
    //decides if we need to concat with a comma or 'and'
    for(let i = 0; i < res.length; i++){
      let valuesAhead = 0;
      if(i == 4){
        commaOrAnd.push('')
      } else if(res[i] > 0){
          for(let j = i + 1; j < res.length; j++){
            res[j] && valuesAhead++
          }
      } else {
          commaOrAnd.push('')
      }
      
      if(valuesAhead >= 2 && i != 4){
        commaOrAnd.push(', ')
      } else if(valuesAhead == 1 && i != 4){
          commaOrAnd.push(' and ')
      } 
  }
    
    //sets the string that will be returned
    res.forEach( (e, i) => {
      if(e){
        toReturn.push(stringToAppend[i])
        toReturn.push(commaOrAnd[i])
      }  
    })
    
    return toReturn.join('')
  }