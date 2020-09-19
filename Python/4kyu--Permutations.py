#######################################################################################################################################################################################################################################
# 
#     KATA: 4 kyu "Permutations" 
#
#   SOURCE: https://www.codewars.com/kata/5254ca2719453dcc0b00027d
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: In this kata you have to create all permutations of an input string and remove duplicates, if present. 
#           This means, you have to shuffle all letters from the input in all possible orders.
#           
#           Examples:
#           
#              permutations('a'); # ['a']
#              permutations('ab'); # ['ab', 'ba']
#              permutations('aabb'); # ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
#
#######################################################################################################################################################################################################################################

def swap_elem(arr, index1, index2):
    arr[index1], arr[index2] = arr[index2], arr[index1]    
    pass

def next_permutation(arr, compare):
    count = len(arr)
    i = count
    while True:
        if i < 2: return False
        i -= 1
        if compare(arr[i-1], arr[i]): break
            
    j = count
    
    while j > i and not compare(arr[i-1], arr[j-1]): j = j - 1
    
    swap_elem(arr, i - 1, j - 1)
    
    j = count
    while i < (j - 1):
        j -= 1
        swap_elem(arr, i, j)
        i += 1
    return True            

def permutations(string):
    #your code here
    arr = sorted(list(string))
    result = []
    while True:
        result.append(''.join(arr))
        if not next_permutation(arr, lambda a, b: a < b): break
    return result