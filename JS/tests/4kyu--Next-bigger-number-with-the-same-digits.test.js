const { nextBigger } = require("../4kyu--Next-bigger-number-with-the-same-digits.js")

describe('"Next bigger number with the same digits" kata tests:', function () {
    test("#1", () => {
      expect(nextBigger(12)).toEqual(21)
    })

    test("#2", () => {
      expect(nextBigger(513)).toEqual(531)
    })

    test("#3", () => {
      expect(nextBigger(2017)).toEqual(2071)
    })

    test("#4", () => {
      expect(nextBigger(414)).toEqual(441)
    })

    test("#5", () => {
      expect(nextBigger(144)).toEqual(414)
    })

  })