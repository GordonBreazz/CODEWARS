const { add } = require("../5kyu--A-Chain-adding-function.js")

describe('"A Chain adding function" tests:', function () {
    test("#1", () => {
        expect(add(1) == 1).toEqual(true)
    })
    test("#2", () => {
        expect(add(1)(2) == 3).toEqual(true)
    })
    test("#3", () => {
        expect(add(1)(2)(3) == 6).toEqual(true)
    })
})    