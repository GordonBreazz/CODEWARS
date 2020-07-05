String.prototype.indexOf = function(subSt, fromIndex){
    // ...
    if (!fromIndex) fromIndex = 0
    if (String(this).search(subSt) == -1) return -1    
    let result = String(this).slice(fromIndex).search(subSt)  
    return ~result ? result + fromIndex : -1
  }
  
  String.prototype.lastIndexOf = function(subSt, fromIndex){   
     let st =  String(this)     
     let result = st.search(subSt)
     if (result == -1) return -1      
     let max = -1 
     let limit = fromIndex + 2
     if (!fromIndex) {
       limit = st.length 
       fromIndex = limit
     }    
     for (let i=0; i < limit; i++) {     
       result = st.slice(i, limit).search(subSt)
       if (~result) result += i
       if (result > max && result <= fromIndex) max = result
     }    
     return max
  }