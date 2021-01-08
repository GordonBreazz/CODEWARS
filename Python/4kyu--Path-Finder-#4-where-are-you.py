#######################################################################################################################################################################################################################################
# 
#     KATA: 4 kyu "Path Finder #4: where are you?"
#
#   SOURCE: https://www.codewars.com/kata/5a0573c446d8435b8e00009f
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Hey, Path Finder, where are you?
#
#           Examples:
#                i_am_here("RLrl")      # returns [0, 0]
#                i_am_here("r5L2l4")    # returns [4, 3]
#                i_am_here("r5L2l4")    # returns [0, 0]
#
########################################################################################################################################################################################################################################

def run(x, y, angle, steps):
    dx, dy = 0, 0       
    if angle == 0 or angle == 360: dx = -1        
    if angle == 180: dx = 1        
    if angle == 90: dy = 1
    if angle == 270: dy = -1        
        
    for __ in range(steps):
        x += dx
        y += dy
        
    return (x, y)    

def i_am_here(path):    
    # @param string "path"  is a set of actions. To solve the problem, you need to keep the current position and angle of rotation between functions call
    # Values "l" and "r" - rotate left and right 90 degrees
    # Values "L" and "R" - turn left and right 180 degrees    
    x, y, angle = 0, 0, 0
    
    try:
        x, y, angle = i_am_here.pos
    except:
        i_am_here.pos =  (x, y, angle)    
        
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
        
    for cmd in commands:        
        if cmd == 'L':
            angle -= 180                            
        elif cmd == 'R':
            angle += 180        
        elif cmd == 'r':
            angle += 90                            
        elif cmd == 'l':  
            angle -= 90                                        
        else:             
            x, y = run(x, y, angle, cmd)                        
            
        if angle < 0: angle += 360
        elif angle >= 360: angle -= 360

    i_am_here.pos = (x, y, angle)
    return [x ,y]