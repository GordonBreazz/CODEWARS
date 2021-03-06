/***************************************************************************************************************************************************************************************************************************************
*
*     KATA: 4 kyu "Snail"
*
*   SOURCE: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*
*
*     PLOT: Given an n x n array, return the array elements arranged from outermost elements to the middle element,
*           traveling clockwise.
*
*           array = [[1,2,3],
*                    [4,5,6],
*                    [7,8,9]]
*
*           snail(array) #=> [1,2,3,6,9,8,7,4,5]
*
*           For better understanding, please follow the numbers of the next array consecutively:
*
*           array = [[1,2,3],
*                    [8,9,4],
*                    [7,6,5]]
*
*           snail(array) #=> [1,2,3,4,5,6,7,8,9]
*
*           This image will illustrate things more clearly: http://www.haan.lu/files/2513/8347/2456/snail.png
*
*           NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse
*           the 2-d array in a clockwise snailshell pattern.
*
*           NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*           package kata
*
***************************************************************************************************************************************************************************************************************************************/

snail = function(array) {
    // enjoy
    if (array.length == 0 || array.length == 1) return array[0]
    let size = array[0].length,
        sideSize = size - 1, 
        x = 0, 
        y = 0, 
        dx = 1, 
        dy = 0, 
        side = 0, 
        sideCount = 0,
        fl = false,
        result = []
    do {
      result.push(array[y][x])
      x += dx
      y += dy
      sideCount++
      if (sideCount == sideSize) {
        sideCount = 0
        side++
        if (side == 4) {
          dx = 1
          dy = 0
          side = 0  
          fl = true
        }
        if (side == 1) {
          dx = 0
          dy = 1
          if (fl) sideSize-=1        
        }
        if (side == 2) {
          dx = -1
          dy = 0
        }
        if (side == 3) {
          dx = 0
          dy = -1
          sideSize -= 1
        }            
      }
    } while (sideSize > 0)   
    result.push(array[y][x])  
    return result
  }

  module.exports = { snail }