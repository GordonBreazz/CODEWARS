USE_BREAK_DISPLAY = True
import copy
def copyArray(currentArray):
    return copy.deepcopy(currentArray)
  
def extractAll(arr, maxn):
    p = []
    result = []
    for i in range(3, maxn):
        p = extract(arr, i)
        result.append(copyArray(p).strip('\n')) 
    return result  
    
def aroundMap(arr, x, y, value):
    st = ''
    
    if arr[y][x] != value:
        return 0

#   //[ ][*][ ]
#   //[ ][ ][ ]
#   //[ ][ ][ ]    
    if arr[y-1][x] != value:
        st += '1' #//00[0]00000
    else: 
        st += '0'       

#   //[ ][ ][*]
#   //[ ][ ][ ]
#   //[ ][ ][ ]    
    if arr[y-1][x+1] != value:
        st += '1'#//0000000[0]
    else:
        st += '0'
        
#   //[ ][ ][ ]
#   //[ ][ ][*]
#   //[ ][ ][ ]    
    if arr[y][x+1] != value:
        st += '1' #//0[0]000000 
    else:
        st += '0'  

#   //[ ][ ][ ]
#   //[ ][ ][ ]
#   //[ ][ ][*]    
    if arr[y+1][x+1] != value:
        st += '1' #//0000[0]000
    else:
        st += '0'

#   //[ ][ ][ ]
#   //[ ][ ][ ]
#   //[ ][*][ ]    
    if arr[y+1][x] != value:
        st += '1' #//000[0]0000
    else:
        st += '0'        

#   //[ ][ ][ ]
#   //[ ][ ][ ]
#   //[*][ ][ ]    
    if arr[y+1][x-1] != value:
        st += '1'#//000000[0]0
    else:
        st += '0'        
        
#   //[ ][ ][ ]
#   //[*][ ][ ]
#   //[ ][ ][ ]    
    if arr[y][x-1] != value:
        st += '1'
    else:
        st += '0'    

#   //[*][ ][ ]
#   //[ ][ ][ ]
#   //[ ][ ][ ]    
    if arr[y-1][x-1] != value:
        st += '1'#//00000[0]00
    else:
        st += '0'          
        
    return st

def render(arr, x, y):
    st = aroundMap(arr, x, y, 0)
    if st == '00000000':
        return ' '
    if st[0] == '1' and st[2]=='1' and st[5] == '1':
        return '+'
    if st[1] == '1' and st[3]=='1' and st[4] == '1':
        return '+'
    if st[0] == '1' and st[3]=='1' and st[6] == '1':
        return '+'
    if st[0] == '1' or st[1] == '1':
        return '|'
    if st[2] == '1' or st[3] == '1':
        return '-'
    if st == '00000001' or st == '00000010' or st == '00000100' or st == '00001000' or st=='01011000':
        return '+'
    return ' '

def extract(arr, count):
    result = []
        

def find(arr, n, sx=0, sy=0):
    my = len(arr)
    mx = len(arr[0])
    for j in range(sy, my):
        for i in range(sx, mx):
            if arr[j][i] == n:
                return {x:i, y:i, result: true}
    return {x:-1,y:-1, result: false}          

def fill(arr, x, y, n, p):
    my = len(arr)
    mx = len(arr[0])
    if x < 0 or  y < 0 or y > my - 1 or x > mx - 1:
        return -1
    if arr[y][x] == 0:
        arr[y][x] = n
    else:
        return -1
    
    fill(arr, x+1, y, n, p+1)
    fill(arr, x-1, y, n, p+1)
    fill(arr, x, y+1, n, p+1)
    fill(arr, x, y-1, n, p+1)
    fill(arr, x+1, y-1, n, p+1)
    fill(arr, x+1, y+1, n, p+1)
    fill(arr, x-1, y-1, n, p+1)
    fill(arr, x-1, y+1, n, p+1)
    
    return p

def break_pieces(shape):
    # complete me!
    a = shape.split("\n")
    arr = []
    row = []    
    maxr = 0
    for item in a:
        if len(item) +2 >maxr:
            maxr = len(item) + 2
            row = map(lambda i: 2 if i != ' ' else 0, [x for x in item])
            if len(row) < maxr:
                pass#row = [...row, ...Array(maxr - row.length).fill(0)]
            arr.append(row)
            
    maxy = len(arr[0])
    p  = [0 for i in range(maxy)]
    arr.append(p)
    arr.insert(0, p)
    maxx = len(arr)
    fill(arr, 0, 0, 1, 1)
    count = 3
    point = {x:0, y:0, result: true}
    while True:
        point = find(arr, 0)
        if point.result:
            fill(arr, point.x, point.y, count)
            count += 1
            
        if point.result:
            break
    return ''#extractAll(arr, count)    
    pass