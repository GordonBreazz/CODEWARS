/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 3 kyu "Binomial Expansion"
*
*   SOURCE: https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: The purpose of this kata is to write a program that can do some algebra. Write a function expand that 
*           takes in an expresion with a single, one character variable, and expands it. The expresion is in the 
*           form (ax+b)^n where a and b are integers which may be positive or negative, x is any one character long 
*           variable, and n is a natural number. If a = 1, no coeficient will be placed in front of the variable. 
*           If a = -1, a "-" will be placed in front of the variable.
* 
*           The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are 
*           the coefficients of the term, x is the original one character variable that was passed in the original 
*           expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing 
*           order. If the coeficient of a term is zero, the term should not be included. If the coeficient of a 
*           term is one, the coeficient should not be included. If the coeficient of a term is -1, only the "-" 
*           should be included. If the power of the term is 0, only the coeficient should be included. If the power 
*           of the term is 1, the carrot and power should be excluded.
*
*           Examples:
*                expand("(x+1)^2")      // returns "x^2+2x+1"
*                expand("(p-1)^3")      // returns "p^3-3p^2+3p-1"
*                expand("(2f+4)^6")     // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
*                expand("(-2a-4)^0")    // returns "1"
*                expand("(-12t+43)^2")  // returns "144t^2-1032t+1849"
*                expand("(r+0)^203")    // returns "r^203"
*                expand("(-x-1)^2")     // returns "x^2+2x+1"
*
****************************************************************************************************************************************************************************************************************************************/

function toPw(a, x, n) {  
    let coof = ''
    if (a != 1) {
      coof = String(Math.pow(a, n))
      if (coof == '-1' ) coof = '-'  
      if (coof == '1' ) coof = ''
    }
    return  coof + x + '^' + n        
  }
  
  function toX(st) {
    let result = {V: '', X: ''}
    let set = new Set('-0123456789')
    let value = ''
    for (let i = 0; i < st.length; i++)
      if (!set.has(st[i])) result.X += st[i]
        else value += st[i]
    if (result.X == '') result.X = '@'
    if (value == '-' || value == '') value += '1'
    result.V = Number(value) 
    return result
  }
  
  function pascalTri(n) {
    if (n == 0) return [1]
    if (n == 1) return [1, 1]
    let arr = [1, 2, 1]
    if (n == 2) return arr
    let result = []
    for (let j = 3; j <= n; j++) {
      result = [1]
      for (let i = 1; i < j; i++)
        result.push(arr[i-1] + arr[i])
      result.push(1)
      arr = result
    }
    return result
  }
  
  function newton(a, b, n) {
    let coefficients = pascalTri(n)
    let result = []
    for (let i = 0; i<=n; i++) {
      let tmp = []
      if (coefficients[i] > 1) tmp.push({value: coefficients[i], degree: 1, x: '@'})
      if (n - i > 0) {
        let ax = toX(a)
        tmp.push({value: ax.V, degree: (n - i), x: ax.X})
        if (tmp[tmp.length - 1].x != '@') {
          let c = tmp[tmp.length - 1].x
          tmp[tmp.length - 1].x = '@'
          tmp.push({value: 1, degree: (n - i), x: c})
        }
      }
      if (i > 0) {
        let bx = toX(b)
        tmp.push({value: bx.V, degree: i, x: bx.X})
        if (tmp[tmp.length - 1].x != '@') {
          let c = tmp[tmp.length - 1].x
          tmp[tmp.length - 1].x = '@'
          tmp.push({value: 1, degree: i, x: c})
        }
      }
      result.push(tmp)    
    }
    return result
  }
  
  function expand(expr) {
    let param = expr.split('^')
    let n = Number(param[1])
    let st = param[0].slice(1, -1)
    
    if (n == 0) return '1'
    if (n == 1) return st  
    
    let ab = st.replace(/\-/g, '+-').split('+').filter(item => item !== '')
    let a = toX(ab[0])
    let b = toX(ab[1])
    
    if (a.V == 0 & b.V == 0) return '0'
    
    if (b.V == 0) return toPw(a.V, a.X, n)
    if (a.V == 0) return toPw(b.V, b.X, n)
  
  
    if (a.V == 0) {
      let coof = ''
      if (b.V != 1) coof = String(Math.pow(b.V, n))
      if (b.V == -1) coof = '-'
      return coof + b.X + '^' + String(n)
    }    
    
    let arr = newton(ab[0], ab[1], n)
    let result = []
    for (let items of arr) {
      let mul = 1
      let res = ''
      for (let item of items) {
        if (item.x == '@') mul *= Math.pow(item.value, item.degree)
          else
            if (item.degree > 1) res += item.x + '^' + String(item.degree)
              else res += item.x            
      }
      if (mul == 1 && res.length != 0) result.push(res)
        else 
          if (mul == -1 && res.length != 0) result.push('-' + res)
            else result.push(String(mul) + res)
    }
    return result.join('+').replace(/\+\-/g,'-')
  }

  module.exports = { expand }