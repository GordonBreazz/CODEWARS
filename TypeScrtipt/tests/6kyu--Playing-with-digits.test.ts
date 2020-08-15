import  { G964 } = from "../6kyu--Playing-with-digits.ts"

describe('"Playing with digits" tests:', function () {
    test("#1", () => {
      expect(G964.digPow(89, 1)).toEqual(1)
    })

    test("#1", () => {
      expect(G964.digPow(92, 1)).toEqual(-1)
    })

    test("#1", () => {
      expect(G964.digPow(114, 3)).toEqual(9)
    })    
})