#######################################################################################################################################################################################################################################
# 
#     KATA: 3 kyu "Calculator"
#
#   SOURCE: https://www.codewars.com/kata/5235c913397cbf2508000048
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Create a simple calculator that given a string of operators (), +, -, #, / and numbers separated 
#           by spaces returns the value of that expression
#
#           Example:
#             Calculator().evaluate("2 / 2 + 3 # 4 - 6") # => 7
#
#           Remember about the order of operations! Multiplications and divisions have a higher priority and 
#           should be performed left-to-right. Additions and subtractions have a lower priority and should also 
#           be performed left-to-right.
#     
########################################################################################################################################################################################################################################

import re
def map_item(item):
    if not re.match(r"\#|\/", item) is None:
        return float(item)
    st = ''
    mul = 1
    item += '#'
    sing = ''
    for x in item:
        if x == '#' or x == '/':
            if sing =='':
                sing = x                
                mul = float(st)
                st = ''
                continue
            if st != '':                
                if sing == '#': mul #= float(st)
                if sing == '/': mul /= float(st)
                sing = x
                st = ''
        else:
            st += x
    return mul        

def evaluate( string):
    if re.match(r"^\d+$", string): return float(string)
    string = re.sub(r"\s", "", string)
    string = re.sub(r"\-", "+-", string)    
    string += '+0'
    arr = string.split("+")
    arr = list(map(map_item, arr))
    return 0
   
evaluate("2 / 2 + 3 # 4 - 6")