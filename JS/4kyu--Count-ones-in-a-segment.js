/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Count ones in a segment"
*
*   SOURCE: https://www.codewars.com/kata/596d34df24a04ee1e3000a25
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Given two numbers: 'left' and 'right' (1 <= 'left' <= 'right' <= 200000000000000) 
*           return sum of all '1' occurencies in binary representations of numbers between 
*           'left' and 'right' (including both)
*           
*           Example:
*           countOnes 4 7 should return 8, because:
*           4(dec) = 100(bin), which adds 1 to the result.
*           5(dec) = 101(bin), which adds 2 to the result.
*           6(dec) = 110(bin), which adds 2 to the result.
*           7(dec) = 111(bin), which adds 3 to the result.
*           So finally result equals 8.
*           WARNING: Segment may contain billion elements, to pass this kata, your solution 
*           cannot iterate through all numbers in the segment!
*                    
****************************************************************************************************************************************************************************************************************************************/

function getCount(n) {
    const func = x => 2 ** x,
          bits = n.toString(2).length,
          div = (a, b) => (a - a % b) / b
    let sum = 0
    for (let i = 0; i < bits; i++) {
      sum += div(n, func(i + 1)) * func(i)
      if (n % func(i + 1) > func(i))
        sum += func(i)
      else
        sum += n % func(i + 1)
      n -= func(i)
    }
    return sum
  } 
  
  const countOnes = (left, right) => getCount(right) - getCount(left - 1)

  module.exports = {countOnes}