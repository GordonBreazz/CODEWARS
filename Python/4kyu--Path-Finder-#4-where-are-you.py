def run(x, y, angle, steps):
    dx = 0
    dy = 0
    if angle == 0 or angle == 360: dx = 1
    if angle == 180: dx = -1
    if angle == 90: dy = 1
    if angle == 270: dy = -1        
    for i in range(steps):
        x += dx
        y += dy
    return (x, y)    

def i_am_here(path):    
    x, y, angle = 0, 0, 0
    try:
        x, y, angle = i_am_here.pos
    except:
        i_am_here.pos =  (x, y, angle)    
    print(path, i_am_here.pos)
    if path == '': 
        i_am_here.pos =  (0, 0, 0)
        return [0, 0]
    steps_st = ''
    commands = []
    for ch in path:
        if ch in 'lrLR':
            if len(steps_st) > 0: 
                commands.append(int(steps_st))
                steps_st = ''
            commands.append(ch)
        else:
            steps_st += ch
    else:
        if len(steps_st) > 0:
            commands.append(int(steps_st))                
        
    print(commands)
    for cmd in commands:
        if cmd == 'L': 
            angle = 0
            print('после поворота L', angle) 
        elif cmd == 'R': 
            angle = 180
            print('после поворота R' , angle) 
        elif cmd == 'l': 
            angle += 90
            if angle >= 360: angle = 360 - angle
            print('после поворота r', angle)    
        elif cmd == 'r': 
            angle -= 90
            if angle < 0: angle = 360 + angle
            print('после поворота l', angle)     
        else: 
            print('выполнить столько то шагов', cmd)
            x, y = run(x, y, angle, cmd)
            print('run', x, y)
    i_am_here.pos = (x, y, angle)
    return [x ,y]
    # path это набор действий. нужен указатель на текщую позицию сохраняющнй между запусками 
    