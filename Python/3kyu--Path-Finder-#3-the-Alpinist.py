#######################################################################################################################################################################################################################################
# 
#     KATA: 7 kyu "Path Finder #3: the Alpinist"
#
#   SOURCE: https://www.codewars.com/kata/576986639772456f6f00030c
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four 
#           cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target 
#           location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of 
#           location altitudes (ascending or descending).
#
#           Location altitude is defined as an integer number (0-9).
#                    
########################################################################################################################################################################################################################################

def get_point(x, y, arr):
    return arr[x ,y]
    

def get_neighbors(gx, gy, m):
    result = []
    variants = [(-1, 0), (1, 0), (0, -1), (0, 1)]    
    for variant in variants:        
        dx, dy = variant
        x = gx + dx
        y = gy + dy
        if x < m and x >= 0 and y < m and y >= 0:
             result.append((x, y))
    return result
def path_finder(area):            
    field = []
    for i in area.split('\n'):
        field.append(list(map(int, list(i))))
    print(field)
    neighbors = {}
    table = {(0, 0):{'w': 100000, 'p':(0,0)}}
    
    neighbors[(0, 0)] = get_neighbors(0, 0, 3)
    print(neighbors)
    print(table)    
    return # total levels climbed