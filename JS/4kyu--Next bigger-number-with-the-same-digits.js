/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "Next bigger number with the same digits"
*
*   SOURCE: https://www.codewars.com/kata/55983863da40caa2c900004e
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: 
*
****************************************************************************************************************************************************************************************************************************************/

Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
  function Remove(str, startIndex, count) {
      if (str.length == 1) return '';
      return str.substr(0, startIndex) + str.substr(startIndex + count);
  }
  
  function rcrs(a, alpha, arr, start){
   if (alpha=='') {
    if (Number(a)>start) {
      arr.push(Number(a));    
     }      
    return a;
   } 
   
   for (let i=0; i<alpha.length; i++){
     rcrs(a+alpha.charAt(i), Remove(alpha, i, 1), arr, start);}
    return a;  
   }  
  
  function nextBig(n){
  
    let arr = String(n).split(''); 
    let fl = false;
    let position = 0;
    
    arr[0] = Number(arr[0]);
    
    for (let i=1; i <arr.length; i++){
      arr[i] = Number(arr[i]); 
      if  (arr[i-1] < arr[i]){
        fl = true;
        position = i-1;
      }
    }
    if (fl == false) return -1; 
    
    // complicacy case -  brute force search 
    
    if (position < arr.length-2)
      if (arr[position] < arr[position+1]) {
        let part1 = String(n).slice(0,position);
        let part2 = String(n).slice(position);
  
        let opps = [];
        rcrs('', part2, opps, Number(part2));
        
        let resultBruteForceSearch = opps.min();
  
        return Number(part1+resultBruteForceSearch);
      }
    
  
  
    for (let i=position+1; i<arr.length; i++)
      if (arr[i] > arr[position]){ 
        c = arr[i];
        arr[i] = arr[position];
        arr[position] = c ;
        break;
      }  
    
    let  result = Number(arr.join(''));
    
    return result;
  }
  
  function nextBigger(n){
    let tmp = nextBig(n);  
      
    return tmp;  
  }