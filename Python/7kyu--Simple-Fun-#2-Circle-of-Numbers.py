#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Simple Fun #2: Circle of Numbers"
#
#   SOURCE: https://www.codewars.com/kata/58841cb52a077503c4000015
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).
#           
#           Given n and firstNumber/first_number, find the number which is written in the radially opposite position to firstNumber.
#           
#           Example
#           For n = 10 and firstNumber = 2, the output should be
#           
#           circleOfNumbers n firstNumber == 7
#
#######################################################################################################################################################################################################################################

def circle_of_numbers(n, fst):
    #coding and coding..
    result = fst + n // 2
    if result >= n: result -= n    
    return result 