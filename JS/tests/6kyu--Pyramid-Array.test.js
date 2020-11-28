const { pyramid } = require("../6kyu--Pyramid-Array.js")

describe('"Pyramid Array" tests:', function () {
    test("#1", () => {
      expect(pyramid(0)).toEqual([])
    })
    test("#2", () => {
      expect(pyramid(1)).toEqual([[1]])
    })
    test("#3", () => {
      expect(pyramid(2)).toEqual([[1], [1, 1]])
    })
    test("#4", () => {
      expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]])
    })
  })


