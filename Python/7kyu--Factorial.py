#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Factorial"
#
#   SOURCE: https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive 
#           integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. 
#           By convention the value of 0! is 1.
#     
########################################################################################################################################################################################################################################

def factorial(n):
    if n < 0 or n > 12: raise ValueError
    if n == 0 or n == 1: return 1         
    return n * factorial(n-1)