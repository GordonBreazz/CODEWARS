expr_list = []
    
def eva_ex(st):
    st = simplify(st)
    print('/////////////',st)
    arr = st.split(' ')
    arr.reverse()
    fl = False
    ch = ''
    result = ''
    #print(arr)
    stack = []
    for item in arr:
        #print(stack, '#', result)
        if not item in ['-', '+', '*', '/', '^']:
            stack.append(item)
            continue
        a = stack.pop()
        b = stack.pop()
        stack.append(b + ' ' + item + ' ' + a)
    result = stack.pop()
   # print('result:', result) 
    return result


def simplify(st):
    func_list = ['cos', 'sin', 'tan', 'exp', 'ln']
    for func in func_list:
        while True:
            newst = st.replace(func + ' ', func + '_')
            if newst == st: break
            st = newst
    return st
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
    expr_list.append('(' + eva_ex(expr_st) + ')')
    return '@'  # evaluated expression

def diff(s):
    #print(simplify('sin x + 10 * cos (1+2)'))
    global expr_list
    expr_list = []
    #print(calc('3 4 2 * 1 5 - 2 ^ / +'))
    #print(calc('(* (+ x 3) 5)'))
    #print(calc('(* 3 (* 2 x))'))
    #print(calc('(^ (cos x) -2)'))
    #print(calc(s))
    #print(expr_list)
    print(calc("5"))
    pred = ''
    while expr_list:        
        pred = expr_list.pop(0).replace('@', pred)
        #print(pred)
    print('*****', pred[1:-1])
    pass