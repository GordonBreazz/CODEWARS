const { divisors } = require("../6kyu--IQ-Test.ts")

describe('"IQ Test" tests:', function () {
    test("#1", () => {
      expect(divisors('2 4 7 8 10')).toEqual(3)
    })
    test("#2", () => {
      expect(divisors('1 2 2')).toEqual(1)
    })
  })