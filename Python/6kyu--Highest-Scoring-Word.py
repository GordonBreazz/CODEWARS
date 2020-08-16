############################################################################################################################################################################################################################################
#
#      KATA: 6 kyu "Highest Scoring Word"
#
#    SOURCE: https://www.codewars.com/kata/57eb8fcdf670e99d9b00027
#    AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#      PLOT: Given a string of words, you need to find the highest scoring word.
#            Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.#            
#            You need to return the highest scoring word as a string.#            
#            If two words score the same, return the word that appears earliest in the original string.#            
#            All letters will be lowercase and all inputs will be valid.
#
############################################################################################################################################################################################################################################

def high(x):
    # Code here
    words = x.split(' ')
    sum_max = 0
    max_word = ''
    for word in words:
        sum = 0
        for ch in word:            
            sum += ord(ch)-96
        if sum > sum_max:
            sum_max = sum
            max_word = word         
    return max_word     