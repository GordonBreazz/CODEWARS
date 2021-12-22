const { countOnes } = require("../4kyu--Count-ones-in-a-segment.js")

describe('Tests for "Count ones in a segment" kata:', function () {
    test("#1. A very simple example", () => {
        expect(countOnes(4, 7)).toEqual(8)
    })
    test("#2. A very simple example", () => {
        expect(countOnes(5, 7)).toEqual(7)
    })
    test("#3. A simple example", () => {
        expect(countOnes(12, 29)).toEqual(51)
    })
}
)    