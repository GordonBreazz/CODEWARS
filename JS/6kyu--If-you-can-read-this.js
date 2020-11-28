/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "If you can read this..." 
*
*   SOURCE: https://www.codewars.com/kata/586538146b56991861000293/
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
* 
*     PLOT: The idea for this Kata came from 9gag today.here
*            
*           You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.
*           
*           Like this:
*           
*           Input:
*           
*              If, you can read?
*           
*           Output:
*           
*              India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
*           
*           Notes
*           
*            - The set of used punctuation is .!?.
*            - Punctuation should be kept in your return string, but spaces should not.
*            - Xray should not have a dash within.
*            - Every word and punctuation mark should be seperated by a space ' '.
*            - There should be no trailing whitespace
*     
****************************************************************************************************************************************************************************************************************************************/

function translate(st) {
    const alphabet = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu']
    let result = ''
    for (let ch of st.toLowerCase()) {
        if (ch >= 'a' && ch <= 'z')
          result += alphabet[ch.charCodeAt(0)-97] + ' '            
        else
          result += ch + ' '      
        }
    return result
  }
  function to_nato(words) {
      // Go code
    return words.split(' ').map( i => translate(i) ).join('').trim()    
  }

module.exports = { to_nato }