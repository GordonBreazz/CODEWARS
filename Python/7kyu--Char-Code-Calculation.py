#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Char Code Calculation"
#
#   SOURCE: https://www.codewars.com/kata/57f75cc397d62fc93d000059/
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
#           
#           'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
#           Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
#           
#           total1 = 656667
#                         ^
#           total2 = 656661
#                         ^
#           Then return the difference between the sum of the digits in total1 and total2:
#           
#             (6 + 5 + 6 + 6 + 6 + 7)
#           - (6 + 5 + 6 + 6 + 6 + 1)
#           -------------------------
#                                  6
#                    
########################################################################################################################################################################################################################################

def calc(x):
    # your code here
    st, n, m = '', 0, 0
    for item in x:
        st += str(ord(item))        
    for item in st:
        p = int(item)
        n += p
        if p == 7 : p = 1            
        m += p        
    return n - m