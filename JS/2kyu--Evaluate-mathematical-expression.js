/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 2 kyu "Evaluate mathematical expression"
*
*   SOURCE: https://www.codewars.com/kata/52a78825cdfc2cfc87000005
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*     PLOT: Instructions
*           Given a mathematical expression as a string you must return the result as a number.
*           
*           Numbers
*           Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.
*           
*           Operators
*           You need to support the following mathematical operators:
*           
*             Multiplication *
*             Division / (as floating point division)
*             Addition +
*             Subtraction -
*             Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.
*           
*           Parentheses
*           You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6
*           
*           Whitespace
*           There may or may not be whitespace between numbers and operators.
*           
*           An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never 
*           be separated by whitespace. I.e all of the following are valid expressions.
*           
*             1-1    // 0
*             1 -1   // 0
*             1- 1   // 0
*             1 - 1  // 0
*             1- -1  // 2
*             1 - -1 // 2
*           
*             6 + -(4)   // 2
*             6 + -( -4) // 10
*
*           And the following are invalid expressions
*           
*             1 - - 1    // Invalid
*             1- - 1     // Invalid
*             6 + - (4)  // Invalid
*             6 + -(- 4) // Invalid
*
*           Validation
*           You do not need to worry about validation - you will only receive valid mathematical expressions following
*           the above rules.
*           
*           Restricted APIs
*           NOTE: eval and exec are disallowed in your solution.
*                    
****************************************************************************************************************************************************************************************************************************************/

function eva(st) {
    st = st.replace(/\s/g, '');
    
    if (/^\-?\d+$/.test(st)) return parseFloat(st)
    
    st = st.replace(/\-\-/g, '+')
           .replace(/\-/g, '+-')
           .replace(/\+\+/g, '+')
           .replace(/\*\+\-/g, '*-')
           .replace(/\/\+\-/g, '/-')
           .replace(/\*\+/g, '*')
           .replace(/\/\+/g, '/')
    
    let arr = st.split('+')
                .map((item) => {
                        if (!item ) return 0
                        if (!/\*|\//.test(item)) return parseFloat(item)
                        let st = '', 
                            sign =  '',
                            mul = 1
                        item += '*'
                        for ( let x of item ) {
                          if ( x == '*' || x == '/' ) {
                            if ( sign == '' ) {
                              sign = x
                              mul = parseFloat(st)
                              st = ''
                              continue
                            }
                            if ( st != '' ) {
                              if (sign == '*' ) mul *= parseFloat(st)
                              if (sign == '/' ) mul /= parseFloat(st)
                              sign = x
                              st = ''
                            }
                          } else st += x
                          
                        }  
                        return mul      
                }
    )
    return arr.reduce( (item, acc) => acc + item)
}
  
const calc = expression => {
// evaluate `expression` and return result  
    let exprSt = '',
        s1 = '',
        a = 0
    for ( let ch of  expression ) {
        if ( ch == ')' ) {
        a -= 1
        if ( a == 0 ) {
            exprSt += String(calc(s1))
            continue        
        }      
        }    
        s1 += ch    
        if ( ch == '(' ) {
        if ( a == 0 ) s1 = ''
        a += 1      
        }    
        if (a == 0) exprSt += ch
    }
    return eva(exprSt)     
}

module.exports = { calc } 

