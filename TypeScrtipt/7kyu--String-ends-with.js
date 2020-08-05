/**************************************************************************************************************************************************************************************
 * 
 *     KATA: 7kyu "String ends with ?"
 *   Source: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
 *   Author: https://www.codewars.com/users/GordonBreazz 
 *   
 *     PLOT: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 *
 *           Examples:
 *             solution('abc', 'bc') // returns true
 *             solution('abc', 'd') // returns false
 * 
**************************************************************************************************************************************************************************************/

export function solution(str: string, ending: string): boolean {
    if (!ending) return true  
    return  (str.length - ending.length == str.indexOf(ending))
  }