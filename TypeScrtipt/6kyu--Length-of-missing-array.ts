/***************************************************************************************************************************************************************************************************************************************
 *
 *     KATA: 6 kyu "Length of missing array"
 *
 *   SOURCE: https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
 *   AUTHOR: https://www.codewars.com/users/GordonBreazz
 *
 *     PLOT: You get an array of arrays.
 *           If you sort the arrays by their length, you will see, that their length-values are consecutive.
 *           But one array is missing!
 *
 *           You have to write a method, that return the length of the missing array.
 *
 *           Example:
 *               [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
 *
 ****************************************************************************************************************************************************************************************************************************************/

export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
  const arr = arrayOfArrays
    .map((item) => item.length)
    .sort((a, b) => Number(a) - Number(b))
  if (arr[0] == 0) return 0
  for (let i = 1; i < arr.length; i++)
    if (arr[i] - arr[i - 1] > 1) return arr[i] - 1
  return 0
}
