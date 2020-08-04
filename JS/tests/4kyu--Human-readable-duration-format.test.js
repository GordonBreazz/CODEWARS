const { formatDuration } = require("../4kyu--Human-readable-duration-format.js")

describe("Human readable duration format tests:", function () {
    test("#1", () => {
      expect(formatDuration(1)).toEqual("1 second")
    })
    test("#2", () => {
      expect(formatDuration(62)).toEqual("1 minute and 2 seconds")
    })
    test("#3", () => {
      expect(formatDuration(120)).toEqual("2 minutes")
    })
    test("#4", () => {
        expect(formatDuration(3600)).toEqual("1 hour")
      })
    test("#5", () => {
        expect(formatDuration(3662)).toEqual("1 hour, 1 minute and 2 seconds")
    })          
})


