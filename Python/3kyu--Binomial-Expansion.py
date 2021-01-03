#######################################################################################################################################################################################################################################
# 
#     KATA: 3 kyu "Binomial Expansion"
#
#   SOURCE: https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: The purpose of this kata is to write a program that can do some algebra. Write a function expand that 
#            takes in an expresion with a single, one character variable, and expands it. The expresion is in the 
#            form (ax+b)^n where a and b are integers which may be positive or negative, x is any one character long 
#            variable, and n is a natural number. If a = 1, no coeficient will be placed in front of the variable. 
#             If a = -1, a "-" will be placed in front of the variable.
# 
#             The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are 
#             the coefficients of the term, x is the original one character variable that was passed in the original 
#             expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing 
#             order. If the coeficient of a term is zero, the term should not be included. If the coeficient of a 
#             term is one, the coeficient should not be included. If the coeficient of a term is -1, only the "-" 
#             should be included. If the power of the term is 0, only the coeficient should be included. If the power 
#             of the term is 1, the carrot and power should be excluded.
#
#             Examples:
#                expand("(x+1)^2")      # returns "x^2+2x+1"
#                expand("(p-1)^3")      # returns "p^3-3p^2+3p-1"
#                expand("(2f+4)^6")     # returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
#                expand("(-2a-4)^0")    # returns "1"
#                expand("(-12t+43)^2")  # returns "144t^2-1032t+1849"
#                expand("(r+0)^203")    # returns "r^203"
#                expand("(-x-1)^2")     # returns "x^2+2x+1"
#
########################################################################################################################################################################################################################################

def to_x(st):
    result = ''
    for i in st:
        if not i in '-0123456789': result += i
    if result == '': result = '@'
    return result

def to_int(st):
    result = ''
    for i in st:
        if i in '-0123456789': result += i
    if result == '-' or result == '': result += '1'
    return int(result)

def pascal_tri(n):
    if n == 0: return [1]
    if n == 1: return [1, 1]
    arr = [1, 2, 1]
    if n == 2: return arr
    result = []
    for x in range(3, n+1):
        result = [1]
        for i in range(1, x):
            result.append(arr[i-1] + arr[i])
        result.append(1)
        arr = result
    return result

def newton(a, b, n):
    coefficients = pascal_tri(n)
    result = []
    for i in range(n+1):
        tmp = []
        if coefficients[i] > 1: tmp.append({'value': coefficients[i], 'degree': 1, 'x': '@'})
        #coefficient = {'value': str(coefficients[i]), 'degree': 1}
        if (n - i) > 0:
            tmp.append({'value': to_int(a), 'degree': (n - i), 'x': to_x(a)})
            if tmp[-1]['x'] != '@':
                c = tmp[-1]['x']
                tmp[-1]['x'] = '@'
                tmp.append({'value': 1, 'degree': (n - i), 'x': c})
        #ap = {'value': a, 'degree': (n - i)}
        if i > 0:
            tmp.append({'value': to_int(b), 'degree': i, 'x': to_x(b)})
            if tmp[-1]['x'] != '@':
                c = tmp[-1]['x']
                tmp[-1]['x'] = '@'
                tmp.append({'value': 1, 'degree': i, 'x': c})
        #bp = {'value': b, 'degree': i}
        result += [tmp]

    return result

def expand1(expr):
    st, n = expr.split('^')
    if int(n) == 0: return '1'
    if int(n) == 1: return st
    st = st[1:-1].replace('-','+-').split('+')
    a, b = tuple(filter(lambda x: x!='', st))
    # print('result', newton(a, b, int(n)))
    # return list(filter(lambda x: x!='', arr))
    arr = newton(a, b, int(n))
    result = []
    for items in arr:
        mul = 1
        res = []
        for item in items:
            if item['x'] == '@':
                mul *= item['value'] ** item['degree']
            else:
               if item['degree'] > 1:
                   res.append(item['x'] + '^' + str(item['degree']))
               else:
                   res.append(item['x'])
        #print(res)
        if mul > 1:
            result.append(str(mul) + '*'.join(res))
        else:
            result.append('*'.join(res))
        #print(result)
    return '+'.join(result)
def expand(arg):
    print('')
    print('input:', arg)
    return expand1(arg)