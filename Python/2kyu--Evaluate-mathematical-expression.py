#######################################################################################################################################################################################################################################
# 
#     KATA: 2 kyu "Evaluate mathematical expression"
#
#   SOURCE: https://www.codewars.com/kata/52a78825cdfc2cfc87000005
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
#     PLOT: Instructions
#           Given a mathematical expression as a string you must return the result as a number.
#           
#           Numbers
#           Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.
#           
#           Operators
#           You need to support the following mathematical operators:
#           
#             Multiplication *
#             Division / (as floating point division)
#             Addition +
#             Subtraction -
#             Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.
#           
#           Parentheses
#           You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6
#           
#           Whitespace
#           There may or may not be whitespace between numbers and operators.
#           
#           An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.
#           
#             1-1    // 0
#             1 -1   // 0
#             1- 1   // 0
#             1 - 1  // 0
#             1- -1  // 2
#             1 - -1 // 2
#           
#             6 + -(4)   // 2
#             6 + -( -4) // 10
#
#           And the following are invalid expressions
#           
#             1 - - 1    // Invalid
#             1- - 1     // Invalid
#             6 + - (4)  // Invalid
#             6 + -(- 4) // Invalid
#
#           Validation
#           You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.
#           
#           Restricted APIs
#           NOTE: eval and exec are disallowed in your solution.
#                    
########################################################################################################################################################################################################################################

import re

def map_item(item):
    if item == '':
        return 0
    if not re.search(r"\*|\/", item):
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
    string = re.sub(r"\s", "", string)
    if re.match(r"^\-?\d+$", string): return float(string)
    string = re.sub(r"\-\-", "+", string)
    string = re.sub(r"\-", "+-", string)
    string = re.sub(r"\+\+", "+", string)
    string = re.sub(r"\*\+\-", "*-", string)
    string = re.sub(r"\/\+\-", "/-", string)
    string = re.sub(r"\*\+", "*", string)
    string = re.sub(r"\/\+", "/", string)    
    arr = string.split("+")    
    arr = list(map(map_item, arr))
    return sum(arr)


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