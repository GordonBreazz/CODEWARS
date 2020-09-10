const { nines } = require("../6kyu--How-many-nines.js")

describe('"How many nines?" tests:', function () {
    test("#1", () => {
      expect(nines(1n)).toEqual(0n)
    })
    test("#2", () => {
      expect(nines(10n)).toEqual(1n)
    })
    test("#3", () => {
      expect(nines(100n)).toEqual(19n)
    })
    test("#4", () => {
      expect(nines(1000n)).toEqual(271n)
    })
    test("#5", () => {
      expect(nines(3950n)).toEqual(1035n)
    })

})

