/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Human readable duration format" 
*
*   SOURCE: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript/5bc61ad201249cfef3000194
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
*
*           The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, 
*           days, hours, minutes and seconds.
*           
*           It is much easier to understand with an example:
*           
*           formatDuration(62)    // returns "1 minute and 2 seconds"
*           formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
*           For the purpose of this Kata, a year is 365 days and a day is 24 hours.
*           
*           Note that spaces are important.
*           
*           Detailed rules
*           The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, 
*           separated by a space. The unit of time is used in plural if the integer is greater than 1.
*           
*           The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be 
*           written in English.
*           
*           A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year 
*           and 1 second is.
*           
*           Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
*           
*           A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
*           
*           A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. 
/***************************************************************************************************************************************************************************************************************************************/

function div(val, by){
    return (val - val % by) / by;
}

function printTPart(nbr, name){
let dem = '@'

if (nbr == 0 ) return '';
if (nbr == 1 ) return dem + nbr + ' ' + name;
  else return dem + nbr + ' ' + name + 's';
}

function formatDuration (seconds) {
  // Complete this function 
  let minutsInSec = 60;
  let hoursInSec = minutsInSec*60;
  let dayInSec = hoursInSec*24;
  let yearInSec = dayInSec*365;

  let y = div(seconds, yearInSec);  
  
  if (y > 0) seconds = seconds % yearInSec;
  
  let d = div(seconds, dayInSec);  
  if (d > 0) seconds = seconds % dayInSec;
    
  let h = div(seconds, hoursInSec);
  if (h > 0) seconds = seconds % hoursInSec;
    
  let m = div(seconds, minutsInSec);
  if (m > 0) seconds = seconds % minutsInSec;
  
  let output = '';
  let outputSt = printTPart(y, 'year') + printTPart(d, 'day') + printTPart(h, 'hour') + printTPart(m, 'minute') + printTPart(seconds, 'second');
  
  let p = 0;
  let ch = '';
  
  for (let i=outputSt.length-1; i>=1; i--) {    
    ch = outputSt.charAt(i);
    if (ch == '@') {
      p++;
      p > 1 ? ch = ', ' : ch = ' and '
    } 
    output = ch + output;   
  }  
  if (output == '') output = 'now';

  return output;
}

// export for test
module.exports = { formatDuration }
