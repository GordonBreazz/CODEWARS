/***********************************************************************************************************************************************************
*     KATA: 7 kyu "Count the divisors of a number"
*   Source: https://www.codewars.com/kata/542c0f198e077084c0000c2e
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Count the number of divisors of a positive integer n.
*           Random tests go up to n = 500000.
*           
*           Examples
*           divisors(4)  = 3  // 1, 2, 4
*           divisors(5)  = 2  // 1, 5
*           divisors(12) = 6  // 1, 2, 3, 4, 6, 12
*           divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
*  
************************************************************************************************************************************************************/

export function divisors(n: number) {
    // your code here
    let result: number = 1
    for (let i=1; i < n; i++)
      if (n % i == 0) result++
    return result 
  }
