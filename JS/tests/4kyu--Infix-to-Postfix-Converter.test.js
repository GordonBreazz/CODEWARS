const { toPostfix } = require("../4kyu--Infix-to-Postfix-Converter.js")

describe("Infix to Postfix Converter tests:", function () {
    test("#1", () => {
      expect(toPostfix("2+7*5-9+7*6")).toEqual("275*+9-76*+")
    })
    test("#2", () => {
      expect(toPostfix("2+7*5")).toEqual("275*+")
    })
    test("#3", () => {
      expect(toPostfix("3*3/(7+1)")).toEqual("33*71+/")
    })
    test("#4", () => {
        expect(toPostfix("5+(6-2)*9+3^(7-1)")).toEqual("562-9*+371-^+")
      })
    test("#5", () => {
        expect(toPostfix("(5-4-1)+9/5/2-7/1/7")).toEqual("54-1-95/2/+71/7/-")
    })          
})