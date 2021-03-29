#######################################################################################################################################################################################################################################
# 
#     KATA: 8 kyu "Grasshopper - Grade book"
#
#   SOURCE: https://www.codewars.com/kata/55cbd4ba903825f7970000f5
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Complete the function so that it finds the average of the three scores passed to it and returns 
#           the letter value associated with that grade.
#           Numerical Score	Letter Grade
#             90 <= score <= 100	'A'
#             80 <= score < 90	'B'
#             70 <= score < 80	'C'
#             60 <= score < 70	'D'
#             0 <= score < 60	'F'
#
#           Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
#
########################################################################################################################################################################################################################################

def get_grade(s1, s2, s3):
    # Code here
    sum = (s1 + s2 + s3) / 3
    if sum < 60: return 'F'
    if sum < 70: return 'D'
    if sum < 80: return 'C'
    if sum < 90: return 'B'    
    return "A"
    
    