/***********************************************************************************************************************************************************
*     KATA: 6 kyu "Bouncing Balls"
*   Source: https://www.codewars.com/kata/5544c7a5cb454edb3c000047
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: His mother looks out of a window 1.5 meters from the ground.
*           How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
*           
*           Three conditions must be met for a valid experiment:
*           Float parameter "h" in meters must be greater than 0
*           Float parameter "bounce" must be greater than 0 and less than 1
*           Float parameter "window" must be less than h.
*           If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
*           
*           Note:
*           The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
*           
*           Example:
*           - h = 3, bounce = 0.66, window = 1.5, result is 3*           
*           - h = 3, bounce = 1, window = 1.5, result is -1 
*           
*           (Condition 2) not fulfilled).
*
***********************************************************************************************************************************************************/

export function bouncingBall(h: number, bounce: number, window: number): number {
    // your code
    if (h <= 0 || bounce <=0 || bounce >= 1 || window >= h) return -1
  
    let result: number = 1  
    let altitude: number = h * bounce
    
    while (altitude > window) {
      result += 2
      altitude = altitude * bounce    
    }
    
    return result
  }