//decode the morse code 6 Kyu

decodeMorse = function(morseCode){
    let decoded = morseCode.split(' ').map(e => e === '' ? ' ' : MORSE_CODE[e])
    decoded = decoded.join('').replace(/\s+/g, ' ').trim()
    return decoded
  }