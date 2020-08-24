############################################################################################################################################################################################################################################
#
#      KATA: 6 kyu "Detect Pangram"
#
#    SOURCE: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
#    AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#      PLOT: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" 
#            is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
# 
#            Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
#
############################################################################################################################################################################################################################################

import string

def is_pangram(s):
    arr = [0 for i in range(27)]
    st = s.upper()
    for ch in st:
        if ord(ch) >=65 and ord(ch) <= 90:
            arr[ord(ch)-65] = 1            
    return sum(arr) == 26