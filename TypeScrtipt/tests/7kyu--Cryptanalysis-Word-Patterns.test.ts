const { wordPattern } = require("../7kyu--Cryptanalysis-Word-Patterns.ts")

describe("Cryptanalysis Word Patterns:", function () {
    test("#1", () => {
      expect(wordPattern("hello")).toEqual("0.1.2.2.3")
    })
    test("#2", () => {
      expect(wordPattern("heLlo")).toEqual("0.1.2.2.3")
    })
    test("#3", () => {
      expect(wordPattern("helLo")).toEqual("0.1.2.2.3")
    })
    test("#4", () => {
      expect(wordPattern("Hippopotomonstrosesquippedaliophobia")).toEqual("0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13")
    })

  })