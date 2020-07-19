const { solution } = require("../6kyu--Roman-Numerals-Encoder.js")

describe("Roman Numerals Encoder tests:", function () {
  test("#1", () => {
    expect(solution(1)).toEqual('I')
  })

  test("#2", () => {
    expect(solution(2)).toEqual('II')
  })

  test("#3", () => {
    expect(solution(3)).toEqual('III')
  })

  test("#4", () => {
    expect(solution(4)).toEqual('IV')
  })

  test("#5", () => {
    expect(solution(5)).toEqual('V')
  })

  test("#6", () => {
    expect(solution(9)).toEqual('IX')
  })

  test("#7", () => {
    expect(solution(10)).toEqual('X')
  })

  test("#8", () => {
    expect(solution(11)).toEqual('XI')
  })

  test("#9", () => {
    expect(solution(19)).toEqual('XIX')
  })

  test("#10", () => {
    expect(solution(22)).toEqual('XXII')
  })

  test("#11", () => {
    expect(solution(15)).toEqual('XV')
  })
})