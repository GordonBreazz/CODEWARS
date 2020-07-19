/*****************************************************************************************************************************************************
 
Construct a function that, when given a string containing an expression in infix notation, will return an identical expression in postfix notation.

The operators used will be +, -, *, /, and ^ with standard precedence rules and left-associativity of all operators but ^.

The operands will be single-digit integers between 0 and 9, inclusive.

Parentheses may be included in the input, and are guaranteed to be in correct pairs.

toPostfix("2+7*5"); // Should return "275*+"
toPostfix("3*3/(7+1)"); // Should return "33*71+/"
toPostfix("5+(6-2)*9+3^(7-1)"); // Should return "562-9*+371-^+"
You may read more about postfix notation, also called Reverse Polish notation, here: http://en.wikipedia.org/wiki/Reverse_Polish_notation

*****************************************************************************************************************************************************/

function prior(a){
    if (a == '+' || a == '-') return 1;
    if (a == '*' || a == '/') return 2;
    if (a == '^') return 3;
  }
  
  function toPostfix (infix) {
    // Convert infix to postfix here, and return result.
    
    let arr = infix.split('');
    
    let output = '';
    let stack = [];
  
    for (let i=0; i < arr.length; i++){
      
      if (arr[i] == '(' || arr[i] == '^') stack.unshift(arr[i]);  // '(' or  ^
  
      if (arr[i] == ')') {                                        // ')'
        while (stack[0] !== '(')
          output += stack.shift();  
          
        if (stack[0] == '(')  stack.shift();      
      }
      
      if (/\d/.test(arr[i])) output+=arr[i];   // Any digits
      
      if (/\+|\-|\*|\//.test(arr[i])) {       // '+' '-' '*' '/'
        if (prior(stack[0]) >= prior(arr[i]))
          while (prior(stack[0]) >= prior(arr[i]))
            output += stack.shift();       
        
        stack.unshift(arr[i]);      
      }  
              
     // console.log(infix,'  ',i+1,'   ', infix.substr(0, i+1)+'    ',output,'   ', stack.join(''));
     // console.log('----------------------------------------------------------------------');
     
    }
      
    output += stack.join('');
    
    return output; 
  }

  module.exports = { toPostfix }