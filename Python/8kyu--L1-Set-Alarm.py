#######################################################################################################################################################################################################################################
# 
#     KATA: 3 kyu "Binomial Expansion"
#
#   SOURCE: https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Write a function named setAlarm which receives two parameters. The first parameter, employed, 
#           is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
#           The function should return true if you are employed and not on vacation (because these are 
#           the circumstances under which you need to set an alarm). It should return false otherwise. 
# 
#           Examples:
#             setAlarm(true, true) -> false
#             setAlarm(false, true) -> false
#             setAlarm(false, false) -> false
#             setAlarm(true, false) -> true
#
########################################################################################################################################################################################################################################

def set_alarm(employed, vacation):
    # Your code here
    return employed and not vacation