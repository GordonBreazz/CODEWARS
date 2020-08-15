const { foldArray } = require("../6kyu--Fold-an-array.ts")

describe('"Fold an array" tests:', function () {
    test("#1", () => {
      expect(foldArray([ 1, 2, 3, 4, 5 ], 1)).toEqual([ 6, 6, 3 ])
    })

    test("#2", () => {
      expect(foldArray([ 1, 2, 3, 4, 5 ], 1)).toEqual([ 9, 6 ])
    })

    test("#3", () => {
      expect(foldArray([ 1, 2, 3, 4, 5 ], 1)).toEqual([ 15 ])
    })

    test("#4", () => {
      expect(foldArray([ -9, 9, -8, 8, 66, 23 ], 1)).toEqual([ 14, 75, 0 ])
    })
  })