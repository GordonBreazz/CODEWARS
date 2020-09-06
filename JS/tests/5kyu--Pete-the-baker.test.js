const { cakes } = require("../5kyu--Pete-the-baker.js")

describe('""Pete, the baker" tests:', function () {
  test("#1", () => {
    recipe = { flour: 500, sugar: 200, eggs: 1 }
    available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    expect(cakes(recipe, available)).toEqual(2)
  })
  test("#2", () => {
    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
    available = { sugar: 500, flour: 2000, milk: 2000 }
    expect(cakes(recipe, available)).toEqual(0)
  })
})
