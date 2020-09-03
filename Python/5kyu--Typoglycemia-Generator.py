############################################################################################################################################################################################################################################
#
#     KATA: 5 kyu "Typoglycemia Generator"
#   Source: https://www.codewars.com/kata/55953e906851cf2441000032
#   Author: https://www.codewars.com/users/GordonBreazz
#
#     PLOT: Background
#            There is a message that is circulating via public media that claims a reader can easily read a message where 
#            the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word 
#            contains all the letters.
#            
#            Another example shows that it is quite difficult to read the text where all the letters are reversed rather 
#            than scrambled.
#            
#            In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, 
#            ours will be sorted alphabetically
#            
#            Requirement
#            return a string where:
#            
#                1) the first and last characters remain in original place for each word
#                2) characters between the first and last characters must be sorted alphabetically
#                3) punctuation should remain at the same place as it started, for example: shan't -> sahn't
#            
#            Assumptions
#            
#                1) words are seperated by single spaces
#                2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
#                3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
#                4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
#                5) ignore capitalisation
#            
#            for reference: http://en.wikipedia.org/wiki/Typoglycemia
#
############################################################################################################################################################################################################################################

import string
def map_item(item):
    arr = list(item)    
    alphabet_symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    first, last, k = 0, 0, 0
    
    for i in range(len(arr)):        
        if arr[i] in alphabet_symbols:
            first = i
            break
            
    for i in reversed(range(len(arr))):
        if arr[i] in alphabet_symbols:
            last = i
            break

    dic = sorted(filter(lambda x: x in alphabet_symbols, arr[first+1:last]))
            
    for i in range(first+1,last):        
        if arr[i] in alphabet_symbols:
            arr[i] = dic[k]
            k += 1            

    return str.join('', arr)

def scramble_words(words):
    #your code here    
    return str.join(' ', map(map_item, words.split(' ')))