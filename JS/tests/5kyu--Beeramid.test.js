const { beeramid } = require("../5kyu--Beeramid.js")

describe('"Beeramid" tests:', function () {
    test("#1", () => {
      expect(beeramid(9, 2)).toEqual(1)
    })
    test("#2", () => {
      expect(beeramid(9, 2)).toEqual(2)
    })
    test("#3", () => {
      expect(beeramid(10, 2)).toEqual(2)
    })
    test("#4", () => {
      expect(beeramid(11, 2)).toEqual(3)
    })
    test("#5", () => {
      expect(beeramid(454, 5)).toEqual(5)
    })
    test("#6", () => {
      expect(beeramid(455, 5)).toEqual(6)
    })
    test("#7", () => {
      expect(beeramid(4, 4)).toEqual(1)
    })
    test("#8", () => {
      expect(beeramid(3, 4)).toEqual(0)
    })
    test("#9", () => {
      expect(beeramid(0, 4)).toEqual(0)
    })
    test("#10", () => {
        expect(beeramid(-1, 4)).toEqual(0)
    })
})

