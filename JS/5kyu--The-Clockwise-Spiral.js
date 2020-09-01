/***********************************************************************************************************************************************************
*     KATA: 5 kyu "The Clockwise Spiral"
*   Source: https://www.codewars.com/kata/536a155256eb459b8700077e
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Do you know how to make a spiral? Let's test it!
*           Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.
*           
*           Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.
*           
*           Return an empty array if N < 1 or N is not int / number
*           
*           Examples:
*           
*           N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
*           
*               1    2    3    
*               8    9    4    
*               7    6    5    
*           
*           N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
*           
*               1   2   3   4
*               12  13  14  5
*               11  16  15  6
*               10  9   8   7
*           
*           N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
*           
*               1   2   3   4   5    
*               16  17  18  19  6    
*               15  24  25  20  7    
*               14  23  22  21  8    
*               13  12  11  10  9
*  
************************************************************************************************************************************************************/        

function createSpiral(N) {

    if (N == 0 || !Number.isInteger(N) ) return []
    
    let arr = new Array(N).fill(0).map( item => new Array(N).fill(0) ); //create matrix array
      
    let dirs = [{dx: 1, dy: 0, dl: 0},
                {dx: 0, dy: 1, dl: 0},
                {dx:-1, dy: 0, dl: 0},
                {dx: 0, dy:-1, dl: 1}]  
    
    let point = {
      x: 1,
      y: 1,
      count: 1,
      direction: 0,
      len: 1,
      maxLen: N,
      
      changeDirection: function(){
        this.len = 1
        this.direction++
        if ( this.direction > 3 ) {
          this.direction = 0
          dirs[1].dl = 1
        }  
        this.maxLen = this.maxLen - dirs[this.direction].dl    
        return this.direction
      },
      
      step: function(){
        this.len++;
        this.x = this.x + dirs[this.direction].dx;
        this.y = this.y + dirs[this.direction].dy;
        if (this.len >= this.maxLen) this.changeDirection();
        return this.count++;
      }
    }
    
    do 
      arr[point.y - 1][point.x - 1] = point.step()
    while (point.count <= N*N);
    
    return arr 
    
    }

    module.exports = { createSpiral }