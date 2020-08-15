/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 7 kyu "Unlucky Days"
*
*   SOURCE: https://www.codewars.com/kata/56eb0be52caf798c630013c0
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in 
*           the given year.

*           Find the number of Friday 13th in the given year.
*           
*           Input: Year as an integer.
*           
*           Output: Number of Black Fridays in the year as an integer.
*           
*           Examples:
*           
*               unluckyDays(2015) == 3
*               unluckyDays(1986) == 1
*
****************************************************************************************************************************************************************************************************************************************/

export function unluckyDays(year: number): number {
  // Implement me! :)
  let count: number = 0
  for (let i = 0; i < 12; i++) {
    let d: Date = new Date(year, i, 13)
    if (d.getDay() == 5) count++
  }
  return count
}
