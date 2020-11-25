const { cleanString } = require("../6kyu--Backspaces-in-string.js")

describe('"Backspaces in string" kata tests:', function () {
    test("#1", () => {
      expect(cleanString('abc#d##c')).toEqual('ac')
    })

    test("#2", () => {
        expect(cleanString('abc####d##c#')).toEqual('')
      })    
  })
  