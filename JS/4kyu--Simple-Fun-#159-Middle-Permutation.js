/***********************************************************************************************************************************************************
 *    KATA: 4 kyu "Simple Fun #159: Middle Permutation"
 *  Source: https://www.codewars.com/kata/58ad317d1541651a740000c5
 *  Author: https://www.codewars.com/users/GordonBreazz
 *
 *    PLOT: You are given a string s. Every letter in s appears once. Consider all strings formed by rearranging 
 *          the letters in s. After ordering these strings in dictionary order, return the middle term. 
 *          (If the sequence has a even length n, define its middle term to be the (n/2)th term.)
 *
 *          Example
 *              For s = "abc", the result should be "bac".
 *              The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".
 *           
 *          Input/Output
 *              [input] string s
 *              unique letters (2 <= length <= 26)
 *           
 *          [output] a string
 *              middle permutation.
 *
 ***********************************************************************************************************************************************************/

 // function implements an integer division of large numbers.
function calculateDiv(string, d) {
    let num = string,
    numLength = num.length,
    remainder = 0,
    answer = '',
    i = 0
    while (i < numLength + 3) {
        let digit = i < numLength ? parseInt(num[i]) : 0;
        if (i == numLength) break
        answer = answer + Math.floor((digit + (remainder * 10)) / d)
        remainder = (digit + (remainder * 10)) % d
        i++;
    }
    while (answer[0] == '0')
        answer = answer.slice(1)
    if (answer == '') answer = '0'  
    return answer
}

// function implements the remainder of the division of large integer numbers.
function calculateMod(string, mod) {
  let str = string  
  var n = str.length;
  if (n <= 10) 
      return parseInt(str) % mod;
  var first = str.substring(0, n - 10)
  var second = str.substring(n - 10)
  return (calculateMod(first, mod) * (Math.pow(10, 10) % mod) + parseInt(second) % mod) % mod;  
}

// function to get Factoradic representation of a number 
function factoradic(number){
  let result = []
  let i = 1
  n = String(number)
  while (n != '0'){    
    result.unshift(calculateMod(n, i))    
    n = calculateDiv(n, i)
    i++
  }
  return result
}

// function takes a string and positions number(n) and returns the nth lexicographic permutaion of string
function permutation(string, n){
  let letters = string.split('').sort()
  let positions = factoradic(n)  
  
  while (positions.length < letters.length)
    positions.unshift(0)  
  
  let result = ''
  for (let i=0; i < positions.length; i++){
    result += letters[positions[i]]
    letters.splice(positions[i], 1)
  }      
  return result
}

function middlePermutation(s) {
 // This list contains precalculate values from expression: "fact(i) / 2 - 1". Where fact(I) is the factorial of the number I  
  const factTable =  ['-1',
                      '-1',
                      '0' ,
                      '2' ,
                      '11' ,
                      '59' ,
                      '359' ,
                      '2519' ,
                      '20159' ,
                      '181439' ,
                      '1814399' ,
                      '19958399' ,
                      '239500799' ,
                      '3113510399' ,
                      '43589145599' ,
                      '653837183999' ,
                      '10461394943999' ,
                      '177843714047999' ,
                      '3201186852863999' ,
                      '60822550204415999' ,
                      '1216451004088319999',
                      '25545471085854719999',
                      '562000363888803839999',
                      '12926008369442488319999',
                      '310224200866619719679999',
                      '7755605021665492991999999',
                      '201645730563302817791999999',
                      '5444434725209176080383999999',
                      '152444172305856930250751999999',
                      '4420880996869850977271807999999']      
  //coding and coding..  
  let middle = factTable[s.length]   
  return permutation(s, middle)  
}

module.exports = { middlePermutation }

