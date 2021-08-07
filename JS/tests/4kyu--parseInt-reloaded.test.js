const { parseInt } = require("../4kyu--parseInt()-reloaded.js")

describe('"4 kyu parseInt() reloaded" test:', function () {
    test("#1", () => {
      expect(parseInt('one')).toEqual(1)
    })

    test("#2", () => {
        expect(parseInt('twenty')).toEqual(20)
    })    

    test("#3", () => {
        expect(parseInt('two hundred forty-six')).toEqual(246)
    })

    test("#4", () => {
        expect(parseInt('seven hundred eighty-three thousand nine hundred and nineteen')).toEqual(783919)
    })  

    test("#5", () => {
        expect(parseInt('one hundred ninety-one thousand five hundred elevens')).toEqual(191500)
    })  

  })