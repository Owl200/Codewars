// Strip comments 4 kyu

function solution(input, markers) {
    let lines = input.split('\n')
    const finalArr = []
    let indexOne, indexTwo;
    let cutStrings = lines.map((e, i, a) => {
      indexOne = e.indexOf(markers[0]) === -1 ? 100000 : e.indexOf(markers[0])
      indexTwo = e.indexOf(markers[1]) === -1 ? 100000 : e.indexOf(markers[1])
      console.log(indexOne, indexTwo, e)
      if(indexOne > indexTwo){
        finalArr.push(e.slice(0, indexTwo).trim())
      } else if(indexOne < indexTwo){
        finalArr.push(e.slice(0, indexOne).trim())
      } else{
        finalArr.push(e.trim())
      }
    })
    return finalArr.join('\n')
  };