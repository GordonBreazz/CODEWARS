/*********************************************************************************************************************************************************************************************************
 * 
 *  4 kyu "Simplifying multilinear polynomials"
 * 
 * When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!
 * Write a function: simplify, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), 
 * and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):
 * 
 * All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.: "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"
 * 
 * All monomials appears in order of increasing number of variables, e.g.: "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"
 * 
 * If two monomials have the same number of variables, they appears in lexicographic order, e.g.: "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"
 * 
 * There is no leading + sign if the first coefficient is positive, e.g.:"-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"
 * 
*********************************************************************************************************************************************************************************************************/

//object for the term of the equation
function Part(value){
    this.name = value.replace( /\-|\+|\d/g, "");
    this.tally = value.replace( /[a-z]|[A-Z]/g, "");
    if (this.tally == '-') this.tally = -1;  
    if (this.tally == '+') this.tally = 1;  
    this.tally = Number(this.tally);
    this.elementOrder = function() {      
      return String(this.name.length) + this.name;  
    };
    
    this.fullNameWithSing = function() {
      if (this.tally == 0) return '';
      
      let sing ='';
      if (this.tally > 0) sing = '+';
      
      if (this.tally == 1) return sing+this.name;
      if (this.tally == -1) return '-'+this.name;
      
      return sing+String(this.tally)+this.name;
    };
    return this;
  }  
  
  function simplify(poly){
    //your code here  
    let parts = []; 
    
    let polyline = poly.replace( /-/g, "|-");
    polyline = polyline.replace( /\+/g, "|+");
    if (polyline[0] !=='|') polyline = '|+' + polyline;
  
    let arr = polyline.split('|');   
    arr.shift();
    arr.forEach(function(item, i, arr) {
      
      let eqPart = new Part(arr[i]);
      
      eqPart.name = eqPart.name.split('').sort().join(''); //monomials  sort
      
      let p = 0;
      let fl = false;
      for (; p<parts.length; p++)
        if (parts[p].name == eqPart.name){
          fl = true; 
          break;
        }  
      if (fl) parts[p].tally += eqPart.tally
        else parts.push(eqPart);
  });
   
    parts.sort(function(a, b) {
       if (a.elementOrder() < b.elementOrder()) return -1;
       if (a.elementOrder() > b.elementOrder()) return 1;
    });
    
    let rst = ''; // assembling equations from parts
    
    parts.forEach(function(item) {
       if (item.tally !== 0) rst += item.fullNameWithSing();     
    });
      
    return rst[0] == '+' ? rst = rst.substring(1): rst;
  }

  module.exports = { simplify }  