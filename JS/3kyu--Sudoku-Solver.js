/*
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);

Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]]
*/

function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9 
      const valid = (x,y) => {
      var v = [];
      for(var i=0; i<3; i++) {
        for(var j=0; j<3; j++) {
          v.push(puzzle[x][i*3+j])
          v.push(puzzle[i*3+j][y])
          v.push(puzzle[3*Math.floor(x/3)+i][3*Math.floor(y/3)+j])
        }
      }
      return [1,2,3,4,5,6,7,8,9].filter(e => v.indexOf(e) == -1)
    }
    const rec = (x,y) => {
      if(y == 9) {
        return puzzle
      } else if (!puzzle[x][y]) {
        const correct = valid(x,y).some(i => {
          puzzle[x][y] = i;
          return rec((x+1)%9,y+(x==9?1:0))
        })
        if (correct)
          return puzzle;
        puzzle[x][y] = 0;
      } else {
        return rec((x+1)%9,y+(x==8?1:0))
      }
    }
    return rec(0,0)
  }

module.exports = {sudoku}