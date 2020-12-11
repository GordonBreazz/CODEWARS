const { twoOldestAges } = require("../7kyu--Two-Oldest-Ages.js")

describe('"Two Oldest Ages" tests:', function () {
    test("#1", () => {
        expect(twoOldestAges( [1, 2, 10, 8] )).toEqual([8, 10])
    })
})    