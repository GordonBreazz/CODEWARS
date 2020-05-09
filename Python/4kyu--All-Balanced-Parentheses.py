# Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

# Examples
# balanced_parens(0) => [""]
# balanced_parens(1) => ["()"]
# balanced_parens(2) => ["()()","(())"]
# balanced_parens(3) => ["()()()","(())()","()(())","(()())","((()))"]

def findParentheses(str, pos, n, open, close, result):    
    if(close == n): 
        tmp = ''
        for i in str: 
            tmp += i            
        result.append(tmp)
    else: 
        if(open > close): 
            str[pos] = ')'; 
            findParentheses(str, pos + 1, n, open, close + 1, result); 
        if(open < n): 
            str[pos] = '('; 
            findParentheses(str, pos + 1, n, open + 1, close, result); 
            
def balanced_parens(n):
    # Your code here!  
    arr = [''] * 2 * n;
    result = []
    if(n > 0): 
      findParentheses(arr, 0, n, 0, 0, result)
    else:
      result = ['']
    return result