def valid_spacing(s):
    # write your code here
    if s[0] == ' ' or s[-1] == ' ': return False
    if s.find('  '): return False
    return True