/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

export function solution(str: string, ending: string): boolean {
    if (ending == '')
      return true  
    
    let a: number = str.indexOf(ending) 
    return  (str.length - ending.length == a)
  }