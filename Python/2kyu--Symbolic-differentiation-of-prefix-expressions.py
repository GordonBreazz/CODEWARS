def eva(st):
    print('/////////////',st)
    arr = st.split(' ')
    fl = False
    ch = ''
    result = ''
    for item in arr:        
        if item in ['-', '+', '*', '/', '^']:
            ch = item
            fl = True
            continue        
        if fl:
            result += item + ' ' + ch            
            fl = False
        else:
            result += ' ' + item
    print(arr, result)
    return ''#'{' + result + '}'

def calc(expression):    
    expr_st = ''
    s1 = ''
    a = 0
    for ch in expression:
        if ch == ')':
            a -= 1
            if a == 0:
                expr_st += str(calc(s1))
                continue
        s1 += ch
        if ch == '(':
            if a == 0:
                s1 = ''
            a += 1

        if a == 0:
            expr_st += ch
    st = eva(expr_st)
    return st  # evaluated expression

def diff(s):
    print(calc('(* (+ x 3 * + 7 8) 5) '))
    pass