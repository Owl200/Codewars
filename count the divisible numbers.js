// count the divisible numbers 6 kyu

function divisibleCount(x, y, k) {
    const divisibleNumbers = Math.floor(y/k) - Math.floor((x-1)/k)
    return divisibleNumbers
  }