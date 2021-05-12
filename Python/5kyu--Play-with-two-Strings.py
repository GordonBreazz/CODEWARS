def work_on_strings(a,b):
    A = set(a)
    B = set(b)
    C = A.intersection(B)
    result = ""
    for ch in a + b:
        if ch in C:
            