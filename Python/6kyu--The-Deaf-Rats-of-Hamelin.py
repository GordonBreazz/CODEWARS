#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "The Deaf Rats of Hamelin" 
#
#   SOURCE: https://www.codewars.com/kata/598106cb34e205e074000031
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
# 
#     PLOT: The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
#           But some of the rats are deaf and are going the wrong way!
#           
#           Kata Task
#           How many deaf rats are there?
#           
#           Legend
#           P = The Pied Piper
#           O~ = Rat going left
#           ~O = Rat going right
#           Example
#           ex1 ~O~O~O~O P has 0 deaf rats
#           ex2 P O~ O~ ~O O~ has 1 deaf rat
#           ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
#
#######################################################################################################################################################################################################################################a

def count_deaf_rats(town):
    # Your code here        
    aside = town.replace(' ','').split('P')    
    result = 0
    for j, ch in enumerate('O~'):
        for i in range(0, len(aside[j]), 2):
            if aside[j][i] == ch: result += 1            
    return result