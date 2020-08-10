const { humanReadable } = require("../5kyu--Human-Readable-Time.js")

describe("Find The Parity Outlier tests:", function () {
    test("#1", () => {
      expect(humanReadable(0)).toEqual('00:00:00')
    })
    test("#2", () => {
      expect(humanReadable(5)).toEqual('00:00:05')
    })
    test("#3", () => {
      expect(humanReadable(60)).toEqual('00:01:00')
    })
    test("#4", () => {
      expect(humanReadable(86399)).toEqual('23:59:59')
    })
    test("#5", () => {
      expect(humanReadable(359999)).toEqual('99:59:59')
    })
  
  
  })