// Beeramid 5 Kyu
// Returns number of complete beeramid levels

var beeramid = function(bonus, price) {
    const canBuy = Math.floor(bonus / price); 
    let cansNeeded = 1;
    let level = 0;
    while(cansNeeded <= canBuy){
      level++
      cansNeeded += (level + 1)**2;
    }
    return level
  }