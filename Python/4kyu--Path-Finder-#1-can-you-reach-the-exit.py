#######################################################################################################################################################################################################################################
# 
#     KATA: 4 kyu "Path Finder #1: can you reach the exit?"
#
#   SOURCE: https://www.codewars.com/kata/5765870e190b1472ec0022a2
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions 
#           (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.
#
#           Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases.
#
########################################################################################################################################################################################################################################

def find(x, y, c, field):
    if field[y][x] == '@': return True    
    if field[y][x] == '.':
        field[y][x] = c        
        if find(x + 1, y, c + 1, field): return True
        if find(x - 1, y, c + 1, field): return True
        if find(x, y + 1, c + 1, field): return True
        if find(x, y - 1, c + 1, field): return True
    return False
    
def path_finder(maze):
    if len(maze) == 1: return True
    field = []
    row = [' ']    
    for c in maze:
        if c == '\n':            
            row.append(' ')
            field.append(row)
            row = [' ']
        else:
            row.append(c)
    field.append(row)            
    l = len(field[0])
    field.insert(0, [' ' for i in range(l)])
    field.append([' ' for i in range(l)])
    field[l-2][l-2] = '@'
    return find(1, 1, 1, field)