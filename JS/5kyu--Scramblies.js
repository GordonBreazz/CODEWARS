/***********************************************************************************************************************************************************
*     KATA: 5 kyu "Scramblies"
*   Source: https://www.codewars.com/kata/55c04b4cc56a697bb0000048
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be 
*           rearranged to match str2, otherwise returns false.
*           
*           Notes:
*               Only lower case letters will be used (a-z). No punctuation or digits will be included.
*               Performance needs to be considered
*           
*           Input strings s1 and s2 are null terminated.
*           
*           Examples
*               scramble('rkqodlw', 'world') ==> True
*               scramble('cedewaraaossoqqyt', 'codewars') ==> True
*               scramble('katas', 'steak') ==> False
*
***************************************************************************************************************************************************************************************************************************************/

function scramble(str1, str2) {
    //code me
    
    let charasters = [];
    
    let aCode = 97;
    
    for (let i=0; i<26; i++)
      charasters[i] = 0;
      
    for (let i=0; i < str2.length; i++)
      charasters[str2[i].charCodeAt()-97]++;  
   
    let change = 0;
   
    for (let i=0; i < str1.length; i++){
      if (charasters[str1[i].charCodeAt()-97] > 0) {
        charasters[str1[i].charCodeAt()-97]--; 
        change++;
        if (change >= str2.length) break 
      }
    }
   
    let fl = charasters.every(function(number){ return number==0}); 
     
    return fl;
    
   }

   module.exports = {scramble}