def tower_builder(n_floors):
    result = ['*' * n_floors,' * ']
    for i in n_flours-1:
        st = result[0]
        
        result = [result[0][2:-1]] + result
    return result[::-1]
    # build here