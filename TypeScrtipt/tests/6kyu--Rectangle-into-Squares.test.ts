import  { G964 } = from "../6kyu--Rectangle-into-Squares.ts"

describe('"Rectangle into Squares:', function () {
    test("#1", () => {
      expect(G964.sqInRect(5, 5)).toEqual(null)
    })
    test("#2", () => {
      expect(G964.sqInRect(5, 3)).toEqual([3, 2, 1, 1])
    })

})