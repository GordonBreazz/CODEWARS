/***********************************************************************************************************************************************************
*     KATA: 5 kyu "Base64 Encoding"
*   Source: https://www.codewars.com/kata/5270f22f862516c686000161/
*   Author: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: Extend the String object (JS) or create a function (Python, C#) that converts the value of the String 
            to and from Base64 using the ASCII (UTF-8 for C#) character set.
*           
*           Do not use built in functions.
*           
*           Usage:
*           
*           // should return 'dGhpcyBpcyBhIHN0cmluZyEh'
*           toBase64('this is a string!!');
*           
*           // should return 'this is a string!!'
*           fromBase64('dGhpcyBpcyBhIHN0cmluZyEh'); 
*           You can learn more about Base64 encoding and decoding here.
*           
*           Note: This kata uses the non-padding version ("=" is not added to the end).
*
***********************************************************************************************************************************************************/

export function toBase64(str: string): string {
    // Encode this string to Base64
    return Buffer.from(str, 'binary').toString('base64')
    
  }
  
export function fromBase64(str: string): string {
    // Decode this string from Base64
    return Buffer.from(str, 'base64').toString('binary')
  }