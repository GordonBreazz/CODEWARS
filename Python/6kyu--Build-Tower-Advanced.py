######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Build Tower Advanced"
#
#   SOURCE: https://www.codewars.com/kata/57675f3dedc6f728ee000256
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Build Tower Advanced
#           Build Tower by the following given arguments:
#           number of floors (integer and always greater than 0)
#           block size (width, height) (integer pair and always greater than (0, 0))
#           
#           Tower block unit is represented as *
#           
#           Python: return a list;
#           JavaScript: returns an Array;
#           Have fun!
#           
#           for example, a tower of 3 floors with block size = (2, 3) looks like below
#           
#           [
#           '    **    ',
#           '    **    ',
#           '    **    ',
#           '  ******  ',
#           '  ******  ',
#           '  ******  ',
#           '**********',
#           '**********',
#           '**********'
#           ]
#           
#           and a tower of 6 floors with block size = (2, 1) looks like below
#           
#           [
#           '          **          ', 
#           '        ******        ', 
#           '      **********      ', 
#           '    **************    ', 
#           '  ******************  ', 
#           '**********************'
#           ]
#           
#
########################################################################################################################################################################################################################################

def tower_builder(n_floors, block_size):
    w, h = block_size
    # build here
    result = []    
    point = '*' * w
    maxl = w * (2 * n_floors - 1) 
    for i in range(n_floors):
        for _ in range(h):
            space = ' ' * ((maxl - len(point)) // 2)
            result.append(space + point + space)
        point += '*' * (2 * w) 
    return result 