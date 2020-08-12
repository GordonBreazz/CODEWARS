const { Calculator } = require("../3kyu--Calculator.js")

calculate = new Calculator

describe('"Calculator" kata tests:', function () {
    test("#1", () => {
      expect(calculate.evaluate('127')).toEqual(127)
    })
    test("#2", () => {
      expect(calculate.evaluate('2 + 3')).toEqual(5)
    })
    test("#3", () => {
      expect(calculate.evaluate('2 - 3 - 4')).toEqual(-5)
    })
    test("#4", () => {
      expect(calculate.evaluate('10 * 5 / 2')).toEqual(25)
    })
  })
