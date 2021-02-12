#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Basic Math (Add or Subtract)"
#
#   SOURCE: https://www.codewars.com/kata/5809b62808ad92e31b000031
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
#           Note: the input will not be empty.
#
#           Examples
#             "1plus2plus3plus4"  --> "10"
#             "1plus2plus3minus4" -->  "2"
#
########################################################################################################################################################################################################################################

def calculate(s):
    # your code here
    s = s.replace('plus', '+').replace('minus', '-')
    return str(eval(s))