const {calc} = require('../2kyu--Evaluate-mathematical-expression.js')
const tests = [
    ['1+1', 2],
    ['1 - 1', 0],
    ['1* 1', 1],
    ['1 /1', 1],
    ['-123', -123],
    ['123', 123],
    ['2 /2+3 * 4.75- -6', 21.25],
    ['12* 123', 1476],
    ['2 / (2 + 3) * 4.33 - -6', 7.732],
    ["-(-20) * (12 - 80 + (8)) + (-5 / -(((-(68 / 14)))) * -17)", -1182.5]
]
describe("2 kyu Evaluate mathematical expression test", function () {
    for (let i = 0; i < tests.length; i++ ) {  
        test(`#${i + 1}`, () => {
            expect(calc(tests[i][0])).toEqual(tests[i][1])
        })
  }
})