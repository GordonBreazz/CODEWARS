/***************************************************************************************************************************************************************************************************************************************
*
*     KATA: 7 kyu "Highest and Lowest"
*
*   SOURCE: https://www.codewars.com/kata/554b4ac871d6813a03000035
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: In this little assignment you are given a string of space separated numbers, and have to return
*           the highest and lowest number.
*
*           Example:
*
*              highAndLow("1 2 3 4 5");  // return "5 1"
*              highAndLow("1 2 -3 4 5"); // return "5 -3"
*              highAndLow("1 9 3 4 -5"); // return "9 -5"
*
*           Notes:
*
*           All numbers are valid Int32, no need to validate them.
*           There will always be at least one number in the input string.
*           Output string must be two numbers separated by a single space, and highest number is first.
*
****************************************************************************************************************************************************************************************************************************************/

function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ');
    let minInt = arr[0], maxInt = arr[0];
  
    arr.forEach(
      function(item){
        if (+item > maxInt)
          maxInt = item;
        if (+item < minInt)
          minInt = item;
      }  
    )
  
   return maxInt + ' ' + minInt;
  }