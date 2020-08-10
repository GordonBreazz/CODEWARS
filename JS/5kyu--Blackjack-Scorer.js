function scoreHand(cards) {
    // TODO  
    let aces = 0   
    let sum =  cards.reduce( 
                 (s, item) => !isNaN( Number(item) ) ? s + Number(item) : item == 'A'  ? (aces++, s) : s + 10 
               , 0)              
    if (aces == 0) return sum
    
    let sumAces = aces * 11
    
    for (let j=1; j<=aces; j++){
      if (sum  + sumAces <= 21) break  
      sumAces -= 10    
    }  
    return sum  + sumAces
  }