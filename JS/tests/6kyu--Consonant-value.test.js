const { solve } = require("../6kyu--Consonant-value.js")

describe('"Consonant value" kata tests:', function () {
    test("#1", () => {
      expect(solve("zodiac")).toEqual(26)
    })
    test("#2", () => {
      expect(solve("chruschtschov")).toEqual(80)
    })
    test("#3", () => {
      expect(solve("khrushchev")).toEqual(38)
    })
    test("#4", () => {
      expect(solve("strength")).toEqual(57)
    })
    test("#5", () => {
      expect(solve("catchphrase")).toEqual(73)
    })
    test("#6", () => {
      expect(solve("twelfthstreet")).toEqual(103)
    })
    test("#7", () => {
      expect(solve("mischtschenkoana")).toEqual(80)
    })

})