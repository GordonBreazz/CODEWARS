const { countDeafRats } = require("../6kyu--The-Deaf-Rats-of-Hamelin-(2D).js")

describe('Tests for "The Deaf Rats of Hamelin (2D)" kata:', function () {
  test("#1", () => {
      let townSquare = [
          "↗ P     ",
          "  ↘    ↖",
          "  ↑     ",
          "↗       "
        ]
      expect( countDeafRats(townSquare) ).toEqual(1)
  })
  test("#2", () => {
    let townSquare = [
          "        ↗",
          "P ↓   ↖ ↑",
          "    ←   ↓",
          "  ↖ ↙   ↙",
          "↓ ↓ ↓    "
        ]
      expect( countDeafRats(townSquare) ).toEqual(7)
  })
  test("#3", () => {
    let townSquare = [
          "↘ ↓ ↙",
          "→ P ←",
          "↗ ↑ ↖"
        ]
      expect( countDeafRats(townSquare) ).toEqual(0)
  })
  test("#4", () => {
    let townSquare = [
          "↖ ↑ ↗",
          "← P →",
          "↙ ↓ ↘"
        ]
      expect( countDeafRats(townSquare) ).toEqual(8)
  })

})
