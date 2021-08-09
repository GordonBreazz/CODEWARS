const { createPhoneNumber } = require("../6kyu--Create-Phone-Number.js")

describe('"Create Phone Number" tests:', function () {
    test("#1", () => {
      expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ).toEqual("(123) 456-7890")
    })  
})    