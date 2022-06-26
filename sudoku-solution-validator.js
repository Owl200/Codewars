function validSolution(board){
    let rows = [...board]
    let columns = [
      [board[0][0], board[1][0], board[2][0], board[3][0], board[4][0], board[5][0], board[6][0], board[7][0], board[8][0]],
      [board[0][1], board[1][1], board[2][1], board[3][1], board[4][1], board[5][1], board[6][1], board[7][1], board[8][1]],
      [board[0][2], board[1][2], board[2][2], board[3][2], board[4][2], board[5][2], board[6][2], board[7][2], board[8][2]],
      [board[0][3], board[1][3], board[2][3], board[3][3], board[4][3], board[5][3], board[6][3], board[7][3], board[8][3]],
      [board[0][4], board[1][4], board[2][4], board[3][4], board[4][4], board[5][4], board[6][4], board[7][4], board[8][4]],
      [board[0][5], board[1][5], board[2][5], board[3][5], board[4][5], board[5][5], board[6][5], board[7][5], board[8][5]],
      [board[0][6], board[1][6], board[2][6], board[3][6], board[4][6], board[5][6], board[6][6], board[7][6], board[8][6]],
      [board[0][7], board[1][7], board[2][7], board[3][7], board[4][7], board[5][7], board[6][7], board[7][7], board[8][7]],
      [board[0][8], board[1][8], board[2][8], board[3][8], board[4][8], board[5][8], board[6][8], board[7][8], board[8][8]]
    ]
    let sections = [
      // first big row
      [board[0][0], board[1][0], board[2][0], board[0][1], board[1][1], board[2][1], board[0][2], board[1][2], board[2][2]],
      [board[0][3], board[1][3], board[2][3], board[0][4], board[1][4], board[2][4], board[0][5], board[1][5], board[2][5]],
      [board[0][6], board[1][6], board[2][6], board[0][7], board[1][7], board[2][7], board[0][8], board[1][8], board[2][8]],
      //second big row
      [board[3][0], board[4][0], board[5][0], board[3][1], board[4][1], board[5][1], board[3][2], board[4][2], board[5][2]],
      [board[3][3], board[4][3], board[5][3], board[3][4], board[4][4], board[5][4], board[3][5], board[4][5], board[5][5]],
      [board[3][6], board[4][6], board[5][6], board[3][7], board[4][7], board[5][7], board[3][8], board[4][8], board[5][8]],
      // third big row 
      [board[6][0], board[7][0], board[8][0], board[6][1], board[7][1], board[8][1], board[6][2], board[7][2], board[8][2]],
      [board[6][3], board[7][3], board[8][3], board[6][4], board[7][4], board[8][4], board[6][5], board[7][5], board[8][5]],
      [board[6][6], board[7][6], board[8][6], board[6][7], board[7][7], board[8][7], board[6][8], board[7][8], board[8][8]],
    ]
    
    const rowSets = []
    const columnSets = []
    const sectionSets = []
    
    for(let i = 0; i < rows.length; i++){
      if(rows[i].includes(0)){
        rowSets.push([])
      } else {
        let tempArr = new Set(rows[i])
        rowSets.push(Array.of(...tempArr))    
      }
    }
    
    for(let i = 0; i < columns.length; i++){
      if(columns[i].includes(0)){
        columnSets.push([])
      } else{
      let tempArr = new Set(columns[i])
      columnSets.push(Array.of(...tempArr))
      }
    }
    
    for(let i = 0; i < sections.length; i++){
      if(sections[i].includes(0)){
        sectionSets.push([])
      } else{
        let tempArr = new Set(sections[i])
        sectionSets.push(Array.of(...tempArr))
      }
    }

    
    let rowIsValid = rows.map( (e, i) => e.length ===  rowSets[i].length)
    let columnIsValid = columns.map( (e, i) => e.length ===  columnSets[i].length)
    let sectionIsValid = sections.map( (e, i) => e.length ===  sectionSets[i].length)
    

    rowIsValid.includes(false) || columnIsValid.includes(false) || sectionIsValid.includes(false)  ? console.log(false) : console.log(true);
    
  }
  
  validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]])