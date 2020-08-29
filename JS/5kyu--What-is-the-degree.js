/***********************************************************************************************************************************************************
*     KATA: 5 kyu "What’s the degree?"
*   Source: https://www.codewars.com/kata/55fde83eeccc08d87d0000af
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Write a function that returns the degree of a polynomial function:
*           
*             degree(x => 42);                    // 0
*             degree(x => x);                     // 1
*             degree(x => x * x);                 // 2
*             degree(x => x * x * x);             // 3
*             degree(x => 2 * x + 3 * x * x + 5); // 2
*
*           Assume that the polynomial has a maximum degree of 11
*           The input x of the polynomial function must be between -11 and 11
*           use integers to get exact results without rounding errors
*  
************************************************************************************************************************************************************/        

function degree(p) {   
    let xs = [], ys = [], degree = 0
    for (let x = -11; x <= 11; x++){
      xs.push(x)
      ys.push(p(x))
    }
 
    while (!ys.every(v => v === ys[0])) {
      ys = ys.map((v, i) => v - ys[i - 1]).filter(v => v === v)
      degree++
    }
 
    return degree
  }

  module.exports = { degree }
