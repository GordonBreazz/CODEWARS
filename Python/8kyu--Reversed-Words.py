def reverse_words(s):
    result = ''
    for item in s.split(' '):
        print(item.reverse())
        result += ' '#.join()
    return result