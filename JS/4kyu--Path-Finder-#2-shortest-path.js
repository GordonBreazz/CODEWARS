/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Path Finder *2: shortest path"
*
*   SOURCE: https://www.codewars.com/kata/57658bfa28ed87ecfa00058a
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal 
*           directions (i.e. North, East, South, West). Return the minimal number of steps to exit 
*           position [N-1, N-1] if it is possible to reach the exit from the starting position. 
*            Otherwise, return false in JavaScript/Python and -1 in C++/C/Java.
*
*            Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty 
*            in all test cases.
*
****************************************************************************************************************************************************************************************************************************************/

function wavExpansion(field, wave) {
    if (wave.length == 0) return false
    let neWave = []
    for (let item of wave) {
      let [dy, dx] = item
      let c = Number(field[dy][dx]) + 1   
      if (field[dy][dx + 1] === '.') {
        neWave.push([dy, dx + 1])
        field[dy][dx + 1] = c
      }
      if (field[dy][dx - 1] === '.') {
        neWave.push([dy, dx - 1])
        field[dy][dx - 1] = c     
      }
      if (field[dy + 1][dx] === '.') {
        neWave.push([dy + 1, dx])
        field[dy + 1][dx] = c      
      }
      if (field[dy - 1][dx] === '.') {
        neWave.push([dy - 1, dx])
        field[dy - 1][dx] = c          
      }    
    }
    wavExpansion(field, neWave)
    return true  
  }
  
  function pathFinder(maze){
    if (maze.length == 1) return 0
    let field = [],
        emty = 'W'
    maze.split('\n').forEach(
      (el) => field.push(
        [emty, ...el.split(''), emty]
      )
    )  
    let l = field[0].length,
        dummy = Array(l).fill(emty)
    field.unshift(dummy)
    field.push(dummy)
    field[1][1] = 0
    wavExpansion(field, [[1, 1]])  
    return (field[l - 2][l - 2] == '.') ? false : field[l - 2][l - 2]  
  }

  module.exports = {pathFinder}