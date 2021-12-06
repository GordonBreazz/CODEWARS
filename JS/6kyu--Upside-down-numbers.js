function isUpsideDown(number) {
    if (number < 10)
      return number === 0 || number === 1 || number === 8
    const st = number.toString(),
          l = st.length - 1,
          half = (l - l % 2) / 2 + 1 
    for (let i = 0; i < half; i++) {
      if (st[i] === "6" && st[l-i] === "9" || st[i] === "9" && st[l-i] === "6") continue        
      if (st[i] !== st[l - i]) return false
      if (!(st[i] == "0" || st[i] == "1" || st[i] == "8")) return false
    }
    return true  
  }
  
  function solve(x, y) {
   //..
    let count = 0
    for (let i = x; i < y; i++)
      if (isUpsideDown(i)) count++
    return count
  };