def each_cons(lst, n):
    # your solution here
    result = []
    for i in range(len(lst) - n + 1):
        result.append(lst[i : i + n])    
    return result