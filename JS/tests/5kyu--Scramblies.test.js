const { scramble } = require("../5kyu--Scramblies.js")

describe('"Scramblies" tests:', function () {
  test("#1", () => {
    expect(scramble('rkqodlw','world')).toEqual(true)
  })
  test("#2", () => {
    expect(scramble('cedewaraaossoqqyt','codewars')).toEqual(true)
  })
  test("#3", () => {
    expect(scramble('katas','steak')).toEqual(false)
  })
  test("#4", () => {
    expect(scramble('scriptjava','javascript')).toEqual(true)
  })
  test("#5", () => {
    expect(scramble('scriptingjava','javascript')).toEqual(true)
  })
  test("#6", () => {
    expect(scramble('scriptsjava','javascripts')).toEqual(true)
  })
  test("#7", () => {
    expect(scramble('jscripts','javascript')).toEqual(false)
  })
  test("#8", () => {
    expect(scramble('aabbcamaomsccdd','commas')).toEqual(true)
  })
})
