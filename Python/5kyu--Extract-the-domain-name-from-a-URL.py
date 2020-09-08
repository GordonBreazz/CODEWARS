#######################################################################################################################################################################################################################################
# 
#     KATA: 4 kyu "Next bigger number with the same digits"
#
#   SOURCE: https://www.codewars.com/kata/514a024011ea4fb54200004b
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
#
#           domainName("http://github.com/carbonfive/raygun") == "github" 
#           domainName("http://www.zombie-bites.com") == "zombie-bites"
#           domainName("https://www.cnet.com") == "cnet"
#
########################################################################################################################################################################################################################################

import re

def domain_name(url):
    return re.sub(r'(http:\/\/|https:\/\/)|(www\.)|(\..*$)', '', url) 