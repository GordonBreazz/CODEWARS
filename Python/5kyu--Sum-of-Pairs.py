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
