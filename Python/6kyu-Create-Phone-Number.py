#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Create Phone Number"
#
#   SOURCE: https://www.codewars.com/kata/525f50e3b73515a6db000b83
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Write a function that accepts an array of 10 integers (between 0 and 9), 
#           that returns a string of those numbers in the form of a phone number.
#           
#           Example
#           createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
#           The returned format must be correct in order to complete this challenge.
#           Don't forget the space after the closing parentheses!
#
########################################################################################################################################################################################################################################

def create_phone_number(n):
    st = ''.join(map(str, n))
    return '({0} {1}-{2})'.format(st[:3], st[3:6], st[6:])
