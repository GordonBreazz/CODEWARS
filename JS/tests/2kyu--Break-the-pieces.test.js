//const {breakPieces} = require('../2kyu--Break-the-pieces.js')
const breakPieces = require('../2kyu--Break-the-pieces.js');


var shape = 
["+------------+",
 "|            |",
 "|            |",
 "|            |",
 "+------+-----+",
 "|      |     |",
 "|      |     |",
 "+------+-----+"].join("\n");

var solution = [
 ["+------------+",
  "|            |",
  "|            |",
  "|            |",
  "+------------+"].join("\n"),
 ["+------+",
  "|      |",
  "|      |",
  "+------+"].join("\n"),
 ["+-----+",
  "|     |",
  "|     |",
  "+-----+"].join("\n")
]

test('breakPieces should return three shapes ', () => {
  //expect(breakPieces(shape).sort()).toEqual(solution.sort)
  //  let a = shape.sort( function(a, b){
  //    if (a > b) return 1
  //    if (a < b) return -1
  //    if (a == b) return 0
  //   })
  //  let b = solution.sort(function(a, b){return a > b})
  expect( breakPieces(shape).sort()).toEqual(solution.sort()) 
})


//Test.assertSimilar(solution.sort(), breakPieces(shape).sort());