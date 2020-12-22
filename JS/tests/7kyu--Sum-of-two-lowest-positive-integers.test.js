const { sumTwoSmallestNumbers } = require("../7kyu--Sum-of-two-lowest-positive-integers.js")

describe('"Sum of two lowest positive integers" tests:', function () {
    test("#1", () => {
        expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toEqual(13)
    })
    test("#2", () => {
        expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toEqual(6)
    })
    test("#3", () => {
        expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toEqual(10)
    })
    test("#4", () => {
        expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toEqual(24)
    })
    test("#5", () => {
        expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toEqual(16)
    })
})    