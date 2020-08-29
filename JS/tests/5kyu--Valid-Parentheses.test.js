const { validParentheses } = require("../5kyu--Valid-Parentheses.js")

describe('"Valid Parentheses" kata tests:', function () {
  test("#1", () => {
    expect(validParentheses("()")).toEqual(true)
  })
  test("#2", () => {
    expect(validParentheses("())")).toEqual(false)
  })
})
