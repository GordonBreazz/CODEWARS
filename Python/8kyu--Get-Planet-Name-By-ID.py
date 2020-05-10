# The function is not returning the correct values. Can you figure out why?
# get_planet_name(3) # should return 'Earth'

def get_planet_name(id):
    # This doesn't work; Fix it!
    name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    return name[id-1]