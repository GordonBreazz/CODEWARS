# # N = 4
# 1 + 2 + 3 + 4 = 10

# # N = 10
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# # N = 12
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

def digit_sum(n):
  st = str(n)
  sum = 0
  for i in st:
    sum += int(i)
  return sum  

def compute_sum(n):
    sum = 0
    for i in range(n+1):                
        if i<10:
          sum += i
        else:
          sum += digit_sum(i)
    return sum