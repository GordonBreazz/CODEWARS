#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Build Tower"
#
#   SOURCE: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Build Tower by the following given argument:
#           number of floors (integer and always greater than 0).
#           
#           Tower block is represented as *
#           
#           Python: return a list;
#           JavaScript: returns an Array;
#           C#: returns a string[];
#           PHP: returns an array;
#           C++: returns a vector<string>;
#           Haskell: returns a [String];
#           Ruby: returns an Array;
#           Lua: returns a Table;
#           Have fun!
#           
#           for example, a tower of 3 floors looks like below
#           
#           [
#             '  *  ', 
#             ' *** ', 
#             '*****'
#           ]
#
#           and a tower of 6 floors looks like below
#           
#           [
#             '     *     ', 
#             '    ***    ', 
#             '   *****   ', 
#             '  *******  ', 
#             ' ********* ', 
#             '***********'
#           ]
#
########################################################################################################################################################################################################################################


def tower_builder(n_floors):
    # build here
    if n_floors == 1: return ['*']
    point = '*'
    space = ' ' * ((2 * n_floors - 1)  // 2)
    result = []
    for i in range(n_floors):
        result.append(space + point + space)
        point += '**'
        space = space[:-1]
    return result