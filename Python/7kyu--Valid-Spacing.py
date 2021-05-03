#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Valid Spacing"
#
#   SOURCE: https://www.codewars.com/kata/5f77d62851f6bc0033616bd8
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.
#           
#           For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.
#           
#           'Hello world' = True
#           ' Hello world' = False
#           'Hello world  ' = False
#           'Hello  world' = False
#           'Hello' = True
#
#           Even though there are no spaces, it is still valid because none are needed
#           True because we are not checking for the validity of words.
#
#           'Helloworld ' = False
#           ' ' = False
#           '' = True
#
#######################################################################################################################################################################################################################################

def valid_spacing(s):
    # write your code here
    if len(s) > 0:
        if s[0] == ' ' or s[-1] == ' ' or s.find('  ') != -1: return False
    return True