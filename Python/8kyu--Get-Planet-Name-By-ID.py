#######################################################################################################################################################################################################################################
# 
#     KATA: 8 kyu "Get Planet Name By ID"
#
#   SOURCE: https://www.codewars.com/kata/515e188a311df01cba000003
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: The function is not returning the correct values. Can you figure out why?
#           get_planet_name(3) # should return 'Earth'
#     
########################################################################################################################################################################################################################################

def get_planet_name(id):
    # This doesn't work; Fix it!
    name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    return name[id-1]