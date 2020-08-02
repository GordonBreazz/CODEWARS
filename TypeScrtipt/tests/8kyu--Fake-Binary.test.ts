const { fakeBin } = require("../8kyu--Fake-Binary.ts")

describe("Disemvowel Trolls tests:", function () {
  test("#1", () => {
    expect(Kata.disemvowel("This website is for losers LOL!")).toEqual("Ths wbst s fr lsrs LL!")
  })
})