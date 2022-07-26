// What century is it? 6kyu

function whatCentury(year)
{
  const century = (Math.ceil(year / 100)).toString()
  const centuryLastDigit = century[century.length - 1]
  let centuryFormat = ''
  if(centuryLastDigit == 0 || centuryLastDigit == 4 || centuryLastDigit == 5 || centuryLastDigit == 6 || centuryLastDigit == 7 || centuryLastDigit == 8 || centuryLastDigit == 9) centuryFormat = 'th'
  if(centuryLastDigit ==  1) centuryFormat = 'st'
  if(centuryLastDigit == 2) centuryFormat = 'nd'
  if(centuryLastDigit ==  3) centuryFormat = 'rd'
  if(century >= 10 && century <= 20) centuryFormat = 'th'
  console.log(`${century}${centuryFormat}`)
  return `${century}${centuryFormat}`
}

whatCentury("1234")