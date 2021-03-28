/#######################################################################################################################################################################################################################################
#
#     KATA: 8 kyu "Sort and Star"
#
#   SOURCE: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#     PLOT: You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on 
#           the ASCII values of the chars) and then return the first value.
#
#           The returned value must be a string, and have "***" between each of its letters.
#
#           You should not remove or add elements from/to the array.
#
########################################################################################################################################################################################################################################/

def two_sort(array):
    # your code here    
    result = ''
    for ch in sorted(array)[0]:        
        result += ch + '***'    
    return result[:-3]