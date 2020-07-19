const { findOutlier } = require("../6kyu--Find-The-Parity-Outlier.js")


describe("Find The Parity Outlier tests:", function () {
    test("#1", () => {
      expect(findOutlier([0, 1, 2])).toEqual(1)
    })
  
    test("#2", () => {
      expect(findOutlier([1, 2, 3])).toEqual(2)
    })
  
    test("#3", () => {
      expect(findOutlier([2,6,8,10,3])).toEqual(3)
    })
  
    test("#4", () => {
      expect(findOutlier([0,0,3,0,0])).toEqual(3)
    })
  
    test("#5", () => {
      expect(findOutlier([1,1,0,1,1])).toEqual(0)
    })
  
  })