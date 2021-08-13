#######################################################################################################################################################################################################################################
# 
#     KATA: 5 kyu "First non-repeating character"
#
#   SOURCE: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Write a function named first_non_repeating_letter that takes a string input, and returns 
#           the first character that is not repeated anywhere in the string.
#
#           For example, if given the input 'stress', the function should return 't', since the letter 
#           only occurs once in the string, and occurs first in the string.
#
#            As an added challenge, upper- and lowercase letters are considered the same character, 
#            but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
#
#            If a string contains all repeating characters, it should return an empty string ("") or None -- 
#            see sample tests.
#
#######################################################################################################################################################################################################################################

def first_non_repeating_letter(string):
    #your code here
    dict = {chr(key + 65): 0 for key in range(26)}
    for ch in string:
        try:
            dict[ch.upper()] += 1
        except:
            dict[ch.upper()] = 1         
    for ch in string:
        if dict[ch.upper()] == 1:
            return ch
    return ""