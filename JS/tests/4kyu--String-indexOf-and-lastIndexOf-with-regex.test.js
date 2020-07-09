const {
  indexOf,
  lastIndexOf,
} = require("../4kyu--String-indexOf-and-lastIndexOf-with-regex.js")

describe("String indexOf (and lastIndexOf) with regex kata tests", function () {
  test("#1", () => {
    expect("abcba".lastIndexOf("abc", 2)).toEqual(0)
  })
  test("#2", () => {
    expect("abcba".lastIndexOf(/a?bc|cb/, 3)).toEqual(2)
  })
  test("#3", () => {
    expect("abcba".indexOf("b")).toEqual(1)
  })
  test("#4", () => {
    expect("abcba".indexOf("b", 2)).toEqual(3)
  })
  test("#5", () => {
    expect("abcba".lastIndexOf("b")).toEqual(3)
  })
  test("#6", () => {
    expect("abcba".indexOf("d")).toEqual(-1)
  })
  test("#7", () => {
    expect("abcba".indexOf(/bc|cb/)).toEqual(1)
  })
  test("#8", () => {
    expect("abcba".indexOf(/bc|cb/, 2)).toEqual(2)
  })
  test("#9", () => {
    expect("abcba".lastIndexOf(/bc|cb/)).toEqual(2)
  })
  test("#10", () => {
    expect("abcba".indexOf(/d/)).toEqual(-1)
  })

})
