/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "The Deaf Rats of Hamelin" 
*
*   SOURCE: https://www.codewars.com/kata/598106cb34e205e074000031
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
* 
*     PLOT: The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
*           But some of the rats are deaf and are going the wrong way!
*           
*           Kata Task
*           How many deaf rats are there?
*           
*           Legend
*           P = The Pied Piper
*           O~ = Rat going left
*           ~O = Rat going right
*           Example
*           ex1 ~O~O~O~O P has 0 deaf rats
*           ex2 P O~ O~ ~O O~ has 1 deaf rat
*           ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*
***************************************************************************************************************************************************************************************************************************************/


let countDeafRats = function(town) {
    // Your code here
    
    function rightDirection(st) {
      let count = 0
      for (let i=0; i<st.length; i+=2){
        if (st[i] === 'O') count++ 
      }  
      return count 
    }
    
    function leftDirection(st) {
      let count = 0
      for (let i=st.length-1; i>-1; i-=2){
        if (st[i] === 'O') count++ 
      }  
      return count 
    }
    
    let flows = town.replace(/ /g, '').split('P')
      console.log(flows)
    
    if (flows[1] == '') return rightDirection(flows[0])
    if (flows[0] == '') return leftDirection(flows[1])
    
    return  rightDirection(flows[0]) + leftDirection(flows[1]);
  }

  module.exports = { countDeafRats }