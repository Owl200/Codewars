//url: https://www.codewars.com/kata/614ac445f13ead000f91b4d0/train/javascript

function valueOfX(eq) {
    let [leftSide, rightSide] = eq.split('=')
    let xIsOnLeft
    let toEval = [] 
    let x = []
    leftSide = leftSide.trim().split(' ').filter( element => element !== ' ')
    rightSide = rightSide.trim().split(' ').filter( element => (element !== ' ' || element !== ''))
    leftSide.includes('x') ? xIsOnLeft = true : xIsOnLeft = false
    
    if(xIsOnLeft){
      rightSide.forEach(e => toEval.push(e))
      leftSide.forEach( (element, i) => {
        if(element === 'x' || leftSide[i + 1] === 'x'){
          x.push(element)
        } else {
          if(element === '+'){
            toEval.push('-')
          } else if(element === '-'){
            toEval.push('+')
          } else {
            if(toEval[toEval.length -1] === '+' || toEval[toEval.length -1] === '-'){
              toEval.push(element)  
            } else{
              toEval.push('-')
              toEval.push(element)
            }
          }
        }
        })
      } 
    else {
      leftSide.forEach(e => toEval.push(e))
      rightSide.forEach( (element, i) => {
      if(element === 'x' || rightSide[i + 1] === 'x'){
        x.push(element)
      } else {
        if(element === '+'){
          toEval.push('-')
        } else if(element === '-'){
          toEval.push('+')
        } else {
          if(toEval[toEval.length -1] === '+' || toEval[toEval.length -1] === '-'){
            toEval.push(element)  
          } else{
            toEval.push('-')
            toEval.push(element)
          }
        }
      }
      })
    }
    x = x.join('')
    //toEval = toEval.join('')
    let result = eval(toEval.join(''))
    
    console.log(result)
    return (x === 'x' || x === '+x') ? result = result : result *= - 1
  }