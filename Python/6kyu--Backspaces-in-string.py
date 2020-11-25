#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Backspaces in string" 
#
#   SOURCE: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
# 
#     PLOT: Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
#     
#           Your task is to process a string with "#" symbols.
#     
#           Examples
#              "abc#d##c"      ==>  "ac"
#              "abc##d######"  ==>  ""
#              "#######"       ==>  ""
#              ""              ==>  ""     
#
#######################################################################################################################################################################################################################################

def clean_string(s):
    # your code here
    result = ''
    for ch in s:
        if ch == '#': result = result[0:-1]
        else: result += ch     
    return result