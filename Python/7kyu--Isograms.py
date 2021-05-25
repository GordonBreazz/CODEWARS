#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Isograms"
#
#   SOURCE: https://www.codewars.com/kata/54ba84be607a92aa900000f1
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
#           
#           is_isogram("Dermatoglyphics" ) == true
#           is_isogram("aba" ) == false
#           is_isogram("moOse" ) == false # -- ignore letter case
#
########################################################################################################################################################################################################################################

def is_isogram(string):
    dic = {chr(i+65):1 for i in range(26)}
    for ch in string:
        dic[ch.upper()] = dic[ch.upper()] - 1
        if dic[ch.upper()] < 0:
            return False
    return True