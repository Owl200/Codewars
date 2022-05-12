// Odd or Even? Determine that!
// Given a number N, determine if the sum of N consecutive numbers is odd or even.

function oddOrEven(n){
    // can be either, depends on the starting numeber
    if(n % 2 !== 0) return 'Either'
    if( (n / 2) % 2 === 0){
        // will have an even amount of odd number, so it adds to be even
        return 'Even'
    } else {
        // will have odd amount of odd numbers, so it adds to be uneven
        return 'Odd'
    }
  }