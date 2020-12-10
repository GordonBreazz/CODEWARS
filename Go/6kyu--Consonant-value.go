package kata


func solve(str string) int {
  // Your code here, happy coding!

  max, sum := 0, 0
  for _, ch := range(str) {    
    switch ch {
      case 'a', 'e', 'i', 'o', 'u': 
          sum = 0
      default: 
          sum += int(ch) - 96
    }   
    if sum > max {
      max = sum
    }
  }
  return max  
}