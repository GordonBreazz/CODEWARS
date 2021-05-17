const { workOnStrings } = require("../5kyu--Play-with-two-Strings.js")

describe('""Play with two Strings" tests:', function () {
    test("#1", () => {
      expect(workOnStrings("abc","cde")).toEqual("abCCde")
    })
    test("#2", () => {
      expect(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe")).toEqual("abcDeFGtrzWDEFGgGFhjkWqE")
    })
    test("#3", () => {
      expect(workOnStrings("abcdeFg", "defgG")).toEqual("abcDEfgDEFGg")
    })
    test("#4", () => {
      expect(workOnStrings("abab", "bababa")).toEqual("ABABbababa")
    })          
  })
  