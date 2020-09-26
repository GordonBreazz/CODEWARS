def is_polindrom(st):
    for i in range(len(st) // 2):
        if st[i] != st[-i - 1]:
            return False
    return True

def symbols_prefetch(st):
    return sorted(list(set(st)))


def find(size, st, lst):
    min_elem = ''
    size -= 1
    if len(st) - size < 0:
        return '-1'
    result = set()
    for i in range(len(st) - size):
        if min_elem != '':
            if min_elem[0] == lst[0]:
                return min_elem
        if st[i] == st[i + size]:            
            test_case = st[i:i + size + 1]
            if is_polindrom(test_case):
                if not test_case in result:
                    result.add(test_case)
                    if min_elem == '':
                        min_elem = test_case
                    if test_case < min_elem :
                        min_elem = test_case                        
    #print(result)                   
    return min_elem


def poly(input_st):
    lst = symbols_prefetch(input_st)
    if len(input_st) < 3:
         for ch in lst:
             if input_st.find(ch+ch) != -1:
                 return ch+ch
            
    m = len(input_st) // 2 
    if m < 3:
        m = len(input_st)
    for i in range(2, m+1):        
        polindroms = find(i, input_st, lst)
        if len(polindroms) > 0:
            break
    if len(polindroms) == 0: return "-1"   
    #polindroms.sort()
    #print(polindroms)
    return polindroms

print(poly(input()))

# st = ''
# for i in range(2000000):
#     st += str(i)
# print(poly(st))


# f = open("input.txt", "r")
# fo = open("output.txt", "w")
# fo.write(poly(' ' + f.readline() + '@'))
# fo.close()
# f.close()
