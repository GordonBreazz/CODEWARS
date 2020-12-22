const { getLengthOfMissingArray } = require("../6kyu--Length-of-missing-array.js")

describe('"Length of missing array" tests:', function () {
    test("#1", () => {
        expect(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]])).toEqual(3)
    })
    test("#2", () => {
        expect(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]])).toEqual(2)
    })
    test("#3", () => {
        expect(getLengthOfMissingArray([ [ null ], [ null, null, null ] ])).toEqual(2)
    })
    test("#4", () => {
        expect(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]])).toEqual(5)
    })
    test("#5", () => {
        expect(getLengthOfMissingArray([] )).toEqual(0)
    })
})    