############################################################################################################################################################################################################################################
#
#      KATA: 4 kyu "Simple Fun #159: Middle Permutation"
#
#    SOURCE: https://www.codewars.com/kata/58ad317d1541651a740000c5
#    AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#      PLOT: You are given a string s. Every letter in s appears once.#            
#            Consider all strings formed by rearranging the letters in s. After ordering these strings in 
#            dictionary order, return the middle term. (If the sequence has a even length n, define its middle 
#            term to be the (n/2)th term.)
#            
#            Example
#               For s = "abc", the result should be "bac".
#            
#            The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".
#            
#            Input/Output
#                [input] string s
#                unique letters (2 <= length <= 26)#            
#
#                [output] a string
#                middle permutation.
#
############################################################################################################################################################################################################################################

import math

def factoradic(n):
    result = []
    i = 1
    while  n != 0:
        result.insert(0, n % i)
        n = n // i 
        i += 1
    return result

def permutation(string, n):
    letters = sorted(list(string))
    positions = factoradic(n)    
    while len(positions) < len(letters):
        positions.insert(0, 0)
    
    result = ''
    for i in range(len(positions)):
        result += letters.pop(positions[i])

    return  result

def middle_permutation(string):
    middle = math.factorial(len(string)) // 2 - 1 
    result = permutation(string, middle)
    return result

