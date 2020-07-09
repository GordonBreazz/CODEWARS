const {
    weirdReverse
} = require("../4kyu--Reverse-it-quickly.js")

describe("Reverse-it-quickly kata tests", function () {
  test("#1 Should return [5,4,3,2,1]", () => {
    expect(weirdReverse([1,2,3,4,5])).toEqual([5,4,3,2,1])
  })

})
