/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Range Extraction" 
*
*   SOURCE: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: A format for expressing an ordered list of integers is to use a comma separated list of either individual integers
*           or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
*           Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
*           
*           Example:  solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
*           // returns "-6,-3-1,3-5,7-11,14,15,17-20"
***************************************************************************************************************************************************************************************************************************************/

const solution = (a) => [...a.sort( (a, b) => a-b ),''].reduce((st, item, i, arr) => i==0 ?  st += item : ( item != arr[i-1]+1 ) ? st += ' - ' + arr[i-1] + ', ' + item :  st = st, '')
                                                       .split(',')
                                                       .map((item) => (eval(item) == 0 ? item.slice(0, item.indexOf(' - ')) : eval(item) == -1 ? item.replace(' - ',',') : item).trim())
                                                       .slice(0, -1)
                                                       .join(', ')
                                                       .replace(/\s/g,'')

module.exports = { solution }                                                       