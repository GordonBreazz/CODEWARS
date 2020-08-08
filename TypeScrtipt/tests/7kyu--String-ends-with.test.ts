const { solution } = require("../7kyu--String-ends-with.js")

describe('"String ends with?" tests:', function () {
  test("#1", () => {
    expect(solution('abcde', 'cde')).toEqual(true)
  })
  test("#2", () => {
    expect(solution('abcde', 'abc')).toEqual(false)
  })
  test("#3", () => {
    expect(solution('abc', '')).toEqual(true)
  })
})