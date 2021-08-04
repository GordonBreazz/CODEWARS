const { IamHere } = require("../4kyu--Path-Finder-#4-where-are-you.js")
describe('"Path Finder #4: where are you?" tests:', function () {
    test("#1", () => {
        expect(IamHere("")).toEqual([0, 0])
    })
    test("#2", () => {
        expect(IamHere("RLrl")).toEqual([0, 0])
    })         
    test("#3", () => {
        expect(IamHere("r5L2l4")).toEqual([4, 3])
    })       
})    