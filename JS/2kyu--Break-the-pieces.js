/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 2 kyu "Break the pieces" 
*
*   SOURCE: https://www.codewars.com/kata/527fde8d24b9309d9b000c4e
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: You are given a ASCII diagram , comprised of minus signs -, plus signs +, vertical bars | and whitespaces . 
*           Your task is to write a function which breaks the diagram in the minimal pieces it is made of.
*
*   For example, if the input for your function is this diagram:
*     
*     +------------+
*     |            |
*     |            |
*     |            |
*     +------+-----+
*     |      |     |
*     |      |     |
*     +------+-----+
*     the returned value should be the list of:
*     
*     +------------+
*     |            |
*     |            |
*     |            |
*     +------------+
*     (note how it lost a + sign in the extraction)
*     
*     as well as
*     
*     +------+
*     |      |
*     |      |
*     +------+
*     and
*     
*     +-----+
*     |     |
*     |     |
*     +-----+
*     The diagram is given as an ordinary Javascript multiline string. The pieces should not have trailing spaces at the end of the lines. However, 
*     it could have leading spaces if the figure is not a rectangle. 
*
*     For instance:
*     
*         +---+
*         |   |
*     +---+   |
*     |       |
*     +-------+

*   However, it is not allowed to use more leading spaces than necessary. It is to say, the first character of some of the lines should be different than a space.
*     
*   Finally, note that only the explicitly closed pieces are considered. Spaces "outside" of the shape are part of the background. 
*   Therefore the diagram above has a single piece.
*     
****************************************************************************************************************************************************************************************************************************************/

function copyArray(currentArray){
  return currentArray.map( arr => arr.slice() );
}

function extractAll(arr, maxn){
  let p = []
  let result = []
  for (let i=3; i<maxn; i++) {
    p = extract(arr, i)
    result.push(copyArray(p).join("\n"))
  }   
  return result
}

function aroundMap(arr, x, y, value){
  let st = '' 
  
  if (arr[y][x] !== value) return 0  
  //[ ][ ][ ]
  //[*][ ][ ]
  //[ ][ ][ ]
  if (arr[y][x-1] != value) st += '1'//[0]0000000
    else st += '0'
    
  //[ ][ ][ ]
  //[ ][ ][*]
  //[ ][ ][ ]    
  if (arr[y][x+1] != value) st += '1'//0[0]000000
    else st += '0'  
    
  //[ ][*][ ]
  //[ ][ ][ ]
  //[ ][ ][ ]    
  if (arr[y-1][x] != value) st += '1'//00[0]00000
    else st += '0'  
    
  //[ ][ ][ ]
  //[ ][ ][ ]
  //[ ][*][ ]    
  if (arr[y+1][x] != value) st += '1'//000[0]0000
    else st += '0'  
    
  //[ ][ ][ ]
  //[ ][ ][ ]
  //[ ][ ][*]    
  if (arr[y+1][x+1] != value) st += '1'//0000[0]000
    else st += '0'  
    
  //[*][ ][ ]
  //[ ][ ][ ]
  //[ ][ ][ ]    
  if (arr[y-1][x-1] != value) st += '1'//00000[0]00
    else st += '0'  
    
  //[ ][ ][ ]
  //[ ][ ][ ]
  //[*][ ][ ]    
  if (arr[y+1][x-1] != value) st += '1'//000000[0]0
    else st += '0'  
    
  //[ ][ ][*]
  //[ ][ ][ ]
  //[ ][ ][ ]    
  if (arr[y-1][x+1] != value) st += '1'//0000000[0]
    else st += '0'  
    
  return st
}


function render(arr,x,y) {
   let st = aroundMap(arr, x, y, 0)
   if (st == '00000000')  return ' '
   if (st[0] == '1' && st[2]=='1' && st[5] == '1') return '+'   
   if (st[1] == '1' && st[3]=='1' && st[4] == '1') return '+'   
   if (st[0] == '1' && st[3]=='1' && st[6] == '1') return '+'      
   if (st[0] == '1' || st[1] == '1') return '|'   
   if (st[2] == '1' || st[3] == '1') return '-'     
   if (st == '00000001' || st == '00000010' || st == '00000100' || st == '00001000' || st=='01011000') return '+'
   return ' '  
}

function extract(arr, count){
  let result = []
  let tmp = arr.map(function (j) {
                      let a = j.map(i => i == count ? 5 : 0)
                      if (!a.every(item => item==0)) 
                        return a                      
                    }
            )
            
 tmp = tmp.filter( item => item ? true : false )            
  
  let a = [...tmp[0]]
  a.fill(0)
  tmp = [[...a], [...a], ...tmp, [...a],[...a]]
  result = copyArray(tmp)

  for (let j=0; j < tmp.length; j++)
    for (let i=0; i < tmp[0].length; i++)
      if (i>0 && j>0 && j<tmp.length-1 && i < tmp[0].length-1)
        result[j][i] = render(tmp,i,j)
      else result[j][i] = ' '   
  result = result.map( item => item.join(''))
  result = result.filter( item => item.trim(' ') != '' ? true: false )
  let spaceColFront = result.reduce(function(col, current) {
                                      let c=0;
                                      for (let u=0; u < current.length; u++)
                                        if (current[u]==' ') c++
                                          else break;
                                      if (c < col) return c
                                      return col
                                    }, 999);
  result = result.map( item => item.slice(spaceColFront).trimRight())                                      
  return result
}


function find(arr, n, sx=0, sy=0){
  const my = arr.length
  const mx = arr[0].length
  for (let j = sy; j < my; j++)
    for (let i = sx; i < mx; i++) 
      if (arr[j][i] == n) return {x:i,y:j, result: true}
  return {x:-1,y:-1, result: false}   
}
function fill(arr, x, y, n, p){
  const my = arr.length
  const mx = arr[0].length
  if (x < 0) return -1
  if (y < 0) return -1
  if (y > my - 1) return -1
  if (x > mx - 1) return -1  
  let r1=0
  if (arr[y][x] == 0) arr[y][x] = n
    else return -1

  fill(arr, x+1, y, n, p+1)
  fill(arr, x-1, y, n, p+1)
  fill(arr, x, y+1, n, p+1)
  fill(arr, x, y-1, n, p+1)
  fill(arr, x+1, y-1, n, p+1)
  fill(arr, x+1, y+1, n, p+1)
  fill(arr, x-1, y-1, n, p+1)
  fill(arr, x-1, y+1, n, p+1)      
  return p;
}
const breakPieces = function(shape) {

  let a = shape.split("\n");
  let arr = []
  let row = []
  let maxr = 0
  for (item of a) { 
    if (item.length +2 >maxr) maxr = item.length + 2
    row = [0,...item.split('').map((i) => i != ' ' ? 2 : 0 ), 0] 
    if (row.length < maxr) {
      row = [...row, ...Array(maxr - row.length).fill(0)]
    }  
    arr.push(row)
  }  
  const maxy = arr[0].length
  const p = Array(maxy).fill(0)
  arr.push(p)
  arr.unshift(p);
  const maxx = arr.length
  fill(arr, 0, 0, 1, 1)  
  let count = 3
  let point = {x:0, y:0, result: true}  
    do {
      point = find(arr, 0);
      if (point.result) {
        fill(arr, point.x, point.y, count)
        count++
      }        
  } while (point.result);
  
  return extractAll(arr, count)
}

// export for test
module.exports = breakPieces