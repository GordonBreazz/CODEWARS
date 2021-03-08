#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Mumbling"
#
#   SOURCE: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: This time no story, no theory. The examples below show you how to write function accum:
# 
#           Examples:
# 
#             accum("abcd") -> "A-Bb-Ccc-Dddd"
#             accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
#             accum("cwAt") -> "C-Ww-Aaa-Tttt"
#
########################################################################################################################################################################################################################################

def accum(s):
    # your code
    result = '' 
    for i, ch in enumerate(s.lower()):        
        result += ch.upper()
        if i > 0:
            result += ch * i 
        if i < len(s) - 1: 
            result += '-'
    return result