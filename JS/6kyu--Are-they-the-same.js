/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "Are they the 'same'?"
*
*   SOURCE: https://www.codewars.com/kata/550498447451fbbd7600041c
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
* 
*     PLOT: Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the 
*           two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements 
*           in b are the elements in a squared, regardless of the order.
*
*           Examples
*           Valid arrays
*           a = [121, 144, 19, 161, 19, 144, 19, 11]  
*           b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*           comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
*           
*           a = [121, 144, 19, 161, 19, 144, 19, 11] 
*           b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
*           Invalid arrays
*           If we change the first number to something else, comp may not return true anymore:
*           
*           a = [121, 144, 19, 161, 19, 144, 19, 11]  
*           b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
*           comp(a,b) returns false because in b 132 is not the square of any number of a.
*           
*           a = [121, 144, 19, 161, 19, 144, 19, 11]  
*           b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
*           comp(a,b) returns false because in b 36100 is not the square of any number of a.
*           
*           Remarks
*           a or b might be [] (all languages except R, Shell).
*           a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).
*           If a or b are nil (or null or None), the problem doesn't make sense so return false.
*           
*           Note for C
*           The two arrays have the same size (> 0) given as parameter in function comp.
*           
*           function comp(array1, array2){
*               //your code here
*             
*               if ( !(Boolean(array1) && Boolean(array2)) ) return false
*               array1 = array1.sort( (a, b) => a > b)
*               array2 = array2.sort( (a, b) => a > b).map( item => Math.sqrt(item) || 0)
*               let result = true
*               for (let i = 0; i < array2.length; i++)
*                 if (array1[i] != array2[i] ) return false
*               return result
*             }
*     
****************************************************************************************************************************************************************************************************************************************/

function comp(array1, array2){
    //your code here
  
    //let arr = array2.map( item => Math.sqrt(item)).reduce( (result, i2) => result && Boolean(array1.find( i1 => i1 == i2)))
    //let arr = array2.map( item => Math.sqrt(item)).map( i2 => i2*1000)
    if ( !(Boolean(array1) && Boolean(array2)) ) return false
    array1 = array1.sort( (a, b) => a > b)
    array2 = array2.sort( (a, b) => a > b).map( item => Math.sqrt(item) || 0)
    let result = true
    for (let i = 0; i < array2.length; i++)
      if (array1[i] != array2[i] ) return false
    return result
  }

  module.exports = { comp }