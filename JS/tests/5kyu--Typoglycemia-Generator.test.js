const { ScrambleWords } = require("../5kyu--Typoglycemia-Generator.js")

describe('"Typoglycemia Generator" tests:', function () {
  test("#1", () => {
    expect(ScrambleWords("professionals")).toEqual("paefilnoorsss")
  })
  test("#2", () => {
    expect(ScrambleWords("i")).toEqual("i")
  })
  test("#3", () => {
    expect(ScrambleWords("me")).toEqual("me")
  })
  test("#4", () => {
    expect(ScrambleWords("you")).toEqual("you")
  })
  test("#5", () => {
    expect(ScrambleWords("card-carrying")).toEqual("caac-dinrrryg")
  })
  test("#6", () => {
    expect(ScrambleWords("shan't")).toEqual("sahn't")
  })
  test("#7", () => {
    expect(ScrambleWords("-dcba")).toEqual("-dbca")
  })
  test("#8", () => {
    expect(ScrambleWords("dcba.")).toEqual("dbca.")
  })
  test("#9", () => {
    expect(
      ScrambleWords(
        "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
      )
    ).toEqual(
      "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
    )
  })
})
