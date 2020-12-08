const { comp } = require("../6kyu--Are-they-the-same.js")

describe('"Are they the `same`?" kata tests:', function () {
    test("#1", () => {
      const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
      const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
      expect(comp(a1, a2)).toEqual(true)
    })
})