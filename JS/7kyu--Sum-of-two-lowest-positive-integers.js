function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  function sumTwoSmallestNumbers(numbers) {  
    //Code here
    numbers = numbers.sort(compareNumeric);
    
    return numbers[0]+numbers[1];
  }