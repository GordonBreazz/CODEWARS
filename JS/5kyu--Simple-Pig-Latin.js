/*******************************************************************************************************************************

    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
    Examples
    pig_it('Pig latin is cool') # igPay atinlay siay oolcay
    pig_it('Hello world !')     # elloHay orldway !

********************************************************************************************************************************/

function pigIt(str) {          
    let arr = str.split(' ');    
    for (let i = 0; i< arr.length; i++)
      if ( '!.,-:?'.indexOf(arr[i]) == -1 )
        arr[i] = arr[i].slice(1, arr[i].length) + arr[i][0] + 'ay';      
    return arr.join(' ');  
  }

  module.exports = { pigIt }