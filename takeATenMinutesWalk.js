// Take a ten minutes walk 6kyu

function isValidWalk(walk) {
    let minutesFromStartingPoint = 0;
    let x  = 0;
    let y = 0;
    walk.map(e => {
      if(e === 'n') y++
      if(e === 's') y--
      if(e === 'e') x++
      if(e === 'w') x--
    })
    
    return (x === 0 && y === 0 && walk.length === 10) ? true : false 
  }

  isValidWalk(['n','s','n','s','n','s','n','s','n','s']) //true
  isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) //false