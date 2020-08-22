const { middlePermutation } = require("../4kyu--Simple-Fun-#159-Middle-Permutation.js")

describe('"Simple Fun #159: Middle Permutation" kata tests:', function () {
    test("#1", () => {
      expect(middlePermutation("abc")).toEqual( "bac")
    })
    test("#2", () => {
      expect(middlePermutation("abcd")).toEqual( "bdca")
    })
    test("#3", () => {
      expect(middlePermutation("abcdx")).toEqual( "cbxda")
    })
    test("#4", () => {
      expect(middlePermutation("abcdxg")).toEqual( "cxgdba")
    })
    test("#5", () => {
      expect(middlePermutation("abcdxgz")).toEqual( "dczxgba")
    })
    test("#6", () => {
      expect(middlePermutation("qjwzmaxgrleiopdhnbsyc")).toEqual( "mlzyxwsrqponjihgedcba")
    })
  })