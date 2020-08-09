/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Permutations" 
*
*   SOURCE: https://www.codewars.com/kata/5254ca2719453dcc0b00027d
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: In this kata you have to create all permutations of an input string and remove duplicates, if present. 
*           This means, you have to shuffle all letters from the input in all possible orders.
*           
*           Examples:
*           
*              permutations('a'); # ['a']
*              permutations('ab'); # ['ab', 'ba']
*              permutations('aabb'); # ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
*
***************************************************************************************************************************************************************************************************************************************/

function swapElem(arr, index1, index2){
    let tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp  
  }
  
  function less(a,b){
     return a<b
  }
  
  function nextPermutation(arr, compare){
    let count = arr.length 
    let i = count 
    do {
      if (i<2) return false        
      i--
    } while (!compare(arr[i-1], arr[i]))
    
    let j = count;    
    while (j > i && !compare(arr[i-1], arr[j-1])) {
      j = j-1
    }  
    
    swapElem(arr, i-1, j-1)
   
    j = count
    while (i<j-1) {
      j--
      swapElem(arr, i, j)
      i++
    }
    return true
  }
  
  function permutations(string) {
     let arr = string.split('').sort()
     let result = []
     do {
       result.push(arr.join(''))
     } while (nextPermutation(arr, less))

     return result    
  }

  module.exports = { permutations }