#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Upside down numbers"
#
#   SOURCE: https://www.codewars.com/kata/59f7597716049833200001eb
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers 
#           remain the same. To clarify, if we write them down on a paper and turn the paper upside down, 
#           the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers 
#           when rotated.
#           
#           Given a range, return the count of upside down numbers within that range. For example, 
#           solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.
#           
#           More examples in the test cases.
#           
#           Good luck!
#                    
########################################################################################################################################################################################################################################


def is_upside_down(number):
    if number < 10: return number in {0, 1, 8}
    st  = str(number)
    l = len(st) - 1
    for el in range(l // 2 + 1):
        if st[el] == "6" and st[l-el] == "9" or st[el] == "9" and st[l - el] == '6': continue        
        if st[el] != st[l - el]: return False
        if not st[el] in  {"0", "1", "8"}: return False 
    return True
def solve(a, b):
    count = 0
    for i in range(b - a):
        if is_upside_down(i + a): count += 1   
    return count