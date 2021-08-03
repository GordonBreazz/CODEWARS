/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Path Finder *1: can you reach the exit?"
*
*   SOURCE: https://www.codewars.com/kata/5765870e190b1472ec0022a2
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions 
*           (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.
*
*           Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases.
*
****************************************************************************************************************************************************************************************************************************************/

const find = (x, y, c, field) => {
    if (field[y][x] == '@') return true
    if (field[y][x] == '.') {
      field[y][x] = c
      if (find(x + 1, y, c + 1, field)) return true
      if (find(x - 1, y, c + 1, field)) return true
      if (find(x, y + 1, c + 1, field)) return true
      if (find(x, y - 1, c + 1, field)) return true    
    }
    return false
  }
  
  function pathFinder(maze) {  
    if (maze.length == 1) return true
    const field = [],
          emty = ' '
    maze.split('\n').forEach(
      (el) => field.push(
        [emty, ...el.split(''), emty]
      )
    )    
    let l = field[0].length,
        dummy = Array(l).fill(emty)
    field.unshift([dummy])
    field.push([dummy])
    field[l-2][l-2] = '@'  
    return find(1, 1, 1, field)
  }

  module.exports = {pathFinder}