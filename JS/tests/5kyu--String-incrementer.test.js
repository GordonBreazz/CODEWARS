const { incrementString } = require('../5kyu--String-incrementer.js')

describe('"String incrementer" tests', function () {
    test("#1", () => {
      expect(incrementString("foobar000")).toEqual("foobar001")
    })
    test("#2", () => {
      expect(incrementString("foo")).toEqual("foo1")
    })
    test("#3", () => {
      expect(incrementString("foobar001")).toEqual("foobar002")
    })
    test("#4", () => {
      expect(incrementString("foobar99")).toEqual("foobar100")
    })
    test("#5", () => {
      expect(incrementString("foobar099")).toEqual("foobar100")
    })
    test("#6", () => {
      expect(incrementString("")).toEqual("1")
    })
  })
  