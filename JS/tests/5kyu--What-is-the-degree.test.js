const { degree } = require("../5kyu--What-is-the-degree.js")

describe('"What’s the degree?" kata tests:', function () {
  test("#1", () => {
    expect(degree((x) => 42)).toEqual(0)
  })
  test("#2", () => {
    expect(degree((x) => x)).toEqual(1)
  })
  test("#3", () => {
    expect(degree((x) => x * x)).toEqual(2)
  })
  test("#4", () => {
    expect(degree((x) => x * x * x)).toEqual(3)
  })
  test("#5", () => {
    expect(degree((x) => x * x * x * x)).toEqual(4)
  })
  test("#6", () => {
    expect(degree((x) => x * x * x * x * x)).toEqual(5)
  })
  test("#7", () => {
    expect(degree((x) => 5 + 3 * x + 2 * x * x)).toEqual(2)
  })
  test("#8", () => {
    expect(degree((x) => Math.pow(x, 7))).toEqual(7)
  })
  test("#9", () => {
    expect(degree((x) => Math.pow(x, 11))).toEqual(11)
  })
})
