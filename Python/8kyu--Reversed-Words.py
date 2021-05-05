#######################################################################################################################################################################################################################################
# 
#     KATA: 8 kyu "Reversed Words"
#
#   SOURCE: https://www.codewars.com/kata/51c8991dee245d7ddf00000e
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Complete the solution so that it reverses all of the words within the string passed in.
#           
#           Example:
#           
#           "The greatest victory is that which requires no battle" --> "battle no requires which that is victory 
#           greatest The"
#
#######################################################################################################################################################################################################################################
           
def reverse_words(s):
    result = s.split(' ')
    result.reverse()
    return ' '.join(result)