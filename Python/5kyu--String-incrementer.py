 #######################################################################################################################################################################################################################################
 #
 #     KATA: 5 kyu "String incrementer"
 #
 #   SOURCE: https://www.codewars.com/kata/54a91a4883a7de5d7800009c
 #   AUTHOR: https://www.codewars.com/users/GordonBreazz
 #
 #     PLOT: Your job is to write a function which increments a string, to create a new string.
 #
 #           If the string already ends with a number, the number should be incremented by 1.
 #           If the string does not end with a number. the number 1 should be appended to the new string.
 #
 #           Examples:
 #
 #               foo -> foo1
 #               foobar23 -> foobar24
 #               foo0042 -> foo0043
 #               foo9 -> foo10
 #               foo099 -> foo100
 #
 #           Attention: If the number has leading zeros the amount of digits should be considered.
 #
 ########################################################################################################################################################################################################################################

 import re

def increment_string(strng):    
    result =  re.search(r'\d+$', strng)    
    
    if not bool(result): return strng + '1'
    
    strng = strng.replace(result.group(0), '')
    
    l = len(result.group(0))
    n = int(result.group(0)) + 1
    dif = l - len(str(n))
    if dif > 0:
        return strng + '0' * dif + str(n)        
    return strng + str(n)