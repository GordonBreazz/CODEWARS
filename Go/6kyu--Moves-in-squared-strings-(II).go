/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "Moves in squared strings (II)"
*
*   SOURCE: https://www.codewars.com/kata/56dbe7f113c2f63570000b86
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
* 
*     PLOT: You are given a string of n lines, each substring being n characters long: For example:
*           
*           s = "abcd\nefgh\nijkl\nmnop"
*           
*           We will study some transformations of this square of strings.
*           
*           Clock rotation 180 degrees: rot
*           rot(s) => "ponm\nlkji\nhgfe\ndcba"
*           selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock 
*           rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.
*
*           s = "abcd\nefgh\nijkl\nmnop" --> 
*           "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
*           or printed:
*           |rotation        |selfie_and_rot
*           |abcd --> ponm   |abcd --> abcd....
*           |efgh     lkji   |efgh     efgh....
*           |ijkl     hgfe   |ijkl     ijkl....   
*           |mnop     dcba   |mnop     mnop....
*                                      ....ponm
*                                      ....lkji
*                                      ....hgfe
*                                      ....dcba
*     
****************************************************************************************************************************************************************************************************************************************/

package kata

func Rot(s string) string {
    // your code
 result := "" 
 for _, ch := range s {
    result = string(ch) + result
  }
  return result
}

func SelfieAndRot(s string) string {
    // your code
  s += "\n"
  result, st := "", ""
  for i, ch := range s {    
    if string(ch) == "\n" {
        dots := ""
        for _ = range st {
          dots += "."
        }
        result += st + dots
        if i != len(s)-1 {
          result += "\n"
        }
        st = ""
    } else {
        st += string(ch)
      }  
  }
  return result + "\n" + Rot(result)
}
type FParam func(string) string
func Oper(f FParam, x string) string {
    // your code
  return f(x)
}