//Simple card game 6kyu

function winner(deckSteve, deckJosh) {
    const values = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'T': 10,
      'J': 11,
      'Q': 12,
      'K': 13,
      'A': 14
    }
    let steveWins = 0;
    let joshWins = 0;
    
    for(let i = 0; i < deckSteve.length; i++){
      if( values[deckSteve[i]] > values[deckJosh[i]] ){
        steveWins++;
      } else if ( values[deckSteve[i]] < values[deckJosh[i]] ){
        joshWins++;
      } 
    }
    if( steveWins > joshWins) return `Steve wins ${steveWins} to ${joshWins}`;
    if( steveWins < joshWins) return `Josh wins ${joshWins} to ${steveWins}`;
    return "Tie";
  }

  winner(['A','7','8'], ['K','5','9']) //Steve wins 2 to 1