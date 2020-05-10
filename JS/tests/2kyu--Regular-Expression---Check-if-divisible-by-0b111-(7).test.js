const {solution} = require('../2kyu--Regular-Expression---Check-if-divisible-by-0b111-(7).js')
// Test.describe('Anti-cheat tests', function() {
//     Test.assertEquals(solution instanceof RegExp, true);
//     Test.assertEquals(solution.test.toString(), "function test() { [native code] }");
//   });
  
//   Test.describe('Gentle fixed tests', function() {
//     Test.it('100 fixed tests', function() {
//       for(let i=1; i<=100; i++) {
//         console.log(`Testing for: ${i}`)
//         Test.assertEquals(solution.test(i.toString(2)), i%7===0);
//       }
//     })
//   })
  
//   Test.describe('Edge cases', function() {
//     Test.assertEquals(solution.test(''), false, 'You should reject empty string');
//     Test.assertEquals(solution.test('0'), true, 'You should accept 0');
//   });