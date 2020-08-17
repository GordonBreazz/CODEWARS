############################################################################################################################################################################################################################################
#
#      KATA: 6 kyu "Multiplication table"
#
#    SOURCE: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
#    AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#      PLOT: Your task, is to create NxN multiplication table, of size provided in parameter.
#
#            for example, when given size is 3:
#              1 2 3
#              2 4 6
#              3 6 9
#            for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
#
############################################################################################################################################################################################################################################


def multiplication_table(size):
    arr = []
    row = []
    for i in range(size):
        row.append(i)
    for i in range(size):
        arr.append(row[:])
        
    for j in range(size):
        for i in range(size):
            arr[j][i] = (i+1) * (j+1)        
    return arr