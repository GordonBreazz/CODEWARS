#######################################################################################################################################################################################################################################
#
#     KATA: 4 kyu "Snail"
#
#   SOURCE: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#
#     PLOT: Given an n x n array, return the array elements arranged from outermost elements to the middle element,
#           traveling clockwise.
#
#           array = [[1,2,3],
#                    [4,5,6],
#                    [7,8,9]]
#
#           snail(array) #=> [1,2,3,6,9,8,7,4,5]
#
#           For better understanding, please follow the numbers of the next array consecutively:
#
#           array = [[1,2,3],
#                    [8,9,4],
#                    [7,6,5]]
#
#           snail(array) #=> [1,2,3,4,5,6,7,8,9]
#
#           This image will illustrate things more clearly: http://www.haan.lu/files/2513/8347/2456/snail.png
#
#           NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse
#           the 2-d array in a clockwise snailshell pattern.
#
#           NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
#           package kata
#
#######################################################################################################################################################################################################################################/

def snail(snail_map):
    if len(snail_map) == 0 or len(snail_map) == 1: return snail_map[0]
    size = len(snail_map[0])
    side_size = size - 1
    x, y, dx, dy = 0, 0, 1, 0
    side, side_count = 0, 0
    fl = False
    result =[]
    while True:
        result.append(snail_map[y][x])        
        x += dx
        y += dy
        side_count += 1
        if side_count == side_size:
            side_count = 0 
            side += 1
            if side == 1:
                dx = 0
                dy = 1
                if fl: side_size -= 1
            if side == 2:
                dx = -1
                dy = 0
            if side == 3:
                dx = 0
                dy = -1
                side_size -= 1
            if side == 4:
                dx = 1
                dy = 0
                side = 0
                fl = True            
        if side_size <= 0: break
    result.append(snail_map[y][x]) 
    return result
