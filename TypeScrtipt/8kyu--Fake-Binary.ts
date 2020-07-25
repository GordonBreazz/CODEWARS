/**************************************************************************************************************************************************************************************
 * 
 * 8kyu "Fake Binary"
 * 
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 * 
 **************************************************************************************************************************************************************************************/

export const fakeBin = (x:string):string => {
    // your code here
    let result:string = ''
    for (let i = 0; i < x.length; i++)
      result +=  Number(x[i]) > 4 ? '1' : '0'
    return result
};