// Test.describe("Example tests", ()=> {

//     Test.it("Example", () => {

//       var points = [
//         [2,2], // A
//         [2,8], // B
//         [5,5], // C
//         [6,3], // D
//         [6,7], // E
//         [7,4], // F
//         [7,9]  // G
//       ];

//       var result = closestPair(points);
//       result.sort();
//       Test.assertSimilar(result[0], [6,3]);
//       Test.assertSimilar(result[1], [7,4]);
//     });

//     Test.it("Two points", ()=> {
//       var points = [
//         [2,2], // A
//         [2,8], // B
//       ];

//       var result = closestPair(points);
//       Test.expect( Array.isArray(result), 'The output must be an array');
//       result.sort();
//       Test.assertSimilar(result[0], [2,2]);
//       Test.assertSimilar(result[1], [2,8]);
//     });

//     Test.it("Duplicated point", () => {

//       var points = [
//         [2,2], // A
//         [2,8], // B
//         [5,5], // C
//         [5,5], // C
//         [6,3], // D
//         [6,7], // E
//         [7,4], // F
//         [7,9]  // G
//       ];

//       var result = closestPair(points);
//       result.sort();
//       Test.assertSimilar(result[0], [5,5]);
//       Test.assertSimilar(result[1], [5,5]);
//     });
//   });

const {
  closestPair,
} = require("../3kyu--Closest-pair-of-points-in-linearithmic-time.js")


describe("3kyu. Closest pair of points in linearithmic time test", function () {
  test("#1. closestPair should return [[6,3], [7,4]] ", () => {
    let points = [
      [2, 2], // A
      [2, 8], // B
      [5, 5], // C
      [6, 3], // D
      [6, 7], // E
      [7, 4], // F
      [7, 9], // G
    ]
    let solution = [
      [6, 3],
      [7, 4],
    ]
    expect(closestPair(points).sort()).toEqual(solution)
  })

  test('#2. Two points. "closestPair should return [[2,2], [2,8]] ', () => {
    let points = [
      [2, 2], // A
      [2, 8], // B
    ]
    let solution = [
      [2, 2],
      [2, 8],
    ]
    expect(closestPair(points).sort()).toEqual(solution)
  })

  test('#3. Duplicated point. "closestPair should return [[5,5], [5,5]] ', () => {
    let points = [
      [2, 2], // A
      [2, 8], // B
      [5, 5], // C
      [5, 5], // C
      [6, 3], // D
      [6, 7], // E
      [7, 4], // F
      [7, 9], // G
    ]
    let solution = [
      [5, 5],
      [5, 5],
    ]
    expect(closestPair(points).sort()).toEqual(solution)
  })
})
