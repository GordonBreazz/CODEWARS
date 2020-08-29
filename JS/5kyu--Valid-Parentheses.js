/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 5 kyu "Valid Parentheses"
*
*   SOURCE: https://www.codewars.com/kata/5235c913397cbf2508000048
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Write a function called that takes a string of parentheses, and determines if 
*           the order of the parentheses is valid. The function should return true if the 
*            string is valid, and false if it's invalid.
*
*           Examples
*             "()"              =>  true
*             ")(()))"          =>  false
*             "("               =>  false
*             "(())((()())())"  =>  true
*          
****************************************************************************************************************************************************************************************************************************************/

const validParentheses = parens => parens.split('').reduce((p, item) => p < 0 ? --p : item == '(' ? ++p : item == ')' ? --p : p = p, 0) == 0

module.exports = { validParentheses } 