/***********************************************************************************************************************************************************
*     KATA: 5 kyu "Blackjack Scorer"
*   Source: https://www.codewars.com/kata/534ffb35edb1241eda0015fe
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Complete the function that determines the score of a hand in the card game Blackjack (aka 21).
*           The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") 
*           and should return the score of the hand (integer).
*           
*           Scoring rules:
*             Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.
*             Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return 
*             the smallest score more than 21.
*  
************************************************************************************************************************************************************/        

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

  module.exports = { scoreHand }


