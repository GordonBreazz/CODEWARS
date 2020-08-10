const { scoreHand } = require("../5kyu--Blackjack-Scorer.js")

describe('"Blackjack Scorer" kata tests:', function () {
    test("#1", () => {
      expect(scoreHand(["2", "3"])).toEqual(5)
    })
    test("#2", () => {
      expect(scoreHand(["7", "7", "8"])).toEqual(22)
    })
    test("#3", () => {
      expect(scoreHand(["4", "7", "8"])).toEqual(19)
    })
    test("#4", () => {
      expect(scoreHand(["K", "J", "Q"])).toEqual(30)
    })
    test("#5", () => {
      expect(scoreHand(["A", "3"])).toEqual(14)
    })
    test("#6", () => {
      expect(scoreHand(["A", "A"])).toEqual(12)
    })
    test("#7", () => {
      expect(scoreHand(["A", "2", "A", "9", "9"])).toEqual(22)
    })
  })