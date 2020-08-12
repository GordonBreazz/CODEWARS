/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 3 kyu "Calculator"
*
*   SOURCE: https://www.codewars.com/kata/5235c913397cbf2508000048
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated 
*           by spaces returns the value of that expression
*
*           Example:
*             Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
*
*           Remember about the order of operations! Multiplications and divisions have a higher priority and 
*           should be performed left-to-right. Additions and subtractions have a lower priority and should also 
*           be performed left-to-right.
*     
****************************************************************************************************************************************************************************************************************************************/

const Calculator = function() {
    this.evaluate = string => {
      // do code here
      if (/^\d+$/.test(string)) return Number(string)
      
      string = string.replace(/\s/g,'')    
      string = string.replace(/\-/g,'+-')  
      string += '+0' 
      let arr = string.split('+')
      arr = arr.map( 
        function(item) {
          if (!/\*|\//.test(item)) return item        
          let st = ''
          let mul = 1
          item += '*'
          let sing = ''
          for (let i=0; i < item.length; i++){
            if (item[i] == '*' || item[i] == '/' ) {    
              if (sing == '') {
                sing = item[i]
                mul = Number(st)
                st = ''              
                continue
              }                            
              if (st !== '') {
                if (sing == '*') mul *= Number(st)
                if (sing == '/') mul /= Number(st)
                sing = item[i]
                st=''
              }
            }  
            else st += item[i]
          }
          return mul
        }
      )
      return arr.reduce((s  ,c) => s + Number(c), 0)
    }
  }

  module.exports = { Calculator }  
