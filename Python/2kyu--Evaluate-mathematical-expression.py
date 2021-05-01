import re


def map_item(item):
    if not re.match(r"\*|\/", item) is None:
        return float(item)
    st, sing = '', ''
    mul = 1
    item += '*'
    for x in item:
        if x == '*' or x == '/':
            if sing == '':
                sing = x
                mul = float(st)
                st = ''
                continue
            if st != '':
                if sing == '*': mul *= float(st)
                if sing == '/': mul /= float(st)
                sing = x
                st = ''
        else:
            st += x
    return mul


def eva(string):
    print(string)
    string = re.sub(r"\s", "", string)
    if re.match(r"^\-?\d+$", string): return float(string)
    string = re.sub(r"\-\-", "+", string)
    string = re.sub(r"\-", "+-", string)
    string = re.sub(r"\+\+", "+", string)
    print(string)
    arr = string.split("+")
    print(arr)
    arr = list(map(map_item, arr))
    return sum(arr)


def calc(expression):
    s = ''
    s1 = ''
    a = 0
    for ch in expression:
        print('s:',s)
        if ch == '(':
            a += 1
            s1 = ''
            continue
        if ch == ')':
            a -= 1
            if a == 0: s += str(eva(s1))
            continue
        if a == 0:
            s += ch
        else:
            s1 += ch
    print('ok', s)
    st = eva(s)
    return st  # evaluated expression