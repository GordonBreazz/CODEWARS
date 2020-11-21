const { countDeafRats } = require("../6kyu--The-Deaf-Rats-of-Hamelin.js")

describe('"Break the pieces" tests:', function () {
  test("#1", () => {
    expect(countDeafRats("~O~O~O~O P")).toEqual(0)
  })
  test("#2", () => {
    expect(countDeafRats("P O~ O~ ~O O~")).toEqual(1)
  })
  test("#3", () => {
    expect(countDeafRats("~O~O~O~OP~O~OO~")).toEqual(2)
  })
})