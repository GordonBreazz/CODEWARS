function comp(array1, array2){
    //your code here
  
    //let arr = array2.map( item => Math.sqrt(item)).reduce( (result, i2) => result && Boolean(array1.find( i1 => i1 == i2)))
    //let arr = array2.map( item => Math.sqrt(item)).map( i2 => i2*1000)
    if ( !(Boolean(array1) && Boolean(array2)) ) return false
    array1 = array1.sort( (a, b) => a > b)
    array2 = array2.sort( (a, b) => a > b).map( item => Math.sqrt(item) || 0)
    let result = true
    for (let i = 0; i < array2.length; i++)
      if (array1[i] != array2[i] ) return false
    return result
  }