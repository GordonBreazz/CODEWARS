#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Break camelCase"
#
#   SOURCE: https://www.codewars.com/kata/5208f99aee097e6552000148
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Complete the solution so that the function will break up camel casing, using a space between words.
#          
#           Example
#             "camelCasing"  =>  "camel Casing"
#             "identifier"   =>  "identifier"
#             ""             =>  ""
#
#######################################################################################################################################################################################################################################


def solution(s):
    result = ''
    for ch in s:
        if ch.upper() == ch:
            result += ' ' + ch
            continue
        result += ch
    return result    