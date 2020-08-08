const { solution } = require("../8kyu--Fake-Binary.ts")

describe('"Fake Binary" tests:', function () {
  test("#1", () => {
    expect(solution.fakeBin('45385593107843568')).toEqual("01011110001100111")
  })
  test("#2", () => {
    expect(solution.fakeBin('509321967506747')).toEqual("101000111101101")
  })
  test("#3", () => {
    expect(solution.fakeBin('366058562030849490134388085')).toEqual("011011110000101010000011011")
  })
})