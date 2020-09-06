const { translate } = require("../5kyu--Advanced-Pig-Latin.js")

describe('"Advanced Pig Latin" tests:', function () {
  test("#1", () => {
    expect(translate("hello")).toEqual("ellohay")
  })
  test("#2", () => {
    expect(translate("hello world")).toEqual("ellohay orldway")
  })
  test("#3", () => {
    expect(translate("Hello World")).toEqual("Ellohay Orldway")
  })
  test("#4", () => {
    expect(translate("Pizza? Yes Please!!")).toEqual(
      "Izzapay? Esyay Easeplay!!"
    )
  })
  test("#5", () => {
    expect(translate("How are you?")).toEqual("Owhay areway ouyay?")
  })
})
