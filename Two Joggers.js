// Two Joggers 6 Kyu
// https://www.codewars.com/kata/5274d9d3ebc3030802000165/javascript

var nbrOfLaps = function (x, y) {
    let i = 1;
    while(i * x % y !== 0){
      i++
    }
    let xLaps = i; 
    i = 1
    while(i * y % x !== 0){
      i++
    }
    let yLaps = i; 
    return [xLaps, yLaps];
  }