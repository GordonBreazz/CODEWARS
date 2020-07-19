/*********************************************************************************************
 Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'

Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
  
***********************************************************************************************/

function solution(number) {
    // convert the number to a roman numeral
  
    //console.log('input:',number);  
    
    let m = Math.floor(number / 1000);
    if (m>0) number = number % 1000;
      
    let c = Math.floor(number / 100);
    if (c>0) number = number % 100;
    
     let x = Math.floor(number / 10);
    if (x>0) number = number % 10;
     
    
    function rpt(ch1,ch2,ch3,p){      
      if (p<1) return '';
      
      //console .log('ok',ch1,ch2,ch3,p);
      
      let st = '';
      
      switch (p) {
      case  1: 
      case  2: 
      case  3: 
        st = ch1.repeat(p);
        break;
      case 4:
        st = ch1+ch2
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        st = ch2 + ch1.repeat(p - 5);
        break;
      case 9:
        st = ch1+ch3
        break;
      case 10:
        st = ch3;
        break 
      }
      return st;
    }
    
    return  'M'.repeat(m)+rpt('C','D','M',c)+rpt('X','L','C',x)+rpt('I','V','X',number);
  }

  module.exports = { solution }
