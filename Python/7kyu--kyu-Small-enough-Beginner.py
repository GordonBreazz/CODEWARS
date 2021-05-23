#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Small enough? - Beginner"
#
#   SOURCE: https://www.codewars.com/kata/57cc981a58da9e302a000214
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
#           
#           You can assume all values in the array are numbers.
#
########################################################################################################################################################################################################################################

def small_enough(array, limit):
    for item in array:
        if item > limit: 
            return False
    return True
