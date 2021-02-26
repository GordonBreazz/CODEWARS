const { decompose } = require("../4kyu--Square-into-Squares.-Protect-trees!.js")

describe('"Square into Squares. Protect trees!" tests:', function () {
    // Should correctly expand binomials where a=1 and b is positive
    test("#1", () => {
      expect(decompose(2)).toEqual(null)
    })

    test("#2", () => {
      expect(decompose(7)).toEqual([2, 3, 6])
    })
})    