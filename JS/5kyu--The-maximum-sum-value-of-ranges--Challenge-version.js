/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 5 kyu "The maximum sum value of ranges -- Challenge version"
*
*   SOURCE: https://www.codewars.com/kata/583d171f28a0c04b7c00009c
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*           Given a list of integers A, for each pair of integers (first, last) in list ranges, calculate the sum of the values in A between indices first and last (both inclusive), and return the greatest resulting sum.
*           
*           Example
*           A = [1, -2, 3, 4, -5, -4, 3, 2, 1]
*           ranges = [(1, 3), (0, 4), (6, 8)]
*           
*           result = 6
*
*           For ranges[0] = (1, 3) the sum is A[1] + A[2] + A[3] = 5
*           For ranges[1] = (0, 4) the sum is A[0] + A[1] + A[2] + A[3] + A[4] = 1
*           For ranges[2] = (6, 8) the sum is A[6] + A[7] + A[8] = 6
*           The greatest sum is 6
*
*           Notes
*
*           The list of ranges will never be empty;
*           This is a challenge version, you should implement an efficient algorithm to avoid timing out;
*
*           If this task is too difficult for you, try the simple version.
*
*           About random testcases
*
*           Small tests: 100 testcases
*             each integers-list : 5-100 elements
*             each ranges-list : 1-6 elements
*
*           Big tests: 100 testcases
*             each integers-list : 100000 elements
*             each ranges-list : 10000 elements
*
****************************************************************************************************************************************************************************************************************************************/

function maxSum(arr,range){
    //coding and coding..
    const sumArr = [arr[0]],
          count = arr.length  
    for (let i = 1; i < count; i++ )     
      sumArr.push(
        sumArr[sumArr.length-1] + arr[i]
      )
    let maxSum = -Infinity  
    for (let [x, y] of range) {    
      let sum = sumArr[y] - (sumArr[x - 1] || 0)
      if (sum > maxSum) maxSum = sum
    }  
    return maxSum  
}

  module.exports = {maxSum}