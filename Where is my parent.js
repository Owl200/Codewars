// Where is my parent!?(cry) 6 kyu

let sortedArr = dancingBrigade.toLowerCase().split('').sort()
    sortedArr = sortedArr.map( (e, i) => (sortedArr[i-1] == undefined || sortedArr[i-1] != e) ? e.toUpperCase() : e)
    return sortedArr.join('');
  }