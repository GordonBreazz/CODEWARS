#######################################################################################################################################################################################################################################
#
#     KATA: 8 kyu "Enumerable Magic #20 - Cascading Subsets"
#
#   SOURCE: https://www.codewars.com/kata/545af3d185166a3dec001190
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#
#     PLOT: Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
#     
#           each_cons([1,2,3,4], 2)
#           #=> [[1,2], [2,3], [3,4]]
#     
#           each_cons([1,2,3,4], 3)
#           #=> [[1,2,3],[2,3,4]]
#        
#           As you can see, the lists are cascading; ie, they overlap, but never out of order.
#
#######################################################################################################################################################################################################################################/

def each_cons(lst, n):
    # your solution here
    result = []
    for i in range(len(lst) - n + 1):
        result.append(lst[i : i + n])    
    return result