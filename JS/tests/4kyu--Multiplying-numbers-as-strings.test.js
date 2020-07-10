const { multiply } = require("../4kyu--Multiplying-numbers-as-strings.js")

describe("Multiplying numbers as strings. Some simple multiplications", function () {
  test("#1", () => {
    expect(multiply("2", "3")).toEqual("6")
  })
  test("#2", () => {
    expect(multiply("30", "69")).toEqual("2070")
  })
  test("#3", () => {
    expect(multiply("11", "85")).toEqual("935")
  })
})

describe("Multiplying numbers as strings. Some corner case", function () {
  test("#1", () => {
    expect(multiply("2" ,"0")).toEqual("0")
  })
  test("#2", () => {
    expect(multiply("0", "30")).toEqual("0")
  })
  test("#3", () => {
    expect(multiply("0000001", "3")).toEqual("3")
  })
  test("#4", () => {
    expect(multiply("1009", "03")).toEqual("3027")
  })
})

describe("Multiplying numbers as strings. Some big multiplications", function () {
    test("#1", () => {
      expect(multiply("98765", "56894")).toEqual("5619135910")
    })
    test("#2", () => {
      expect(multiply("1020303004875647366210", "2774537626200857473632627613")).toEqual("2830869077153280552556547081187254342445169156730")
    })
    test("#3", () => {
      expect(multiply("58608473622772837728372827", "7586374672263726736374")).toEqual("444625839871840560024489175424316205566214109298")
    })
    test("#4", () => {
      expect(multiply("9007199254740991", "9007199254740991")).toEqual("81129638414606663681390495662081")
    })
  })
