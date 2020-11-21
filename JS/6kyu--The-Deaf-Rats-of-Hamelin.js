var countDeafRats = function(town) {
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