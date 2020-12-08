/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "If you can read this..." 
*
*   SOURCE: https://www.codewars.com/kata/586538146b56991861000293/
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
* 
*     PLOT: The idea for this Kata came from 9gag today.here
*            
*           You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.
*           
*           Like this:
*           
*           Input:
*           
*              If, you can read?
*           
*           Output:
*           
*              India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
*           
*           Notes
*           
*            - The set of used punctuation is .!?.
*            - Punctuation should be kept in your return string, but spaces should not.
*            - Xray should not have a dash within.
*            - Every word and punctuation mark should be seperated by a space ' '.
*            - There should be no trailing whitespace
*     
****************************************************************************************************************************************************************************************************************************************/

package kata
 
import ("strings"
        // "fmt" 
       )
 
func ToNato(words string) string {
 nato := []string{"Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot","Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"}
 st := strings.ToLower(words) 
 var result string
 for i := 0; i < len(st); i++ {
   if st[i] == 32 {
     continue
   }
   ch :=  st[i] - 97
   if ch >= 0 && ch <= 28 {
     result = result + nato[ch] + " "
   } else {
       result = result + string(st[i]) + " "
     }
 } 
 return strings.Trim(result," ")
}