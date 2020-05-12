const {solution} = require('../2kyu--Regular-Expression---Check-if-divisible-by-0b111-(7).js')

describe('Anti-cheat tests', function() {
    test('#1', () => {
        expect(solution instanceof RegExp).toEqual(true) 
    })

    test('#2', () => {
        expect(solution.test.toString()).toEqual("function test() { [native code] }") 
    })
});

describe('Edge cases', function() {
    test('#1 You should reject empty string', () => {
        expect(solution.test('')).toEqual(false) 
    })

    test('#2 You should accept 0', () => {
        expect(solution.test('0')).toEqual(true) 
    })
});

describe('Gentle fixed tests', function() {
    test('100 fixed tests', () => {
        for(let i=1; i<=100; i++) 
            expect(solution.test(i.toString(2))).toEqual( i%7===0) 
    })
});



  
//   Test.describe('Gentle fixed tests', function() {
//     Test.it('100 fixed tests', function() {
//       for(let i=1; i<=100; i++) {
//         console.log(`Testing for: ${i}`)
//         Test.assertEquals(solution.test(i.toString(2)), i%7===0);
//       }
//     })
//   })
  
