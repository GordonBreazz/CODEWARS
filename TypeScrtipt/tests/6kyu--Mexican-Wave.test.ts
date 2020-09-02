const { wave } = require("../6kyu--Mexican-Wave.ts")

describe("Mexican Wave", function () {
    test("#1", () => {
      expect(wave("hello")).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"].join(''))
    })
    test("#2", () => {
      expect(wave("codewars")).toEqual(["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"].join(''))
    })
    test("#3", () => {
      expect(wave("")).toEqual('')
    })
    test("#4", () => {
      expect(wave("two words")).toEqual["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"].join(''))
    })
    test("#5", () => {
      expectwave(" gap ").toEqual([" Gap ", " gAp ", " gaP "].join(''))
    })
  })