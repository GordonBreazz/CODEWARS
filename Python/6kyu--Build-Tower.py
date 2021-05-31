def func(n, l):
    st = '*' * n
    space = (l-n) // 2
    while len(st) < l:
        st = ' ' * space + st + ' ' * space
    return st

def tower_builder(n_floors):
    result = []
    p = 1
    for i in range(n_floors):        
        result.append(func(p, n_floors))        
        p += 2
    return result
    # build here