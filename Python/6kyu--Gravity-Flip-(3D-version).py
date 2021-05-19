#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Gravity Flip (3D version)"
#
#   SOURCE: https://www.codewars.com/kata/5f849ab530b05d00145b9495/
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: This kata is a slightly harder version of Gravity Flip. It is recommended to do that first.
#             
#           Bob is bored in his physics lessons yet again, and this time, he's brought a more complex gravity-changing box with him. It's 3D, with small cubes arranged in a matrix of n×m columns. It can change gravity to go in a certain direction, which can be 'L', 'R', 'D', and 'U' (left, right, down, and up).
#             
#           Given the initial configuration of the cubes inside of the box as a 2D array, determine how the cubes are arranged after Bob switches the gravity.
#           
#           See the sample tests for examples.
#
########################################################################################################################################################################################################################################

# def flip(d, a):
#     # Do some magic
#     result = []
#     if d == "L" or d == "R":
#         for arr in a:
#             result.append(sorted(arr, reverse = (d == "L")))        
#         return result
    
#     tmp = []
#     for j in range(len(a[1])):
#         tmp.append(sorted([a[i][j] for i in range(len(a))], reverse = (d == "U")))
        
#     for j in range(len(tmp[1])):
#         result.append([tmp[i][j] for i in range(len(tmp))])
    
#     return result

def flip(d, a):
    # Do some magic
    if d == "L" or d == "R":
        return [sorted(arr, reverse = (d == "L")) for arr in a]
    
    tmp = [ sorted( [ a[i][j] for i in range(len(a)) ], reverse = (d == "U") ) for j in range(len(a[1])) ]
    return [ [ tmp[i][j] for i in range(len(tmp)) ] for j in range(len(tmp[1])) ]    
