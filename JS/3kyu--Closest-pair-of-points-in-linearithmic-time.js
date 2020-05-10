/*
Given a number of points on a plane, your task is to find two points with the smallest distance between them in linearithmic O(n log n) time.

Example
  1  2  3  4  5  6  7  8  9
1  
2    . A
3                . D
4                   . F       
5             . C
6              
7                . E
8    . B
9                   . G
For the plane above, the input will be:

[
  [2,2], // A
  [2,8], // B
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,9]  // G
]
=> closest pair is: [[6,3],[7,4]] or [[7,4],[6,3]]
(both answers are valid)
The two points that are closest to each other are D and F.
Expected answer should be an array with both points in any order.

Goal
The goal is to come up with a function that can find two closest points for any arbitrary array of points, in a linearithmic time.

Note: for compatibility reasons, your function will be called with one additional parameter, a distance calculation function. However you can completely ignore it, and you do not have to account for it - it's there only to keep compatibility with old solutions.
*/
// Calculate a pair of closest points in linearithmic time
let minDist
let ansa , ansb

function compareX(a, b) { 
    return (a.x - b.x); 
} 

function compareY(a, b) {     
    return (a.y - b.y); 
} 

function qqdist(p1, p2) 
{  
    let result = Math.sqrt( (p1.x - p2.x)*(p1.x - p2.x) + (p1.y - p2.y)*(p1.y - p2.y))
    if (result < minDist) {      
      minDist = result
      ansa = p1
      ansb = p2      
    }

    return result
} 

function bruteForce(P, n) {      
    if (P.length == 0) return minDist
    for (let i = 0; i < n; ++i) 
        for (let j = i+1; j < n; ++j)             
            qqdist(P[i], P[j])          
    return minDist; 
} 

function fmin(x, y) { 
    return (x < y) ? x : y; 
} 

function stripClosest(strip, size, d) 
{ 
    let min = d;  // Initialize the minimum distance as d 
  
    // Pick all points one by one and try the next points till the difference 
    // between y coordinates is smaller than d. 
    // This is a proven fact that this loop runs at most 6 times 
    for (let i = 0; i < size; ++i) 
        for (let j = i+1; j < size && (strip[j].y - strip[i].y) < min; ++j) 
            if (qqdist(strip[i],strip[j]) < min) 
                min = qqdist(strip[i], strip[j]); 
  
    return min; 
} 

// A recursive function to find the smallest distance. The array Px contains 
// all points sorted according to x coordinates and Py contains all points 
// sorted according to y coordinates 
function closestUtil(Px, Py, n) {     
    if (n <= 3) return bruteForce(Px, n); 
  
    let mid = Math.floor(n / 2); 
    let midPoint = Px[mid]; 
  
    let Pyl = new Array(mid);   // y sorted points on left of vertical line 
    let Pyr = new Array(n-mid);  // y sorted points on right of vertical line 
  
    let li = 0
    let ri = 0;  // indexes of left and right subarrays
    
    for (let i = 0; i < n; i++) { 
      if (Py[i].x <= midPoint.x && li < mid) 
        Pyl[li++] = Py[i]; 
      else
        Pyr[ri++] = Py[i]; 
    } 

    // Consider the vertical line passing through the middle point 
    // calculate the smallest distance dl on left of middle point and 
    // dr on right side 
    
    let arr1 = Px.slice(0, mid)
    let arr2 = Px.slice(mid+1)    
    
    let dl = closestUtil(arr1, Pyl, arr1.length); 
    let dr = closestUtil(arr2, Pyr, arr2.length); 
  
    // Find the smaller of two distances 
    let d = fmin(dl, dr); 
  
    // Build an array strip[] that contains points close (closer than d) 
    // to the line passing through the middle point 
    let strip = new Array(n); 
    let j = 0; 
    for (let i = 0; i < n; i++) 
        if (Math.abs(Py[i].x - midPoint.x) < d) {
            strip[j] = Py[i]
            j++; 
        }   
  
    // Find the closest points in strip.  Return the minimum of d and closest 
    // distance is strip[] 
    return stripClosest(strip, j, d); 
} 

function closest(P, n) {    
    let Px = [...P].sort(compareX)
    let Py = [...P].sort(compareY)

    closestUtil(Px, Py, n); 
    return [[ansa.x, ansa.y], [ansb.x, ansb.y]]
} 

const closestPair = function(points) {
  minDist = Number.MAX_VALUE
  if (points.length == 2 ) return points

  let arr = points.map((item, i) => ({ x: item[0], y: item[1] }))
  return closest(arr, arr.length)
}

module.exports = {closestPair}