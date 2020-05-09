// Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.
// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:
// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    
// The encoded string would be:
// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.
// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.
// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.
// Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.
const encodeRailFenceCipher = function(string, numberRails) {
    // code
    let rls = Array(numberRails).fill('')
     //console.log(rls)
    let cnt = 1
    let mcnt = 1
    //console.log(arr)
    for (let i=0; i< string.length; i++) {
        rls[cnt-1] += string[i]
      //  console.log(cnt)
        if (cnt == numberRails || (cnt == 1 && mcnt == -1)) mcnt *= -1
      cnt += mcnt  
    }
    //console.log([...rls].join(''))
    return [...rls].join('')
  }
  
  const decodeRailFenceCipher = function(string, numberRails) {
    // code
    // get length of strings
    let rls = Array(numberRails).fill('')
    let cnt = 1
    let mcnt = 1
    for (let i=0; i< string.length; i++) {
        rls[cnt-1] += string[i]
      //  console.log(cnt)
        if (cnt == numberRails || (cnt == 1 && mcnt == -1)) mcnt *= -1
      cnt += mcnt  
    }
  
   let pointer = 0
   let len = 0 
   for (let i=0; i < rls.length; i++){
     len = rls[i].length
     rls[i] = string.slice(pointer, pointer+len)
     pointer = pointer+len
   }
    cnt = 1
    mcnt = 1
    let result = ''
    let pointers = Array(numberRails).fill(0)
    for (let i=0; i< string.length; i++) {
        result += rls[cnt-1][pointers[cnt-1]]
        pointers[cnt-1]++
        if (cnt == numberRails || (cnt == 1 && mcnt == -1)) mcnt *= -1
      cnt += mcnt  
    }  
   return result
  }

//export for test

module.exports = {decodeRailFenceCipher, encodeRailFenceCipher}