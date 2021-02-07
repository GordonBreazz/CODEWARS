#######################################################################################################################################################################################################################################
# 
#     KATA: 4 kyu "Path Finder #2: shortest path"
#
#   SOURCE: https://www.codewars.com/kata/57658bfa28ed87ecfa00058a
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal 
#           directions (i.e. North, East, South, West). Return the minimal number of steps to exit 
#           position [N-1, N-1] if it is possible to reach the exit from the starting position. 
#            Otherwise, return false in JavaScript/Python and -1 in C++/C#/Java.
#
#            Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty 
#            in all test cases.
#
########################################################################################################################################################################################################################################

def wave_expansion(field, wave):
    if len(wave) == 0: return False
    new_wave = []
    for item in wave:
        dy, dx = item
        c = field[dy][dx] + 1
        if field[dy][dx + 1] == '.':
            new_wave.append((dy, dx + 1))
            field[dy][dx + 1] = c

        if field[dy][dx - 1] == '.':
            new_wave.append((dy, dx - 1))
            field[dy][dx - 1] = c

        if field[dy + 1][dx] == '.':
            new_wave.append((dy + 1, dx))
            field[dy + 1][dx] = c

        if field[dy - 1][dx] == '.':
            new_wave.append((dy - 1, dx))
            field[dy - 1][dx] = c

    wave_expansion(field, new_wave)
    return True

def path_finder(maze):
    if len(maze) == 1: return True
    field = [['W']]
    for i in maze.split('\n'):
        field.append(['W'] + list(i) + ['W'])
    l = len(field[1])
    field.append(['W' for i in range(l)])
    field[0] = list(field[-1])
    field[1][1] = 0
    wave_expansion(field, [(1, 1)])
    if field[l - 2][l - 2] == '.': return False
    for item in field:
        print(item)
    return field[l - 2][l - 2]


a = "\n".join([
  ".W.",
  ".W.",
  "..."
])

b = "\n".join([
  ".W.",
  ".W.",
  "W.."
])

c = "\n".join([
  "......",
  "......",
  "......",
  "......",
  "......",
  "......"
])

d = "\n".join([
  "......",
  "......",
  "......",
  "......",
  ".....W",
  "....W."
])

print(path_finder(a), 4)
print(path_finder(b), False)
print(path_finder(c), 10)
print(path_finder(d), False)