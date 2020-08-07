/***********************************************************************************************************************************************************
*     KATA: 7 kyu "Summing a number's digits"
*   Source: https://www.codewars.com/kata/52f3149496de55aded000410
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Write a function named sumDigits which takes a number as input and returns the sum of the absolute 
*           value of each of the number's decimal digits. 
*
*           For example:
*             sumDigits(10);  // Returns 1
*             sumDigits(99);  // Returns 18
*             sumDigits(-32); // Returns 5
*
*           Let's assume that all numbers in the input will be integer values.
*
***********************************************************************************************************************************************************/

export function sumDigits(number: number): number {
    const st: string = number.toString()
    let sum: number = 0
    for (let i=0; i< st.length; i++)
      if (st.charCodeAt(i) > 47 && st.charCodeAt(i) < 58)
        sum += st.charCodeAt(i) - 48        
    return sum
  }
