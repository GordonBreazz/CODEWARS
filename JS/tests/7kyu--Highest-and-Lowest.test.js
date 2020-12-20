const { highAndLow } = require("../7kyu--Highest-and-Lowest.js")

describe('"Highest and Lowest" tests:', function () {
    test("#1", () => {
        expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toEqual("542 -214")
    })
}) 