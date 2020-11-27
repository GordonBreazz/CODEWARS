/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "Pyramid Array"
*
*   SOURCE: https://www.codewars.com/kata/515f51d438015969f7000013
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
*          
*           pyramid(0) => [ ]
*           pyramid(1) => [ [1] ]
*           pyramid(2) => [ [1], [1, 1] ]
*           pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
*
*           Note: the subarrays should be filled with 1s
*                    
****************************************************************************************************************************************************************************************************************************************/

export function pyramid(n: number) {
    // your code here
    let result = []
    for (let j = 1; j <= n; j++) 
        result.push([...Array(j).fill(1)]) 
    return result
  }