const { maxSum } = require("../5kyu--The-maximum-sum-value-of-ranges--Challenge-version.js")

describe('"The maximum sum value of ranges -- Simple version:" tests:', function () {
  test("#1", () => {
    expect(maxSum( [1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,8]] )).toEqual(6)
  })
  test("#2", () => {
    expect(maxSum( [1,-2,3,4,-5,-4,3,2,1], [[1,3]] )).toEqual(5)
  })
  test("#3", () => {
    expect(maxSum( [1,-2,3,4,-5,-4,3,2,1], [[1,4],[2,5]] )).toEqual(0)
  })
  test("#4", () => {
    expect(maxSum( [70015,11477,-34739,66496,89876,53160,-68743],[[0,2],[1,6],[0,5],[4,5],[3,6]] )).toEqual(256285)
  })  
})