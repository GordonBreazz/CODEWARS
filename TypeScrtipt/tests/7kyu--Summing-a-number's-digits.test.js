const { sumDigits } = require("../7kyu--Summing-a-number's-digits.js")

describe('""Summing a number\'s digits" tests:', function () {
  test("#1", () => {
    expect(sumDigits(10)).toEqual(1)
  })
  test("#2", () => {
    expect(sumDigits(99)).toEqual(18)
  })
  test("#3", () => {
    expect(sumDigits(-32)).toEqual(5)
  })
})