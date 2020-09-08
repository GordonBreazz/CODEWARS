/***********************************************************************************************************************************************************
*     KATA: 5 kyu "Beeramid"
*   Source: https://www.codewars.com/kata/51e04f6b544cf3f6550000c1
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Let's pretend your company just hired your friend from college and paid you a referral bonus. 
*           Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral 
*           bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those 
*           beers, because let's pretend it's Friday too.
*           
*           A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 
*           9 in the next, 16, 25...
*           
*           Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, 
*           given the parameters of:
*           
*           1) your referral bonus, and           
*           2) the price of a beer can
*           
*           For example:
*              beeramid(1500, 2); // should === 12
*              beeramid(5000, 3); // should === 16
*
***************************************************************************************************************************************************************************************************************************************/

// Returns number of complete beeramid levels
let beeramid = function(bonus, price) {
    let beer = Math.floor(bonus / price)
    let x = 1
    let squareNumber = 0
    let level = 0
    while (beer > 0) {
      squareNumber += x
      x += 2
      beer -= squareNumber
      if (beer >= 0)
        level += 1    
    }
    return level  
}

module.exports = { beeramid }
