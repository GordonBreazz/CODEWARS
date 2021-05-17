function work(sample, st) {
    for (let ch of sample) {
      let tmp = ''
      for (let i = 0; i < st.lengthl i++){
        if (st[i].toLowerCase() == ch.toLowerCase()) {
          
        }
        else 
          tmp += st[i]
      }
      st = tmp
    }
    return st
  }
  
  function workOnStrings(a,b){
      //..
    return work(b, a) + work(a, b)
  }
  