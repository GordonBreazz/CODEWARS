const { pigIt } = require("../5kyu--Simple-Pig-Latin.js")

describe("Simple Pig Latin tests:", function () {
  test("#1", () => {
    expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay')
  })
  test("#2", () => {
    expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay')
  })
})