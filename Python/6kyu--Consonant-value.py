#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Consonant value" 
#
#   SOURCE: https://www.codewars.com/kata/59c633e7dcc4053512000073
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Given a lowercase string that has alphabetic characters only and no spaces, 
#			return the highest value of consonant substrings. Consonants are any letters of the alphabet 
#			except "aeiou".
#           We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
#          
#           For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
#          
#           -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and 
#           cs = 3 + 19 = 22. The highest is 26.
#           solve("zodiacs") = 26
#          
#           For the word "strength", solve("strength") = 57
#           -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
#           For C: do not mutate input.
#          
#           More examples in test cases. Good luck!
#     
########################################################################################################################################################################################################################################

def solve(s):
    max, sum = 0, 0    
    for ch in s:
        if ch in set('aeiou'):
            sum = 0
        else: 
            sum += ord(ch) - 96
        if sum > max:
            max = sum    
    return max