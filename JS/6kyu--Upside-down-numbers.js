/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "Upside down numbers"
*
*   SOURCE: https://www.codewars.com/kata/59f7597716049833200001eb
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers 
*           remain the same. To clarify, if we write them down on a paper and turn the paper upside down, 
*           the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers 
*           when rotated.
*           
*           Given a range, return the count of upside down numbers within that range. For example, 
*           solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.
*           
*           More examples in the test cases.
*           
*           Good luck!
*                    
****************************************************************************************************************************************************************************************************************************************/

function isUpsideDown(number) {
    if (number < 10)
      return number === 0 || number === 1 || number === 8
    const st = number.toString(),
          l = st.length - 1,
          half = (l - l % 2) / 2 + 1 
    for (let i = 0; i < half; i++) {
      if (st[i] === "6" && st[l-i] === "9" || st[i] === "9" && st[l-i] === "6") continue        
      if (st[i] !== st[l - i]) return false
      if (!(st[i] == "0" || st[i] == "1" || st[i] == "8")) return false
    }
    return true  
  }
  
  function solve(x, y) {
   //..
    let count = 0
    for (let i = x; i < y; i++)
      if (isUpsideDown(i)) count++
    return count
  }

  module.exports = {solve}