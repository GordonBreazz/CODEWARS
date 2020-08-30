############################################################################################################################################################################################################################################
#
#     KATA: 5 kyu "What’s the degree?"
#   Source: https://www.codewars.com/kata/55fde83eeccc08d87d0000af
#   Author: https://www.codewars.com/users/GordonBreazz
#
#     PLOT: Write a function that returns the degree of a polynomial function:
#           
#             degree(x => 42);                    // 0
#             degree(x => x);                     // 1
#             degree(x => x * x);                 // 2
#             degree(x => x * x * x);             // 3
#             degree(x => 2 * x + 3 * x * x + 5); // 2
#
#           Assume that the polynomial has a maximum degree of 11
#           The input x of the polynomial function must be between -11 and 11
#           use integers to get exact results without rounding errors
#
############################################################################################################################################################################################################################################

def degree(p):
    v = [p(x) for x in range(-11, 12)] # function values   
    result = 0
    while not all([x == v[0] for x in v]): 
        v = [v[i] - v[i-1] for i in range(1, len(v))]
        result += 1
    return result

print('Result:', degree(lambda x: x*x))