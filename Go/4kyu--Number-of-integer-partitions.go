/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Number of integer partitions"
*
*   SOURCE: https://www.codewars.com/kata/546d5028ddbcbd4b8d001254
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: An integer partition of n is a weakly decreasing list of positive integers which sum to n.
*           
*           For example, there are 7 integer partitions of 5:
*           
*           [5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].
*           
*           Write a function named partitions which returns the number of integer partitions of n. The function should be 
*           able to find the number of integer partitions of n for n as least as large as 100.
*
****************************************************************************************************************************************************************************************************************************************/

package kata

import "math"

func pentagonal(k int) int {
  return int(k * (3 * k -1) / 2)
}

func Partitions(n int) int {
  partitions := []int{1}
  for i := 1; i < n + 1; i++ {
    partitions = append(partitions, 0)
    for k := 1; k < i + 1; k++ {
      coeff := math.Pow((-1), float64(k + 1))
      arr := []int{pentagonal(k), pentagonal(-k)}
      for _, t := range arr {
        if (i - t) >= 0 {
          partitions[i] = partitions[i] + int(coeff * float64(partitions[i - t]))
        }
      }      
    }
  }  
  return partitions[len(partitions) - 1]
}
