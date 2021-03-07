const { numberOfCarries } = require("../6kyu--Simple-Fun-#132-Number-Of-Carries.js")

describe('"Simple Fun #132: Number Of Carries" tests:', function () {
    // Should correctly expand binomials where a=1 and b is positive
    test("#1", () => {
      expect(numberOfCarries(543,3456)).toEqual(0)
    })

    test("#2", () => {
      expect(numberOfCarries(1927,6426)).toEqual(2)
    })

    test("#3", () => {
      expect(numberOfCarries(9999,1)).toEqual(4)
    })

    test("#4", () => {
      expect(numberOfCarries(1234,5678)).toEqual(2)
    })
})    