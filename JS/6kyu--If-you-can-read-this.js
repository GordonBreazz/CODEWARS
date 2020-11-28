function translate(st) {
    const alphabet = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu']
    let result = ''
    for (let ch of st) {
      if (ch == '.' || ch == '!' || ch == '?')
        result += ch + ' '
      else 
        result += alphabet[ch.toLowerCase().charCodeAt(0)-97] + ' '      
      }
    return result
  }
  function to_nato(words) {
      // Go code
    return words.split(' ').map( i => translate(i) ).join('').trim()    
  }

module.exports = { to_nato }