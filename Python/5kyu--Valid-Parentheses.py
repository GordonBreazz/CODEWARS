#######################################################################################################################################################################################################################################
# 
#     KATA: 5 kyu "Valid Parentheses"
#
#   SOURCE: https://www.codewars.com/kata/52774a314c2333f0a7000688
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Write a function called that takes a string of parentheses, and determines if 
#           the order of the parentheses is valid. The function should return true if the 
#            string is valid, and false if it's invalid.
#
#           Examples
#             "()"              =>  true
#             ")(()))"          =>  false
#             "("               =>  false
#             "(())((()())())"  =>  true
#          
########################################################################################################################################################################################################################################

def valid_parentheses(string):
    #your code here
    p = 0
    for ch in string:
        if ch == '(': p += 1
        if ch == ')': p -= 1
        if p < 0: return False
    return  p == 0    