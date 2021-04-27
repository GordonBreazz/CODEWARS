def calc(x):
    # your code here
    sum = 0
    for item in x:
        sum += ord(item)
    return sum