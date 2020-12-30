const { wave } = require("../6kyu--Mexican-Wave.test.js")

describe('Tests for "Mexican Wave" kata:', function () {
    test("#1", () => {
        expect(wave("hello")).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"])
    })
    test("#2", () => {
        expect(wave("codewars")).toEqual(["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"])
    })
    test("#3", () => {
        expect(wave("two words")).toEqual(["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"])
    })
    test("#4", () => {
        expect(wave("gap")).toEqual([" Gap ", " gAp ", " gaP "])
    })

  }
)    