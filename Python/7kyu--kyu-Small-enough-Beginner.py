def small_enough(array, limit):
    for item in limit:
        if item > limit: return False
    return True
    pass