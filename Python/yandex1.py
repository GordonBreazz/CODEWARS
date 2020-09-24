def is_polindrom(st):
    for i in range(len(st) // 2):
        if st[i] != st[-i - 1]:
            return False
    return True


def find(size, st):
    size -= 1
    if len(st) - size < 0:
        return []
    result = []
    for i in range(len(st) - size):
        if st[i] == st[i + size]:
            test_case = st[i:i + size + 1]
            if is_polindrom(test_case):
                result.append(test_case)
    return result


def poly(input_st):
    polindroms = []
    if len(input_st) < 3:
        return input_st
    m = len(input_st) // 2
    if m < 3:
        m = len(input_st)
    for i in range(3, m):
        polindroms = find(i, input_st)
        if len(polindroms) > 0:
            break
    sorted(polindroms)
    return polindroms

#print(poly(' ' + input() + '@'))
st = ''
for i in range(2000000):
    st += str(i)
print(poly(st))
# f = open("input.txt", "r")
# fo = open("output.txt", "w")
# fo.write(poly(' ' + f.readline() + '@'))
# fo.close()
# f.close()
