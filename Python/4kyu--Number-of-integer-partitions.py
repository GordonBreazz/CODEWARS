#######################################################################################################################################################################################################################################
# 
#     KATA: 4 kyu "Number of integer partitions"
#
#   SOURCE: https://www.codewars.com/kata/546d5028ddbcbd4b8d001254
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: An integer partition of n is a weakly decreasing list of positive integers which sum to n.
#           
#           For example, there are 7 integer partitions of 5:
#           
#           [5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].
#           
#           Write a function named partitions which returns the number of integer partitions of n. The function 
#           should be able to find the number of integer partitions of n for n as least as large as 100.
#
########################################################################################################################################################################################################################################

def pentagonal(k):
    return int(k * (3 * k - 1) / 2)

def partitions(n):
    '''define a function which returns the number of integer partitions of n'''
    partitions = [1]
    for i in range(1, n + 1):
        partitions.append(0)
        for k in range(1, i + 1):
            coeff = (-1) ** (k + 1)
            for t in [ pentagonal(k), pentagonal(-k) ]:
                if (i - t) >= 0:
                    partitions[i] = partitions[i] + coeff * partitions[i - t]
    return partitions[-1]     