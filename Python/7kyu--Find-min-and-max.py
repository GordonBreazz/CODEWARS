# Implement a function that returns the minimal and the maximal value of a list (in this order).

def get_min_max(seq): 
    # your code here
    seq.sort() 
    l = len(seq)
    if l == 1:
      return (1, 1)
    return (seq[0], seq[len(seq)-1])