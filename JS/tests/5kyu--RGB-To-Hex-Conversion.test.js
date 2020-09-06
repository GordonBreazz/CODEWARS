const { rgb } = require("../5kyu--RGB-To-Hex-Conversion.js")

describe('"RGB To Hex Conversion" tests:', function () {
  test("#1", () => {
    expect(rgb(0, 0, 0)).toEqual("000000")
  })
  test("#2", () => {
    expect(rgb(0, 0, -20)).toEqual("000000")
  })
  test("#3", () => {
    expect(rgb(300, 255, 255)).toEqual("FFFFFF")
  })
  test("#4", () => {
    expect(rgb(173, 255, 47)).toEqual("ADFF2F")
  })
})
