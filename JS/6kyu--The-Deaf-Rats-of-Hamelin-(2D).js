/***********************************************************************************************************************************************************
*     KATA: 6 kyu "The Deaf Rats of Hamelin (2D)"
*   Source: https://www.codewars.com/kata/5c1448e08a2d87eda400005f/
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Those pesky rats have returned and this time they have taken over the Town Square.
*           
*           The Pied Piper has been enlisted again to play his magical tune and coax all the rats towards him.
*           
*           But some of the rats are deaf and are going the wrong way!
*           
*           Kata Task
*           How many deaf rats are there?
*           
*           Input Notes
*           The Town Square is a rectangle of square paving stones (the Square has 1-15 pavers per side)
*           The Pied Piper is always present
*
*           Output Notes
*           Deaf rats are those that are moving to paving stone further away from the Piper than where they are now
*           Use Euclidian distance for your calculations
*
*           Legend
*           P = The Pied Piper
*           ← ↑ → ↓ ↖ ↗ ↘ ↙ = Rats going in different directions
*           space = Everything else
*
*           Examples
*           ex1 - has 1 deaf rat
*           
*           ↗ P          
*             ↘   ↖
*             ↑          
*           ↗      
*
*           ex2 - has 7 deaf rats
*           
*               ↗          
*           P ↓   ↖ ↑
*               ←   ↓
*             ↖ ↙   ↙
*           ↓ ↓ ↓
*
***************************************************************************************************************************************************************************************************************************************/

function countDeafRats(townSquare) {
  // Your code here!
  let p = { x: 0, y: 0 }
  let rats = []
  
  for (let [j, st] of townSquare.entries())
    for (let i = 0; i < st.length; i++) 
      if (townSquare[j][i] != ' ') 
        townSquare[j][i] == 'P' ? p = { x: i, y: j } : rats.push( { x: i, y: j, v: townSquare[j][i] } )
          
    let result = 0

    for (let rat of rats) {
        rat.x = rat.x - p.x
        rat.y = rat.y - p.y
        let newPos = {}
        
        if (rat.v == '↖') 
          newPos = {x: rat.x-1, y: rat.y-1}

        if (rat.v == '↗') 
          newPos = {x: rat.x+1, y: rat.y-1}           

        if (rat.v == '↙') 
          newPos = {x: rat.x-1, y: rat.y+1}           

        if (rat.v == '↘') 
          newPos = {x: rat.x+1, y: rat.y+1}           

        if (rat.v == '↑') 
          newPos = {x: rat.x, y: rat.y-1}           

        if (rat.v == '↓') 
          newPos = {x: rat.x, y: rat.y+1}           

        if (rat.v == '←') 
          newPos = {x: rat.x-1, y: rat.y}           

        if (rat.v == '→') 
          newPos = {x: rat.x+1, y: rat.y}

        if ((rat.x ** 2 + rat.y ** 2) < (newPos.x ** 2 + newPos.y ** 2))
          result++
    }

  return result
}

module.exports = { countDeafRats }