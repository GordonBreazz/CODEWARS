const {
  properFractions,
} = require("../4kyu--Number-of-Proper-Fractions-with-Denominator-d.js")

describe("4kyu Number of Proper Fractions with Denominator-d.test", function () {
  test("#1 encodeRailFenceCipher should return 0", () => {
    expect(properFractions(1)).toEqual(0)
  })

  test("#2 decodeRailFenceCipher should return 1", () => {
    expect(properFractions(2)).toEqual(1)
  })

  test("#3 encodeRailFenceCipher should return 4", () => {
    expect(properFractions(5)).toEqual(4)
  })

  test("#4 decodeRailFenceCipher should return 8", () => {
    expect(properFractions(15)).toEqual(8)
  })

  test("#5 encodeRailFenceCipher should return 20", () => {
    expect(properFractions(25)).toEqual(20)
  })
})
