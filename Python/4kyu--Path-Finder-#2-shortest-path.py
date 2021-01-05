def find(x, y, c, field):
    print(x, y, field[y][x])
    if field[y][x] != '.': return False
    if field[y][x] == '@': return True    
    if field[y][x] == '.': field[y][x] = str(c - 1)
    if field[y][x + 1] == '.': field[y][x + 1] = str(c)
    if field[y][x - 1] == '.': field[y][x - 1] = str(c)
    if field[y + 1][x] == '.': field[y + 1][x] = str(c)
    if field[y - 1][x] == '.': field[y - 1][x] = str(c)
    find(x + 1, y, c + 1, field)
    find(x - 1, y, c + 1, field)
    find(x, y + 1, c + 1, field)
    find(x, y - 1, c + 1, field)
                        
    return True
    
def path_finder(maze):
    if len(maze) == 1: return True
    field = []
    row = [' ']    
    for c in maze:
        if c == '\n':            
            row.append(' ')
            field.append(row)
            row = [' ']
        else:
            row.append(c)
    field.append(row)            
    l = len(field[0])
    field.insert(0, [' ' for i in range(l)])
    field.append([' ' for i in range(l)])
    field[l-2][l-2] = '@'
    result = find(1, 1, 1, field)
    for item in field:
        print(item)
    if result == -1: return False
    return result