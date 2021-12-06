const { solve } = require("../6kyu--Upside-down-numbers.js")

describe('Tests for "Upside down numbers" kata:', function () {
    test("#1", () => {
        expect(solve(0, 10)).toEqual(3)
    })
    test("#2", () => {
        expect(solve(10, 100)).toEqual(4)
    })
    test("#3", () => {
        expect(solve(100, 1000)).toEqual(12)
    })
    test("#4", () => {
        expect(solve(1000, 10000)).toEqual(20)
    })
    test("#5", () => {
        expect(solve(10000, 15000)).toEqual(6)
    })
    test("#6", () => {
        expect(solve(15000, 20000)).toEqual(9)
    })
    test("#7", () => {
        expect(solve(60000, 70000)).toEqual(15)
    })
    test("#8", () => {
        expect(solve(60000, 130000)).toEqual(55)
    })
})