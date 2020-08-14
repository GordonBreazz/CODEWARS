const { unluckyDays } = require("../7kyu-- Unlucky-Days.ts")

describe('"Unlucky Days" tests:', function () {
    test("#1", () => {
      expect(unluckyDays(2015)).toEqual(3)
    })
    
    test("#2", () => {
      expect(unluckyDays(1986)).toEqual(1)
    })

  })