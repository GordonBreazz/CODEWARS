// String has some very useful methods to let you search for a sub-string within another string. It even lets you specify which index to search from, or even lets you search backwards! But it doesn't let you do all this with regular expressions (regex). Let's fix that.
// Replace the String prototype's .indexOf() and .lastIndexOf() methods to replicate the functionality of the original methods, but let you use a regex to search for a matching string as well as a regular old string.
// They should each accept a value as the first parameter. This will be the sub-string or regex to search for. Then, they should accept an optional fromIndex parameter, an integer that will dictate where the method should start searching from.
// They should return the index of the found string, or a -1 if no match was found.
// One thing to note when going into the .lastIndexOf() implementation is that the fromIndex is the last index that the matched string can start from. The sub-string or regex match can trail after that index, but the index of that first character must be at the fromIndex or lower.
// Well, I think that's about it. Stretch your fingers, crack your knuckles, and go for it! Enjoy!
String.prototype.indexOf = function(subSt, fromIndex){
    // ...
    if (!fromIndex) fromIndex = 0
    if (String(this).search(subSt) == -1) return -1    
    let result = String(this).slice(fromIndex).search(subSt)  
    return ~result ? result + fromIndex : -1
  }
  
  String.prototype.lastIndexOf = function(subSt, fromIndex){   
     let st =  String(this)     
     let result = st.search(subSt)
     if (result == -1) return -1      
     let max = -1 
     let limit = fromIndex + 2
     if (!fromIndex) {
       limit = st.length 
       fromIndex = limit
     }    
     for (let i=0; i < limit; i++) {     
       result = st.slice(i, limit).search(subSt)
       if (~result) result += i
       if (result > max && result <= fromIndex) max = result
     }    
     return max
  }