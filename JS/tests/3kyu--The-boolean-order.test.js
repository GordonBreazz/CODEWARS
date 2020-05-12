const { solve } = require("../3kyu--The-boolean-order.js")

// describe("Basic tests", function(){
//     Test.assertEquals(solve("tft","^&"),2);
//     Test.assertEquals(solve("ttftff","|&^&&"),16);
//     Test.assertEquals(solve("ttftfftf","|&^&&||"),339);
//     Test.assertEquals(solve("ttftfftft","|&^&&||^"),851);
//     Test.assertEquals(solve("ttftfftftf","|&^&&||^&"),2434);
//     });

describe("3kyu The boolean order test", function () {
  test("#1 encodeRailFenceCipher should return 2", () => {
    expect(solve("tft", "^&")).toEqual(2)
  })

  test("#2 decodeRailFenceCipher should return 16", () => {
    expect(solve("ttftff", "|&^&&")).toEqual(16)
  })

  test("#3 encodeRailFenceCipher should return 339", () => {
    expect(solve("ttftfftf", "|&^&&||")).toEqual(339)
  })

  test("#4 decodeRailFenceCipher should return 851", () => {
    expect(solve("ttftfftft", "|&^&&||^")).toEqual(851)
  })

  test("#5 encodeRailFenceCipher should return 2434", () => {
    expect(solve("ttftfftftf", "|&^&&||^&")).toEqual(2434)
  })
})
