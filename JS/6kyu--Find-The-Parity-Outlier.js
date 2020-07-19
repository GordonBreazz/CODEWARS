/***********************************************************************************************************************************************************
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

**********************************************************************************************************************************************************/

function findOutlier(integers){
    //your code here
    
    function isEven(d){
      if ( d == 0 ) return true;
      return  (d % 2 == 0) ? true : false;
    }
        
    let even, odd;  
    
    let count = 0;
    
    for (let item of integers)
      if (isEven(item)) {
        even = item;
        count++;} 
      else 
        odd = item;    
    
    return  (count > 1 ) ? odd : even;    
  }

  module.exports = { findOutlier }