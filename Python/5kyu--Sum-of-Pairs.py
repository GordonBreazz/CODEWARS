#######################################################################################################################################################################################################################################
# 
#     KATA: 5 kyu "Sum of pairs"
#
#   SOURCE: https://www.codewars.com/kata/54d81488b981293527000c8f
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
#           
#           sum_pairs([11, 3, 7, 5],         10)
#                         ^--^      3 + 7 = 10
#             == [3, 7]
#             
#             sum_pairs([4, 3, 2, 3, 4],         6)
#                        ^-----^      4 + 2 = 6, indices: 0, 2 *
#                           ^-----^      3 + 3 = 6, indices: 1, 3
#                              ^-----^      2 + 4 = 6, indices: 2, 4
#             entire pair is earlier, and therefore is the correct answer
#               == [4, 2]
#             
#             sum_pairs([0, 0, -2, 3], 2)
#             #  there are no pairs of values that can be added to produce 2.
#               == None/nil/undefined (Based on the language)
#            
#             sum_pairs([10, 5, 2, 3, 7, 5],         10)
#                            ^-----------^   5 + 5 = 10, indices: 1, 5
#                                  ^--^      3 + 7 = 10, indices: 3, 4 *
#               * entire pair is earlier, and therefore is the correct answer
#               == [3, 7]
#             Negative numbers and duplicate numbers can and will appear.
#             
#             NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
#
########################################################################################################################################################################################################################################

l1 = [1, 4, 8, 7, 3, 15]
l2 = [1, -2, 3, 0, -6, 1]
l3 = [20, -13, 40]
l4 = [1, 2, 3, 4, 1, 0]
l5 = [10, 5, 2, 3, 7, 5]
l6 = [4, -2, 3, 3, 4]
l7 = [0, 2, 0]
l8 = [5, 9, 13, -3]


def sum_pairs(ints, s):
    for j in range(len(ints)):
        #print 'j:', ints[j]
        if ints[j] > s:
            continue
        #p = s - ints[j]
        for i in range(j+1, len(ints)):
            print 'j:',j, ints[j], 'i:', i,' ====================',  ints[i]
            if s == ints[i] + ints[j]:
                return [ints[j], ints[i]]
    return None            


    # class record:  
    #     def __init__(self, a, b):  
    #         self.value = a  
    #         self.pos = b  

    # def letter_cmp(a, b):
    #     return a.value - b.value

    # list = []
    # for j in range(len(ints)):
    #     list.append(record(ints[j], j))
    
    # list.sort(letter_cmp)

    # for j in range(len(list)):
    #     if list[j].value > s:
    #         continue
    #     p = s - list[j].value
    #     for i in range(len(list)):
    #         if i != j:
    #             if list[i].value == p:
    #                 result = [list[j].value, list[i].value]
    #                 if list[i].pos < list[j].pos:
    #                     result = [list[i].value, list[j].value]
    #                 #print 'result:', result, '///', j, i
    #                 return result
    return None


print sum_pairs(l1, 8)
print '----------------------'
print sum_pairs(l2, -6)
print '----------------------'
print sum_pairs(l3, -7)
print '----------------------'
print sum_pairs(l4, 2)
print '----------------------'
print sum_pairs(l5, 10)
print '----------------------'
print sum_pairs(l6, 8)
print '----------------------'
print sum_pairs(l7, 0)
print '----------------------'
print sum_pairs(l8, 10)
