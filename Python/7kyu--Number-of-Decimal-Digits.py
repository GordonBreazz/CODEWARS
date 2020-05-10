# Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.a
# All inputs will be valid.

def digits(n):
    # your code here
    i = 0
    while n > 0:
      i+=1
      n = n // 10      
    return i