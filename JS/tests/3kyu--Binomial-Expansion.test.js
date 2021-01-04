const { expand } = require('../3kyu--Binomial-Expansion.js')

describe('"Binomial Expansion" kata tests:', function () {
    // Should correctly expand binomials where a=1 and b is positive
    test("#1", () => {
      expect(expand("(9t-0)^2")).toEqual("81t^2")
    })
    test("#2", () => {
      expect(expand("(t-0)^2")).toEqual("t^2")
    })
    test("#3", () => {
      expect(expand("(x+1)^0")).toEqual("1")
    })
    test("#4", () => {
      expect(expand("(x+1)^1")).toEqual("x+1")
    })
    test("#5", () => {
      expect(expand("(x+1)^2")).toEqual("x^2+2x+1")
    })
    // Should correctly expand binomials where a=1 and b is negative
    test("#6", () => {
        expect(expand("(x-1)^0")).toEqual("1")
      })
    test("#7", () => {
        expect(expand("(x-1)^1")).toEqual("x-1")
      })
    test("#8", () => {
        expect(expand("(x-1)^2")).toEqual("x^2-2x+1")
      })
    // Should correctly expand binomials where a is positive
    test("#9", () => {
        expect(expand("(5m+3)^4")).toEqual("625m^4+1500m^3+1350m^2+540m+81")
      })
    test("#10", () => {
        expect(expand("(2x-3)^3")).toEqual("8x^3-36x^2+54x-27")
      })
    test("#11", () => {
        expect(expand("(7x-7)^0")).toEqual("1")
      })
    // Should correctly expand binomials where a is negative.
    test("#12", () => {
        expect(expand("(-5m+3)^4")).toEqual("625m^4-1500m^3+1350m^2-540m+81")
      })
    test("#13", () => {
        expect(expand("(-2k-3)^3")).toEqual("-8k^3-36k^2-54k-27")
      })
    test("#14", () => {
        expect(expand("(-7x-7)^0")).toEqual("1")
      })             
})
