//remove zeros 4Kyu

function removeZeros(array) {
    let numberOfZeros = [];
    let arrayLength = array.length
    let i = arrayLength - 1
    let j = arrayLength -1
    while( j >= 0){
      if( (array[i] === 0) || (array[i] === '0') ){
        numberOfZeros = [array[i], ...numberOfZeros]
        i--
        j--
      } else {
        array = [array[i], ...array]
        j--
      }
    }
    array.length = arrayLength - numberOfZeros.length
    array = [...array, ...numberOfZeros]
    console.log(array, numberOfZeros, arrayLength)
    return array
  }

removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, '0', 0, 19, 14])