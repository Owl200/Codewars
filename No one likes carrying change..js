function coinsNeeded(amount, coinDenominations) {
    coinDenominations = coinDenominations.sort((a,b) => a - b)
    let i = amount;
    let totalCoins = 0;
    let toSubstract = coinDenominations[coinDenominations.length - 1]
    while(i > 0){
      if(i - toSubstract >= 0){
        i -= toSubstract
        totalCoins++
      } else {
        coinDenominations.pop()
        toSubstract = coinDenominations[coinDenominations.length - 1]
      }
    }
    console.log(totalCoins)
  }

  coinsNeeded(123,[1,2,5,10,20,50])