def flip(d, a):    
    # Do some magic
    if d == "R": return sorted(a)
    return sorted(a, reverse = True)